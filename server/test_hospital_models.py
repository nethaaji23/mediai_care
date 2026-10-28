import os
import unittest
import json
import pickle
import numpy as np

SERVER_DIR = os.path.dirname(os.path.abspath(__file__))
METRICS_PATH = os.path.join(SERVER_DIR, "hospital_metrics.json")
MODELS_DIR = os.path.join(SERVER_DIR, "trained_models")

class TestHospitalGradeModels(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        self_metrics_path = METRICS_PATH
        with open(self_metrics_path, "r", encoding="utf-8") as f:
            cls.metrics = json.load(f)

    def test_overfitting_thresholds(self):
        """Verify that generalization gap is strictly < 2.5% across all datasets and models."""
        for ds_id, ds_data in self.metrics.items():
            for m_key, m_metrics in ds_data["models"].items():
                gap = m_metrics["generalizationGap"]
                test_acc = m_metrics["accuracy"]
                self.assertLess(gap, 2.5, f"Overfitting detected on {ds_id} - {m_key}: Gap is {gap}%")
                self.assertGreater(test_acc, 90.0, f"Accuracy too low on {ds_id} - {m_key}: {test_acc}%")

    def test_mimic_iv_inference(self):
        """Test inference on MIMIC-IV ICU Telemetry production model."""
        model_path = os.path.join(MODELS_DIR, "mimic_iv_production_model.pkl")
        self.assertTrue(os.path.exists(model_path))
        with open(model_path, "rb") as f:
            loaded = pickle.load(f)
        pipe = loaded["pipeline"]
        
        # Test 1: Severe Decompensating ICU patient (HR=125, SBP=80, SpO2=88%, RR=32, Temp=39.0, SOFA=9)
        shock_idx = 125 / 80
        map_p = 50 + (80 - 50) / 3
        # Features: [hr, sbp, dbp, map, spo2, rr, temp, shock_index, sofa]
        severe_patient = np.array([[125, 80, 50, map_p, 88, 32, 39.0, shock_idx, 9]])
        pred = pipe.predict(severe_patient)
        prob = pipe.predict_proba(severe_patient)[0, 1]
        self.assertEqual(pred[0], 1, "Failed to flag high-risk decompensating ICU patient")
        self.assertGreater(prob, 0.70)

        # Test 2: Stable Floor patient (HR=72, SBP=120, SpO2=98%, RR=16, Temp=36.8, SOFA=0)
        stable_shock = 72 / 120
        stable_map = 80 + (120 - 80) / 3
        stable_patient = np.array([[72, 120, 80, stable_map, 98, 16, 36.8, stable_shock, 0]])
        pred_stable = pipe.predict(stable_patient)
        prob_stable = pipe.predict_proba(stable_patient)[0, 1]
        self.assertEqual(pred_stable[0], 0, "Falsely flagged stable floor patient")
        self.assertLess(prob_stable, 0.30)

    def test_cdc_nhanes_inference(self):
        """Test inference on CDC NHANES Lab Biomarker production model."""
        model_path = os.path.join(MODELS_DIR, "cdc_nhanes_production_model.pkl")
        self.assertTrue(os.path.exists(model_path))
        with open(model_path, "rb") as f:
            loaded = pickle.load(f)
        pipe = loaded["pipeline"]

        # High risk diabetic nephropathy & metabolic syndrome
        # [age, bmi, glucose, hba1c, creatinine, egfr, tot_chol, ldl, hdl, trig, alt, ast, platelets, wbc]
        high_risk_labs = np.array([[62, 34.5, 175, 8.6, 2.1, 42, 245, 160, 32, 260, 55, 48, 220, 9.4]])
        pred = pipe.predict(high_risk_labs)
        self.assertEqual(pred[0], 1)

    def test_fda_faers_inference(self):
        """Test inference on FDA FAERS Adverse Drug Reaction production model."""
        model_path = os.path.join(MODELS_DIR, "fda_faers_production_model.pkl")
        self.assertTrue(os.path.exists(model_path))
        with open(model_path, "rb") as f:
            loaded = pickle.load(f)
        pipe = loaded["pipeline"]

        # Severe polypharmacy with high-risk pair (Warfarin + Aspirin) & renal impairment
        # [age, drug_count, high_risk_pair, renal, hepatic, poly_index, anticoag, nsaid, cyp3a, antiarrh]
        high_risk_drug_case = np.array([[74, 8, 1, 1, 0, 7.5, 1, 1, 0, 0]])
        pred = pipe.predict(high_risk_drug_case)
        self.assertEqual(pred[0], 1)

if __name__ == "__main__":
    unittest.main()
