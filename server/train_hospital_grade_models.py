import os
import sys
import csv
import json
import time
import pickle
import numpy as np

# Set unbuffered stdout
sys.stdout.reconfigure(line_buffering=True)

SERVER_DIR = os.path.dirname(os.path.abspath(__file__))
MIMIC_PATH = os.path.join(SERVER_DIR, "mimic_iv_vitals_3500.csv")
NHANES_PATH = os.path.join(SERVER_DIR, "cdc_nhanes_labs_3500.csv")
FAERS_PATH = os.path.join(SERVER_DIR, "fda_faers_pharmacovigilance_3500.csv")
OUTPUT_METRICS_PATH = os.path.join(SERVER_DIR, "hospital_metrics.json")
MODELS_DIR = os.path.join(SERVER_DIR, "trained_models")
os.makedirs(MODELS_DIR, exist_ok=True)

def train_and_audit():
    print("=" * 85)
    print("MediAI Care+ Hospital-Grade Multi-Dataset Training & Anti-Overfitting Pipeline")
    print("Datasets: MIMIC-IV ICU Vitals | CDC NHANES Labs | FDA FAERS Pharmacovigilance")
    print("=" * 85)

    from sklearn.model_selection import StratifiedKFold
    from sklearn.preprocessing import StandardScaler
    from sklearn.pipeline import Pipeline
    from sklearn.linear_model import LogisticRegression
    from sklearn.ensemble import RandomForestClassifier
    from xgboost import XGBClassifier
    from sklearn.metrics import accuracy_score, f1_score, precision_score, recall_score, confusion_matrix, roc_curve

    all_dataset_benchmarks = {}

    datasets_to_process = [
        {
            "id": "mimic_iv",
            "title": "MIMIC-IV ICU Decompensation & Sepsis Triage",
            "file": MIMIC_PATH,
            "target_col": "icu_decompensation_risk",
            "features_desc": ["Continuous Heart Rate", "Blood Pressure (SBP/DBP/MAP)", "SpO2 Saturation", "Respiratory Rate", "Body Temp", "Shock Index", "SOFA Score"],
            "source_authority": "PhysioNet / MIT / Beth Israel Deaconess Medical Center",
            "clinical_application": "Predicts acute ICU decompensation, occult septic shock, and cardiorespiratory failure 6-12 hours in advance."
        },
        {
            "id": "cdc_nhanes",
            "title": "CDC NHANES Cardiometabolic & Renal Syndrome Risk",
            "file": NHANES_PATH,
            "target_col": "cardiometabolic_renal_risk",
            "features_desc": ["Fasting Blood Glucose", "HbA1c Glycemic Index", "Serum Creatinine", "eGFR Glomerular Filtration", "Lipid Panel (Total/LDL/HDL/Trig)", "ALT/AST Liver Enzymes", "Platelet Count", "WBC Count", "BMI", "Age"],
            "source_authority": "Centers for Disease Control & Prevention (CDC NHANES)",
            "clinical_application": "Stratifies multi-morbid diabetic nephropathy, metabolic syndrome, and advanced organ compromise from routine blood chemistry."
        },
        {
            "id": "fda_faers",
            "title": "FDA FAERS Adverse Drug Reaction & Polypharmacy Safety",
            "file": FAERS_PATH,
            "target_col": "severe_adverse_reaction",
            "features_desc": ["Concomitant Drug Count", "High-Risk Interaction Pair Flag", "Renal Impairment Flag", "Hepatic Impairment Flag", "Polypharmacy Index", "Anticoagulant Flag", "NSAID Flag", "CYP3A4 Inhibitor Flag", "Antiarrhythmic Flag", "Patient Age"],
            "source_authority": "U.S. Food and Drug Administration (FDA Adverse Event Reporting System)",
            "clinical_application": "Identifies severe adverse drug reactions (ADRs), black-box toxicities, and emergent hospitalizations before medication dispensing."
        }
    ]

    for ds_info in datasets_to_process:
        ds_id = ds_info["id"]
        ds_title = ds_info["title"]
        file_path = ds_info["file"]
        
        print(f"\n>>> Processing Dataset: {ds_title} ({ds_info['source_authority']})")
        
        # Load CSV
        with open(file_path, "r", encoding="utf-8") as f:
            reader = csv.reader(f)
            header = next(reader)
            target_idx = header.index(ds_info["target_col"])
            feature_cols = [c for i, c in enumerate(header) if i != 0 and i != target_idx]
            
            X, y = [], []
            for r in reader:
                features = [float(r[header.index(col)]) for col in feature_cols]
                target_val = int(r[target_idx])
                X.append(features)
                y.append(target_val)
                
        X = np.array(X)
        y = np.array(y)
        n_samples, n_features = X.shape
        print(f"    Loaded {n_samples} Clinical Records with {n_features} Quantitative Features.")

        # Anti-Overfitting Model Definitions with Strict Regularization & Feature Bagging:
        # Strictly restricted to: XGBoost, Random Forest, and L2 Logistic Regression.
        models = [
            {
                "key": "xgboost",
                "name": "XGBoost Classifier (Extreme Gradient Boosting)",
                "pipeline_factory": lambda: Pipeline([
                    ("scaler", StandardScaler()),
                    ("clf", XGBClassifier(
                        n_estimators=140,
                        learning_rate=0.06,
                        max_depth=3,
                        subsample=0.85,
                        colsample_bytree=0.8,
                        eval_metric="logloss",
                        random_state=42,
                        n_jobs=-1
                    ))
                ])
            },
            {
                "key": "random_forest",
                "name": "Random Forest Ensemble (Bagging Regularization)",
                "pipeline_factory": lambda: Pipeline([
                    ("scaler", StandardScaler()),
                    ("clf", RandomForestClassifier(
                        n_estimators=180,
                        max_depth=5,
                        max_features="sqrt",
                        min_samples_leaf=8,
                        bootstrap=True,
                        random_state=42,
                        n_jobs=-1
                    ))
                ])
            },
            {
                "key": "logistic_regression",
                "name": "L2-Regularized Logistic Regression",
                "pipeline_factory": lambda: Pipeline([
                    ("scaler", StandardScaler()),
                    ("clf", LogisticRegression(
                        penalty="l2",
                        C=1.0,
                        solver="lbfgs",
                        max_iter=500,
                        random_state=42
                    ))
                ])
            }
        ]

        skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
        dataset_model_metrics = {}

        best_model_obj = None
        best_test_acc = -1
        best_model_key = None

        for m_entry in models:
            m_key = m_entry["key"]
            m_name = m_entry["name"]
            
            fold_test_accs = []
            fold_train_accs = []
            fold_f1s = []
            fold_precs = []
            fold_recs = []
            fold_cms = []
            all_y_true = []
            all_y_prob = []

            for train_idx, val_idx in skf.split(X, y):
                X_tr, X_val = X[train_idx], X[val_idx]
                y_tr, y_val = y[train_idx], y[val_idx]

                pipe = m_entry["pipeline_factory"]()
                pipe.fit(X_tr, y_tr)

                y_tr_pred = pipe.predict(X_tr)
                y_val_pred = pipe.predict(X_val)
                y_val_prob = pipe.predict_proba(X_val)[:, 1]

                fold_train_accs.append(accuracy_score(y_tr, y_tr_pred))
                fold_test_accs.append(accuracy_score(y_val, y_val_pred))
                fold_f1s.append(f1_score(y_val, y_val_pred))
                fold_precs.append(precision_score(y_val, y_val_pred))
                fold_recs.append(recall_score(y_val, y_val_pred))
                fold_cms.append(confusion_matrix(y_val, y_val_pred))

                all_y_true.extend(y_val)
                all_y_prob.extend(y_val_prob)

            mean_train_acc = round(float(np.mean(fold_train_accs)) * 100, 2)
            mean_test_acc = round(float(np.mean(fold_test_accs)) * 100, 2)
            gap = round(mean_train_acc - mean_test_acc, 2)
            std_test_acc = round(float(np.std(fold_test_accs)) * 100, 2)
            mean_f1 = round(float(np.mean(fold_f1s)), 3)
            mean_prec = round(float(np.mean(fold_precs)) * 100, 2)
            mean_rec = round(float(np.mean(fold_recs)) * 100, 2)
            agg_cm = np.sum(fold_cms, axis=0).tolist()

            # ROC points for visualization (downsampled to 8 points)
            fpr, tpr, _ = roc_curve(all_y_true, all_y_prob)
            step = max(1, len(fpr) // 7)
            roc_points = [[round(float(fpr[i]), 3), round(float(tpr[i]), 3)] for i in range(0, len(fpr), step)]
            if roc_points[-1] != [1.0, 1.0]:
                roc_points.append([1.0, 1.0])

            # Overfitting status verification
            is_optimal_fit = bool(gap <= 2.5 and mean_test_acc >= 90.0)
            status_text = "OPTIMAL FIT (No Overfitting - Gap < 2.5%)" if is_optimal_fit else "ACCEPTABLE FIT"

            print(f"    - {m_name}:")
            print(f"      Train Acc: {mean_train_acc}% | Val Acc: {mean_test_acc}% (±{std_test_acc}%)")
            print(f"      Generalization Gap: {gap}% | F1-Score: {mean_f1} | Status: {status_text}")

            dataset_model_metrics[m_key] = {
                "name": m_name,
                "trainAccuracy": mean_train_acc,
                "accuracy": mean_test_acc,
                "accuracyStd": std_test_acc,
                "generalizationGap": gap,
                "overfittingStatus": status_text,
                "f1Score": mean_f1,
                "precision": mean_prec,
                "recall": mean_rec,
                "specificity": round(float(agg_cm[0][0] / (agg_cm[0][0] + agg_cm[0][1])) * 100, 2),
                "confusionMatrix": agg_cm,
                "rocPoints": roc_points,
                "foldAccuracies": [round(a * 100, 2) for a in fold_test_accs]
            }

            if mean_test_acc > best_test_acc:
                best_test_acc = mean_test_acc
                best_model_key = m_key
                # Fit on whole dataset for production deployment
                final_pipe = m_entry["pipeline_factory"]()
                final_pipe.fit(X, y)
                best_model_obj = final_pipe

        # Save production model
        model_save_path = os.path.join(MODELS_DIR, f"{ds_id}_production_model.pkl")
        with open(model_save_path, "wb") as f:
            pickle.dump({
                "pipeline": best_model_obj,
                "features": feature_cols,
                "dataset_id": ds_id,
                "best_key": best_model_key
            }, f)
        print(f"    -> Saved production model to {model_save_path}")

        all_dataset_benchmarks[ds_id] = {
            "title": ds_title,
            "authority": ds_info["source_authority"],
            "application": ds_info["clinical_application"],
            "sampleCount": n_samples,
            "features": ds_info["features_desc"],
            "featureColumns": feature_cols,
            "models": dataset_model_metrics,
            "productionModel": best_model_key
        }

    # Write combined hospital metrics JSON
    with open(OUTPUT_METRICS_PATH, "w", encoding="utf-8") as f:
        json.dump(all_dataset_benchmarks, f, indent=2)

    print("\n" + "=" * 85)
    print(f"Hospital-Grade Training Complete! Results saved to: {OUTPUT_METRICS_PATH}")
    print("=" * 85)

if __name__ == "__main__":
    train_and_audit()
