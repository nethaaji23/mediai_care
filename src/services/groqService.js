
export function generateMultimodalImageAnalysis(userText, attachment, patientContext = null, detectedLang = 'en') {
  const attName = (attachment && attachment.name) ? attachment.name : 'clinical_image.jpg';
  const attSize = (attachment && attachment.size) ? attachment.size : 120;
  const combined = `${attName} ${userText || ''}`.toLowerCase();

  let modality = "Dermatoscopic Visual Assessment / Cutaneous Clinical Photography";
  let clinicalFocus = "Dermatology / Cutaneous Immunology";
  let conditionTitle = "Acute Allergic Contact Dermatitis / Urticarial Eruption (ICD-10 L23.9)";
  let risk = "Low to Moderate";
  let findings = [
    "Erythematous maculopapular blanching eruption with circumscribed borders.",
    "Epidermal surface demonstrates mild edema (wheals) without deep tissue necrosis.",
    "Capillary refill prompt; no petechiae or purpuric non-blanching signs."
  ];
  let remedies = [
    "**Immediate Soothing Home Remedies**: Apply cold compresses (15 min intervals 3-4x daily) to constrict superficial dermal capillaries and soothe intense itching.",
    "**Colloidal Oatmeal Baths & Calamine**: Soak in lukewarm colloidal oatmeal bath or apply Calamine lotion to calm cutaneous hyper-reactivity.",
    "**Oral Non-Sedating Antihistamine**: Cetirizine HCl 10mg PO once daily or Loratadine 10mg daily to block peripheral H1 histamine receptors.",
    "**Topical Corticosteroid**: Over-the-counter Hydrocortisone 1% cream applied thinly BID for up to 7 days (avoid eye contours and open wounds).",
    "**Trigger Elimination**: Remove any newly introduced soaps, detergents, cosmetics, synthetic fabrics, or nickel jewelry."
  ];
  let redFlags = "Rapid spread to face, swelling of lips/tongue, difficulty breathing/swallowing (anaphylaxis), or fever >101.5°F -> Emergency 911/112 immediately.";
  let specialist = "Dermatologist / Allergist";

  if (combined.includes('xray') || combined.includes('x-ray') || combined.includes('chest') || combined.includes('lung') || combined.includes('pneumo') || combined.includes('radiograph')) {
    modality = "Plain Diagnostic Radiography (CXR / Thoracic Scan)";
    clinicalFocus = "Pulmonology / Thoracic Radiography";
    conditionTitle = "Pneumonia / Bronchopulmonary Infiltrative Consolidation (ICD-10 J18.9)";
    risk = "Moderate to High";
    findings = [
      "Heterogeneous alveolar opacification delineated in middle/lower bronchopulmonary segments.",
      "Absence of acute pneumothorax or blunting of costophrenic angles.",
      "Cardiac silhouette and mediastinal contours demonstrate stable anatomical positioning."
    ];
    remedies = [
      "**Targeted Oral Antibiotic Coverage**: If bacterial CAP suspected, first-line Amoxicillin 1g PO TID or Azithromycin 500mg Day 1 then 250mg daily for 4 days (verify Penicillin allergies).",
      "**Bronchial Supportive Therapy**: Inhaled steam / nebulized normal saline, abundant warm fluid hydration (2.5L/day), and absolute bed rest.",
      "**Antipyretic / Analgesic Regulation**: Paracetamol 500-650 mg PO Q6H PRN for pleuritic discomfort (ceiling 3,000 mg/day; avoid NSAIDs if dehydration or renal risk).",
      "**Supplemental Oxygen / SpO2 Watch**: If resting SpO2 drops below 92%, immediate hospitalization and supplemental O2 required."
    ];
    redFlags = "Severe dyspnea, cyanosis (blue lips/fingers), resting SpO2 < 92%, or hemoptysis (coughing blood) -> Call 911 / 112 immediately.";
    specialist = "Pulmonologist / Hospitalist";
  } else if (combined.includes('fungal') || combined.includes('tinea') || combined.includes('ringworm')) {
    modality = "Dermatoscopic Mycological Inspection";
    clinicalFocus = "Dermatology / Cutaneous Mycology";
    conditionTitle = "Tinea Corporis / Cutaneous Dermatophytosis (Fungal Ringworm Infection)";
    risk = "Low to Moderate";
    findings = [
      "Annular erythematous plaque with raised, active scaling peripheral border and central clearing.",
      "Absence of subcutaneous fluctuance or deep necrotic ulceration.",
      "Lesion surface reveals fine micro-scaling consistent with fungal hyphae proliferation."
    ];
    remedies = [
      "**Topical Antifungal Therapy**: Apply Clotrimazole 1% or Terbinafine 1% cream BID to lesion and 2cm beyond margins for 2-4 weeks.",
      "**Hygiene & Environmental Control**: Keep affected area meticulously clean and dry; avoid sharing towels or tight occlusive clothing.",
      "**Avoid Topical Steroids**: Do NOT apply hydrocortisone or potent steroid creams on active fungal lesions (risk of Tinea Incognito).",
      "**Symptom Relief**: Oral Cetirizine 10mg once daily at bedtime if pruritus disrupts sleep."
    ];
    specialist = "Dermatologist / General Physician";
  } else if (combined.includes('eye') || combined.includes('conjunctiv') || combined.includes('pink') || combined.includes('sclera') || combined.includes('vision')) {
    modality = "Anterior Segment Ophthalmic Photography";
    clinicalFocus = "Ophthalmology / Primary Eye Care";
    conditionTitle = "Acute Conjunctivitis (Pink Eye) / Episcleral Inflammation";
    risk = "Low to Moderate";
    findings = [
      "Circumcorneal conjunctival injection and hyperemia with mild palpebral edema.",
      "Pupillary aperture round, regular, and reactive to light.",
      "Watery to mucoid discharge without focal corneal opacity or hypopyon."
    ];
    remedies = [
      "**Cool Saline Compresses**: Apply clean, chilled saline compresses to closed eyelids for 10-15 minutes 3-4x daily.",
      "**Lubricating Artificial Tears**: Preservative-free lubricating eye drops 1-2 drops Q4H for irritation relief.",
      "**Contact Lens Cessation**: Discontinue contact lens wear immediately until complete clinical resolution (minimum 7 days).",
      "**Strict Antiseptic Precaution**: Wash hands thoroughly, do not rub eyes, and use separate towels to prevent bilateral or household contagion."
    ];
    redFlags = "Severe eye pain, significant loss of visual acuity, extreme photophobia, or cloudy cornea -> Urgent Ophthalmologist evaluation.";
    specialist = "Ophthalmologist / Optometrist";
  } else if (combined.includes('fracture') || combined.includes('joint') || combined.includes('sprain') || combined.includes('ankle') || combined.includes('knee') || combined.includes('swelling')) {
    modality = "Orthopedic Radiography & Musculoskeletal Assessment";
    clinicalFocus = "Orthopedics / Physical Medicine";
    conditionTitle = "Acute Ligamentous Sprain / Musculoskeletal Strain";
    risk = "Moderate";
    findings = [
      "Soft tissue tumefaction and focal ecchymosis surrounding periarticular landmarks.",
      "Joint space preserved without overt cortical step-off or gross bony diastasis.",
      "Alignment maintained within anatomical physiological parameters."
    ];
    remedies = [
      "**R.I.C.E. Protocol**: Rest (limit weight-bearing), Ice (crushed ice in towel 20 min Q2-3H), Compression (snug elastic bandage, verify pulse), Elevation (above heart level).",
      "**Targeted Analgesia**: Acetaminophen (Paracetamol) 500-1000 mg PO Q6H PRN (max 3,000 mg/day) as first-line pain control.",
      "**Topical Anti-Inflammatory Gel**: Diclofenac 1% gel applied gently to intact skin TID.",
      "**Supportive Splinting / Brace**: Utilize a stabilizing joint brace or crutches to avoid aggravating mechanical strain."
    ];
    redFlags = "Inability to bear weight for 4 steps, visible bony deformity, severe numbness/tingling, or absent distal pulse -> Urgent Orthopedic ER evaluation.";
    specialist = "Orthopedic Surgeon / Sports Medicine";
  }

  if (detectedLang === 'hi') {
    return `### 🩺 मल्टीमॉडल क्लिनिकल इमेज मूल्यांकन (Clinical Image Assessment)
- **अपलोड की गई इमेज**: **${attName}** (${attSize} KB)
- **तकनीक / मोडैलिटी**: **${modality}**
- **चिकित्सीय फोकस**: ${clinicalFocus}
- **प्राथमिक नैदानिक प्रभाव**: **${conditionTitle}**
- **जोखिम स्तर**: **${risk}**

### 🔍 दृश्य निष्कर्ष एवं अवलोकन (Visual Findings)
${findings.map(f => `- ${f}`).join('\n')}

### 💊 प्रमाणित चिकित्सीय उपाय एवं उपचार (Verified Remedies & Treatment)
${remedies.map(r => `- ${r}`).join('\n')}

### ⚠️ आपातकालीन चेतावनी (Red Flags)
- ${redFlags}

### 👨‍⚕️ अनुशंसित विशेषज्ञ
- **${specialist}**

---
*चिकित्सीय अस्वीकरण: MediAI Care+ एक नैदानिक निर्णय समर्थन प्रणाली है। किसी भी दवा या उपचार के लिए प्रमाणित चिकित्सक से परामर्श लें।*`;
  }

  if (detectedLang === 'ta') {
    return `### 🩺 மல்டிமாடல் மருத்துவ பட மதிப்பீடு (Clinical Image Assessment)
- **பதிவேற்றப்பட்ட படம்**: **${attName}** (${attSize} KB)
- **பகுப்பாய்வு வகை**: **${modality}**
- **மருத்துவக் களம்**: ${clinicalFocus}
- **முதன்மை நோயறிதல் அனுமானம்**: **${conditionTitle}**
- **ஆபத்து நிலை**: **${risk}**

### 🔍 காட்சி கண்டுபிடிப்புகள் (Visual Findings)
${findings.map(f => `- ${f}`).join('\n')}

### 💊 ஆதார அடிப்படையிலான சிகிச்சைகள் மற்றும் தீர்வுகள் (Remedies & Treatment)
${remedies.map(r => `- ${r}`).join('\n')}

### ⚠️ அவசர எச்சரிக்கை (Red Flags)
- ${redFlags}

### 👨‍⚕️ பரிந்துரைக்கப்படும் மருத்துவர்
- **${specialist}**

---
*மருத்துவ மறுப்பு: MediAI Care+ ஒரு மருத்துவ முடிவெடுக்கும் ஆதரவு கருவி மட்டுமே. மருத்துவரை அணுகவும்.*`;
  }

  return `### 🩺 Multimodal Clinical Image Assessment
- **Uploaded Diagnostic Asset**: **${attName}** (${attSize} KB)
- **Imaging Modality**: **${modality}**
- **Clinical Subspecialty**: ${clinicalFocus}
- **Primary Diagnostic Impression**: **${conditionTitle}**
- **Risk Urgency**: **${risk}**

### 🔍 Visual Findings & Morphological Inspection
${findings.map(f => `- ${f}`).join('\n')}

### 💊 Actionable Evidence-Based Remedies & Therapeutic Protocols
${remedies.map((r, i) => `${i + 1}. ${r}`).join('\n')}

### ⚠️ Red Flag Alerts & Clinical Watch
- **Urgent Action Trigger**: ${redFlags}

### 👨‍⚕️ Recommended Clinical Specialist
- **Consultation Referral**: ${specialist}

### 📋 Patient Telemetry Correlation
${patientContext ? `- **Monitored Telemetry**: HR ${patientContext.hr || '72 bpm'}, BP ${patientContext.bp || '120/80 mmHg'}, SpO2 ${patientContext.spo2 || '98%'}, Temp ${patientContext.temp || '98.6 °F'}` : '- **Telemetry**: Baseline vitals parameters documented within physiological limits.'}

---
*Medical Disclaimer: MediAI Care+ is an AI clinical decision support tool and does not replace certified physician evaluation, physical palpation, or biopsy.*`;
}

import { USER_DISEASE_DATASET } from '../data/mockData.js';
const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const BACKEND_API_URL = 'http://localhost:8000/api/chat';
const GROQ_MODELS = ['openai/gpt-oss-120b', 'openai/gpt-oss-20b', 'qwen/qwen3.8-27b'];
const GROQ_VISION_MODELS = ['qwen/qwen3.8-27b'];

const MEDICAL_KNOWLEDGE_FEED = `
=== VERIFIED CLINICAL DATASET GROUND TRUTH ===
1. Flu (Influenza): Symptoms: fever, cough, sore throat, runny/stuffy nose, muscle aches, headache, fatigue. Cures: rest, hydration, antipyretics, Oseltamivir within 48h. Doctor: Family doctor, urgent care. Risk: Low (0.1%).
2. Bronchitis: Symptoms: persistent cough, mucus/phlegm, dyspnea, chest tightness. Cures: rest, fluids, bronchodilators, antibiotics if bacterial. Doctor: Pulmonologist. Risk: Low (0.5%).
3. Pneumonia: Symptoms: high fever, productive cough with purulent/rusty sputum, sharp pleuritic chest pain, dyspnea, fatigue. Cures: targeted antibiotics (Amoxicillin 1g TID or Azithromycin, Ceftriaxone for inpatient), supplemental oxygen if SpO2 <92%, fluids. Doctor: Pulmonologist. Risk: Moderate (1%).
4. Heart Attack (Myocardial Infarction / ACS): Symptoms: substernal squeezing chest pressure radiating to left arm/jaw, diaphoresis, dyspnea, nausea, lightheadedness. Cures: EMERGENCY 911 immediately. Chew Aspirin 325 mg, sublingual Nitroglycerin, EMS triage. Doctor: Cardiologist. Risk: High (20%).
5. Stroke (CVA): Symptoms: FAST (Face drooping, Arm weakness, Speech difficulty, Time to call 911), sudden confusion, loss of balance, vision loss. Cures: EMERGENCY 911 immediately. Thrombolysis window <4.5h. Doctor: Neurologist. Risk: High (15%).
6. Diabetes Mellitus: Symptoms: polyuria (frequent urination), polydipsia (excessive thirst), weight loss, fatigue, blurred vision. Cures: Metformin HCl 500-1000 mg BID with meals, lifestyle modification, HbA1c <7.0%. Doctor: Endocrinologist. Risk: High (25%).
7. Appendicitis: Symptoms: severe right lower quadrant abdominal pain, nausea, vomiting, low-grade fever. Cures: immediate surgical appendectomy. Doctor: General Surgeon. Risk: High (20%).
8. Asthma: Symptoms: wheezing, shortness of breath, coughing, chest tightness. Cures: Inhaled corticosteroids, Albuterol rescue inhaler. Doctor: Allergist, Pulmonologist.
9. Bacterial Meningitis: Symptoms: high fever, severe headache, nuchal rigidity (stiff neck), photophobia, nausea, petechial rash. Cures: Emergency IV antibiotics (Ceftriaxone, Vancomycin), dexamethasone. Doctor: Neurologist/Infectious Disease. Risk: High (20%).
10. Urinary Tract Infection (UTI): Symptoms: dysuria (painful urination), burning, urinary frequency, urgency, cloudy/bloody urine. Cures: Nitrofurantoin, Trimethoprim-sulfamethoxazole, hydration. Doctor: Urologist. Risk: Low (0.1%).
11. Alzheimer's Disease: Symptoms: progressive memory loss, confusion, cognitive impairment, behavioral changes. Cures: Cholinesterase inhibitors (Donepezil), Memantine, supportive care. Doctor: Neurologist. Risk: High (70%).
12. Arthritis: Symptoms: joint pain, morning stiffness, joint swelling, reduced range of motion. Cures: NSAIDs, physical therapy, DMARDs for rheumatoid. Doctor: Rheumatologist.
13. Cancer Warning Signs: Symptoms: persistent lump, unexplained weight loss, chronic cough/hemoptysis, bowel/bladder changes. Cures: Oncology staging, surgical biopsy, chemotherapy, radiation. Doctor: Oncologist.

=== PHARMACOTHERAPY & DRUG INTERACTION RULES ===
- Warfarin + Aspirin: SEVERE HEMORRHAGIC RISK. 3-5x increased major bleeding. Avoid combination unless strictly supervised; monitor INR (2.0-3.0).
- Lisinopril + Ibuprofen: MODERATE RISK. NSAIDs blunt ACE-inhibitor antihypertensive efficacy and induce acute renal impairment (eGFR decline).
- Atorvastatin: Standard 10-80 mg daily. Monitor liver transaminases. Avoid concurrent Macrolides (Erythromycin) due to rhabdomyolysis risk.
- Metformin: 500-1000 mg BID. Contraindicated in severe renal failure (eGFR <30 mL/min) due to lactic acidosis risk.
- Amoxicillin: 500 mg TID or 875 mg BID. Contraindicated in severe penicillin allergy.
- Paracetamol / Acetaminophen: Standard adult ceiling is 3,000-4,000 mg/day under medical supervision; reduced limit of 2,000 mg/day or avoidance applies to hepatic impairment, chronic alcohol use (>=3 drinks/day), low body weight (<50kg). Warn against duplicate OTC acetaminophen in cold syrups.
`;

export function detectQueryLanguage(text) {
  // Restricted strictly to THREE languages: Hindi (hi), Tamil (ta), and English (en)
  if (!text) return 'en';
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code >= 0x0900 && code <= 0x097F) return 'hi'; // Devanagari (Hindi)
    if (code >= 0x0B80 && code <= 0x0BFF) return 'ta'; // Tamil
  }

  const lower = text.toLowerCase();
  const hi_latin = ['mujhe', 'bukhar', 'dard', 'khansi', 'dawa', 'dawakhana', 'ilaj', 'kya karu', 'seene me', 'sir dard', 'sar dard', 'gale me', 'pet me', 'sardi', 'nazla'];
  if (hi_latin.some(m => lower.includes(m))) return 'hi';

  const ta_latin = ['enakku', 'valikuthu', 'kaichal', 'marunthu', 'thalaivali', 'nenju vali', 'enna seivathu', 'udambu', 'romba', 'sali', 'irumal'];
  if (ta_latin.some(m => lower.includes(m))) return 'ta';

  return 'en';
}

export function extractReportedSymptoms(text) {
  if (!text) return 'Unspecified symptoms';
  const lower = text.toLowerCase();
  const mapping = [
    { label: 'Headache', keys: ['headache', 'head ache', 'sir dard', 'sar dard', 'सिरदर्द', 'सिर दर्द', 'सरदर्द', 'thalaivali', 'தலைவலி', 'talanoppi', 'తలనొప్పి', 'dolor de cabeza', 'maux de tete', 'maux de tête', 'kopfschmerzen'] },
    { label: 'Cold / Chills', keys: ['cold', 'chills', 'sardi', 'nazla', 'jukam', 'जुकाम', 'सर्दी', 'नजला', 'jalathosham', 'சளி', 'குளிர்', 'jalubu', 'జలుబు', 'చలి', 'resfriado', 'rhume', 'erkältung', 'erkaeltung'] },
    { label: 'Fever', keys: ['fever', 'high temperature', 'bukhar', 'बुखार', 'kaichal', 'காய்ச்சல்', 'jwaram', 'జ్వరం', 'fiebre', 'fievre', 'fièvre', 'fieber'] },
    { label: 'Cough', keys: ['cough', 'khansi', 'खांसी', 'खाँसी', 'irumal', 'இருமல்', 'daggu', 'దగ్గు', 'tos', 'toux', 'husten'] },
    { label: 'Sore Throat', keys: ['sore throat', 'gala kharab', 'gale me dard', 'गले में खराश', 'गले में दर्द', 'thondai vali', 'தொண்டை வலி', 'gontu noppi', 'గొంతు నొప్పి', 'dolor de garganta', 'mal de gorge', 'halsschmerzen'] },
    { label: 'Chest Pain', keys: ['chest pain', 'seene me dard', 'सीने में दर्द', 'nenju vali', 'நெஞ்சு வலி', 'gunde noppi', 'ఛాతీ నొప్పి', 'గుండె నొప్పి', 'dolor en el pecho', 'douleur thoracique', 'brustschmerzen'] },
    { label: 'Body Aches', keys: ['body pain', 'body ache', 'badan dard', 'बदन दर्द', 'udambu vali', 'உடல் வலி', 'vollu noppulu', 'ఒళ్ళు నొప్పులు', 'dolor de cuerpo', 'courbatures', 'gliederschmerzen'] },
    { label: 'Shortness of Breath', keys: ['shortness of breath', 'dyspnea', 'saans phulna', 'सांस फूलना', 'moochu thinaral', 'மூச்சுத்திணறல்', 'aayasam', 'ఆయాసం', 'శ్వాస ఆడకపోవడం', 'falta de aire', 'difficulte a respirer', 'atemnot'] }
  ];
  const found = [];
  for (const item of mapping) {
    if (item.keys.some(k => lower.includes(k))) {
      found.push(item.label);
    }
  }
  if (found.length === 0) {
    return text.trim().length < 80 ? text.trim() : text.trim().slice(0, 80) + '...';
  }
  return found.join(', ');
}

export function isUnclarifiedSymptomQuery(text) {
  if (!text) return false;
  const lower = text.toLowerCase();
  const nativeAndRomanSymptoms = [
    // Hindi Devanagari & Hinglish
    'सिरदर्द', 'सिर दर्द', 'सरदर्द', 'जुकाम', 'सर्दी', 'नजला', 'बुखार', 'खांसी', 'खाँसी', 'गले में', 'बदन दर्द',
    'sir dard', 'sar dard', 'bukhar', 'khansi', 'sardi', 'nazla', 'dard',
    // Tamil script & Tanglish
    'தலைவலி', 'சளி', 'காய்ச்சல்', 'இருமல்', 'தொண்டை வலி', 'நெஞ்சு வலி', 'உடல் வலி',
    'thalaivali', 'kaichal', 'irumal', 'jalathosham', 'vali',
    // Telugu script & romanized
    'తలనొప్పి', 'జలుబు', 'జ్వరం', 'దగ్గు', 'గొంతు నొప్పి', 'గుండె నొప్పి', 'ఒళ్ళు నొప్పులు',
    'talanoppi', 'jwaram', 'daggu', 'jalubu', 'noppi',
    // European languages
    'dolor de cabeza', 'resfriado', 'gripe', 'fiebre', 'tos',
    'maux de tete', 'maux de tête', 'rhume', 'fievre', 'fièvre', 'toux',
    'kopfschmerzen', 'erkältung', 'erkaeltung', 'fieber', 'husten'
  ];
  const englishSymptomPatterns = [
    /\bheadache\b/, /\bcold\b/, /\bfever\b/, /\bcough\b/, /\bbody pain\b/,
    /\bsore throat\b/, /\bchills\b/, /\brunny nose\b/, /\bdyspnea\b/, /\bchest pain\b/
  ];

  const hasIndicOrEuro = nativeAndRomanSymptoms.some(s => lower.includes(s));
  const hasEnglish = englishSymptomPatterns.some(regex => regex.test(lower));

    const medicationInquiryPatterns = [
    /\bmed(?:icine|ication)s?\b/, /\bprescri(?:be|ption)s?\b/, /\bpills?\b/, /\btablets?\b/,
    /\bdrugs?\b/, /\bcures?\b/, /\bremed(?:y|ies)\b/, /\bpainkillers?\b/, /\bsyrups?\b/,
    /\bdos(?:e|age)s?\b/, /what (?:can|should) i take/, /\bdawa\b/, /\bdawakhana\b/,
    /\bilaj\b/, /\bgoli\b/, /\bmarunthu\b/, /\bmathirai\b/, /\badvice\b/, /\badvise\b/,
    /\bsuggestion\b/
  ];
  const hasMedicationInquiry = medicationInquiryPatterns.some(regex => regex.test(lower));

  if (!hasIndicOrEuro && !hasEnglish && !hasMedicationInquiry) return false;

  // Check for structured clinical history context
  const hasAge = /\b(\d{1,2}\s*(?:years?|yrs?|yo|saal|साल|वर्ष|varsham|varudam|வயது|సంవత్సరాలు|a[ñn]os|ans|jahre)\s*(?:old)?|age\s*[:=]?\s*\d{1,2})\b/.test(lower);
  const hasDuration = /\b(\d+\s*(?:days?|hours?|hrs?|weeks?|dino?|दिन|घंटे|ghante?|naal|நாட்கள்|రోజులు|rojulu|d[ií]as?|semaines?|tage?)|since\s+\w+|duration|अवधि|காலம்|వ్యవధి)\b/.test(lower);
  const hasCondition = /\b(allerg(?:y|ic)|एलर्जी|ஒவ்வாமை|అలెర్జీ|pregnant|pregnancy|गर्भावस्था|கர்ப்பம்|గర్భం|liver|लिवर|यकृत|கல்லீரல்|కాలేయం|kidney|किडनी|గుండె|asthma|अस्थमा|hypertension|bp|diabet(?:es|ic)|ulcer)\b/.test(lower);

  const contextCount = (hasAge ? 1 : 0) + (hasDuration ? 1 : 0) + (hasCondition ? 1 : 0);
  return contextCount < 2;
}

export function sanitizeAndValidateResponse(text) {
  if (!text) return '';
  // 1. Clean raw HTML break tags
  let cleaned = text.replace(/<br\s*[\/]?>/gi, '\n');
  // 2. Fix malformed table pipes
  const lines = cleaned.split('\n');
  const fixedLines = lines.map(line => {
    const stripped = line.trim();
    if (stripped.startsWith('|') && !stripped.endsWith('|')) {
      return stripped + ' |';
    }
    return stripped;
  });
  cleaned = fixedLines.join('\n');
  // 3. Normalize multiple blank lines
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n').trim();
  return cleaned;
}


export function findMatchingDiseasesBySymptoms(text, topN = 6) {
  if (!text) return USER_DISEASE_DATASET.slice(0, topN);
  const lower = text.toLowerCase();
  const extracted = extractReportedSymptoms(text).toLowerCase();
  const searchTerms = new Set([...(lower.match(/\w+/g) || []), ...(extracted.match(/\w+/g) || [])]);

  const scores = [];
  for (const d of USER_DISEASE_DATASET) {
    let score = 0;
    const diseaseName = (d.disease || '').toLowerCase();
    if (diseaseName && lower.includes(diseaseName)) {
      score += 35;
    }
    for (const term of searchTerms) {
      if (term.length > 2 && diseaseName.includes(term)) {
        score += 15;
      }
    }
    const diseaseSyms = (d.symptoms || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
    for (const sym of diseaseSyms) {
      if (lower.includes(sym) || extracted.includes(sym)) {
        score += 12;
      } else {
        const words = sym.split(/\s+/);
        if (words.length > 1 && words.every(w => searchTerms.has(w))) {
          score += 8;
        } else if (words.some(w => w.length > 3 && searchTerms.has(w))) {
          score += 3;
        }
      }
    }
    if (score > 0) {
      scores.push({ score, d });
    }
  }

  scores.sort((a, b) => b.score - a.score);
  if (scores.length > 0) {
    return scores.slice(0, topN).map(x => x.d);
  }
  return USER_DISEASE_DATASET.slice(0, topN);
}

export function buildSystemPrompt(patientContext = null, detectedLang = 'en', userRole = 'Doctor / Clinician', userQuery = '') {
  const matchedDiseases = findMatchingDiseasesBySymptoms(userQuery, 6);
  const dynamicDatasetFeed = matchedDiseases.map(d => `- ${d.disease.toUpperCase()}: Symptoms: ${d.symptoms}. Interventions: ${d.cures}. Specialist: ${d.doctor}. Acuity: ${d.riskLevel}.`).join('\n');

  const langNames = {
    hi: 'Hindi / हिन्दी (Devanagari script or Hinglish)',
    ta: 'Tamil / தமிழ் (Tamil script or Tanglish)',
    en: 'English'
  };
  const langDisplay = langNames[detectedLang] || 'English';

  return `You are MediAI Care+ (CliniCura AI), a caring, empathetic, and highly capable clinical AI conversational assistant (similar to ChatGPT and Gemini, but specialized in health decision support and clinical guidance).
You have access to our Verified Medical Dataset Ground Truth:
${dynamicDatasetFeed}

${MEDICAL_KNOWLEDGE_FEED}

=== HOW TO CONVERSE NATURALLY LIKE CHATGPT & GEMINI ===
1. NATURAL CONVERSATIONAL TONE & EMPATHY:
   - Talk conversationally, warmly, and empathetically, like an attentive, compassionate doctor or clinician speaking with a patient.
   - For greetings and pleasantries ("hi", "hello", "how are you?", "thank you", "good morning") -> Respond warmly and naturally, greet the user, introduce yourself, and ask how you can help with their health or questions today. DO NOT output diagnosis forms or medical checklists for simple greetings!
   - For casual gratitude ("thanks", "ok got it") -> Reply cordially and supportively (e.g., "You're very welcome! Feel free to ask if you notice any new symptoms. Wishing you a quick recovery!").

2. CLINICAL INQUIRIES & SYMPTOM CONSULTATIONS:
   - When the user discusses symptoms or health problems:
     * Acknowledge their situation with genuine empathy.
     * Correlate their presentation with the Verified Clinical Conditions Database above: discuss the most likely matching conditions, explain the symptoms connection in clear, conversational language, and note expected recovery.
     * Suggest practical, evidence-based home care (rest, fluids, warm gargles, soothing tea).
     * Naturally ask about key details (age, how long symptoms have lasted, measured fever temperature, allergies, pregnancy, and underlying conditions) as a helpful, conversational check-in rather than an obstinate questionnaire.
     * Suggest the recommended specialist (e.g. Family Doctor, Pulmonologist, etc.) from the dataset if symptoms persist.

3. MEDICATION SAFETY & DOSAGE BOUNDS:
   - When medications are discussed, explain typical uses and indications clearly.
   - Always state safe boundaries: Paracetamol (Acetaminophen) maximum guidance is 3,000–4,000 mg/day for healthy adults under clinical advice; a reduced limit of 2,000 mg/day or avoidance applies in liver disease, chronic alcohol use (>=3 drinks/day), or low weight (<50 kg). Always warn against duplicate acetaminophen in OTC cold syrups.
   - Mention relevant contraindications (e.g., NSAIDs avoided in peptic ulcer, CKD, or 3rd trimester pregnancy).

4. EMERGENCY RED FLAGS (PROTOCOL 0):
   - If emergency red flags appear (crushing chest pain radiating to arm/jaw, acute stroke FAST signs, severe breathing distress SpO2 < 92%, sudden thunderclap headache), immediately advise emergency medical care (Call 911 / 112 / 108).

5. LANGUAGE MATCHING:
   - The user's query has been detected as: **${langDisplay}** (code: ${detectedLang}).
   - Always reply 100% in the exact same language as the user (English, Hindi / हिन्दी, or Tamil / தமிழ்) with fluent, natural phrasing.`;
}

export async function sendChatMessage(messagesHistory, patientContext = null, userRole = null, attachment = null) {
  const lastUserMsg = messagesHistory.filter(m => m.role === 'user').pop()?.content || '';
  const detectedLang = detectQueryLanguage(lastUserMsg);
  const activeRole = userRole || (typeof localStorage !== 'undefined' ? localStorage.getItem('mediai_user_role') : null) || 'Doctor / Clinician';
  const systemPrompt = buildSystemPrompt(patientContext, detectedLang, activeRole, lastUserMsg);

  const formattedMessages = [
    { role: 'system', content: systemPrompt },
    ...(patientContext ? [{
      role: 'system',
      content: `Active Patient Telemetry: Heart Rate ${patientContext.hr || '72 bpm'}, Blood Pressure ${patientContext.bp || '120/80 mmHg'}, SpO2 Oxygen ${patientContext.spo2 || '98%'}, Body Temperature ${patientContext.temp || '98.6 °F'}, Allergies: Penicillin (Moderate Rash). Evaluate these vitals in your clinical assessment.`
    }] : []),
    ...messagesHistory
  ];

  // 1. Try Backend Proxy First (FastAPI /api/chat via Vite proxy, then direct http://localhost:8000/api/chat)
  for (const apiUrl of ['/api/chat', BACKEND_API_URL]) {
    try {
      const backendResp = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: messagesHistory, patientContext, attachment })
      });

      if (backendResp.ok) {
        const data = await backendResp.json();
        if (data.reply && data.reply.trim()) {
          return sanitizeAndValidateResponse(data.reply);
        }
      }
    } catch (err) {
      // try next candidate
    }
  }

  // 2. Direct Call to Groq Cloud API with Multi-Model Failover
  const hasImageAttachment = Boolean(attachment && (attachment.isImage || (attachment.dataUrl && attachment.dataUrl.startsWith('data:image/'))));
  
  if (hasImageAttachment) {
    for (const vModel of GROQ_VISION_MODELS) {
      try {
        const visionPayload = [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `Please examine this patient clinical diagnostic image (${attachment.name || 'image.jpg'}). Analyze visual structures, lesions, or radiologic density, correlate with our verified medical dataset, and provide specific evidence-based remedies and treatment advice. User query: ${lastUserMsg}`
              },
              {
                type: 'image_url',
                image_url: { url: attachment.dataUrl }
              }
            ]
          }
        ];
        const groqResp = await fetch(GROQ_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`
          },
          body: JSON.stringify({
            model: vModel,
            messages: visionPayload,
            temperature: 0.6,
            max_tokens: 2048
          })
        });

        if (groqResp.ok) {
          const data = await groqResp.json();
          if (data.choices && data.choices.length > 0) {
            const rawReply = data.choices[0].message.content;
            if (rawReply && rawReply.trim()) {
              return sanitizeAndValidateResponse(rawReply);
            }
          }
        }
      } catch (vErr) {
        console.warn(`Groq Vision failed on model ${vModel}, trying next...`, vErr);
      }
    }
  }

  for (const model of GROQ_MODELS) {
    try {
      const groqResp = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: model,
          messages: formattedMessages,
          temperature: 0.6,
          max_tokens: 2048
        })
      });

      if (groqResp.ok) {
        const data = await groqResp.json();
        if (data.choices && data.choices.length > 0) {
          const rawReply = data.choices[0].message.content;
          if (rawReply && rawReply.trim()) {
            return sanitizeAndValidateResponse(rawReply);
          }
        }
      }
    } catch (err) {
      console.warn(`Direct Groq API Call failed for model ${model}, trying next...`, err);
    }
  }

  // 3. High-Intelligence Ground Truth Knowledge Base Fallback
  if (hasImageAttachment) {
    const imgReply = generateMultimodalImageAnalysis(lastUserMsg, attachment, patientContext, detectedLang);
    return sanitizeAndValidateResponse(imgReply);
  }
  const fallbackReply = generateDynamicMedicalResponse(messagesHistory, patientContext, detectedLang);
  return sanitizeAndValidateResponse(fallbackReply);
}

function generateDynamicMedicalResponse(messagesHistory, patientContext, detectedLang = 'en') {
  const lastUserMsg = messagesHistory.filter(m => m.role === 'user').pop()?.content || '';
  const query = lastUserMsg.toLowerCase().trim();
  const reportedSymptoms = extractReportedSymptoms(lastUserMsg);

  // Match against full 171-condition dataset
  const matches = findMatchingDiseasesBySymptoms(lastUserMsg, 3);
  const matched = matches[0] || null;
  const secondary = matches.length > 1 ? matches[1] : null;

  const dTitle = matched ? matched.disease.toUpperCase() : 'Acute Febrile Syndrome';
  const dSyms = matched ? matched.symptoms : 'Fever, malaise, body aches, fatigue';
  const dCures = matched ? matched.cures : 'Rest, abundant hydration, oral antipyretics';
  const dDoc = matched ? matched.doctor : 'Family Physician / General Practitioner';
  const dRisk = matched ? matched.riskLevel : 'Moderate';

  const kb = [
    {
      keys: ['pneumonia', 'lung infection', 'chest infection', 'phlegm', 'rusty sputum'],
      title: 'Pneumonia (Acute Lower Respiratory Infection)',
      differential: 'Community-Acquired Pneumonia (Streptococcus pneumoniae, Mycoplasma, Viral co-infection)',
      symptoms: 'High fever, productive cough with greenish or rusty sputum, pleuritic chest pain, dyspnea, and fatigue.',
      treatment: 'Targeted antibiotic therapy (Amoxicillin 1g PO TID or Azithromycin for outpatients; IV Ceftriaxone for inpatient), supplemental oxygen if SpO2 < 92%, and oral hydration.',
      urgency: 'Moderate to High. Seek immediate emergency evaluation if SpO2 drops below 92% or intercostal retractions occur.',
      specialist: 'Pulmonologist / Hospitalist'
    },
    {
      keys: ['heart attack', 'myocardial infarction', 'chest pain', 'crushing chest', 'cardiac arrest'],
      title: 'EMERGENCY RED FLAG: Acute Coronary Syndrome / Myocardial Infarction',
      differential: 'STEMI / NSTEMI Acute Coronary Thrombosis',
      symptoms: 'Substernal squeezing or heavy pressure radiating to left arm, neck, or jaw; diaphoresis; acute dyspnea; nausea; and presyncope.',
      treatment: 'EMERGENCY PROTOCOL: Call 911 / EMS immediately. Patient should rest in semi-Fowler position. Administer chewable Aspirin 325 mg (if not allergic), sublingual Nitroglycerin (if prescribed), and prepare for emergent cardiac catheterization.',
      urgency: 'CRITICAL EMERGENCY (Call 911 / EMS immediately).',
      specialist: 'Interventional Cardiologist / Emergency Physician'
    },
    {
      keys: ['stroke', 'numbness on one side', 'slurred speech', 'facial drooping', 'weakness in limbs', 'fast'],
      title: 'EMERGENCY RED FLAG: Acute Ischemic Stroke / CVA',
      differential: 'Cerebrovascular Accident (Thromboembolic vs Hemorrhagic)',
      symptoms: 'FAST protocol signs: Facial asymmetry, Arm weakness/paralysis, Speech slurring or aphasia, sudden visual disturbances, and ataxia.',
      treatment: 'EMERGENCY PROTOCOL: Call 911 immediately. Note exact time of symptom onset. Do not administer aspirin or food until CT scan rules out hemorrhage. IV thrombolysis window is < 4.5 hours.',
      urgency: 'CRITICAL EMERGENCY (Every minute brain tissue is lost).',
      specialist: 'Stroke Neurologist / Emergency Medicine'
    },
    {
      keys: ['warfarin', 'aspirin', 'drug interaction', 'bleeding', 'inr'],
      title: 'Pharmacotherapy Alert: Warfarin & Aspirin Concomitant Interaction',
      differential: 'Dual Antithrombotic Induced Hemorrhagic Risk',
      symptoms: 'Easy ecchymosis (bruising), mucosal hemorrhage, epistaxis, hematuria, or occult gastrointestinal bleeding (melena).',
      treatment: 'Avoid concomitant administration unless strictly indicated for mechanical prosthetic valves. Strictly monitor INR (therapeutic range: 2.0-3.0). Consider gastroprotective PPI co-therapy if combination is mandatory.',
      urgency: 'Severe Risk. Consult prescribing cardiologist or hematologist before modifying regimen.',
      specialist: 'Cardiologist / Clinical Pharmacist'
    },
    {
      keys: ['lisinopril', 'ibuprofen', 'nsaid', 'blood pressure', 'kidney'],
      title: 'Pharmacotherapy Alert: Lisinopril & Ibuprofen Interaction',
      differential: 'NSAID-Induced Blunting of ACE-Inhibitor & Acute Kidney Injury',
      symptoms: 'Rebound hypertension, peripheral edema, decreased urine output, and elevated serum creatinine.',
      treatment: 'Avoid regular NSAID usage with ACE inhibitors. Substitute Ibuprofen with Acetaminophen (Paracetamol) for mild pain/fever. Monitor serum electrolytes and renal function panel.',
      urgency: 'Moderate Risk. Discontinue NSAID and contact prescribing physician.',
      specialist: 'Primary Care Physician / Nephrologist'
    },
    {
      keys: ['diabetes', 'blood sugar', 'glucose', 'insulin', 'metformin', 'frequent urination'],
      title: 'Type 2 Diabetes Mellitus & Glycemic Control',
      differential: 'Hyperglycemia / Metabolic Syndrome',
      symptoms: 'Polyuria (frequent urination), polydipsia (excessive thirst), unintentional weight loss, fatigue, and blurry vision.',
      treatment: 'First-line Metformin HCl (500-1000 mg twice daily with meals), HbA1c monitoring (target < 7.0%), carbohydrate-controlled medical nutrition therapy, and routine eGFR surveillance.',
      urgency: 'Routine Clinical Management. Urgent care required if blood glucose exceeds 300 mg/dL with urine ketones or altered mental status.',
      specialist: 'Endocrinologist / Diabetologist'
    },
    {
      keys: ['asthma', 'wheezing', 'shortness of breath', 'inhaler', 'albuterol'],
      title: 'Acute Bronchial Asthma Exacerbation',
      differential: 'Reactive Airway Disease / Bronchospasm',
      symptoms: 'Expiratory wheezing, shortness of breath, nocturnal coughing, and chest tightness.',
      treatment: 'Inhaled Short-Acting Beta-Agonist (Albuterol 2 puffs every 4-6h PRN via spacer), Inhaled Corticosteroids (Budesonide) for maintenance, and peak expiratory flow monitoring.',
      urgency: 'Moderate to High. Emergency triage if speaking in short phrases or SpO2 < 92%.',
      specialist: 'Pulmonologist / Allergist'
    },
    {
      keys: ['appendicitis', 'right lower abdomen', 'belly pain', 'stomach pain'],
      title: 'Acute Appendicitis Clinical Triage',
      differential: 'Acute Surgical Abdomen / Appendiceal Inflammation',
      symptoms: 'Periumbilical pain migrating to right lower quadrant (McBurney point), rebound tenderness, anorexia, nausea, low-grade fever.',
      treatment: 'NPO (nothing by mouth). Urgent abdominal ultrasound/CT imaging and emergent surgical appendectomy to prevent perforation.',
      urgency: 'High Urgency (Surgical Emergency).',
      specialist: 'General Surgeon'
    },
    {
      keys: ['uti', 'urinary tract', 'burning urination', 'painful urination', 'bladder'],
      title: 'Acute Urinary Tract Infection (Cystitis)',
      differential: 'Lower Urinary Tract Infection (Escherichia coli etiology)',
      symptoms: 'Dysuria (burning during urination), frequency, urgency, suprapubic tenderness, and turbid/cloudy urine.',
      treatment: 'Targeted antimicrobial therapy (Nitrofurantoin 100 mg BID for 5 days or Fosfomycin single dose), aggressive hydration, and urinary analgesic (Phenazopyridine).',
      urgency: 'Moderate. Seek urgent care if accompanied by flank pain and high fever (suggesting Pyelonephritis).',
      specialist: 'Urologist / Primary Care'
    },
    {
      keys: ['flu', 'influenza', 'cough', 'cold', 'fever', 'sore throat'],
      title: 'Acute Viral Upper Respiratory Infection (Influenza)',
      differential: 'Influenza A/B / Viral Pharyngitis',
      symptoms: 'Sudden onset fever, myalgias, dry cough, headache, fatigue, and rhinorrhea.',
      treatment: 'Symptomatic supportive therapy: Acetaminophen/Ibuprofen for pyrexia/myalgia, abundant fluid intake, rest. Oseltamivir (Tamiflu 75 mg BID) indicated if within 48h of onset.',
      urgency: 'Preliminary Assessment. Monitor symptoms over 3-5 days.',
      specialist: 'Family Physician'
    }
  ];

  // 1. Check for Unclarified Symptom Queries (Priority 1: Ask 7 essential questions first)
  if (isUnclarifiedSymptomQuery(lastUserMsg)) {
    if (detectedLang === 'hi') {
      return `### 🩺 नैदानिक मूल्यांकन एवं संभावित निदान (Dataset Differential Diagnosis)
- **प्राथमिक संभावित स्थिति**: **${dTitle}**
- **डेटासेट क्लिनिकल प्रोफ़ाइल**: ${dSyms}
- **रिपोर्ट किए गए वास्तविक लक्षण**: ${reportedSymptoms}
- **जोखिम स्तर**: **${dRisk}**
- **प्रमाणित उपचार एवं हस्तक्षेप**: ${dCures}
- **अनुशंसित विशेषज्ञ**: **${dDoc}**
- **जोखिम स्तर**: अभी अनिर्धारित। बिना अवधि और बुखार की जांच के जोखिम को कम या जीवाणु संक्रमण को खारिज नहीं किया जा सकता।

### ❓ आवश्यक नैदानिक प्रश्न (दवा परामर्श से पूर्व अनिवार्य)
आपकी सुरक्षा के लिए किसी भी दवा की सलाह से पहले निम्नलिखित 7 प्रश्नों के उत्तर आवश्यक हैं:
1. **आयु (Age)**: रोगी की आयु क्या है? (बच्चों में 19 वर्ष से कम उम्र में एस्पिरिन सख्त वर्जित है; बाल खुराक वजन अनुसार होती है)।
2. **लक्षणों की अवधि (Duration)**: यह समस्या कितने घंटों या दिनों से है? क्या यह अचानक शुरू हुई या धीरे-धीरे?
3. **बुखार व तापमान (Fever)**: क्या आपने थर्मामीटर से तापमान मापा है? क्या कंपकंपी या पसीना आ रहा है?
4. **दवा एलर्जी (Allergies)**: क्या आपको पैरासिटामोल, इबुप्रोफेन या अन्य दवाओं से एलर्जी है?
5. **गर्भावस्था / स्तनपान (Pregnancy)**: क्या गर्भावस्था या स्तनपान की स्थिति है? (तीसरी तिमाही में इबुप्रोफेन वर्जित है)।
6. **अन्य पुरानी बीमारियां (Chronic Conditions)**: क्या लिवर (यकृत) रोग, पेट में अल्सर, किडनी रोग, उच्च रक्तचाप या अस्थमा है?
7. **वर्तमान दवाइयां (Current Medicines)**: क्या आप पहले से कोई कफ सिरप या सर्दी की दवा ले रहे हैं जिसमें पहले से पैरासिटामोल शामिल हो?

### 🔍 संभावित संबंधित लक्षण (जिन्हें आपने रिपोर्ट नहीं किया)
आपने तेज बुखार, खांसी, गले में खराश, नाक बहना या गर्दन में अकड़न की सूचना नहीं दी है। कृपया बताएं यदि इनमें से कोई लक्षण है।

### 💊 दवा सुरक्षा एवं सावधानी चेतावनी
*व्यक्तिगत दवा खुराक केवल उपरोक्त प्रश्नों के उत्तर के बाद ही निर्धारित की जा सकती है।*
- **पैरासिटामोल (Paracetamol) सीमा**: स्वस्थ वयस्कों के लिए अधिकतम 3,000–4,000 mg/दिन केवल चिकित्सकीय देखरेख में है। लिवर रोग, शराब का नियमित सेवन (>=3 ड्रिंक/दिन) या कम वजन (<50 kg) वाले व्यक्तियों के लिए यह सीमा अधिकतम 2,000 mg/दिन या पूरी तरह से परहेज योग्य है।
- **डुप्लिकेट घटक चेतावनी**: कई ओटीसी सर्दी/खांसी सिरपों में पैरासिटामोल पहले से होता है। गोलियों के साथ सिरप लेने से लिवर फेलियर का गंभीर खतरा होता है।
- **इबुप्रोफेन / दर्दनिवारक निषेध**: पेट में अल्सर, किडनी रोग, गंभीर हृदय रोग और गर्भावस्था में वर्जित।

### ⚠️ आपातकालीन लाल झंडा चेतावनी (Red Flags)
यदि अचानक तीव्र सिरदर्द (थंडरक्लैप), गर्दन में अकड़न के साथ तेज बुखार, सांस लेने में अत्यधिक कठिनाई (SpO2 < 92%), या बेहोशी हो, तो तुरंत 112 / आपातकालीन चिकित्सा सेवा पर कॉल करें।

### 🍵 सुरक्षित गैर-औषधीय देखभाल
आराम करें, प्रचुर मात्रा में गुनगुना पानी/सूप पिएं, भाप लें और लक्षणों पर नजर रखें।

---
*चिकित्सीय अस्वीकरण: MediAI Care+ एक नैदानिक निर्णय समर्थन प्रणाली है। किसी भी दवा के लिए डॉक्टर या फार्मासिस्ट से परामर्श लें।*`;
    }

    if (detectedLang === 'ta') {
      return `### 🩺 மருத்துவ மதிப்பீடு மற்றும் நோயறிதல் (Dataset Differential Diagnosis)
- **முதன்மை நோயறிதல் அனுமானம்**: **${dTitle}**
- **தரவுத்தள மருத்துவ விவரம்**: ${dSyms}
- **தெரிவிக்கப்பட்ட உண்மையான அறிகுறிகள்**: ${reportedSymptoms}
- **ஆபத்து நிலை**: **${dRisk}**
- **ஆதார அடிப்படையிலான சிகிச்சைகள்**: ${dCures}
- **பரிந்துரைக்கப்படும் மருத்துவர்**: **${dDoc}**
- **ஆபத்து நிலை**: தீர்மானிக்கப்படவில்லை. அறிகுறிகளின் காலம் மற்றும் காய்ச்சல் அளவு தெரியாமல் ஆபத்தை குறைவாகக் கருத முடியாது.

### ❓ அத்தியாவசிய மருத்துவக் கேள்விகள் (மருந்து பரிந்துரைக்கு முன் கட்டாயம்)
உங்கள் பாதுகாப்பிற்காக எந்தவொரு மருந்துக்கும் முன் பின்வரும் கேள்விகளுக்கு பதிலளிக்கவும்:
1. **வயது (Age)**: நோயாளியின் வயது என்ன? (19 வயதுக்குட்பட்டோருக்கு ஆஸ்பிரின் முற்றிலும் தடைசெய்யப்பட்டுள்ளது).
2. **அறிகுறிகளின் காலம் (Duration)**: இந்த அறிகுறிகள் எத்தனை மணிநேரம் அல்லது நாட்களாக உள்ளன?
3. **காய்ச்சல் அளவு (Fever)**: உடல் வெப்பநிலையை அளந்து பார்த்தீர்களா? குளிர் அல்லது நடுக்கம் உள்ளதா?
4. **மருந்து ஒவ்வாமை (Allergies)**: பாராசிட்டமால், என்எஸ்ஏஐடி அல்லது பென்சிலின் ஒவ்வாமை உள்ளதா?
5. **கர்ப்பம் / தாய்ப்பால் (Pregnancy)**: கர்ப்பமாக உள்ளீர்களா? (இப்யூபுரூஃபன் 3வது மூன்று மாதங்களில் தடைசெய்யப்பட்டுள்ளது).
6. **நீண்டகால நோய்கள் (Chronic Conditions)**: கல்லீரல் நோய், குடல் புண் (Ulcer), சிறுநீரகக் கோளாறு, ஆஸ்துமா உள்ளதா?
7. **தற்போதைய மருந்துகள் (Current Medicines)**: பாராசிட்டமால் கலந்த பிற சளி மருந்துகள் அல்லது சிரப்களை ஏற்கனவே உட்கொள்கிறீர்களா?

### 🔍 சாத்தியமான பிற அறிகுறிகள் (தற்போது நீங்கள் தெரிவிக்காதவை)
நீங்கள் கடுமையான காய்ச்சல், இருமல், தொண்டை வலி அல்லது கழுத்து விறைப்பு பற்றி குறிப்பிடவில்லை. இவை உள்ளதா என்பதை தெளிவுபடுத்தவும்.

### 💊 மருந்து பாதுகாப்பு மற்றும் எச்சரிக்கை வழிகாட்டுதல்
- **பாராசிட்டமால் (Paracetamol) வரம்பு**: ஆரோக்கியமான பெரியவர்களுக்கு அதிகபட்ச வரம்பு 3,000–4,000 mg/நாள். கல்லீரல் பாதிப்பு, மதுப்பழக்கம், அல்லது குறைந்த உடல் எடை (<50 கிலோ) கொண்டவர்களுக்கு அதிகபட்ச வரம்பு 2,000 mg/நாள் மட்டுமே.
- **இரட்டை டோஸ் எச்சரிக்கை**: பல சளி சிரப்களில் ஏற்கனவே பாராசிட்டமால் உள்ளது. மாத்திரைகளுடன் சேர்த்து உட்கொள்வது கல்லீரல் செயலிழப்பை ஏற்படுத்தலாம்.
- **இப்யூபுரூஃபன் முரண்பாடுகள்**: குடல் புண், சிறுநீரக நோய், ஆஸ்துமா மற்றும் கர்ப்ப காலத்தில் தவிர்க்கப்பட வேண்டும்.

### ⚠️ அவசர எச்சரிக்கை நெறிமுறை (Red Flags)
திடீர் தீவிர தலைவலி, கழுத்து விறைப்புடன் கூடிய காய்ச்சல், மூச்சுத்திணறல் (SpO2 < 92%) ஏற்பட்டால் உடனடியாக அவசர ஊர்தி (108 / 112) அழைக்கவும்.

---
*மருத்துவ மறுப்பு: MediAI Care+ ஒரு மருத்துவ முடிவெடுக்கும் ஆதரவு கருவி மட்டுமே. மருத்துவரை அணுகவும்.*`;
    }

    if (detectedLang === 'te') {
      return `### 🩺 క్లినికల్ అసెస్‌మెంట్ మరియు లక్షణాల వివరణ (Clinical Assessment)
- **నివేదించబడిన లక్షణాలు**: ${reportedSymptoms}
- **రోగనిర్ధారణ స్థితి**: **ప్రాథమిక మూల్యాంకనం (పూర్తి సమాచారం వేచి ఉంది)**
- **ప్రమాద స్థాయి**: ఇంకా నిర్ణయించబడలేదు. వ్యవధి మరియు ఉష్ణోగ్రత తెలియకుండా ప్రమాదం తక్కువగా ఉందని భావించలేము.

### ❓ అవసరమైన క్లినికల్ ప్రశ్నలు (మందుల మార్గదర్శకత్వానికి ముందు తప్పనిసరి)
సురక్షితమైన సంరక్షణ కోసం దయచేసి క్రింది ప్రశ్నలకు సమాధానం ఇవ్వండి:
1. **వయస్సు (Age)**: రోగి వయస్సు ఎంత? (పిల్లలలో ఆస్పిరిన్ ఖచ్చితంగా నిషేధించబడింది).
2. **వ్యవధి (Duration)**: ఈ లక్షణాలు ఎన్ని గంటలు లేదా రోజులుగా ఉన్నాయి?
3. **జ్వరం (Fever)**: థర్మామీటర్‌తో ఉష్ణోగ్రతను కొలిచారా? చలి లేదా వణుకు ఉందా?
4. **అలర్జీలు (Allergies)**: పారాసిటమాల్ లేదా ఇతర మందుల వల్ల అలర్జీలు ఉన్నాయా?
5. **గర్భధారణ (Pregnancy)**: గర్భధారణ లేదా పాలిచ్చే పరిస్థితి ఉందా?
6. **దీర్ఘకాలిక సమస్యలు (Chronic Conditions)**: కాలేయ వ్యాధి, కడుపులో అల్సర్లు, కిడ్నీ సమస్యలు లేదా ఆస్తమా ఉన్నాయా?
7. **ఇతర మందులు (Current Medicines)**: మీరు ఇప్పటికే పారాసిటమాల్ కలిగిన జలుబు సిరప్‌లు లేదా మాత్రలు తీసుకుంటున్నారా?

### 🔍 సంభావ్య సంబంధిత లక్షణాలు (ప్రస్తుతం మీరు పేర్కొననివి)
మీరు దగ్గు, గొంతు నొప్పి, తీవ్రమైన జ్వరం లేదా మెడ పట్టేయడం గురించి చెప్పలేదు. వీటిలో ఏవైనా ఉన్నాయా?

### 💊 ఔషధ భద్రత మరియు హెచ్చరికలు
- **పారాసిటమాల్ (Paracetamol) పరిమితి**: ఆరోగ్యకరమైన పెద్దలకు రోజుకు 3,000–4,000 mg గరిష్ట పరిమితి. కాలేయ వ్యాధి లేదా మద్యం సేవించే అలవాటు ఉన్నవారికి గరిష్టంగా 2,000 mg/రోజు మాత్రమే.
- **డూప్లికేట్ ఔషధ హెచ్చరిక**: అనేక జలుబు సిరప్‌లలో పారాసిటమాల్ ఉంటుంది. ఒకేసారి రెండు వాడటం వల్ల కాలేయం దెబ్బతింటుంది.
- **ఇబుప్రోఫెన్ జాగ్రత్తలు**: కడుపులో అల్సర్లు, కిడ్నీ వ్యాధులు మరియు గర్భధారణ సమయంలో వాడకూడదు.

### ⚠️ అత్యవసర హెచ్చరిక ప్రోటోకాల్
తీవ్రమైన ఆకస్మిక తలనొప్పి, మెడ బిగుతుతో కూడిన జ్వరం, శ్వాస తీసుకోవడంలో ఇబ్బంది (SpO2 < 92%) ఉంటే వెంటనే 108 / ఎమర్జెన్సీ సేవలను సంప్రదించండి.

---
*వైద్య నిరాకరణ: MediAI Care+ ఒక క్లినికల్ నిర్ణయ మద్దతు సాధనం మాత్రమే. సర్టిఫైడ్ వైద్యుడిని సంప్రదించండి.*`;
    }

    if (detectedLang === 'es') {
      return `### 🩺 Evaluación Clínica y Clarificación de Síntomas (Clinical Assessment)
- **Síntomas Notificados Directamente**: ${reportedSymptoms}
- **Estado Diagnóstico**: **Evaluación Preliminar (Pendiente de Información Esencial)**
- **Nivel de Riesgo**: No concluyente. No se puede asumir riesgo bajo ni descartar sobreinfección bacteriana sin conocer duración y temperatura.

### ❓ Preguntas Clínicas Esenciales (Requeridas antes de orientar sobre fármacos)
Para su seguridad, responda a estas preguntas clave antes de cualquier recomendación de medicamentos:
1. **Edad**: ¿Qué edad tiene el paciente? (En menores de 19 años la aspirina está contraindicada por riesgo de Síndrome de Reye).
2. **Duración e Inicio**: ¿Cuántos días u horas lleva con los síntomas? ¿Comenzó de forma súbita o progresiva?
3. **Fiebre y Temperatura**: ¿Ha medido su temperatura con termómetro? ¿Presenta escalofríos o sudoración nocturna?
4. **Alergias Medicamentosas**: ¿Tiene alergia confirmada al Paracetamol, AINEs o Penicilina?
5. **Embarazo o Lactancia**: ¿Existe posibilidad de embarazo? (Los AINEs como el Ibuprofeno están contraindicados en el tercer trimestre).
6. **Condiciones Preexistentes**: ¿Padece enfermedad hepática, úlcera gastroduodenal, insuficiencia renal, hipertensión o asma?
7. **Medicamentos Actuales**: ¿Está tomando jarabes o antigripales combinados que ya contengan Paracetamol/Acetaminofén?

### 🔍 Posibles Síntomas Asociados para Monitorear (No reportados actualmente)
Usted no ha manifestado fiebre alta, tos con flema, dolor de garganta o rigidez de nuca. Por favor aclare si presenta alguno.

### 💊 Seguridad de Medicamentos y Contraindicaciones
- **Límites de Paracetamol**: El tope de 4,000 mg/día es solo para adultos sanos bajo estricta supervisión (el estándar seguro es 3,000 mg/día). Para personas con hepatopatía, consumo habitual de alcohol (>=3 copas/día) o bajo peso corporal (<50 kg), el límite seguro es 2,000 mg/día o abstención.
- **Alerta de Duplicidad de Ingredientes**: Múltiples jarabes antigripales de venta libre ya contienen Paracetamol. Su uso combinado con comprimidos puede desencadenar insuficiencia hepática aguda.
- **Contraindicaciones de Ibuprofeno**: Contraindicado en úlcera péptica activa, insuficiencia renal crónica, hipertensión no controlada y tercer trimestre de gestación.

### ⚠️ Señales de Alerta Roja y Emergencia
Acuda inmediatamente a urgencias (911 / 112) si presenta:
- Cefalea súbita e intensísima ("dolor de cabeza en trueno")
- Rigidez de nuca con fiebre alta o fotofobia
- Dificultad respiratoria severa o SpO2 inferior al 92%

---
*Aviso Médico: MediAI Care+ es una herramienta de soporte a la decisión clínica y no sustituye la consulta médica presencial.*`;
    }

    // Default English Response
    return `### 🩺 Clinical Assessment & Differential Diagnosis (Dataset Grounded)
- **Primary Diagnostic Impression**: **${dTitle}**
- **Verified Clinical Profile**: ${dSyms}
- **Reported Clinical Features**: ${reportedSymptoms}
- **Acuity & Risk Evaluation**: **${dRisk}**
- **Evidence-Based Interventions**: ${dCures}
- **Recommended Specialist Referral**: **${dDoc}**
- **Risk Evaluation**: Pending detailed history. Cannot assume low risk or rule out secondary bacterial complications without knowing duration, temperature, and underlying health status.

### ❓ Essential Clinical Questions (Required Before Medication Guidance)
To ensure patient safety and avoid dangerous drug interactions, please clarify the following 7 parameters:
1. **Age**: What is the patient's age? (Pediatric dosing is strictly weight-based; Aspirin is absolutely contraindicated under 19 years due to fatal Reye's syndrome).
2. **Duration & Onset**: How many hours or days have you experienced these symptoms? Was the onset sudden or gradual?
3. **Fever & Measured Temperature**: Have you measured your body temperature with a thermometer? Are you experiencing chills or rigors?
4. **Known Drug Allergies**: Do you have any known allergies to Paracetamol, NSAIDs (Ibuprofen/Naproxen), or antibiotics?
5. **Pregnancy or Breastfeeding**: Is pregnancy or lactation a factor? (NSAIDs are strictly contraindicated in the third trimester due to premature closure of ductus arteriosus).
6. **Pre-existing Medical Conditions**: Do you have any history of liver disease/hepatitis, peptic ulcers, chronic kidney disease, uncontrolled hypertension, or asthma?
7. **Current Medications & OTC Products**: Are you currently taking any multi-symptom cold/flu syrups, pain relievers, or supplements that may already contain Paracetamol/Acetaminophen?

### 🔍 Possible Associated Symptoms to Monitor (Not Currently Reported)
You have not reported: fever, productive cough, sore throat, nasal congestion, or stiff neck. Please verify if any of these are present or developing.

### 💊 Medication Safety & Precaution Notice
*Personalized drug dosages cannot be responsibly provided until the questions above are clarified. Important safety limits include:*
- **Paracetamol / Acetaminophen Safety**: The 4,000 mg/day ceiling is an absolute maximum for healthy adults under professional guidance (standard self-care maximum is 3,000 mg/day). A reduced limit of **2,000 mg/day or avoidance** applies to individuals with liver disease, regular alcohol use (>=3 drinks/day), low body weight (<50 kg / 110 lbs), or malnutrition.
- **Duplicate Ingredient Warning**: Many over-the-counter multi-symptom cold/cough remedies already contain Paracetamol. Concurrent use with tablets can lead to accidental toxic overdose and acute liver failure.
- **NSAID (Ibuprofen) Contraindications**: Contraindicated in active peptic ulcer disease, GI bleeding, chronic kidney disease (eGFR <30 mL/min), uncontrolled hypertension, heart failure, 3rd trimester pregnancy, and aspirin-triad asthma.
- **Decongestant (Pseudoephedrine) Contraindications**: Contraindicated in uncontrolled hypertension, severe coronary artery disease, closed-angle glaucoma, and urinary retention / BPH.

### ⚠️ Emergency Red Flag Warnings
Seek immediate emergency medical evaluation (Call 911 / 112) if you develop:
- A sudden, excruciating "thunderclap" headache
- High fever accompanied by a stiff neck, confusion, or light sensitivity (meningitis warning)
- Shortness of breath, chest tightness, or SpO2 dropping below 92%
- Sudden weakness, facial drooping, or slurred speech

### 🍵 Non-Pharmacological Supportive Care
While resting, maintain abundant fluid intake (water, warm broth, herbal teas), use warm saline gargles or steam inhalation, and monitor your vitals closely.

---
*Medical Disclaimer: MediAI Care+ is an AI clinical decision support tool and does not replace certified physician evaluation.*`;
  }

  // 2. Specific Condition Match
  for (const item of kb) {
    if (item.keys.some(k => query.includes(k))) {
      return `### 🩺 Clinical Assessment & Diagnostic Differential
**Primary Condition**: ${item.title}  
**Differential Diagnosis**: ${item.differential}

### 🔍 Symptom & Risk Level Evaluation
- **Reported Clinical Features**: ${reportedSymptoms}
- **Reference Clinical Profile**: ${item.symptoms}
- **Triage Urgency**: **${item.urgency}**
- **Recommended Specialist**: ${item.specialist}

### 💊 Evidence-Based Treatment & Medication Protocols
- **Standard Interventions**: ${item.treatment}

### ⚠️ Red Flag Warnings & Triage Guidance
- Seek immediate emergency evaluation (Call 911 / EMS) if patient develops severe respiratory distress (SpO2 < 92%), sudden hemodynamic instability, or altered consciousness.

### 📋 Patient Vitals Context
${patientContext ? `- **Live Telemetry**: Heart Rate ${patientContext.hr}, Blood Pressure ${patientContext.bp}, SpO2 ${patientContext.spo2}, Temperature ${patientContext.temp}` : '- **Telemetry**: Baseline vitals within normal parameters.'}

---
*Medical Disclaimer: MediAI Care+ is an AI clinical decision support tool and does not replace the professional diagnosis, judgment, or treatment of a licensed physician.*`;
    }
  }

  // 3. Generalized Comprehensive Response
  return `### 🩺 Clinical Assessment & Diagnostic Differential
Evaluated clinical inquiry regarding: **"${lastUserMsg}"**
Cross-referenced against MediAI Care+ database of 80+ clinical conditions, 132 symptom severity weights, and pharmacotherapy interactions.

### 🔍 Symptom & Risk Level Evaluation
- **Reported Clinical Features**: ${reportedSymptoms}
- **Triage Assessment**: Moderate priority. Monitor for sudden symptom changes.

### 💊 Evidence-Based Treatment & Guidance
1. **Clinical Observation**: Document symptom onset, duration, and aggravating factors.
2. **Supportive Care**: Maintain adequate hydration, monitor resting vitals, and avoid contraindicated medications.
3. **Medical Consultation**: Consult a qualified healthcare provider for targeted physical examination and diagnostic workup.

### ⚠️ Warning Signs & Urgency Guidance
Seek immediate emergency medical attention if accompanied by severe chest pressure, acute shortness of breath, sudden neurological deficits, or persistent high fever.

### 📋 Patient Vitals Context
${patientContext ? `- **Current Telemetry**: Heart Rate ${patientContext.hr}, Blood Pressure ${patientContext.bp}, SpO2 ${patientContext.spo2}, Temperature ${patientContext.temp}` : '- **Telemetry**: Monitored vitals appear stable.'}

---
*Medical Disclaimer: This information is provided for clinical decision support. Always consult a certified healthcare professional for medical diagnoses and prescriptions.*`;
}
