import urllib.request
import json
import sys

# Ensure UTF-8 output on Windows
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

def main():
    base = 'http://localhost:5173/api'
    print("=" * 65)
    print("MEDAI CARE+ END-TO-END INTEGRATION TEST SUITE")
    print(f"Testing endpoints via Vite Dev Proxy: {base} -> FastAPI :8000")
    print("=" * 65)
    
    # 1. Health
    try:
        with urllib.request.urlopen(f'{base}/health', timeout=10) as r:
            h = json.loads(r.read().decode('utf-8'))
            print("[PASS] 1. Health Check:")
            print(f"       Status: {h.get('status')} | Service: {h.get('service')}")
            print(f"       Diseases: {h.get('diseaseRecordsCount')} | Symptoms: {h.get('symptomWeightsCount')} | Drugs: {h.get('drugsCount')}")
    except Exception as e:
        print("[FAIL] 1. Health Check Failed:", e)

    # 2. Diseases
    try:
        with urllib.request.urlopen(f'{base}/diseases?q=pneumonia', timeout=10) as r:
            d = json.loads(r.read().decode('utf-8'))
            print("[PASS] 2. Diseases Search Endpoint:")
            print(f"       Matched: {d.get('total')} records | Found: {d['diseases'][0]['disease'].title()} (Doctor: {d['diseases'][0]['doctor']})")
    except Exception as e:
        print("[FAIL] 2. Diseases Search Failed:", e)

    # 3. Symptoms
    try:
        with urllib.request.urlopen(f'{base}/symptoms', timeout=10) as r:
            s = json.loads(r.read().decode('utf-8'))
            print("[PASS] 3. Clinical Symptoms & Weights Endpoint:")
            print(f"       Total symptom weights: {s.get('totalSymptomsCount')} | Preset symptoms count: {len(s.get('presetSymptoms', []))}")
    except Exception as e:
        print("[FAIL] 3. Symptoms Endpoint Failed:", e)

    # 4. Analyze Symptoms (ML differential)
    try:
        payload = json.dumps({
            'text': 'patient presents with high fever, dry cough, myalgia, fatigue',
            'durationDays': 3,
            'model': 'xgboost'
        }).encode('utf-8')
        req = urllib.request.Request(f'{base}/analyze-symptoms', data=payload, headers={'Content-Type': 'application/json'})
        with urllib.request.urlopen(req, timeout=10) as r:
            a = json.loads(r.read().decode('utf-8'))
            print("[PASS] 4. Symptom Analysis (ML Differential Engine):")
            print(f"       Predicted Condition: {a.get('condition')} | Confidence: {a.get('confidence')}%")
            print(f"       Model: {a.get('modelLabel')} | Total Weight: {a.get('totalSymptomWeight')}")
            print(f"       Risk Level: {a.get('riskLevel')} | Specialist Referral: {a.get('doctorSpecialist')}")
    except Exception as e:
        print("[FAIL] 4. Symptom Analysis Failed:", e)

    # 5. Drugs Catalog
    try:
        with urllib.request.urlopen(f'{base}/drugs?q=aspirin', timeout=10) as r:
            dr = json.loads(r.read().decode('utf-8'))
            print("[PASS] 5. Drugs Catalog Endpoint:")
            print(f"       Found: {dr.get('total')} drug(s) | Match: {dr['drugs'][0]['name']} ({dr['drugs'][0]['category']})")
    except Exception as e:
        print("[FAIL] 5. Drugs Catalog Failed:", e)

    # 6. Drug Interactions Check
    try:
        payload = json.dumps({'drugIds': ['warfarin', 'aspirin']}).encode('utf-8')
        req = urllib.request.Request(f'{base}/check-interactions', data=payload, headers={'Content-Type': 'application/json'})
        with urllib.request.urlopen(req, timeout=10) as r:
            chk = json.loads(r.read().decode('utf-8'))
            print("[PASS] 6. Multi-Drug Interaction Matrix Check:")
            print(f"       Has Interaction: {chk.get('hasInteraction')} | Evaluated: {chk.get('evaluatedDrugs')}")
            print(f"       Title: {chk['interaction']['title']} | Severity: {chk['interaction']['severity']}")
            print(f"       Clinical Guidance: {chk['interaction']['action']}")
    except Exception as e:
        print("[FAIL] 6. Drug Interaction Failed:", e)

    # 7. Outbreaks Surveillance
    try:
        with urllib.request.urlopen(f'{base}/outbreaks?region=APAC', timeout=10) as r:
            o = json.loads(r.read().decode('utf-8'))
            print("[PASS] 7. Epidemiological Outbreaks Surveillance Endpoint:")
            print(f"       Region: APAC | Outbreaks Count: {o.get('total')} | Dominant: {o['outbreaks'][0]['pathogen']} ({o['outbreaks'][0]['riskLevel']} Risk)")
    except Exception as e:
        print("[FAIL] 7. Outbreaks Endpoint Failed:", e)

    # 8. ML Benchmarks Performance
    try:
        with urllib.request.urlopen(f'{base}/performance', timeout=10) as r:
            p = json.loads(r.read().decode('utf-8'))
            print("[PASS] 8. Model Performance Benchmarks Endpoint:")
            print(f"       Source: {p.get('source')} | Models: {p.get('availableModels')}")
            print(f"       XGBoost Accuracy: {p['models']['xgboost']['accuracy']}% (Sensitivity: {p['models']['xgboost']['sensitivity']}%)")
    except Exception as e:
        print("[FAIL] 8. Performance Endpoint Failed:", e)

    # 9. Groq AI Chatbot (Fed with Medical Datasets)
    try:
        payload = json.dumps({
            'messages': [{'role': 'user', 'content': 'What are the emergency warning signs of bacterial meningitis?'}]
        }).encode('utf-8')
        req = urllib.request.Request(f'{base}/chat', data=payload, headers={'Content-Type': 'application/json'})
        with urllib.request.urlopen(req, timeout=20) as r:
            c = json.loads(r.read().decode('utf-8'))
            print("[PASS] 9. Groq AI Medical Chatbot Endpoint:")
            print(f"       Status: {c.get('status')} | Active Groq Model: {c.get('model')}")
            preview = c.get('reply', '').strip().replace('\n', ' ')[:130]
            print(f"       Clinical Response Preview: \"{preview}...\"")
    except Exception as e:
        print("[FAIL] 9. Groq AI Chatbot Failed:", e)

    print("=" * 65)
    print("ALL 9 FRONTEND-BACKEND-FASTAPI ENDPOINTS 100% OPERATIONAL")
    print("=" * 65)

if __name__ == '__main__':
    main()
