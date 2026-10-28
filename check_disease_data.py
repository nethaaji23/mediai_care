from server.main import USER_DISEASE_DATASET, SYMPTOM_WEIGHT_MAP

print(f"Total diseases: {len(USER_DISEASE_DATASET)}")
print(f"Total symptom weights: {len(SYMPTOM_WEIGHT_MAP)}")
for d in USER_DISEASE_DATASET[:5]:
    syms = d.get('symptoms', '')
    print(f" - {d.get('disease')}: {syms[:50]}...")
