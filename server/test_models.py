import os
import sys
import json
import unittest

# Add server directory to path
SERVER_DIR = os.path.dirname(os.path.abspath(__file__))
if SERVER_DIR not in sys.path:
    sys.path.insert(0, SERVER_DIR)

from train_models import train_and_evaluate_models

class TestClinicalModelsAndAccuracy(unittest.TestCase):
    """
    Automated Unit & Cross-Validation Test Suite for MediAI Care+ ML Models
    """

    @classmethod
    def setUpClass(cls):
        print("\nExecuting model training and evaluation pipeline...")
        train_and_evaluate_models()
        cls.metrics_file = os.path.join(SERVER_DIR, "trained_metrics.json")
        with open(cls.metrics_file, "r", encoding="utf-8") as f:
            cls.metrics = json.load(f)

    def test_metrics_file_exists(self):
        self.assertTrue(os.path.exists(self.metrics_file), "trained_metrics.json must be generated.")

    def test_required_models_present(self):
        required_keys = ["xgboost", "random_forest", "logistic_regression"]
        for key in required_keys:
            self.assertIn(key, self.metrics, f"Model '{key}' must be present in trained metrics.")

    def test_model_accuracies_and_overfitting_threshold(self):
        """
        Verify that all models achieve >90% validation accuracy
        and maintain a generalization gap < 2.0% (preventing overfitting).
        """
        for key, model in self.metrics.items():
            name = model.get("name", key)
            val_acc = model.get("accuracy", 0)
            train_acc = model.get("trainAccuracy", 0)
            gap = model.get("generalizationGap", 100)
            f1 = model.get("f1Score", 0)

            print(f"Testing {name}: Val Acc = {val_acc}%, Train Acc = {train_acc}%, Gap = {gap}%, F1 = {f1}")

            self.assertGreaterEqual(val_acc, 90.0, f"{name} validation accuracy must be >= 90%. Got {val_acc}%")
            self.assertGreaterEqual(train_acc, 90.0, f"{name} training accuracy must be >= 90%. Got {train_acc}%")
            self.assertLessEqual(gap, 2.0, f"{name} generalization gap must be <= 2.0% to prevent overfitting. Got {gap}%")
            self.assertGreaterEqual(f1, 0.90, f"{name} F1 score must be >= 0.90. Got {f1}")

    def test_confusion_matrices(self):
        """Verify confusion matrices are non-empty and well-formed."""
        for key, model in self.metrics.items():
            cm = model.get("confusionMatrix")
            self.assertIsInstance(cm, list, f"{key} confusion matrix must be a list")
            self.assertEqual(len(cm), 2, f"{key} confusion matrix must have 2 rows")
            self.assertEqual(len(cm[0]), 2, f"{key} confusion matrix row 0 must have 2 columns")
            self.assertEqual(len(cm[1]), 2, f"{key} confusion matrix row 1 must have 2 columns")
            # Diagonal values (True Positives, True Negatives) should dominate
            tp = cm[1][1]
            tn = cm[0][0]
            fp = cm[0][1]
            fn = cm[1][0]
            self.assertGreater(tp, fn, f"{key} TP should be greater than FN")
            self.assertGreater(tn, fp, f"{key} TN should be greater than FP")

if __name__ == "__main__":
    unittest.main()
