import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rawUserDataCSV = `disease,symptoms,cures,doctor,risk level
flu,"fever,cough,sore throat,runny or stuffy nose,muscle aches,headache,fatigue","over-the-counter medications,rest,fluids","family doctor,urgent care",low (0.1%)
bronchitis,"cough,mucus production,shortness of breath,chest pain","antibiotics,over-the-counter medications,rest,fluids","family doctor,pulmonologist",low (0.5%)
pneumonia,"fever,cough,shortness of breath,chest pain,fatigue","antibiotics,over-the-counter medications,rest,fluids","family doctor,pulmonologist",moderate (1%)
heart attack,"chest pain,shortness of breath,nausea,vomiting,lightheadedness,sweating",emergency medical services,cardiologist,high (20%)
stroke,"sudden weakness,numbness on one side of the body,confusion,difficulty speaking,trouble seeing in one eye,severe headache",emergency medical services,neurologist ,high (15%)
cancer,"lump,unexplained weight loss,fatigue,changes in bowel,bladder habits,persistent cough,indigestion,unexplained bleeding or discharge","surgery,chemotherapy,radiation therapy ",oncologist,varies depending on the type of cancer
diabetes,"increased thirst,frequent urination,unexplained weight loss,fatigue,blurred vision,cuts that are slow to heal","diet,exercise,medication",endocrinologist,high (25%)
alzheimer's disease,"memory loss,confusion,difficulty thinking,changes in personality or behavior","there is no cure for alzheimer's disease,but there are treatments that can help manage the symptoms",neurologist,high (70%)
arthritis,"pain,stiffness,swelling,inflammation in the joints","medication,physical therapy,lifestyle changes",rheumatologist,varies depending on the type of arthritis
adenovirus,"fever,sore throat,cough,conjunctivitis,rash,pink eye","antibiotics,over-the-counter medications,rest,fluids","family doctor,urgent care",low (0.1%)
aflatoxicosis,"vomiting,diarrhea,jaundice,liver damage,death","there is no cure for aflatoxicosis,but treatment may include supportive care,liver transplantation",gastroenterologist,high (70%)
alcoholism,"physical dependence on alcohol,tolerance to alcohol,withdrawal symptoms,impaired judgment,memory problems,liver damage,heart disease,cancer","treatment for alcoholism may include counseling,medication,support groups","psychiatrist,addiction specialist",high (25%)
allergic rhinitis,"runny nose,sneezing,itchy eyes,itchy nose,throat,palate","over-the-counter medications,allergy shots",allergist,low (0.1%)
anemia,"fatigue,shortness of breath,pale skin,lightheadedness,dizziness","iron supplements,medication,blood transfusions","hematologist",varies depending on the type of anemia
anxiety disorder,"excessive worry,fear,anxiety that interfere with daily life","treatment for anxiety disorders may include therapy,medication,combination of both","psychologist,psychiatrist",varies depending on the type of anxiety disorder
appendicitis,"pain in the lower right abdomen,nausea,vomiting,fever",appendectomy,surgeon ,high (20%)
asperger syndrome,"difficulty with social interaction,repetitive behaviors,restricted interests","there is no cure for asperger syndrome,but there are treatments that can help manage the symptoms","psychologist,psychiatrist",varies
asthma,"wheezing,shortness of breath,coughing,chest tightness","treatment for asthma may include medication,lifestyle changes,allergy shots","allergist,pulmonologist",varies
bacterial meningitis,"fever,headache,stiff neck,nausea,vomiting,sensitivity to light",antibiotics,"neurologist,neurosurgeon",high (20%)
bipolar disorder,"extreme mood swings,from mania to depression","treatment for bipolar disorder may include medication,therapy,combination of both","psychologist,psychiatrist",varies
bladder cancer,"blood in the urine,pain or burning when urinating,frequent urination,urgency to urinate,incontinence","surgery,chemotherapy,radiation therapy",urologist,high (70%)
blood clot,"pain,swelling,redness,warmth,tenderness in the affected area,shortness of breath,chest pain,difficulty breathing,coughing up blood","treatment for blood clot may include medication,surgery,combination of both","cardiologist,hematologist",high (20%)
bursitis,"pain,swelling,inflammation in bursa,which is small sac of fluid that cushions joints","medication,rest,ice,compression,elevation","family doctor,orthopedist",varies depending on the bursa
cervical cancer,"abnormal pap test results,abnormal vaginal bleeding,pain during sex","surgery,chemotherapy,radiation therapy",gynecologist,high (70%)
chickenpox,"rash,fever,headache,muscle aches,fatigue","antiviral medication,over-the-counter medications,rest,fluids","family doctor,urgent care",low (0.1%)
chronic obstructive pulmonary disease (copd),"chronic bronchitis,emphysema","treatment for copd may include medication,lifestyle changes,oxygen therapy",pulmonologist,varies depending on the type of copd 
cholesterol,"high levels of cholesterol in the blood","diet,exercise,medication",cardiologist,varies depending on the level of cholesterol
common cold,"runny nose,sneezing,sore throat,cough,congestion","over-the-counter medications,rest,fluids","family doctor,urgent care",low (0.1%)
conjunctivitis,"red,itchy,watery eyes","over-the-counter medications,warm compresses","family doctor,ophthalmologist",low (0.1%)
depression ,"sadness,hopelessness,loss of interest in activities,changes in appetite,sleep,energy levels","treatment for depression may include medication,therapy,combination of both","psychologist,psychiatrist",varies
diarrhea,"loose,watery stools","over-the-counter medications,rest,fluids","family doctor,urgent care",low (0.1%)
eating disorder,"disturbance in eating behavior that can lead to serious health problems","treatment for eating disorders may include therapy,medication,support groups","psychologist,psychiatrist",varies depending on the type of eating disorder
epilepsy,"seizures","medication,surgery","neurologist",varies depending on the type of epilepsy
fever,"elevated body temperature","over-the-counter medications,rest,fluids","family doctor,urgent care",low (0.1%)
food poisoning,"nausea,vomiting,diarrhea,abdominal cramps","over-the-counter medications,rest,fluids","family doctor,urgent care",low (0.1%)
gallstones,"pain in the upper right abdomen,nausea,vomiting,fever",surgery,surgeon ,high (20%)
gonorrhea,"sexually transmitted infection that can cause burning during urination,discharge from the penis or vagina,pain in the lower abdomen",antibiotics,"urologist,gynecologist",high (70%)
heart disease,"chest pain,shortness of breath,fatigue,dizziness,fainting","treatment for heart disease may include medication,lifestyle changes,surgery",cardiologist,high (20%)
hepatitis,"inflammation of the liver","treatment for hepatitis may include medication,rest,lifestyle changes",gastroenterologist,varies depending on the type of hepatitis
herpes,"sexually transmitted infection that can cause blisters on the genitals,mouth,other parts of the body","there is no cure for herpes,but there are treatments that can help manage the symptoms","urologist,gynecologist",high (70%)
irritable bowel syndrome (ibs),"abdominal pain,bloating,constipation,diarrhea","treatment for ibs may include diet,lifestyle changes,medication","family doctor,gastroenterologist",varies
kidney stones ,"pain in the lower back or side,nausea,vomiting,blood in the urine",surgery,urologist,high (20%)
lung cancer,"cough that does not go away,shortness of breath,chest pain,unexplained weight loss,fatigue,blood in the sputum","surgery,chemotherapy,radiation therapy",oncologist,high (70%)
malaria,"fever,chills,sweating,headache,muscle aches,fatigue,vomiting,diarrhea",antimalarial drugs,"family doctor,urgent care",high (20%)
measles,"fever,cough,runny nose,red eyes,sore throat,rash",measles vaccine,"family doctor,urgent care",high (70%)
mononucleosis,"fever,sore throat,fatigue,swollen lymph nodes,rash","there is no cure for mononucleosis,but symptoms can be treated with rest,fluids,over-the-counter medications","family doctor,urgent care",low (0.1%)
rabies,"fever,headache,muscle aches,tingling at the bite site,difficulty swallowing,hydrophobia,aerophobia",rabies vaccine,"doctor,urgent care",high (70%)
salmonella,"fever,diarrhea,abdominal cramps,nausea,vomiting",antibiotics,"family doctor,urgent care ",low (0.1%)
shingles,"painful rash that follows nerve path",antiviral medication,"family doctor,dermatologist ",low (0.1%)
tuberculosis (tb),"cough that does not go away,fever,night sweats,weight loss,fatigue,chest pain",antibiotics,"family doctor,pulmonologist",high (20%)
urinary tract infection (uti),"painful urination,burning,frequent urination,urgency to urinate,blood in the urine",antibiotics,urologist,low (0.1%)
varicose veins,"swollen,twisted veins,usually in the legs","surgery,compression stockings,lifestyle changes",vascular surgeon,varies
warts ,"raised,rough growths on the skin","over-the-counter medications,prescription medications,cryotherapy,laser therapy",dermatologist,low (0.1%)
yeast infection,"itching,burning,discharge from the vagina or penis","over-the-counter medications,prescription medications","urologist,gynecologist",low (0.1%)
acanthamoeba keratitis,"pain,redness,inflammation in the eye","antibiotics,antifungals,surgery",ophthalmologist ,low (0.1%)
acute kidney injury (aki),"decreased kidney function","treatment for the underlying cause,such as dehydration,infection,medication side effect ",nephrologist ,varies
aortic aneurysm,"bulge in the wall of the aorta,the largest artery in the body",surgery,vascular surgeon,high (20%)
colorectal cancer,"change in bowel habits,such as diarrhea,constipation,narrowing of the stool,blood in the stool,abdominal pain,unexplained weight loss","surgery,chemotherapy,radiation therapy",gastroenterologist,high (70%)
dementia,"memory loss,confusion,difficulty thinking,changes in personality or behavior","there is no cure for dementia,but there are treatments that can help manage the symptoms",neurologist ,varies
erectile dysfunction,"difficulty getting,keeping an erection ","medication,lifestyle changes,surgery ",urologist,varies
fibromyalgia,"widespread pain,fatigue,tenderness","medication,lifestyle changes ",rheumatologist ,varies
glaucoma,"increased pressure in the eye that can damage the optic nerve,lead to vision loss","medication,surgery ",ophthalmologist,varies
heart failure,"condition in which the heart cannot pump blood as well as it should","medication,lifestyle changes,surgery",cardiologist,high (20%)
kidney disease,"damage to the kidneys that can lead to kidney failure","treatment for the underlying cause,such as high blood pressure,diabetes,an infection",nephrologist,varies
lung disease,"condition that affects the lungs,can make it difficult to breathe","treatment for the underlying cause,such as asthma,chronic obstructive pulmonary disease (copd),pneumonia",pulmonologist,varies
parkinson's disease,"tremors,slow movement,stiffness,difficulty with balance,coordination ","medication,lifestyle changes",neurologist ,varies
peptic ulcer disease ,"pain in the upper abdomen,indigestion,nausea,vomiting","medication,lifestyle changes,surgery ",gastroenterologist,varies
peripheral artery disease,"pain,numbness,tingling in the arms or legs","medication,lifestyle changes,surgery",vascular surgeon,varies
prostate cancer,"difficulty urinating,blood in the urine,pain in the back or hips,erectile dysfunction","surgery,radiation therapy,hormone therapy",urologist,high (70%)
rheumatoid arthritis,"pain,swelling,stiffness in the joints","medication,lifestyle changes",rheumatologist,varies
stomach cancer,"pain in the upper abdomen,indigestion,nausea,vomiting,weight loss","surgery,chemotherapy,radiation therapy",gastroenterologist ,high (70%)
thyroid cancer,"lump in the neck,hoarseness,fatigue,weight loss,unexplained heat intolerance,sensitivity to cold","surgery,radiation therapy,hormone therapy",endocrinologist,high (70%)
ulcerative colitis,"diarrhea,bloody stool,abdominal pain,weight loss","medication,surgery",gastroenterologist ,varies
atopic dermatitis,"itchy,red,inflamed skin","medication,lifestyle changes",dermatologist,varies
celiac disease,"diarrhea,bloating,weight loss,fatigue,abdominal pain",gluten-free diet,gastroenterologist,varies
chronic kidney disease,"fatigue,shortness of breath,swelling,high blood pressure,changes in urination","treatment for the underlying cause,such as high blood pressure,diabetes,an infection",nephrologist,varies
crohn's disease,"diarrhea,bloody stool,abdominal pain,weight loss","medication,surgery",gastroenterologist,varies
graves' disease,"hyperthyroidism,which is an overactive thyroid","medication,surgery",endocrinologist,varies
hashimoto's thyroiditis ,"hypothyroidism,which is an underactive thyroid ",medication,endocrinologist,varies
lupus,"chronic autoimmune disease that can affect any part of the body","medication,lifestyle changes",rheumatologist ,varies`;

const rawUserWeights = `itching,1
skin_rash,3
nodal_skin_eruptions,4
continuous_sneezing,4
shivering,5
chills,3
joint_pain,3
stomach_pain,5
acidity,3
ulcers_on_tongue,4
muscle_wasting,3
vomiting,5
burning_micturition,6
spotting_urination,6
fatigue,4
weight_gain,3
anxiety,4
cold_hands_and_feets,5
mood_swings,3
weight_loss,3
restlessness,5
lethargy,2
patches_in_throat,6
irregular_sugar_level,5
cough,4
high_fever,7
sunken_eyes,3
breathlessness,4
sweating,3
dehydration,4
indigestion,5
headache,3
yellowish_skin,3
dark_urine,4
nausea,5
loss_of_appetite,4
pain_behind_the_eyes,4
back_pain,3
constipation,4
abdominal_pain,4
diarrhoea,6
mild_fever,5
yellow_urine,4
yellowing_of_eyes,4
acute_liver_failure,6
fluid_overload,6
swelling_of_stomach,7
swelled_lymph_nodes,6
malaise,6
blurred_and_distorted_vision,5
phlegm,5
throat_irritation,4
redness_of_eyes,5
sinus_pressure,4
runny_nose,5
congestion,5
chest_pain,7
weakness_in_limbs,7
fast_heart_rate,5
pain_during_bowel_movements,5
pain_in_anal_region,6
bloody_stool,5
irritation_in_anus,6
neck_pain,5
dizziness,4
cramps,4
bruising,4
obesity,4
swollen_legs,5
swollen_blood_vessels,5
puffy_face_and_eyes,5
enlarged_thyroid,6
brittle_nails,5
swollen_extremeties,5
excessive_hunger,4
extra_marital_contacts,5
drying_and_tingling_lips,4
slurred_speech,4
knee_pain,3
hip_joint_pain,2
muscle_weakness,2
stiff_neck,4
swelling_joints,5
movement_stiffness,5
spinning_movements,6
loss_of_balance,4
unsteadiness,4
weakness_of_one_body_side,4
loss_of_smell,3
bladder_discomfort,4
foul_smell_ofurine,5
continuous_feel_of_urine,6
passage_of_gases,5
internal_itching,4
toxic_look_(typhos),5
depression,3
irritability,2
muscle_pain,2
altered_sensorium,2
red_spots_over_body,3
belly_pain,4
abnormal_menstruation,6
dischromic_patches,6
watering_from_eyes,4
increased_appetite,5
polyuria,4
family_history,5
mucoid_sputum,4
rusty_sputum,4
lack_of_concentration,3
visual_disturbances,3
receiving_blood_transfusion,5
receiving_unsterile_injections,2
coma,7
stomach_bleeding,6
distention_of_abdomen,4
history_of_alcohol_consumption,5
fluid_overload,4
blood_in_sputum,5
prominent_veins_on_calf,6
palpitations,4
painful_walking,2
pus_filled_pimples,2
blackheads,2
scurring,2
skin_peeling,3
silver_like_dusting,2
small_dents_in_nails,2
inflammatory_nails,2
blister,4
red_sore_around_nose,2
yellow_crust_ooze,3
prognosis,5`;

// Parse CSV
function parseDiseaseCSV(csvText) {
  const lines = csvText.trim().split('\n').slice(1);
  const results = [];

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    
    const regex = /(?:^|,)(?:"([^"]*)"|([^",]*))/g;
    const matches = [];
    let match;
    while ((match = regex.exec(line)) !== null) {
      if (match.index === regex.lastIndex) regex.lastIndex++;
      const val = (match[1] !== undefined ? match[1] : match[2]).trim();
      matches.push(val);
    }
    
    if (matches.length >= 5) {
      results.push({
        disease: matches[0],
        symptoms: matches[1],
        cures: matches[2],
        doctor: matches[3],
        riskLevel: matches[4]
      });
    }
  }
  return results;
}

function parseWeightCSV(weightText) {
  const lines = weightText.trim().split('\n').slice(1);
  const weightsObj = {};
  for (const line of lines) {
    const parts = line.trim().split(',');
    if (parts.length === 2) {
      const symptom = parts[0].trim();
      const weight = parseInt(parts[1].trim(), 10);
      if (symptom && !isNaN(weight)) {
        weightsObj[symptom] = weight;
      }
    }
  }
  return weightsObj;
}

const parsedDiseases = parseDiseaseCSV(rawUserDataCSV);
const parsedWeights = parseWeightCSV(rawUserWeights);

// Convert to Clinical Cases
const clinicalCases = parsedDiseases.map((d, index) => {
  const symptomList = d.symptoms.split(',').map(s => s.trim().replace(/_/g, ' ')).filter(Boolean);
  
  // Extract keywords
  const keywords = Array.from(new Set([
    ...d.disease.toLowerCase().split(/\s+/),
    ...symptomList.map(s => s.toLowerCase().split(/\s+/)).flat()
  ])).filter(w => w.length > 2);

  const titleCaseDisease = d.disease.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const models = ['XGBoost (Optimized)', 'Random Forest Classifier', 'Logistic Regression Baseline'];
  const model = models[index % models.length];

  return {
    keywords,
    condition: titleCaseDisease,
    confidence: Math.floor(Math.random() * 8) + 91, // 91% to 98%
    model,
    detectedSymptoms: symptomList.map(s => s.charAt(0).toUpperCase() + s.slice(1)),
    flaggedWarning: `Risk Level: ${d.riskLevel}. Consult specialist: ${d.doctor}.`,
    reasoning: [
      `Symptom presentation (${symptomList.slice(0, 3).join(', ')}) correlates strongly with diagnostic profiles for ${titleCaseDisease}.`,
      `Evaluated risk score: ${d.riskLevel}. Primary clinical pathway directs consultation with a ${d.doctor}.`,
      `Validated using clinical weight matrices and multi-feature decision trees.`
    ],
    recommendedActions: [
      `Clinical Interventions & Cures: ${d.cures || 'Supportive clinical care and diagnostic monitoring.'}`,
      `Referral Specialist: ${d.doctor}`,
      `Monitor for acute escalation of primary symptoms.`
    ],
    doctorSpecialist: d.doctor,
    riskLevel: d.riskLevel
  };
});

const generatedCode = `// Combined Datasets (User Provided + Searched Medical Reference Standards)

export const USER_DISEASE_DATASET = ${JSON.stringify(parsedDiseases, null, 2)};

export const SYMPTOM_WEIGHT_MAP = ${JSON.stringify(parsedWeights, null, 2)};

export const PRESET_SYMPTOMS = [
  'Fever', 'Dry Cough', 'Myalgia', 'Fatigue', 'Dyspnea', 
  'Headache', 'Chest Pain', 'Joint Pain', 'Stomach Pain', 
  'Vomiting', 'Dizziness', 'Skin Rash', 'Loss of Smell', 
  'Burning Urination', 'Stiff Neck', 'Abdominal Pain', 'Sore Throat'
];

export const CLINICAL_CASES = ${JSON.stringify(clinicalCases, null, 2)};

export const DRUG_DATABASE = [
  {
    id: 'amoxicillin',
    name: 'Amoxicillin',
    category: 'Penicillin Antibiotic',
    indications: 'Bacterial infections of ear, nose, throat, skin, and urinary tract.',
    dosage: '500 mg every 8 hours or 875 mg every 12 hours orally.',
    mechanism: 'Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins.',
    sideEffects: ['Nausea', 'Rash', 'Diarrhea', 'Vomiting', 'Allergic Reactions'],
    contraindications: 'History of severe hypersensitivity to penicillins or cephalosporins.',
    pregnancyCategory: 'Category B'
  },
  {
    id: 'metformin',
    name: 'Metformin HCl',
    category: 'Biguanide Antidiabetic',
    indications: 'Type 2 Diabetes Mellitus glycemic control.',
    dosage: '500 mg to 1000 mg twice daily with meals (Max: 2550 mg/day).',
    mechanism: 'Decreases hepatic glucose production and increases peripheral insulin sensitivity.',
    sideEffects: ['Gastrointestinal upset', 'Flatulence', 'Lactic acidosis (rare)', 'Vitamin B12 deficiency'],
    contraindications: 'Severe renal impairment (eGFR < 30 mL/min/1.73m²), acute metabolic acidosis.',
    pregnancyCategory: 'Category B'
  },
  {
    id: 'lisinopril',
    name: 'Lisinopril',
    category: 'ACE Inhibitor',
    indications: 'Hypertension, Heart Failure, Post-Myocardial Infarction.',
    dosage: '10 mg to 40 mg once daily.',
    mechanism: 'Inhibits Angiotensin-Converting Enzyme, reducing angiotensin II and aldosterone production.',
    sideEffects: ['Persistent dry cough', 'Dizziness', 'Hyperkalemia', 'Angioedema (rare)'],
    contraindications: 'History of ACE inhibitor-induced angioedema, pregnancy.',
    pregnancyCategory: 'Category D (Boxed Warning)'
  },
  {
    id: 'atorvastatin',
    name: 'Atorvastatin Calcium',
    category: 'HMG-CoA Reductase Inhibitor (Statin)',
    indications: 'Hypercholesterolemia, Primary and secondary cardiovascular risk reduction.',
    dosage: '10 mg to 80 mg once daily at bedtime.',
    mechanism: 'Reversibly inhibits HMG-CoA reductase, reducing hepatic cholesterol synthesis.',
    sideEffects: ['Myalgia', 'Elevated liver enzymes', 'Arthralgia', 'Dyspepsia'],
    contraindications: 'Active liver disease, unexplained persistent elevation of hepatic transaminases.',
    pregnancyCategory: 'Category X'
  },
  {
    id: 'ibuprofen',
    name: 'Ibuprofen',
    category: 'NSAID (Nonsteroidal Anti-inflammatory Drug)',
    indications: 'Mild to moderate pain, inflammation, fever reduction.',
    dosage: '200 mg to 400 mg every 4-6 hours PRN (Max: 1200 mg OTC / 3200 mg prescription).',
    mechanism: 'Inhibits Cyclooxygenase-1 and Cyclooxygenase-2 enzymes, suppressing prostaglandin synthesis.',
    sideEffects: ['Epigastric distress', 'Peptic ulceration', 'Renal impairment', 'Elevated blood pressure'],
    contraindications: 'Active peptic ulcer, severe renal failure, post-CABG surgery pain.',
    pregnancyCategory: 'Category D (in 3rd trimester)'
  },
  {
    id: 'warfarin',
    name: 'Warfarin Sodium',
    category: 'Vitamin K Antagonist Anticoagulant',
    indications: 'Prophylaxis and treatment of venous thrombosis, pulmonary embolism, atrial fibrillation.',
    dosage: 'Adjusted individually based on target INR (typically 2.0 - 3.0).',
    mechanism: 'Inhibits Vitamin K epoxide reductase (VKORC1), blocking synthesis of factors II, VII, IX, X.',
    sideEffects: ['Hemorrhage', 'Ecchymosis', 'Skin necrosis', 'Purple toe syndrome'],
    contraindications: 'Uncontrolled bleeding, severe hypertension, pregnancy.',
    pregnancyCategory: 'Category X (Boxed Warning)'
  },
  {
    id: 'aspirin',
    name: 'Aspirin (Acetylsalicylic Acid)',
    category: 'Antiplatelet / Salicylate',
    indications: 'Ischemic stroke prophylaxis, acute coronary syndrome, analgesic.',
    dosage: '81 mg daily (cardioprotective) or 325 mg during acute events.',
    mechanism: 'Irreversibly acetylates COX-1, preventing thromboxane A2 formation in platelets.',
    sideEffects: ['GI bleeding', 'Tinnitus (high dose)', 'Gastritis', 'Bronchospasm'],
    contraindications: 'Reye syndrome in children/adolescents, bleeding disorders.',
    pregnancyCategory: 'Category D'
  },
  {
    id: 'omeprazole',
    name: 'Omeprazole',
    category: 'Proton Pump Inhibitor (PPI)',
    indications: 'GERD, peptic ulcer disease, H. pylori eradication.',
    dosage: '20 mg to 40 mg once daily before breakfast.',
    mechanism: 'Irreversibly inhibits H+/K+-ATPase proton pump in gastric parietal cells.',
    sideEffects: ['Headache', 'Abdominal pain', 'C. difficile risk', 'Magnesium depletion'],
    contraindications: 'Known hypersensitivity to substituted benzimidazoles.',
    pregnancyCategory: 'Category C'
  },
  {
    id: 'azithromycin',
    name: 'Azithromycin',
    category: 'Macrolide Antibiotic',
    indications: 'Respiratory tract infections, community-acquired pneumonia, skin infections.',
    dosage: '500 mg on day 1, then 250 mg daily for days 2-5.',
    mechanism: 'Binds to the 50S ribosomal subunit of susceptible microorganisms, interfering with protein synthesis.',
    sideEffects: ['Diarrhea', 'Nausea', 'Abdominal pain', 'QT prolongation'],
    contraindications: 'History of cholestatic jaundice or hepatic dysfunction associated with prior azithromycin use.',
    pregnancyCategory: 'Category B'
  },
  {
    id: 'amlodipine',
    name: 'Amlodipine Besylate',
    category: 'Dihydropyridine Calcium Channel Blocker',
    indications: 'Hypertension, Chronic stable angina, Vasospastic angina.',
    dosage: '5 mg to 10 mg once daily.',
    mechanism: 'Inhibits transmembrane influx of calcium ions into vascular smooth muscle and cardiac muscle.',
    sideEffects: ['Peripheral edema', 'Dizziness', 'Flushing', 'Palpitations'],
    contraindications: 'Severe hypotension, cardiogenic shock.',
    pregnancyCategory: 'Category C'
  },
  {
    id: 'levothyroxine',
    name: 'Levothyroxine Sodium',
    category: 'Synthetic Thyroid Hormone (T4)',
    indications: 'Hypothyroidism, Pituitary TSH suppression in thyroid cancer.',
    dosage: '1.6 mcg/kg/day orally (typically 25 mcg to 150 mcg once daily before breakfast).',
    mechanism: 'Synthetic T4 converted to active T3 in peripheral tissues, regulating metabolic rate.',
    sideEffects: ['Palpitations', 'Tachycardia', 'Weight loss', 'Heat intolerance', 'Insomnia'],
    contraindications: 'Untreated subclinical or overt thyrotoxicosis, uncorrected adrenal insufficiency.',
    pregnancyCategory: 'Category A'
  },
  {
    id: 'oseltamivir',
    name: 'Oseltamivir Phosphate (Tamiflu)',
    category: 'Neuraminidase Inhibitor Antiviral',
    indications: 'Treatment and prophylaxis of acute uncomplicated Influenza A and B.',
    dosage: '75 mg twice daily for 5 days (treatment) or 75 mg once daily for 10 days (prophylaxis).',
    mechanism: 'Inhibits influenza virus neuraminidase, preventing new viral release from infected host cells.',
    sideEffects: ['Nausea', 'Vomiting', 'Headache', 'Neuropsychiatric events (rare)'],
    contraindications: 'Known hypersensitivity to oseltamivir phosphate.',
    pregnancyCategory: 'Category C'
  }
];

export const DRUG_INTERACTION_MATRIX = [
  {
    drugs: ['warfarin', 'aspirin'],
    severity: 'Severe Risk',
    title: 'Major Hemorrhagic Risk',
    description: 'Synergistic antiplatelet and anticoagulant effect dramatically increases risk of major gastrointestinal and intracranial bleeding.',
    action: 'Avoid concomitant combination unless strictly indicated for mechanical heart valves. Monitor INR closely.'
  },
  {
    drugs: ['lisinopril', 'ibuprofen'],
    severity: 'Moderate Risk',
    title: 'Renal Function Impairment & Antihypertensive Blunting',
    description: 'NSAIDs inhibit renal prostaglandins, reducing lisinopril antihypertensive efficacy and elevating acute kidney injury risk.',
    action: 'Monitor blood pressure and serum creatinine/BUN levels. Recommend paracetamol as alternative analgesic.'
  },
  {
    drugs: ['atorvastatin', 'amoxicillin'],
    severity: 'Low Risk',
    title: 'Minor Clinical Interaction',
    description: 'No significant pharmacokinetic interaction observed. Safe for concurrent administration under standard monitoring.',
    action: 'Standard clinical administration.'
  },
  {
    drugs: ['metformin', 'ibuprofen'],
    severity: 'Moderate Risk',
    title: 'Increased Risk of Lactic Acidosis',
    description: 'NSAID-induced renal impairment can decrease renal clearance of metformin, accumulating drug levels.',
    action: 'Ensure baseline eGFR > 45 mL/min before co-prescribing.'
  },
  {
    drugs: ['azithromycin', 'amlodipine'],
    severity: 'Low Risk',
    title: 'Minor Interaction',
    description: 'Minimal impact under standard dosing regimens. Monitor QT interval if co-administered with additional QT-prolonging agents.',
    action: 'Routine monitoring.'
  }
];

export const OUTBREAK_DATA = [
  {
    region: 'North America',
    code: 'NA',
    pathogen: 'Influenza A (H3N2)',
    status: 'High Alert',
    riskLevel: 'HIGH',
    alertColor: 'bg-error-container text-on-error-container border-error/30',
    casesLast30Days: 142500,
    trend: '+18.4% vs last month',
    hotspots: ['Chicago, IL', 'New York, NY', 'Toronto, ON'],
    protocol: 'Promote annual quadrivalent influenza vaccination. Mandate isolation for symptomatic clinical staff.'
  },
  {
    region: 'Europe',
    code: 'EU',
    pathogen: 'Respiratory Syncytial Virus (RSV)',
    status: 'Moderate Alert',
    riskLevel: 'MODERATE',
    alertColor: 'bg-secondary-container text-on-secondary-container border-secondary/30',
    casesLast30Days: 48900,
    trend: '-4.2% vs last month',
    hotspots: ['London, UK', 'Berlin, DE', 'Paris, FR'],
    protocol: 'Surveillance in pediatric and geriatric wards. Administer Beyfortus (nirsevimab) to eligible infants.'
  },
  {
    region: 'Asia-Pacific',
    code: 'APAC',
    pathogen: 'Dengue Virus Serotype 2',
    status: 'High Alert',
    riskLevel: 'HIGH',
    alertColor: 'bg-error-container text-on-error-container border-error/30',
    casesLast30Days: 215000,
    trend: '+32.1% vs last month',
    hotspots: ['Manila, PH', 'Bangkok, TH', 'Singapore, SG'],
    protocol: 'Vector control spraying, standing water management, and platelet monitoring protocols.'
  },
  {
    region: 'Global',
    code: 'GL',
    pathogen: 'COVID-19 Subvariant JN.1',
    status: 'Monitored',
    riskLevel: 'MODERATE',
    alertColor: 'bg-secondary-container text-on-secondary-container border-secondary/30',
    casesLast30Days: 610000,
    trend: '+5.6% vs last month',
    hotspots: ['Global Transportation Hubs'],
    protocol: 'Updated mRNA booster administration, wastewater genomic surveillance.'
  }
];

export const MODEL_PERFORMANCE_METRICS = {
  xgboost: {
    name: 'XGBoost Classifier (Production Lead)',
    type: 'Gradient Boosted Decision Trees',
    accuracy: 98.4,
    f1Score: 0.97,
    sensitivity: 98.1,
    specificity: 98.9,
    latencyMs: 24,
    confusionMatrix: [
      [1450, 16],
      [12, 1522]
    ],
    rocPoints: [
      [0, 0], [0.01, 0.85], [0.02, 0.95], [0.05, 0.98], [0.1, 0.99], [1, 1]
    ],
    features: ['Symptom Weight Vector (130+ Features)', 'Duration Matrix', 'Vitals Anomaly Score', 'Epidemiological Index'],
    datasetCount: '450,000 Verified Clinical Records'
  },
  random_forest: {
    name: 'Random Forest Ensemble',
    type: 'Bagging Decision Trees (500 Estimators)',
    accuracy: 96.8,
    f1Score: 0.95,
    sensitivity: 96.1,
    specificity: 97.4,
    latencyMs: 38,
    confusionMatrix: [
      [1420, 46],
      [42, 1492]
    ],
    rocPoints: [
      [0, 0], [0.03, 0.80], [0.05, 0.91], [0.08, 0.96], [0.15, 0.98], [1, 1]
    ],
    features: ['Categorical Symptom Presence', 'Symptom Weight Matrix', 'Age Demographic Weight'],
    datasetCount: '450,000 Verified Clinical Records'
  },
  logistic_regression: {
    name: 'Logistic Regression Baseline',
    type: 'L2-Regularized Linear Classifier',
    accuracy: 92.4,
    f1Score: 0.90,
    sensitivity: 91.2,
    specificity: 93.6,
    latencyMs: 12,
    confusionMatrix: [
      [1350, 116],
      [112, 1422]
    ],
    rocPoints: [
      [0, 0], [0.05, 0.70], [0.10, 0.85], [0.18, 0.92], [0.30, 0.95], [1, 1]
    ],
    features: ['Linear Symptom One-Hot Vector', 'Symptom Severity Weight'],
    datasetCount: '450,000 Verified Clinical Records'
  }
};
`;

const outputPath = path.resolve(__dirname, 'mockData.js');
fs.writeFileSync(outputPath, generatedCode, 'utf8');
console.log(`Successfully wrote combined dataset to ${outputPath}`);
