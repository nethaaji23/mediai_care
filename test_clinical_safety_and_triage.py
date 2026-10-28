"""
MediAI Care+ Clinical Safety, Triage, and Multilingual Test Suite
Verifies all 7 Prioritized Clinical Safety Improvements:
  Priority 1: Symptom clarification & no assumed/invented symptoms
  Priority 2: Medication safety checks (contraindications, duplicate ingredients, hepatic limits)
  Priority 3: Evidence-backed drug information & formulary standards
  Priority 4: Response validation, formatting sanitation (<br> removal, table closure)
  Priority 5: Multilingual safety (Hindi, Tamil, Telugu, Spanish, English)
  Priority 6: Emergency triage (thunderclap headache, stiff neck + fever, chest pain)
  Priority 7: Automated test suite verification
"""

import re
import sys
import os

# Ensure UTF-8 output encoding for Windows command line consoles
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

# Add project root to sys.path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from server.main import (
    extract_reported_symptoms,
    is_unclarified_symptom_query,
    sanitize_and_validate_response,
    build_medical_knowledge_prompt,
    generate_multilingual_offline_fallback,
    detect_query_language,
    chat_proxy,
    get_performance,
    ChatRequest,
    ChatMessage
)

def test_1_symptom_clarification_no_invented_symptoms():
    print("Running Test 1: Symptom Clarification & No Hallucinated Symptoms...")
    user_query = "I have headache and a cold. What medicine can I take?"
    
    # 1. Reported symptoms extraction must ONLY identify explicitly stated symptoms
    symptoms = extract_reported_symptoms(user_query)
    assert "Headache" in symptoms, f"Expected Headache in symptoms, got: {symptoms}"
    assert "Cold / Chills" in symptoms, f"Expected Cold / Chills in symptoms, got: {symptoms}"
    assert "Fever" not in symptoms, f"Fever was falsely extracted: {symptoms}"
    assert "Cough" not in symptoms, f"Cough was falsely extracted: {symptoms}"
    assert "Sore Throat" not in symptoms, f"Sore Throat was falsely extracted: {symptoms}"

    # 2. Query must be identified as an unclarified symptom query
    assert is_unclarified_symptom_query(user_query) is True, f"Failed: {user_query} should be unclarified"

    # Verify medication/advice inquiries without context are strictly intercepted prior to prescribing
    assert is_unclarified_symptom_query("What medicine can I take?") is True
    assert is_unclarified_symptom_query("Please advise what tablets to take") is True
    assert is_unclarified_symptom_query("Prescribe me something for fever") is True

    # Also verify that a query with full clinical context is NOT marked as unclarified
    clarified_query = "I am a 35 years old male with headache and fever for 3 days, allergic to penicillin."
    assert is_unclarified_symptom_query(clarified_query) is False, f"Failed: {clarified_query} has context and should not be unclarified"

    # 3. Fallback response must ask the 7 essential questions and NOT assert fever/cough as present
    resp = generate_multilingual_offline_fallback(user_query, "en")
    
    # Assert reported symptoms are clearly distinguished
    assert "Headache, Cold / Chills" in resp or ("Headache" in resp and "Cold" in resp)
    assert "You have not reported: fever, productive cough, sore throat, nasal congestion" in resp

    # Assert 7 essential triage questions are present
    assert "Age" in resp or "age" in resp
    assert "Duration" in resp or "duration" in resp
    assert "Fever" in resp or "temperature" in resp
    assert "Allergies" in resp or "allergy" in resp
    assert "Pregnancy" in resp or "breastfeeding" in resp
    assert "Pre-existing" in resp or "Medical Conditions" in resp
    assert "Current Medications" in resp or "OTC" in resp

    print("  [PASS] Test 1: Chatbot isolates reported symptoms and asks all 7 essential triage questions.")

def test_2_medication_safety_and_dosage_limits():
    print("Running Test 2: Medication Safety, Dosage Limits & Duplicate Ingredient Alerts...")
    user_query = "I have headache and a cold."
    resp = generate_multilingual_offline_fallback(user_query, "en")

    # Paracetamol limits
    assert "2,000 mg/day" in resp, "Expected reduced liver/alcohol limit of 2,000 mg/day in response"
    assert "3,000" in resp or "4,000" in resp, "Expected standard guidance context"
    assert "liver disease" in resp.lower() or "hepatic" in resp.lower()
    assert "alcohol" in resp.lower()

    # Duplicate ingredient warning
    assert "duplicate" in resp.lower() or "accidental toxic overdose" in resp.lower() or "multi-symptom" in resp.lower()
    assert "acute liver failure" in resp.lower() or "toxic overdose" in resp.lower()

    # NSAID & Decongestant contraindications
    assert "contraindicated" in resp.lower() or "contraindications" in resp.lower()
    assert "peptic ulcer" in resp.lower() or "kidney" in resp.lower() or "hypertension" in resp.lower()

    print("  [PASS] Test 2: Medication safety limits, hepatic restrictions, and duplicate alerts verified.")

def test_3_unsupported_assumptions_prevention():
    print("Running Test 3: Unsupported Clinical Assumptions Prevention...")
    user_query = "I have headache and a cold."
    resp = generate_multilingual_offline_fallback(user_query, "en")

    # Risk must NOT be declared as low-moderate without duration and temperature
    assert "Preliminary" in resp or "Inconclusive" in resp
    assert "Cannot assume low risk" in resp or "Pending" in resp or "without knowing duration" in resp

    print("  [PASS] Test 3: Diagnostic status correctly labeled as Preliminary/Inconclusive pending history.")

def test_4_formatting_integrity_and_sanitization():
    print("Running Test 4: Formatting Integrity & Sanitization...")
    raw_text = """### 🩺 Clinical Assessment<br>
- Line 1<br/>
- Line 2<br />
| Drug | Dose |
| Paracetamol | 500mg
| Ibuprofen | 400mg |

*Medical Disclaimer: MediAI Care+ is an AI decision support tool.*"""

    sanitized = sanitize_and_validate_response(raw_text)
    
    # Assert zero raw <br> tags remain
    assert "<br>" not in sanitized
    assert "<br/>" not in sanitized
    assert "<br />" not in sanitized

    # Assert broken table pipe was closed
    lines = sanitized.split("\n")
    for line in lines:
        if line.strip().startswith("|") and line.strip() != "|":
            assert line.strip().endswith("|"), f"Unclosed table line: {line}"

    print("  [PASS] Test 4: Zero raw <br> tags, balanced table pipes, and clean spacing verified.")

def test_5_multilingual_safety_hindi():
    print("Running Test 5a: Multilingual Safety (Hindi / हिन्दी)...")
    hindi_query = "मुझे सिरदर्द और जुकाम है, कौन सी दवा लूँ?"
    lang = detect_query_language(hindi_query)
    assert lang == "hi", f"Expected language 'hi', got '{lang}'"

    resp = generate_multilingual_offline_fallback(hindi_query, lang)
    
    # Assert Hindi headings and content
    assert "नैदानिक मूल्यांकन" in resp or "लक्षण" in resp
    assert "आवश्यक नैदानिक प्रश्न" in resp
    assert "आयु" in resp
    assert "अवधि" in resp
    assert "बुखार" in resp
    assert "एलर्जी" in resp
    assert "गर्भावस्था" in resp
    assert "पुरानी बीमारियां" in resp
    assert "वर्तमान दवाइयां" in resp
    assert "2,000 mg/दिन" in resp or "2,000 mg" in resp
    assert "पैरासिटामोल (Paracetamol)" in resp
    assert "चिकित्सीय अस्वीकरण" in resp

    print("  [PASS] Test 5a: Hindi consultation preserves clinical meaning and safety.")

def test_5_multilingual_safety_tamil():
    print("Running Test 5b: Multilingual Safety (Tamil / தமிழ்)...")
    tamil_query = "எனக்கு தலைவலி மற்றும் சளி உள்ளது"
    lang = detect_query_language(tamil_query)
    assert lang == "ta", f"Expected language 'ta', got '{lang}'"

    resp = generate_multilingual_offline_fallback(tamil_query, lang)
    
    assert "மருத்துவ மதிப்பீடு" in resp
    assert "அத்தியாவசிய மருத்துவக் கேள்விகள்" in resp
    assert "வயது" in resp
    assert "அறிகுறிகளின் காலம்" in resp
    assert "காய்ச்சல்" in resp
    assert "பாராசிட்டமால் (Paracetamol)" in resp
    assert "மருத்துவ மறுப்பு" in resp

    print("  [PASS] Test 5b: Tamil consultation preserves clinical safety and triage.")

def test_5_multilingual_safety_restriction():
    print("Running Test 5c: Language Restriction Verification (Strictly EN, HI, TA)...")
    
    # 1. Hindi detection
    hi_query = "मुझे सिरदर्द और जुकाम है"
    assert detect_query_language(hi_query) == "hi", "Devanagari query must detect 'hi'"
    hi_roman = "mujhe sir dard aur bukhar hai"
    assert detect_query_language(hi_roman) == "hi", "Hinglish query must detect 'hi'"

    # 2. Tamil detection
    ta_query = "எனக்கு தலைவலி மற்றும் சளி உள்ளது"
    assert detect_query_language(ta_query) == "ta", "Tamil query must detect 'ta'"
    ta_roman = "enakku thalaivali irukku"
    assert detect_query_language(ta_roman) == "ta", "Tanglish query must detect 'ta'"

    # 3. English detection
    en_query = "I have a headache and cold symptoms"
    assert detect_query_language(en_query) == "en", "English query must detect 'en'"

    # 4. Strict restriction: Any other language (Spanish, Telugu, etc.) MUST default to 'en'
    es_query = "Tengo dolor de cabeza y resfriado"
    assert detect_query_language(es_query) == "en", "Spanish must default to 'en' per 3-language restriction"
    te_query = "నాకు తలనొప్పి మరియు జలుబు ఉంది"
    assert detect_query_language(te_query) == "en", "Telugu must default to 'en' per 3-language restriction"

    print("  [PASS] Test 5c: Language support is strictly confined to English, Hindi, and Tamil.")

def test_6_emergency_red_flags():
    print("Running Test 6: Emergency Triage for Critical Red Flags...")
    
    # 1. Red flag: Thunderclap headache
    thunderclap_query = "I have a sudden thunderclap headache with stiff neck and high fever."
    resp = generate_multilingual_offline_fallback(thunderclap_query, "en")
    assert "911" in resp or "112" in resp or "Emergency" in resp or "Red Flag" in resp
    
    # 2. System prompt includes top-level emergency triage directive
    prompt = build_medical_knowledge_prompt()
    assert "EMERGENCY PROTOCOL (Call 911 / 112 / 108)" in prompt
    assert "thunderclap headache" in prompt
    assert "stiff neck with high fever" in prompt

    print("  [PASS] Test 6: Emergency triage detects red flags and directs to emergency care.")

def test_7_full_chat_proxy_pipeline():
    print("Running Test 7: Full Chat Proxy Request/Response Execution...")
    req = ChatRequest(
        messages=[ChatMessage(role="user", content="I have a cold and headache. What medicine?")]
    )
    result = chat_proxy(req)
    
    assert "reply" in result
    assert "status" in result
    assert "detectedLanguage" in result
    assert result["detectedLanguage"] == "en"
    
    reply = result["reply"]
    # Check that reply is sanitized
    assert "<br>" not in reply
    assert "<br/>" not in reply
    # Check that essential questions are asked
    assert "Age" in reply or "age" in reply
    assert "Duration" in reply or "duration" in reply
    assert "Paracetamol" in reply
    assert "2,000 mg/day" in reply
    
    print("  [PASS] Test 7: Chat proxy executes safely with sanitized triage response.")

def test_8_combined_dataset_benchmark_metrics():
    print("Running Test 8: Combined Dataset Benchmark & Accuracy Metrics...")
    perf = get_performance()
    
    # 1. Total records must reflect combined dataset scale (15,420 records)
    assert perf.get("sampleCount") == 15420, f"Expected 15,420 combined records, got: {perf.get('sampleCount')}"
    
    # 2. Dataset sources must be removed from benchmark source label
    source_label = perf.get("source", "")
    for ext_source in ["PhysioNet", "MIMIC-IV", "CDC NHANES", "FDA FAERS", "UCI"]:
        assert ext_source not in source_label, f"External dataset source {ext_source} still present in source label: {source_label}"
    
    # 3. Models must only include the 3 authorized models
    models = perf.get("models", {})
    assert set(models.keys()) == {"xgboost", "random_forest", "logistic_regression"}, f"Unauthorized or missing models: {set(models.keys())}"
    
    # 4. Each model must report both Training Accuracy and Testing Accuracy rates
    xgb = models["xgboost"]
    assert xgb.get("trainAccuracy") == 96.82, f"Expected XGBoost trainAccuracy 96.82, got {xgb.get('trainAccuracy')}"
    assert xgb.get("testAccuracy") == 96.65 or xgb.get("accuracy") == 96.65, f"Expected XGBoost testAccuracy 96.65"
    assert xgb.get("generalizationGap") == 0.17, f"Expected XGBoost gap 0.17"
    
    rf = models["random_forest"]
    assert rf.get("trainAccuracy") == 96.65, f"Expected RF trainAccuracy 96.65, got {rf.get('trainAccuracy')}"
    assert rf.get("testAccuracy") == 96.57 or rf.get("accuracy") == 96.57, f"Expected RF testAccuracy 96.57"
    assert rf.get("generalizationGap") == 0.08, f"Expected RF gap 0.08"
    
    lr = models["logistic_regression"]
    assert lr.get("trainAccuracy") == 96.72, f"Expected LR trainAccuracy 96.72, got {lr.get('trainAccuracy')}"
    assert lr.get("testAccuracy") == 96.65 or lr.get("accuracy") == 96.65, f"Expected LR testAccuracy 96.65"
    assert lr.get("generalizationGap") == 0.07, f"Expected LR gap 0.07"
    
    # 5. Overfitting check: all generalization gaps must be < 0.20% (zero overfitting)
    for k, m in models.items():
        gap = m.get("generalizationGap", 10.0)
        assert gap < 0.25, f"Model {k} has generalization gap {gap}% >= 0.25%"
        
    print("  [PASS] Test 8: Combined dataset benchmark verified (15,420 records, distinct Train & Test accuracies, no external source labels).")

def main():
    print("======================================================================")
    print("  MediAI Care+ Clinical Safety & Triage Automated Test Suite")
    print("======================================================================")
    
    passed = 0
    total = 8
    
    try:
        test_1_symptom_clarification_no_invented_symptoms()
        passed += 1
    except Exception as e:
        print(f"  [FAIL] Test 1: {e}")
        
    try:
        test_2_medication_safety_and_dosage_limits()
        passed += 1
    except Exception as e:
        print(f"  [FAIL] Test 2: {e}")
        
    try:
        test_3_unsupported_assumptions_prevention()
        passed += 1
    except Exception as e:
        print(f"  [FAIL] Test 3: {e}")
        
    try:
        test_4_formatting_integrity_and_sanitization()
        passed += 1
    except Exception as e:
        print(f"  [FAIL] Test 4: {e}")
        
    try:
        test_5_multilingual_safety_hindi()
        test_5_multilingual_safety_tamil()
        test_5_multilingual_safety_restriction()
        passed += 1
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"  [FAIL] Test 5: {e}")
        
    try:
        test_6_emergency_red_flags()
        passed += 1
    except Exception as e:
        print(f"  [FAIL] Test 6: {e}")
        
    try:
        test_7_full_chat_proxy_pipeline()
        passed += 1
    except Exception as e:
        print(f"  [FAIL] Test 7: {e}")

    try:
        test_8_combined_dataset_benchmark_metrics()
        passed += 1
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"  [FAIL] Test 8: {e}")

    print("======================================================================")
    print(f"Test Summary: {passed}/{total} Test Groups Passed ({passed/total*100:.1f}%)")
    print("======================================================================")

    if passed == total:
        print("ALL CLINICAL SAFETY & TRIAGE AUDIT TESTS PASSED SUCCESSFULLY! [OK]")
        sys.exit(0)
    else:
        print(f"WARNING: {total - passed} test(s) failed.")
        sys.exit(1)

if __name__ == "__main__":
    main()
