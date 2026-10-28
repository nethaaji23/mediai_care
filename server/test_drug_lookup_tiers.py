import urllib.request
import json

def test_url(url, label):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "MediAI-Test/1.0"})
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode())
            print(f"=== {label} === [HTTP {resp.status}]")
            if "drug" in data:
                d = data["drug"]
                print(f"  Name: {d.get('name')}")
                print(f"  Category: {d.get('category')}")
                print(f"  Tier: {data.get('tier')} | Source: {d.get('source')}")
            elif "status" in data:
                print(f"  Service: {data.get('service')} | Status: {data.get('status')}")
            print()
    except Exception as e:
        print(f"=== {label} === Error: {e}\n")

if __name__ == "__main__":
    print("Testing MediAI Care+ 4-Tier Drug Lookup Engine...\n")
    test_url("http://localhost:8000/api/health", "Health Check")
    test_url("http://localhost:8000/api/drugs/lookup?q=paracetamol", "Tier 4 Test: Paracetamol")
    test_url("http://localhost:8000/api/drugs/lookup?q=dolo%20650", "Tier 3 Test: Dolo 650 (Brand Alias)")
    test_url("http://localhost:8000/api/drugs/lookup?q=atorvastatin", "Tier 1 Test: Atorvastatin (Live OpenFDA)")
    test_url("http://localhost:8000/api/drugs/lookup?q=lecanemab", "Tier 2 Test: Lecanemab (Groq AI Monograph)")
