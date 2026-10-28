import csv, numpy as np
from sklearn.model_selection import StratifiedKFold
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier

def inspect_dataset(name, path, target_col):
    with open(path, 'r', encoding='utf-8') as f:
        r = list(csv.reader(f))
        header = r[0]
        data = r[1:]

    t_idx = header.index(target_col)
    feat_idx = [i for i in range(len(header)) if i != 0 and i != t_idx]

    X = np.array([[float(row[i]) for i in feat_idx] for row in data])
    y = np.array([int(row[t_idx]) for row in data])

    skf = StratifiedKFold(n_splits=10, shuffle=True, random_state=42)

    models = {
        'Gradient Boosting': GradientBoostingClassifier(n_estimators=100, learning_rate=0.07, max_depth=3, subsample=0.85, max_features='sqrt', min_samples_leaf=8, random_state=42),
        'Random Forest': RandomForestClassifier(n_estimators=150, max_depth=5, max_features='sqrt', min_samples_leaf=8, bootstrap=True, random_state=42, n_jobs=-1),
        'Logistic Regression': LogisticRegression(C=1.0, penalty='l2', solver='lbfgs', max_iter=400, random_state=42)
    }

    oof_preds = {k: np.zeros(len(y)) for k in models}

    for train_idx, test_idx in skf.split(X, y):
        scaler = StandardScaler()
        X_tr = scaler.fit_transform(X[train_idx])
        X_te = scaler.transform(X[test_idx])
        for k, m in models.items():
            m.fit(X_tr, y[train_idx])
            oof_preds[k][test_idx] = m.predict(X_te)

    errors = {k: set(np.where(oof_preds[k] != y)[0]) for k in models}
    print(f"\n==========================================")
    print(f"Dataset: {name} (N = {len(y)})")
    print(f"==========================================")
    for k, err in errors.items():
        acc = (1 - len(err)/len(y)) * 100
        print(f"  {k}: {len(err)} errors ({acc:.2f}% accuracy)")

    common = errors['Gradient Boosting'] & errors['Random Forest'] & errors['Logistic Regression']
    print(f"  Exact Common Errors between ALL 3 models: {len(common)} records ({len(common)/len(errors['Gradient Boosting'])*100:.2f}% of total errors)")
    
    # Agreement between models
    gb_rf = np.mean(oof_preds['Gradient Boosting'] == oof_preds['Random Forest']) * 100
    gb_lr = np.mean(oof_preds['Gradient Boosting'] == oof_preds['Logistic Regression']) * 100
    rf_lr = np.mean(oof_preds['Random Forest'] == oof_preds['Logistic Regression']) * 100
    print(f"  Inter-Model Prediction Agreement:")
    print(f"    GB vs RF: {gb_rf:.2f}%")
    print(f"    GB vs LR: {gb_lr:.2f}%")
    print(f"    RF vs LR: {rf_lr:.2f}%")

if __name__ == '__main__':
    inspect_dataset("MIMIC-IV ICU Telemetry", "server/mimic_iv_vitals_3500.csv", "icu_decompensation_risk")
    inspect_dataset("CDC NHANES Lab Biomarkers", "server/cdc_nhanes_labs_3500.csv", "cardiometabolic_renal_risk")
    inspect_dataset("FDA FAERS Pharmacovigilance", "server/fda_faers_pharmacovigilance_3500.csv", "severe_adverse_reaction")
