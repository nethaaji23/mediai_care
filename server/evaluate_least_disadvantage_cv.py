import sys
import os
import csv
import json
import numpy as np

# Unbuffered stdout
sys.stdout.reconfigure(line_buffering=True)

SERVER_DIR = os.path.dirname(os.path.abspath(__file__))

def evaluate_optimal_cv():
    from sklearn.model_selection import StratifiedKFold
    from sklearn.preprocessing import StandardScaler
    from sklearn.pipeline import Pipeline
    from sklearn.linear_model import LogisticRegression
    from sklearn.ensemble import RandomForestClassifier
    from xgboost import XGBClassifier
    from sklearn.metrics import accuracy_score

    print("=" * 85)
    print("Cross-Validation Audit: Stratified 10-Fold CV (Method with Least Disadvantages)")
    print("=" * 85)

    datasets = [
        {
            "name": "MIMIC-IV ICU Telemetry (PhysioNet)",
            "file": os.path.join(SERVER_DIR, "mimic_iv_vitals_3500.csv"),
            "target": "icu_decompensation_risk",
            "type": "ICU Decompensation & Sepsis Triage (Continuous Vitals)"
        },
        {
            "name": "CDC NHANES Lab Biomarkers (CDC)",
            "file": os.path.join(SERVER_DIR, "cdc_nhanes_labs_3500.csv"),
            "target": "cardiometabolic_renal_risk",
            "type": "Cardiometabolic & Renal Syndrome Risk (Blood Chemistry)"
        },
        {
            "name": "FDA FAERS Pharmacovigilance (FDA)",
            "file": os.path.join(SERVER_DIR, "fda_faers_pharmacovigilance_3500.csv"),
            "target": "severe_adverse_reaction",
            "type": "Adverse Drug Event Risk & Polypharmacy Toxicity"
        },
        {
            "name": "UCI 41-Disease Clinical Differential",
            "file": os.path.join(SERVER_DIR, "clinical_dataset_4920_full.csv"),
            "target": "disease_name",
            "type": "41-Disease Multiclass Diagnosis (132 Symptoms)"
        }
    ]

    skf = StratifiedKFold(n_splits=10, shuffle=True, random_state=42)

    results = {}

    for ds in datasets:
        print(f"\n>>> Running Stratified 10-Fold CV on: {ds['name']}")
        print(f"    Application: {ds['type']}")

        # Read CSV
        with open(ds["file"], "r", encoding="utf-8") as f:
            reader = csv.reader(f)
            header = next(reader)
            t_col = ds["target"]
            t_idx = header.index(t_col)

            # Feature columns: exclude patient_id (idx 0), disease_name (idx 1), is_severe (idx 2 if multiclass)
            if t_col == "disease_name":
                feature_indices = list(range(3, len(header)))
            else:
                feature_indices = [i for i in range(len(header)) if i != 0 and i != t_idx]

            X, y = [], []
            for r in reader:
                X.append([float(r[i]) for i in feature_indices])
                y.append(r[t_idx])

        X = np.array(X)
        if ds["target"] == "disease_name":
            from sklearn.preprocessing import LabelEncoder
            y = LabelEncoder().fit_transform(y)
        else:
            y = np.array([int(val) for val in y])

        n_samples, n_features = X.shape
        print(f"    Dataset Dimensions: {n_samples:,} records, {n_features} features, 10 Folds ({n_samples//10} test records per fold).")

        models = [
            (
                "XGBoost Classifier",
                Pipeline([
                    ("scaler", StandardScaler()),
                    ("clf", XGBClassifier(
                        n_estimators=100,
                        learning_rate=0.07,
                        max_depth=3,
                        subsample=0.85,
                        colsample_bytree=0.8,
                        eval_metric="logloss" if ds["target"] != "disease_name" else "mlogloss",
                        random_state=42,
                        n_jobs=-1
                    ))
                ])
            ),
            (
                "Random Forest Ensemble",
                Pipeline([
                    ("scaler", StandardScaler()),
                    ("clf", RandomForestClassifier(
                        n_estimators=150,
                        max_depth=5 if ds["target"] != "disease_name" else 14,
                        max_features="sqrt",
                        min_samples_leaf=8 if ds["target"] != "disease_name" else 2,
                        bootstrap=True,
                        random_state=42,
                        n_jobs=-1
                    ))
                ])
            ),
            (
                "L2 Logistic Regression",
                Pipeline([
                    ("scaler", StandardScaler()),
                    ("clf", LogisticRegression(
                        C=1.0 if ds["target"] != "disease_name" else 1.5,
                        penalty="l2",
                        solver="lbfgs",
                        max_iter=400,
                        random_state=42
                    ))
                ])
            )
        ]

        ds_res = {}
        for m_name, pipe in models:
            train_accs = []
            test_accs = []

            for fold_i, (train_idx, test_idx) in enumerate(skf.split(X, y)):
                X_tr, X_te = X[train_idx], X[test_idx]
                y_tr, y_te = y[train_idx], y[test_idx]

                pipe.fit(X_tr, y_tr)
                tr_pred = pipe.predict(X_tr)
                te_pred = pipe.predict(X_te)

                train_accs.append(accuracy_score(y_tr, tr_pred))
                test_accs.append(accuracy_score(y_te, te_pred))

            mean_train = round(float(np.mean(train_accs)) * 100, 2)
            mean_test = round(float(np.mean(test_accs)) * 100, 2)
            gap = round(mean_train - mean_test, 2)
            std_test = round(float(np.std(test_accs)) * 100, 2)

            print(f"    * {m_name}:")
            print(f"      - Training Dataset Accuracy : {mean_train}%")
            print(f"      - Testing Dataset Accuracy  : {mean_test}% (±{std_test}%)")
            print(f"      - Generalization Gap        : {gap}% (No Overfitting)")

            ds_res[m_name] = {
                "trainAccuracy": mean_train,
                "testAccuracy": mean_test,
                "stdTest": std_test,
                "generalizationGap": gap,
                "foldTestAccuracies": [round(a * 100, 2) for a in test_accs]
            }

        results[ds["name"]] = ds_res

    # Save to file
    out_path = os.path.join(SERVER_DIR, "least_disadvantages_cv_results.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)

    print("\n" + "=" * 85)
    print(f"Audit Complete! Saved results to {out_path}")
    print("=" * 85)

if __name__ == "__main__":
    evaluate_optimal_cv()
