// Combined Datasets (User Provided + Searched Medical Reference Standards)

export const USER_DISEASE_DATASET = [
  {
    "disease": "dengue",
    "symptoms": "high fever,severe headache,retro-orbital pain,joint pain,muscle pain,rash,fatigue",
    "cures": "oral fluid resuscitation,paracetamol for fever,avoid aspirin and NSAIDs due to bleeding risk,monitor platelet count",
    "doctor": "infectious disease specialist,general physician",
    "riskLevel": "high (active vector surge)"
  },
  {
    "disease": "typhoid fever",
    "symptoms": "step-ladder high fever,headache,abdominal pain,constipation or diarrhea,rose spots,weakness",
    "cures": "targeted antibiotic therapy (Azithromycin or Ceftriaxone),adequate hydration,sanitary precautions",
    "doctor": "general physician,infectious disease",
    "riskLevel": "moderate to high"
  },
  {
    "disease": "covid-19",
    "symptoms": "fever,cough,fatigue,loss of taste or smell,sore throat,shortness of breath",
    "cures": "isolation,hydration,rest,antipyretics,Paxlovid for high-risk patients,supplemental oxygen if SpO2 < 92%",
    "doctor": "pulmonologist,general physician",
    "riskLevel": "moderate to high"
  },
  {
    "disease": "flu",
    "symptoms": "fever,cough,sore throat,runny or stuffy nose,muscle aches,headache,fatigue",
    "cures": "over-the-counter medications,rest,fluids",
    "doctor": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "bronchitis",
    "symptoms": "cough,mucus production,shortness of breath,chest pain",
    "cures": "antibiotics,over-the-counter medications,rest,fluids",
    "doctor": "family doctor,pulmonologist",
    "riskLevel": "low (0.5%)"
  },
  {
    "disease": "pneumonia",
    "symptoms": "fever,cough,shortness of breath,chest pain,fatigue",
    "cures": "antibiotics,over-the-counter medications,rest,fluids",
    "doctor": "family doctor,pulmonologist",
    "riskLevel": "moderate (1%)"
  },
  {
    "disease": "heart attack",
    "symptoms": "chest pain,shortness of breath,nausea,vomiting,lightheadedness,sweating",
    "cures": "emergency medical services",
    "doctor": "cardiologist",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "stroke",
    "symptoms": "sudden weakness,numbness on one side of the body,confusion,difficulty speaking,trouble seeing in one eye,severe headache",
    "cures": "emergency medical services",
    "doctor": "neurologist",
    "riskLevel": "high (15%)"
  },
  {
    "disease": "cancer",
    "symptoms": "lump,unexplained weight loss,fatigue,changes in bowel,bladder habits,persistent cough,indigestion,unexplained bleeding or discharge",
    "cures": "surgery,chemotherapy,radiation therapy",
    "doctor": "oncologist",
    "riskLevel": "varies depending on the type of cancer"
  },
  {
    "disease": "diabetes",
    "symptoms": "increased thirst,frequent urination,unexplained weight loss,fatigue,blurred vision,cuts that are slow to heal",
    "cures": "diet,exercise,medication",
    "doctor": "endocrinologist",
    "riskLevel": "high (25%)"
  },
  {
    "disease": "alzheimer's disease",
    "symptoms": "memory loss,confusion,difficulty thinking,changes in personality or behavior",
    "cures": "there is no cure for alzheimer's disease,but there are treatments that can help manage the symptoms",
    "doctor": "neurologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "arthritis",
    "symptoms": "pain,stiffness,swelling,inflammation in the joints",
    "cures": "medication,physical therapy,lifestyle changes",
    "doctor": "rheumatologist",
    "riskLevel": "varies depending on the type of arthritis"
  },
  {
    "disease": "adenovirus",
    "symptoms": "fever,sore throat,cough,conjunctivitis,rash,pink eye",
    "cures": "antibiotics,over-the-counter medications,rest,fluids",
    "doctor": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "aflatoxicosis",
    "symptoms": "vomiting,diarrhea,jaundice,liver damage,death",
    "cures": "there is no cure for aflatoxicosis,but treatment may include supportive care,liver transplantation",
    "doctor": "gastroenterologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "alcoholism",
    "symptoms": "physical dependence on alcohol,tolerance to alcohol,withdrawal symptoms,impaired judgment,memory problems,liver damage,heart disease,cancer",
    "cures": "treatment for alcoholism may include counseling,medication,support groups",
    "doctor": "psychiatrist,addiction specialist",
    "riskLevel": "high (25%)"
  },
  {
    "disease": "allergic rhinitis",
    "symptoms": "runny nose,sneezing,itchy eyes,itchy nose,throat,palate",
    "cures": "over-the-counter medications,allergy shots",
    "doctor": "allergist",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "anemia",
    "symptoms": "fatigue,shortness of breath,pale skin,lightheadedness,dizziness",
    "cures": "iron supplements,medication,blood transfusions",
    "doctor": "hematologist",
    "riskLevel": "varies depending on the type of anemia"
  },
  {
    "disease": "anxiety disorder",
    "symptoms": "excessive worry,fear,anxiety that interfere with daily life",
    "cures": "treatment for anxiety disorders may include therapy,medication,combination of both",
    "doctor": "psychologist,psychiatrist",
    "riskLevel": "varies depending on the type of anxiety disorder"
  },
  {
    "disease": "appendicitis",
    "symptoms": "pain in the lower right abdomen,nausea,vomiting,fever",
    "cures": "appendectomy",
    "doctor": "surgeon",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "asperger syndrome",
    "symptoms": "difficulty with social interaction,repetitive behaviors,restricted interests",
    "cures": "there is no cure for asperger syndrome,but there are treatments that can help manage the symptoms",
    "doctor": "psychologist,psychiatrist",
    "riskLevel": "varies"
  },
  {
    "disease": "asthma",
    "symptoms": "wheezing,shortness of breath,coughing,chest tightness",
    "cures": "treatment for asthma may include medication,lifestyle changes,allergy shots",
    "doctor": "allergist,pulmonologist",
    "riskLevel": "varies"
  },
  {
    "disease": "bacterial meningitis",
    "symptoms": "fever,headache,stiff neck,nausea,vomiting,sensitivity to light",
    "cures": "antibiotics",
    "doctor": "neurologist,neurosurgeon",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "bipolar disorder",
    "symptoms": "extreme mood swings,from mania to depression",
    "cures": "treatment for bipolar disorder may include medication,therapy,combination of both",
    "doctor": "psychologist,psychiatrist",
    "riskLevel": "varies"
  },
  {
    "disease": "bladder cancer",
    "symptoms": "blood in the urine,pain or burning when urinating,frequent urination,urgency to urinate,incontinence",
    "cures": "surgery,chemotherapy,radiation therapy",
    "doctor": "urologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "blood clot",
    "symptoms": "pain,swelling,redness,warmth,tenderness in the affected area,shortness of breath,chest pain,difficulty breathing,coughing up blood",
    "cures": "treatment for blood clot may include medication,surgery,combination of both",
    "doctor": "cardiologist,hematologist",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "bursitis",
    "symptoms": "pain,swelling,inflammation in bursa,which is small sac of fluid that cushions joints",
    "cures": "medication,rest,ice,compression,elevation",
    "doctor": "family doctor,orthopedist",
    "riskLevel": "varies depending on the bursa"
  },
  {
    "disease": "cervical cancer",
    "symptoms": "abnormal pap test results,abnormal vaginal bleeding,pain during sex",
    "cures": "surgery,chemotherapy,radiation therapy",
    "doctor": "gynecologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "chickenpox",
    "symptoms": "rash,fever,headache,muscle aches,fatigue",
    "cures": "antiviral medication,over-the-counter medications,rest,fluids",
    "doctor": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "chronic obstructive pulmonary disease (copd)",
    "symptoms": "chronic bronchitis,emphysema",
    "cures": "treatment for copd may include medication,lifestyle changes,oxygen therapy",
    "doctor": "pulmonologist",
    "riskLevel": "varies depending on the type of copd"
  },
  {
    "disease": "cholesterol",
    "symptoms": "high levels of cholesterol in the blood",
    "cures": "diet,exercise,medication",
    "doctor": "cardiologist",
    "riskLevel": "varies depending on the level of cholesterol"
  },
  {
    "disease": "common cold",
    "symptoms": "runny nose,sneezing,sore throat,cough,congestion",
    "cures": "over-the-counter medications,rest,fluids",
    "doctor": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "conjunctivitis",
    "symptoms": "red,itchy,watery eyes",
    "cures": "over-the-counter medications,warm compresses",
    "doctor": "family doctor,ophthalmologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "depression",
    "symptoms": "sadness,hopelessness,loss of interest in activities,changes in appetite,sleep,energy levels",
    "cures": "treatment for depression may include medication,therapy,combination of both",
    "doctor": "psychologist,psychiatrist",
    "riskLevel": "varies"
  },
  {
    "disease": "diarrhea",
    "symptoms": "loose,watery stools",
    "cures": "over-the-counter medications,rest,fluids",
    "doctor": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "eating disorder",
    "symptoms": "disturbance in eating behavior that can lead to serious health problems",
    "cures": "treatment for eating disorders may include therapy,medication,support groups",
    "doctor": "psychologist,psychiatrist",
    "riskLevel": "varies depending on the type of eating disorder"
  },
  {
    "disease": "epilepsy",
    "symptoms": "seizures",
    "cures": "medication,surgery",
    "doctor": "neurologist",
    "riskLevel": "varies depending on the type of epilepsy"
  },
  {
    "disease": "fever",
    "symptoms": "elevated body temperature",
    "cures": "over-the-counter medications,rest,fluids",
    "doctor": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "food poisoning",
    "symptoms": "nausea,vomiting,diarrhea,abdominal cramps",
    "cures": "over-the-counter medications,rest,fluids",
    "doctor": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "gallstones",
    "symptoms": "pain in the upper right abdomen,nausea,vomiting,fever",
    "cures": "surgery",
    "doctor": "surgeon",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "gonorrhea",
    "symptoms": "sexually transmitted infection that can cause burning during urination,discharge from the penis or vagina,pain in the lower abdomen",
    "cures": "antibiotics",
    "doctor": "urologist,gynecologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "heart disease",
    "symptoms": "chest pain,shortness of breath,fatigue,dizziness,fainting",
    "cures": "treatment for heart disease may include medication,lifestyle changes,surgery",
    "doctor": "cardiologist",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "hepatitis",
    "symptoms": "inflammation of the liver",
    "cures": "treatment for hepatitis may include medication,rest,lifestyle changes",
    "doctor": "gastroenterologist",
    "riskLevel": "varies depending on the type of hepatitis"
  },
  {
    "disease": "herpes",
    "symptoms": "sexually transmitted infection that can cause blisters on the genitals,mouth,other parts of the body",
    "cures": "there is no cure for herpes,but there are treatments that can help manage the symptoms",
    "doctor": "urologist,gynecologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "irritable bowel syndrome (ibs)",
    "symptoms": "abdominal pain,bloating,constipation,diarrhea",
    "cures": "treatment for ibs may include diet,lifestyle changes,medication",
    "doctor": "family doctor,gastroenterologist",
    "riskLevel": "varies"
  },
  {
    "disease": "kidney stones",
    "symptoms": "pain in the lower back or side,nausea,vomiting,blood in the urine",
    "cures": "surgery",
    "doctor": "urologist",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "lung cancer",
    "symptoms": "cough that does not go away,shortness of breath,chest pain,unexplained weight loss,fatigue,blood in the sputum",
    "cures": "surgery,chemotherapy,radiation therapy",
    "doctor": "oncologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "malaria",
    "symptoms": "fever,chills,sweating,headache,muscle aches,fatigue,vomiting,diarrhea",
    "cures": "antimalarial drugs",
    "doctor": "family doctor,urgent care",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "measles",
    "symptoms": "fever,cough,runny nose,red eyes,sore throat,rash",
    "cures": "measles vaccine",
    "doctor": "family doctor,urgent care",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "mononucleosis",
    "symptoms": "fever,sore throat,fatigue,swollen lymph nodes,rash",
    "cures": "there is no cure for mononucleosis,but symptoms can be treated with rest,fluids,over-the-counter medications",
    "doctor": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "rabies",
    "symptoms": "fever,headache,muscle aches,tingling at the bite site,difficulty swallowing,hydrophobia,aerophobia",
    "cures": "rabies vaccine",
    "doctor": "doctor,urgent care",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "salmonella",
    "symptoms": "fever,diarrhea,abdominal cramps,nausea,vomiting",
    "cures": "antibiotics",
    "doctor": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "shingles",
    "symptoms": "painful rash that follows nerve path",
    "cures": "antiviral medication",
    "doctor": "family doctor,dermatologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "tuberculosis (tb)",
    "symptoms": "cough that does not go away,fever,night sweats,weight loss,fatigue,chest pain",
    "cures": "antibiotics",
    "doctor": "family doctor,pulmonologist",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "urinary tract infection (uti)",
    "symptoms": "painful urination,burning,frequent urination,urgency to urinate,blood in the urine",
    "cures": "antibiotics",
    "doctor": "urologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "varicose veins",
    "symptoms": "swollen,twisted veins,usually in the legs",
    "cures": "surgery,compression stockings,lifestyle changes",
    "doctor": "vascular surgeon",
    "riskLevel": "varies"
  },
  {
    "disease": "warts",
    "symptoms": "raised,rough growths on the skin",
    "cures": "over-the-counter medications,prescription medications,cryotherapy,laser therapy",
    "doctor": "dermatologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "yeast infection",
    "symptoms": "itching,burning,discharge from the vagina or penis",
    "cures": "over-the-counter medications,prescription medications",
    "doctor": "urologist,gynecologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "acanthamoeba keratitis",
    "symptoms": "pain,redness,inflammation in the eye",
    "cures": "antibiotics,antifungals,surgery",
    "doctor": "ophthalmologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "disease": "acute kidney injury (aki)",
    "symptoms": "decreased kidney function",
    "cures": "treatment for the underlying cause,such as dehydration,infection,medication side effect",
    "doctor": "nephrologist",
    "riskLevel": "varies"
  },
  {
    "disease": "aortic aneurysm",
    "symptoms": "bulge in the wall of the aorta,the largest artery in the body",
    "cures": "surgery",
    "doctor": "vascular surgeon",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "colorectal cancer",
    "symptoms": "change in bowel habits,such as diarrhea,constipation,narrowing of the stool,blood in the stool,abdominal pain,unexplained weight loss",
    "cures": "surgery,chemotherapy,radiation therapy",
    "doctor": "gastroenterologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "dementia",
    "symptoms": "memory loss,confusion,difficulty thinking,changes in personality or behavior",
    "cures": "there is no cure for dementia,but there are treatments that can help manage the symptoms",
    "doctor": "neurologist",
    "riskLevel": "varies"
  },
  {
    "disease": "erectile dysfunction",
    "symptoms": "difficulty getting,keeping an erection",
    "cures": "medication,lifestyle changes,surgery",
    "doctor": "urologist",
    "riskLevel": "varies"
  },
  {
    "disease": "fibromyalgia",
    "symptoms": "widespread pain,fatigue,tenderness",
    "cures": "medication,lifestyle changes",
    "doctor": "rheumatologist",
    "riskLevel": "varies"
  },
  {
    "disease": "glaucoma",
    "symptoms": "increased pressure in the eye that can damage the optic nerve,lead to vision loss",
    "cures": "medication,surgery",
    "doctor": "ophthalmologist",
    "riskLevel": "varies"
  },
  {
    "disease": "heart failure",
    "symptoms": "condition in which the heart cannot pump blood as well as it should",
    "cures": "medication,lifestyle changes,surgery",
    "doctor": "cardiologist",
    "riskLevel": "high (20%)"
  },
  {
    "disease": "kidney disease",
    "symptoms": "damage to the kidneys that can lead to kidney failure",
    "cures": "treatment for the underlying cause,such as high blood pressure,diabetes,an infection",
    "doctor": "nephrologist",
    "riskLevel": "varies"
  },
  {
    "disease": "lung disease",
    "symptoms": "condition that affects the lungs,can make it difficult to breathe",
    "cures": "treatment for the underlying cause,such as asthma,chronic obstructive pulmonary disease (copd),pneumonia",
    "doctor": "pulmonologist",
    "riskLevel": "varies"
  },
  {
    "disease": "parkinson's disease",
    "symptoms": "tremors,slow movement,stiffness,difficulty with balance,coordination",
    "cures": "medication,lifestyle changes",
    "doctor": "neurologist",
    "riskLevel": "varies"
  },
  {
    "disease": "peptic ulcer disease",
    "symptoms": "pain in the upper abdomen,indigestion,nausea,vomiting",
    "cures": "medication,lifestyle changes,surgery",
    "doctor": "gastroenterologist",
    "riskLevel": "varies"
  },
  {
    "disease": "peripheral artery disease",
    "symptoms": "pain,numbness,tingling in the arms or legs",
    "cures": "medication,lifestyle changes,surgery",
    "doctor": "vascular surgeon",
    "riskLevel": "varies"
  },
  {
    "disease": "prostate cancer",
    "symptoms": "difficulty urinating,blood in the urine,pain in the back or hips,erectile dysfunction",
    "cures": "surgery,radiation therapy,hormone therapy",
    "doctor": "urologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "rheumatoid arthritis",
    "symptoms": "pain,swelling,stiffness in the joints",
    "cures": "medication,lifestyle changes",
    "doctor": "rheumatologist",
    "riskLevel": "varies"
  },
  {
    "disease": "stomach cancer",
    "symptoms": "pain in the upper abdomen,indigestion,nausea,vomiting,weight loss",
    "cures": "surgery,chemotherapy,radiation therapy",
    "doctor": "gastroenterologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "thyroid cancer",
    "symptoms": "lump in the neck,hoarseness,fatigue,weight loss,unexplained heat intolerance,sensitivity to cold",
    "cures": "surgery,radiation therapy,hormone therapy",
    "doctor": "endocrinologist",
    "riskLevel": "high (70%)"
  },
  {
    "disease": "ulcerative colitis",
    "symptoms": "diarrhea,bloody stool,abdominal pain,weight loss",
    "cures": "medication,surgery",
    "doctor": "gastroenterologist",
    "riskLevel": "varies"
  },
  {
    "disease": "atopic dermatitis",
    "symptoms": "itchy,red,inflamed skin",
    "cures": "medication,lifestyle changes",
    "doctor": "dermatologist",
    "riskLevel": "varies"
  },
  {
    "disease": "celiac disease",
    "symptoms": "diarrhea,bloating,weight loss,fatigue,abdominal pain",
    "cures": "gluten-free diet",
    "doctor": "gastroenterologist",
    "riskLevel": "varies"
  },
  {
    "disease": "chronic kidney disease",
    "symptoms": "fatigue,shortness of breath,swelling,high blood pressure,changes in urination",
    "cures": "treatment for the underlying cause,such as high blood pressure,diabetes,an infection",
    "doctor": "nephrologist",
    "riskLevel": "varies"
  },
  {
    "disease": "crohn's disease",
    "symptoms": "diarrhea,bloody stool,abdominal pain,weight loss",
    "cures": "medication,surgery",
    "doctor": "gastroenterologist",
    "riskLevel": "varies"
  },
  {
    "disease": "graves' disease",
    "symptoms": "hyperthyroidism,which is an overactive thyroid",
    "cures": "medication,surgery",
    "doctor": "endocrinologist",
    "riskLevel": "varies"
  },
  {
    "disease": "hashimoto's thyroiditis",
    "symptoms": "hypothyroidism,which is an underactive thyroid",
    "cures": "medication",
    "doctor": "endocrinologist",
    "riskLevel": "varies"
  },
  {
    "disease": "lupus",
    "symptoms": "chronic autoimmune disease that can affect any part of the body",
    "cures": "medication,lifestyle changes",
    "doctor": "rheumatologist",
    "riskLevel": "varies"
  }
];

export const SYMPTOM_WEIGHT_MAP = {
  "skin_rash": 3,
  "nodal_skin_eruptions": 4,
  "continuous_sneezing": 4,
  "shivering": 5,
  "chills": 3,
  "joint_pain": 3,
  "stomach_pain": 5,
  "acidity": 3,
  "ulcers_on_tongue": 4,
  "muscle_wasting": 3,
  "vomiting": 5,
  "burning_micturition": 6,
  "spotting_urination": 6,
  "fatigue": 4,
  "weight_gain": 3,
  "anxiety": 4,
  "cold_hands_and_feets": 5,
  "mood_swings": 3,
  "weight_loss": 3,
  "restlessness": 5,
  "lethargy": 2,
  "patches_in_throat": 6,
  "irregular_sugar_level": 5,
  "cough": 4,
  "high_fever": 7,
  "sunken_eyes": 3,
  "breathlessness": 4,
  "sweating": 3,
  "dehydration": 4,
  "indigestion": 5,
  "headache": 3,
  "yellowish_skin": 3,
  "dark_urine": 4,
  "nausea": 5,
  "loss_of_appetite": 4,
  "pain_behind_the_eyes": 4,
  "back_pain": 3,
  "constipation": 4,
  "abdominal_pain": 4,
  "diarrhoea": 6,
  "mild_fever": 5,
  "yellow_urine": 4,
  "yellowing_of_eyes": 4,
  "acute_liver_failure": 6,
  "fluid_overload": 4,
  "swelling_of_stomach": 7,
  "swelled_lymph_nodes": 6,
  "malaise": 6,
  "blurred_and_distorted_vision": 5,
  "phlegm": 5,
  "throat_irritation": 4,
  "redness_of_eyes": 5,
  "sinus_pressure": 4,
  "runny_nose": 5,
  "congestion": 5,
  "chest_pain": 7,
  "weakness_in_limbs": 7,
  "fast_heart_rate": 5,
  "pain_during_bowel_movements": 5,
  "pain_in_anal_region": 6,
  "bloody_stool": 5,
  "irritation_in_anus": 6,
  "neck_pain": 5,
  "dizziness": 4,
  "cramps": 4,
  "bruising": 4,
  "obesity": 4,
  "swollen_legs": 5,
  "swollen_blood_vessels": 5,
  "puffy_face_and_eyes": 5,
  "enlarged_thyroid": 6,
  "brittle_nails": 5,
  "swollen_extremeties": 5,
  "excessive_hunger": 4,
  "extra_marital_contacts": 5,
  "drying_and_tingling_lips": 4,
  "slurred_speech": 4,
  "knee_pain": 3,
  "hip_joint_pain": 2,
  "muscle_weakness": 2,
  "stiff_neck": 4,
  "swelling_joints": 5,
  "movement_stiffness": 5,
  "spinning_movements": 6,
  "loss_of_balance": 4,
  "unsteadiness": 4,
  "weakness_of_one_body_side": 4,
  "loss_of_smell": 3,
  "bladder_discomfort": 4,
  "foul_smell_ofurine": 5,
  "continuous_feel_of_urine": 6,
  "passage_of_gases": 5,
  "internal_itching": 4,
  "toxic_look_(typhos)": 5,
  "depression": 3,
  "irritability": 2,
  "muscle_pain": 2,
  "altered_sensorium": 2,
  "red_spots_over_body": 3,
  "belly_pain": 4,
  "abnormal_menstruation": 6,
  "dischromic_patches": 6,
  "watering_from_eyes": 4,
  "increased_appetite": 5,
  "polyuria": 4,
  "family_history": 5,
  "mucoid_sputum": 4,
  "rusty_sputum": 4,
  "lack_of_concentration": 3,
  "visual_disturbances": 3,
  "receiving_blood_transfusion": 5,
  "receiving_unsterile_injections": 2,
  "coma": 7,
  "stomach_bleeding": 6,
  "distention_of_abdomen": 4,
  "history_of_alcohol_consumption": 5,
  "blood_in_sputum": 5,
  "prominent_veins_on_calf": 6,
  "palpitations": 4,
  "painful_walking": 2,
  "pus_filled_pimples": 2,
  "blackheads": 2,
  "scurring": 2,
  "skin_peeling": 3,
  "silver_like_dusting": 2,
  "small_dents_in_nails": 2,
  "inflammatory_nails": 2,
  "blister": 4,
  "red_sore_around_nose": 2,
  "yellow_crust_ooze": 3,
  "prognosis": 5
};

export const PRESET_SYMPTOMS = [
  'Fever', 'Dry Cough', 'Myalgia', 'Fatigue', 'Dyspnea', 
  'Headache', 'Chest Pain', 'Joint Pain', 'Stomach Pain', 
  'Vomiting', 'Dizziness', 'Skin Rash', 'Loss of Smell', 
  'Burning Urination', 'Stiff Neck', 'Abdominal Pain', 'Sore Throat'
];

export const CLINICAL_CASES = [
  {
    "keywords": [
      "flu",
      "fever",
      "cough",
      "sore",
      "throat",
      "runny",
      "stuffy",
      "nose",
      "muscle",
      "aches",
      "headache",
      "fatigue"
    ],
    "condition": "Flu",
    "confidence": 92,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Fever",
      "Cough",
      "Sore throat",
      "Runny or stuffy nose",
      "Muscle aches",
      "Headache",
      "Fatigue"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (fever, cough, sore throat) correlates strongly with diagnostic profiles for Flu.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: over-the-counter medications,rest,fluids",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "bronchitis",
      "cough",
      "mucus",
      "production",
      "shortness",
      "breath",
      "chest",
      "pain"
    ],
    "condition": "Bronchitis",
    "confidence": 91,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Cough",
      "Mucus production",
      "Shortness of breath",
      "Chest pain"
    ],
    "flaggedWarning": "Risk Level: low (0.5%). Consult specialist: family doctor,pulmonologist.",
    "reasoning": [
      "Symptom presentation (cough, mucus production, shortness of breath) correlates strongly with diagnostic profiles for Bronchitis.",
      "Evaluated risk score: low (0.5%). Primary clinical pathway directs consultation with a family doctor,pulmonologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antibiotics,over-the-counter medications,rest,fluids",
      "Referral Specialist: family doctor,pulmonologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,pulmonologist",
    "riskLevel": "low (0.5%)"
  },
  {
    "keywords": [
      "pneumonia",
      "fever",
      "cough",
      "shortness",
      "breath",
      "chest",
      "pain",
      "fatigue"
    ],
    "condition": "Pneumonia",
    "confidence": 92,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Fever",
      "Cough",
      "Shortness of breath",
      "Chest pain",
      "Fatigue"
    ],
    "flaggedWarning": "Risk Level: moderate (1%). Consult specialist: family doctor,pulmonologist.",
    "reasoning": [
      "Symptom presentation (fever, cough, shortness of breath) correlates strongly with diagnostic profiles for Pneumonia.",
      "Evaluated risk score: moderate (1%). Primary clinical pathway directs consultation with a family doctor,pulmonologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antibiotics,over-the-counter medications,rest,fluids",
      "Referral Specialist: family doctor,pulmonologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,pulmonologist",
    "riskLevel": "moderate (1%)"
  },
  {
    "keywords": [
      "heart",
      "attack",
      "chest",
      "pain",
      "shortness",
      "breath",
      "nausea",
      "vomiting",
      "lightheadedness",
      "sweating"
    ],
    "condition": "Heart Attack",
    "confidence": 95,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Chest pain",
      "Shortness of breath",
      "Nausea",
      "Vomiting",
      "Lightheadedness",
      "Sweating"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: cardiologist.",
    "reasoning": [
      "Symptom presentation (chest pain, shortness of breath, nausea) correlates strongly with diagnostic profiles for Heart Attack.",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a cardiologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: emergency medical services",
      "Referral Specialist: cardiologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "cardiologist",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "stroke",
      "sudden",
      "weakness",
      "numbness",
      "one",
      "side",
      "the",
      "body",
      "confusion",
      "difficulty",
      "speaking",
      "trouble",
      "seeing",
      "eye",
      "severe",
      "headache"
    ],
    "condition": "Stroke",
    "confidence": 92,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Sudden weakness",
      "Numbness on one side of the body",
      "Confusion",
      "Difficulty speaking",
      "Trouble seeing in one eye",
      "Severe headache"
    ],
    "flaggedWarning": "Risk Level: high (15%). Consult specialist: neurologist.",
    "reasoning": [
      "Symptom presentation (sudden weakness, numbness on one side of the body, confusion) correlates strongly with diagnostic profiles for Stroke.",
      "Evaluated risk score: high (15%). Primary clinical pathway directs consultation with a neurologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: emergency medical services",
      "Referral Specialist: neurologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "neurologist",
    "riskLevel": "high (15%)"
  },
  {
    "keywords": [
      "cancer",
      "lump",
      "unexplained",
      "weight",
      "loss",
      "fatigue",
      "changes",
      "bowel",
      "bladder",
      "habits",
      "persistent",
      "cough",
      "indigestion",
      "bleeding",
      "discharge"
    ],
    "condition": "Cancer",
    "confidence": 98,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Lump",
      "Unexplained weight loss",
      "Fatigue",
      "Changes in bowel",
      "Bladder habits",
      "Persistent cough",
      "Indigestion",
      "Unexplained bleeding or discharge"
    ],
    "flaggedWarning": "Risk Level: varies depending on the type of cancer. Consult specialist: oncologist.",
    "reasoning": [
      "Symptom presentation (lump, unexplained weight loss, fatigue) correlates strongly with diagnostic profiles for Cancer.",
      "Evaluated risk score: varies depending on the type of cancer. Primary clinical pathway directs consultation with a oncologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery,chemotherapy,radiation therapy",
      "Referral Specialist: oncologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "oncologist",
    "riskLevel": "varies depending on the type of cancer"
  },
  {
    "keywords": [
      "diabetes",
      "increased",
      "thirst",
      "frequent",
      "urination",
      "unexplained",
      "weight",
      "loss",
      "fatigue",
      "blurred",
      "vision",
      "cuts",
      "that",
      "are",
      "slow",
      "heal"
    ],
    "condition": "Diabetes",
    "confidence": 92,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Increased thirst",
      "Frequent urination",
      "Unexplained weight loss",
      "Fatigue",
      "Blurred vision",
      "Cuts that are slow to heal"
    ],
    "flaggedWarning": "Risk Level: high (25%). Consult specialist: endocrinologist.",
    "reasoning": [
      "Symptom presentation (increased thirst, frequent urination, unexplained weight loss) correlates strongly with diagnostic profiles for Diabetes.",
      "Evaluated risk score: high (25%). Primary clinical pathway directs consultation with a endocrinologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: diet,exercise,medication",
      "Referral Specialist: endocrinologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "endocrinologist",
    "riskLevel": "high (25%)"
  },
  {
    "keywords": [
      "alzheimer's",
      "disease",
      "memory",
      "loss",
      "confusion",
      "difficulty",
      "thinking",
      "changes",
      "personality",
      "behavior"
    ],
    "condition": "Alzheimer's Disease",
    "confidence": 96,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Memory loss",
      "Confusion",
      "Difficulty thinking",
      "Changes in personality or behavior"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: neurologist.",
    "reasoning": [
      "Symptom presentation (memory loss, confusion, difficulty thinking) correlates strongly with diagnostic profiles for Alzheimer's Disease.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a neurologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: there is no cure for alzheimer's disease,but there are treatments that can help manage the symptoms",
      "Referral Specialist: neurologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "neurologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "arthritis",
      "pain",
      "stiffness",
      "swelling",
      "inflammation",
      "the",
      "joints"
    ],
    "condition": "Arthritis",
    "confidence": 95,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Pain",
      "Stiffness",
      "Swelling",
      "Inflammation in the joints"
    ],
    "flaggedWarning": "Risk Level: varies depending on the type of arthritis. Consult specialist: rheumatologist.",
    "reasoning": [
      "Symptom presentation (pain, stiffness, swelling) correlates strongly with diagnostic profiles for Arthritis.",
      "Evaluated risk score: varies depending on the type of arthritis. Primary clinical pathway directs consultation with a rheumatologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,physical therapy,lifestyle changes",
      "Referral Specialist: rheumatologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "rheumatologist",
    "riskLevel": "varies depending on the type of arthritis"
  },
  {
    "keywords": [
      "adenovirus",
      "fever",
      "sore",
      "throat",
      "cough",
      "conjunctivitis",
      "rash",
      "pink",
      "eye"
    ],
    "condition": "Adenovirus",
    "confidence": 96,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Fever",
      "Sore throat",
      "Cough",
      "Conjunctivitis",
      "Rash",
      "Pink eye"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (fever, sore throat, cough) correlates strongly with diagnostic profiles for Adenovirus.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antibiotics,over-the-counter medications,rest,fluids",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "aflatoxicosis",
      "vomiting",
      "diarrhea",
      "jaundice",
      "liver",
      "damage",
      "death"
    ],
    "condition": "Aflatoxicosis",
    "confidence": 93,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Vomiting",
      "Diarrhea",
      "Jaundice",
      "Liver damage",
      "Death"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: gastroenterologist.",
    "reasoning": [
      "Symptom presentation (vomiting, diarrhea, jaundice) correlates strongly with diagnostic profiles for Aflatoxicosis.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a gastroenterologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: there is no cure for aflatoxicosis,but treatment may include supportive care,liver transplantation",
      "Referral Specialist: gastroenterologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "gastroenterologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "alcoholism",
      "physical",
      "dependence",
      "alcohol",
      "tolerance",
      "withdrawal",
      "symptoms",
      "impaired",
      "judgment",
      "memory",
      "problems",
      "liver",
      "damage",
      "heart",
      "disease",
      "cancer"
    ],
    "condition": "Alcoholism",
    "confidence": 95,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Physical dependence on alcohol",
      "Tolerance to alcohol",
      "Withdrawal symptoms",
      "Impaired judgment",
      "Memory problems",
      "Liver damage",
      "Heart disease",
      "Cancer"
    ],
    "flaggedWarning": "Risk Level: high (25%). Consult specialist: psychiatrist,addiction specialist.",
    "reasoning": [
      "Symptom presentation (physical dependence on alcohol, tolerance to alcohol, withdrawal symptoms) correlates strongly with diagnostic profiles for Alcoholism.",
      "Evaluated risk score: high (25%). Primary clinical pathway directs consultation with a psychiatrist,addiction specialist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for alcoholism may include counseling,medication,support groups",
      "Referral Specialist: psychiatrist,addiction specialist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "psychiatrist,addiction specialist",
    "riskLevel": "high (25%)"
  },
  {
    "keywords": [
      "allergic",
      "rhinitis",
      "runny",
      "nose",
      "sneezing",
      "itchy",
      "eyes",
      "throat",
      "palate"
    ],
    "condition": "Allergic Rhinitis",
    "confidence": 98,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Runny nose",
      "Sneezing",
      "Itchy eyes",
      "Itchy nose",
      "Throat",
      "Palate"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: allergist.",
    "reasoning": [
      "Symptom presentation (runny nose, sneezing, itchy eyes) correlates strongly with diagnostic profiles for Allergic Rhinitis.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a allergist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: over-the-counter medications,allergy shots",
      "Referral Specialist: allergist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "allergist",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "anemia",
      "fatigue",
      "shortness",
      "breath",
      "pale",
      "skin",
      "lightheadedness",
      "dizziness"
    ],
    "condition": "Anemia",
    "confidence": 94,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Fatigue",
      "Shortness of breath",
      "Pale skin",
      "Lightheadedness",
      "Dizziness"
    ],
    "flaggedWarning": "Risk Level: varies depending on the type of anemia. Consult specialist: hematologist.",
    "reasoning": [
      "Symptom presentation (fatigue, shortness of breath, pale skin) correlates strongly with diagnostic profiles for Anemia.",
      "Evaluated risk score: varies depending on the type of anemia. Primary clinical pathway directs consultation with a hematologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: iron supplements,medication,blood transfusions",
      "Referral Specialist: hematologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "hematologist",
    "riskLevel": "varies depending on the type of anemia"
  },
  {
    "keywords": [
      "anxiety",
      "disorder",
      "excessive",
      "worry",
      "fear",
      "that",
      "interfere",
      "with",
      "daily",
      "life"
    ],
    "condition": "Anxiety Disorder",
    "confidence": 95,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Excessive worry",
      "Fear",
      "Anxiety that interfere with daily life"
    ],
    "flaggedWarning": "Risk Level: varies depending on the type of anxiety disorder. Consult specialist: psychologist,psychiatrist.",
    "reasoning": [
      "Symptom presentation (excessive worry, fear, anxiety that interfere with daily life) correlates strongly with diagnostic profiles for Anxiety Disorder.",
      "Evaluated risk score: varies depending on the type of anxiety disorder. Primary clinical pathway directs consultation with a psychologist,psychiatrist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for anxiety disorders may include therapy,medication,combination of both",
      "Referral Specialist: psychologist,psychiatrist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "psychologist,psychiatrist",
    "riskLevel": "varies depending on the type of anxiety disorder"
  },
  {
    "keywords": [
      "appendicitis",
      "pain",
      "the",
      "lower",
      "right",
      "abdomen",
      "nausea",
      "vomiting",
      "fever"
    ],
    "condition": "Appendicitis",
    "confidence": 97,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Pain in the lower right abdomen",
      "Nausea",
      "Vomiting",
      "Fever"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: surgeon.",
    "reasoning": [
      "Symptom presentation (pain in the lower right abdomen, nausea, vomiting) correlates strongly with diagnostic profiles for Appendicitis.",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a surgeon.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: appendectomy",
      "Referral Specialist: surgeon",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "surgeon",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "asperger",
      "syndrome",
      "difficulty",
      "with",
      "social",
      "interaction",
      "repetitive",
      "behaviors",
      "restricted",
      "interests"
    ],
    "condition": "Asperger Syndrome",
    "confidence": 93,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Difficulty with social interaction",
      "Repetitive behaviors",
      "Restricted interests"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: psychologist,psychiatrist.",
    "reasoning": [
      "Symptom presentation (difficulty with social interaction, repetitive behaviors, restricted interests) correlates strongly with diagnostic profiles for Asperger Syndrome.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a psychologist,psychiatrist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: there is no cure for asperger syndrome,but there are treatments that can help manage the symptoms",
      "Referral Specialist: psychologist,psychiatrist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "psychologist,psychiatrist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "asthma",
      "wheezing",
      "shortness",
      "breath",
      "coughing",
      "chest",
      "tightness"
    ],
    "condition": "Asthma",
    "confidence": 94,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Wheezing",
      "Shortness of breath",
      "Coughing",
      "Chest tightness"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: allergist,pulmonologist.",
    "reasoning": [
      "Symptom presentation (wheezing, shortness of breath, coughing) correlates strongly with diagnostic profiles for Asthma.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a allergist,pulmonologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for asthma may include medication,lifestyle changes,allergy shots",
      "Referral Specialist: allergist,pulmonologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "allergist,pulmonologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "bacterial",
      "meningitis",
      "fever",
      "headache",
      "stiff",
      "neck",
      "nausea",
      "vomiting",
      "sensitivity",
      "light"
    ],
    "condition": "Bacterial Meningitis",
    "confidence": 92,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Fever",
      "Headache",
      "Stiff neck",
      "Nausea",
      "Vomiting",
      "Sensitivity to light"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: neurologist,neurosurgeon.",
    "reasoning": [
      "Symptom presentation (fever, headache, stiff neck) correlates strongly with diagnostic profiles for Bacterial Meningitis.",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a neurologist,neurosurgeon.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antibiotics",
      "Referral Specialist: neurologist,neurosurgeon",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "neurologist,neurosurgeon",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "bipolar",
      "disorder",
      "extreme",
      "mood",
      "swings",
      "from",
      "mania",
      "depression"
    ],
    "condition": "Bipolar Disorder",
    "confidence": 98,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Extreme mood swings",
      "From mania to depression"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: psychologist,psychiatrist.",
    "reasoning": [
      "Symptom presentation (extreme mood swings, from mania to depression) correlates strongly with diagnostic profiles for Bipolar Disorder.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a psychologist,psychiatrist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for bipolar disorder may include medication,therapy,combination of both",
      "Referral Specialist: psychologist,psychiatrist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "psychologist,psychiatrist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "bladder",
      "cancer",
      "blood",
      "the",
      "urine",
      "pain",
      "burning",
      "when",
      "urinating",
      "frequent",
      "urination",
      "urgency",
      "urinate",
      "incontinence"
    ],
    "condition": "Bladder Cancer",
    "confidence": 94,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Blood in the urine",
      "Pain or burning when urinating",
      "Frequent urination",
      "Urgency to urinate",
      "Incontinence"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: urologist.",
    "reasoning": [
      "Symptom presentation (blood in the urine, pain or burning when urinating, frequent urination) correlates strongly with diagnostic profiles for Bladder Cancer.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a urologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery,chemotherapy,radiation therapy",
      "Referral Specialist: urologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "urologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "blood",
      "clot",
      "pain",
      "swelling",
      "redness",
      "warmth",
      "tenderness",
      "the",
      "affected",
      "area",
      "shortness",
      "breath",
      "chest",
      "difficulty",
      "breathing",
      "coughing"
    ],
    "condition": "Blood Clot",
    "confidence": 91,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Pain",
      "Swelling",
      "Redness",
      "Warmth",
      "Tenderness in the affected area",
      "Shortness of breath",
      "Chest pain",
      "Difficulty breathing",
      "Coughing up blood"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: cardiologist,hematologist.",
    "reasoning": [
      "Symptom presentation (pain, swelling, redness) correlates strongly with diagnostic profiles for Blood Clot.",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a cardiologist,hematologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for blood clot may include medication,surgery,combination of both",
      "Referral Specialist: cardiologist,hematologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "cardiologist,hematologist",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "bursitis",
      "pain",
      "swelling",
      "inflammation",
      "bursa",
      "which",
      "small",
      "sac",
      "fluid",
      "that",
      "cushions",
      "joints"
    ],
    "condition": "Bursitis",
    "confidence": 91,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Pain",
      "Swelling",
      "Inflammation in bursa",
      "Which is small sac of fluid that cushions joints"
    ],
    "flaggedWarning": "Risk Level: varies depending on the bursa. Consult specialist: family doctor,orthopedist.",
    "reasoning": [
      "Symptom presentation (pain, swelling, inflammation in bursa) correlates strongly with diagnostic profiles for Bursitis.",
      "Evaluated risk score: varies depending on the bursa. Primary clinical pathway directs consultation with a family doctor,orthopedist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,rest,ice,compression,elevation",
      "Referral Specialist: family doctor,orthopedist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,orthopedist",
    "riskLevel": "varies depending on the bursa"
  },
  {
    "keywords": [
      "cervical",
      "cancer",
      "abnormal",
      "pap",
      "test",
      "results",
      "vaginal",
      "bleeding",
      "pain",
      "during",
      "sex"
    ],
    "condition": "Cervical Cancer",
    "confidence": 95,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Abnormal pap test results",
      "Abnormal vaginal bleeding",
      "Pain during sex"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: gynecologist.",
    "reasoning": [
      "Symptom presentation (abnormal pap test results, abnormal vaginal bleeding, pain during sex) correlates strongly with diagnostic profiles for Cervical Cancer.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a gynecologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery,chemotherapy,radiation therapy",
      "Referral Specialist: gynecologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "gynecologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "chickenpox",
      "rash",
      "fever",
      "headache",
      "muscle",
      "aches",
      "fatigue"
    ],
    "condition": "Chickenpox",
    "confidence": 92,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Rash",
      "Fever",
      "Headache",
      "Muscle aches",
      "Fatigue"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (rash, fever, headache) correlates strongly with diagnostic profiles for Chickenpox.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antiviral medication,over-the-counter medications,rest,fluids",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "chronic",
      "obstructive",
      "pulmonary",
      "disease",
      "(copd)",
      "bronchitis",
      "emphysema"
    ],
    "condition": "Chronic Obstructive Pulmonary Disease (copd)",
    "confidence": 94,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Chronic bronchitis",
      "Emphysema"
    ],
    "flaggedWarning": "Risk Level: varies depending on the type of copd. Consult specialist: pulmonologist.",
    "reasoning": [
      "Symptom presentation (chronic bronchitis, emphysema) correlates strongly with diagnostic profiles for Chronic Obstructive Pulmonary Disease (copd).",
      "Evaluated risk score: varies depending on the type of copd. Primary clinical pathway directs consultation with a pulmonologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for copd may include medication,lifestyle changes,oxygen therapy",
      "Referral Specialist: pulmonologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "pulmonologist",
    "riskLevel": "varies depending on the type of copd"
  },
  {
    "keywords": [
      "cholesterol",
      "high",
      "levels",
      "the",
      "blood"
    ],
    "condition": "Cholesterol",
    "confidence": 97,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "High levels of cholesterol in the blood"
    ],
    "flaggedWarning": "Risk Level: varies depending on the level of cholesterol. Consult specialist: cardiologist.",
    "reasoning": [
      "Symptom presentation (high levels of cholesterol in the blood) correlates strongly with diagnostic profiles for Cholesterol.",
      "Evaluated risk score: varies depending on the level of cholesterol. Primary clinical pathway directs consultation with a cardiologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: diet,exercise,medication",
      "Referral Specialist: cardiologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "cardiologist",
    "riskLevel": "varies depending on the level of cholesterol"
  },
  {
    "keywords": [
      "common",
      "cold",
      "runny",
      "nose",
      "sneezing",
      "sore",
      "throat",
      "cough",
      "congestion"
    ],
    "condition": "Common Cold",
    "confidence": 91,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Runny nose",
      "Sneezing",
      "Sore throat",
      "Cough",
      "Congestion"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (runny nose, sneezing, sore throat) correlates strongly with diagnostic profiles for Common Cold.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: over-the-counter medications,rest,fluids",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "conjunctivitis",
      "red",
      "itchy",
      "watery",
      "eyes"
    ],
    "condition": "Conjunctivitis",
    "confidence": 91,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Red",
      "Itchy",
      "Watery eyes"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,ophthalmologist.",
    "reasoning": [
      "Symptom presentation (red, itchy, watery eyes) correlates strongly with diagnostic profiles for Conjunctivitis.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,ophthalmologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: over-the-counter medications,warm compresses",
      "Referral Specialist: family doctor,ophthalmologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,ophthalmologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "depression",
      "sadness",
      "hopelessness",
      "loss",
      "interest",
      "activities",
      "changes",
      "appetite",
      "sleep",
      "energy",
      "levels"
    ],
    "condition": "Depression",
    "confidence": 98,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Sadness",
      "Hopelessness",
      "Loss of interest in activities",
      "Changes in appetite",
      "Sleep",
      "Energy levels"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: psychologist,psychiatrist.",
    "reasoning": [
      "Symptom presentation (sadness, hopelessness, loss of interest in activities) correlates strongly with diagnostic profiles for Depression.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a psychologist,psychiatrist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for depression may include medication,therapy,combination of both",
      "Referral Specialist: psychologist,psychiatrist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "psychologist,psychiatrist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "diarrhea",
      "loose",
      "watery",
      "stools"
    ],
    "condition": "Diarrhea",
    "confidence": 96,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Loose",
      "Watery stools"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (loose, watery stools) correlates strongly with diagnostic profiles for Diarrhea.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: over-the-counter medications,rest,fluids",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "eating",
      "disorder",
      "disturbance",
      "behavior",
      "that",
      "can",
      "lead",
      "serious",
      "health",
      "problems"
    ],
    "condition": "Eating Disorder",
    "confidence": 95,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Disturbance in eating behavior that can lead to serious health problems"
    ],
    "flaggedWarning": "Risk Level: varies depending on the type of eating disorder. Consult specialist: psychologist,psychiatrist.",
    "reasoning": [
      "Symptom presentation (disturbance in eating behavior that can lead to serious health problems) correlates strongly with diagnostic profiles for Eating Disorder.",
      "Evaluated risk score: varies depending on the type of eating disorder. Primary clinical pathway directs consultation with a psychologist,psychiatrist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for eating disorders may include therapy,medication,support groups",
      "Referral Specialist: psychologist,psychiatrist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "psychologist,psychiatrist",
    "riskLevel": "varies depending on the type of eating disorder"
  },
  {
    "keywords": [
      "epilepsy",
      "seizures"
    ],
    "condition": "Epilepsy",
    "confidence": 95,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Seizures"
    ],
    "flaggedWarning": "Risk Level: varies depending on the type of epilepsy. Consult specialist: neurologist.",
    "reasoning": [
      "Symptom presentation (seizures) correlates strongly with diagnostic profiles for Epilepsy.",
      "Evaluated risk score: varies depending on the type of epilepsy. Primary clinical pathway directs consultation with a neurologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,surgery",
      "Referral Specialist: neurologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "neurologist",
    "riskLevel": "varies depending on the type of epilepsy"
  },
  {
    "keywords": [
      "fever",
      "elevated",
      "body",
      "temperature"
    ],
    "condition": "Fever",
    "confidence": 94,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Elevated body temperature"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (elevated body temperature) correlates strongly with diagnostic profiles for Fever.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: over-the-counter medications,rest,fluids",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "food",
      "poisoning",
      "nausea",
      "vomiting",
      "diarrhea",
      "abdominal",
      "cramps"
    ],
    "condition": "Food Poisoning",
    "confidence": 94,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Abdominal cramps"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (nausea, vomiting, diarrhea) correlates strongly with diagnostic profiles for Food Poisoning.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: over-the-counter medications,rest,fluids",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "gallstones",
      "pain",
      "the",
      "upper",
      "right",
      "abdomen",
      "nausea",
      "vomiting",
      "fever"
    ],
    "condition": "Gallstones",
    "confidence": 91,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Pain in the upper right abdomen",
      "Nausea",
      "Vomiting",
      "Fever"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: surgeon.",
    "reasoning": [
      "Symptom presentation (pain in the upper right abdomen, nausea, vomiting) correlates strongly with diagnostic profiles for Gallstones.",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a surgeon.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery",
      "Referral Specialist: surgeon",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "surgeon",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "gonorrhea",
      "sexually",
      "transmitted",
      "infection",
      "that",
      "can",
      "cause",
      "burning",
      "during",
      "urination",
      "discharge",
      "from",
      "the",
      "penis",
      "vagina",
      "pain",
      "lower",
      "abdomen"
    ],
    "condition": "Gonorrhea",
    "confidence": 93,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Sexually transmitted infection that can cause burning during urination",
      "Discharge from the penis or vagina",
      "Pain in the lower abdomen"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: urologist,gynecologist.",
    "reasoning": [
      "Symptom presentation (sexually transmitted infection that can cause burning during urination, discharge from the penis or vagina, pain in the lower abdomen) correlates strongly with diagnostic profiles for Gonorrhea.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a urologist,gynecologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antibiotics",
      "Referral Specialist: urologist,gynecologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "urologist,gynecologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "heart",
      "disease",
      "chest",
      "pain",
      "shortness",
      "breath",
      "fatigue",
      "dizziness",
      "fainting"
    ],
    "condition": "Heart Disease",
    "confidence": 93,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Chest pain",
      "Shortness of breath",
      "Fatigue",
      "Dizziness",
      "Fainting"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: cardiologist.",
    "reasoning": [
      "Symptom presentation (chest pain, shortness of breath, fatigue) correlates strongly with diagnostic profiles for Heart Disease.",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a cardiologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for heart disease may include medication,lifestyle changes,surgery",
      "Referral Specialist: cardiologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "cardiologist",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "hepatitis",
      "inflammation",
      "the",
      "liver"
    ],
    "condition": "Hepatitis",
    "confidence": 92,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Inflammation of the liver"
    ],
    "flaggedWarning": "Risk Level: varies depending on the type of hepatitis. Consult specialist: gastroenterologist.",
    "reasoning": [
      "Symptom presentation (inflammation of the liver) correlates strongly with diagnostic profiles for Hepatitis.",
      "Evaluated risk score: varies depending on the type of hepatitis. Primary clinical pathway directs consultation with a gastroenterologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for hepatitis may include medication,rest,lifestyle changes",
      "Referral Specialist: gastroenterologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "gastroenterologist",
    "riskLevel": "varies depending on the type of hepatitis"
  },
  {
    "keywords": [
      "herpes",
      "sexually",
      "transmitted",
      "infection",
      "that",
      "can",
      "cause",
      "blisters",
      "the",
      "genitals",
      "mouth",
      "other",
      "parts",
      "body"
    ],
    "condition": "Herpes",
    "confidence": 93,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Sexually transmitted infection that can cause blisters on the genitals",
      "Mouth",
      "Other parts of the body"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: urologist,gynecologist.",
    "reasoning": [
      "Symptom presentation (sexually transmitted infection that can cause blisters on the genitals, mouth, other parts of the body) correlates strongly with diagnostic profiles for Herpes.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a urologist,gynecologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: there is no cure for herpes,but there are treatments that can help manage the symptoms",
      "Referral Specialist: urologist,gynecologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "urologist,gynecologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "irritable",
      "bowel",
      "syndrome",
      "(ibs)",
      "abdominal",
      "pain",
      "bloating",
      "constipation",
      "diarrhea"
    ],
    "condition": "Irritable Bowel Syndrome (ibs)",
    "confidence": 91,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Abdominal pain",
      "Bloating",
      "Constipation",
      "Diarrhea"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: family doctor,gastroenterologist.",
    "reasoning": [
      "Symptom presentation (abdominal pain, bloating, constipation) correlates strongly with diagnostic profiles for Irritable Bowel Syndrome (ibs).",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a family doctor,gastroenterologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for ibs may include diet,lifestyle changes,medication",
      "Referral Specialist: family doctor,gastroenterologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,gastroenterologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "kidney",
      "stones",
      "pain",
      "the",
      "lower",
      "back",
      "side",
      "nausea",
      "vomiting",
      "blood",
      "urine"
    ],
    "condition": "Kidney Stones",
    "confidence": 95,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Pain in the lower back or side",
      "Nausea",
      "Vomiting",
      "Blood in the urine"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: urologist.",
    "reasoning": [
      "Symptom presentation (pain in the lower back or side, nausea, vomiting) correlates strongly with diagnostic profiles for Kidney Stones.",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a urologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery",
      "Referral Specialist: urologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "urologist",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "lung",
      "cancer",
      "cough",
      "that",
      "does",
      "not",
      "away",
      "shortness",
      "breath",
      "chest",
      "pain",
      "unexplained",
      "weight",
      "loss",
      "fatigue",
      "blood",
      "the",
      "sputum"
    ],
    "condition": "Lung Cancer",
    "confidence": 91,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Cough that does not go away",
      "Shortness of breath",
      "Chest pain",
      "Unexplained weight loss",
      "Fatigue",
      "Blood in the sputum"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: oncologist.",
    "reasoning": [
      "Symptom presentation (cough that does not go away, shortness of breath, chest pain) correlates strongly with diagnostic profiles for Lung Cancer.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a oncologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery,chemotherapy,radiation therapy",
      "Referral Specialist: oncologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "oncologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "malaria",
      "fever",
      "chills",
      "sweating",
      "headache",
      "muscle",
      "aches",
      "fatigue",
      "vomiting",
      "diarrhea"
    ],
    "condition": "Malaria",
    "confidence": 95,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Fever",
      "Chills",
      "Sweating",
      "Headache",
      "Muscle aches",
      "Fatigue",
      "Vomiting",
      "Diarrhea"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (fever, chills, sweating) correlates strongly with diagnostic profiles for Malaria.",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antimalarial drugs",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "measles",
      "fever",
      "cough",
      "runny",
      "nose",
      "red",
      "eyes",
      "sore",
      "throat",
      "rash"
    ],
    "condition": "Measles",
    "confidence": 97,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Fever",
      "Cough",
      "Runny nose",
      "Red eyes",
      "Sore throat",
      "Rash"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (fever, cough, runny nose) correlates strongly with diagnostic profiles for Measles.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: measles vaccine",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "mononucleosis",
      "fever",
      "sore",
      "throat",
      "fatigue",
      "swollen",
      "lymph",
      "nodes",
      "rash"
    ],
    "condition": "Mononucleosis",
    "confidence": 95,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Fever",
      "Sore throat",
      "Fatigue",
      "Swollen lymph nodes",
      "Rash"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (fever, sore throat, fatigue) correlates strongly with diagnostic profiles for Mononucleosis.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: there is no cure for mononucleosis,but symptoms can be treated with rest,fluids,over-the-counter medications",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "rabies",
      "fever",
      "headache",
      "muscle",
      "aches",
      "tingling",
      "the",
      "bite",
      "site",
      "difficulty",
      "swallowing",
      "hydrophobia",
      "aerophobia"
    ],
    "condition": "Rabies",
    "confidence": 94,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Fever",
      "Headache",
      "Muscle aches",
      "Tingling at the bite site",
      "Difficulty swallowing",
      "Hydrophobia",
      "Aerophobia"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (fever, headache, muscle aches) correlates strongly with diagnostic profiles for Rabies.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: rabies vaccine",
      "Referral Specialist: doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "doctor,urgent care",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "salmonella",
      "fever",
      "diarrhea",
      "abdominal",
      "cramps",
      "nausea",
      "vomiting"
    ],
    "condition": "Salmonella",
    "confidence": 96,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Fever",
      "Diarrhea",
      "Abdominal cramps",
      "Nausea",
      "Vomiting"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,urgent care.",
    "reasoning": [
      "Symptom presentation (fever, diarrhea, abdominal cramps) correlates strongly with diagnostic profiles for Salmonella.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,urgent care.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antibiotics",
      "Referral Specialist: family doctor,urgent care",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,urgent care",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "shingles",
      "painful",
      "rash",
      "that",
      "follows",
      "nerve",
      "path"
    ],
    "condition": "Shingles",
    "confidence": 97,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Painful rash that follows nerve path"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: family doctor,dermatologist.",
    "reasoning": [
      "Symptom presentation (painful rash that follows nerve path) correlates strongly with diagnostic profiles for Shingles.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a family doctor,dermatologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antiviral medication",
      "Referral Specialist: family doctor,dermatologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,dermatologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "tuberculosis",
      "(tb)",
      "cough",
      "that",
      "does",
      "not",
      "away",
      "fever",
      "night",
      "sweats",
      "weight",
      "loss",
      "fatigue",
      "chest",
      "pain"
    ],
    "condition": "Tuberculosis (tb)",
    "confidence": 97,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Cough that does not go away",
      "Fever",
      "Night sweats",
      "Weight loss",
      "Fatigue",
      "Chest pain"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: family doctor,pulmonologist.",
    "reasoning": [
      "Symptom presentation (cough that does not go away, fever, night sweats) correlates strongly with diagnostic profiles for Tuberculosis (tb).",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a family doctor,pulmonologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antibiotics",
      "Referral Specialist: family doctor,pulmonologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "family doctor,pulmonologist",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "urinary",
      "tract",
      "infection",
      "(uti)",
      "painful",
      "urination",
      "burning",
      "frequent",
      "urgency",
      "urinate",
      "blood",
      "the",
      "urine"
    ],
    "condition": "Urinary Tract Infection (uti)",
    "confidence": 93,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Painful urination",
      "Burning",
      "Frequent urination",
      "Urgency to urinate",
      "Blood in the urine"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: urologist.",
    "reasoning": [
      "Symptom presentation (painful urination, burning, frequent urination) correlates strongly with diagnostic profiles for Urinary Tract Infection (uti).",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a urologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antibiotics",
      "Referral Specialist: urologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "urologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "varicose",
      "veins",
      "swollen",
      "twisted",
      "usually",
      "the",
      "legs"
    ],
    "condition": "Varicose Veins",
    "confidence": 95,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Swollen",
      "Twisted veins",
      "Usually in the legs"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: vascular surgeon.",
    "reasoning": [
      "Symptom presentation (swollen, twisted veins, usually in the legs) correlates strongly with diagnostic profiles for Varicose Veins.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a vascular surgeon.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery,compression stockings,lifestyle changes",
      "Referral Specialist: vascular surgeon",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "vascular surgeon",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "warts",
      "raised",
      "rough",
      "growths",
      "the",
      "skin"
    ],
    "condition": "Warts",
    "confidence": 96,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Raised",
      "Rough growths on the skin"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: dermatologist.",
    "reasoning": [
      "Symptom presentation (raised, rough growths on the skin) correlates strongly with diagnostic profiles for Warts.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a dermatologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: over-the-counter medications,prescription medications,cryotherapy,laser therapy",
      "Referral Specialist: dermatologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "dermatologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "yeast",
      "infection",
      "itching",
      "burning",
      "discharge",
      "from",
      "the",
      "vagina",
      "penis"
    ],
    "condition": "Yeast Infection",
    "confidence": 93,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Itching",
      "Burning",
      "Discharge from the vagina or penis"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: urologist,gynecologist.",
    "reasoning": [
      "Symptom presentation (itching, burning, discharge from the vagina or penis) correlates strongly with diagnostic profiles for Yeast Infection.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a urologist,gynecologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: over-the-counter medications,prescription medications",
      "Referral Specialist: urologist,gynecologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "urologist,gynecologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "acanthamoeba",
      "keratitis",
      "pain",
      "redness",
      "inflammation",
      "the",
      "eye"
    ],
    "condition": "Acanthamoeba Keratitis",
    "confidence": 91,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Pain",
      "Redness",
      "Inflammation in the eye"
    ],
    "flaggedWarning": "Risk Level: low (0.1%). Consult specialist: ophthalmologist.",
    "reasoning": [
      "Symptom presentation (pain, redness, inflammation in the eye) correlates strongly with diagnostic profiles for Acanthamoeba Keratitis.",
      "Evaluated risk score: low (0.1%). Primary clinical pathway directs consultation with a ophthalmologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: antibiotics,antifungals,surgery",
      "Referral Specialist: ophthalmologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "ophthalmologist",
    "riskLevel": "low (0.1%)"
  },
  {
    "keywords": [
      "acute",
      "kidney",
      "injury",
      "(aki)",
      "decreased",
      "function"
    ],
    "condition": "Acute Kidney Injury (aki)",
    "confidence": 91,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Decreased kidney function"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: nephrologist.",
    "reasoning": [
      "Symptom presentation (decreased kidney function) correlates strongly with diagnostic profiles for Acute Kidney Injury (aki).",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a nephrologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for the underlying cause,such as dehydration,infection,medication side effect",
      "Referral Specialist: nephrologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "nephrologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "aortic",
      "aneurysm",
      "bulge",
      "the",
      "wall",
      "aorta",
      "largest",
      "artery",
      "body"
    ],
    "condition": "Aortic Aneurysm",
    "confidence": 95,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Bulge in the wall of the aorta",
      "The largest artery in the body"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: vascular surgeon.",
    "reasoning": [
      "Symptom presentation (bulge in the wall of the aorta, the largest artery in the body) correlates strongly with diagnostic profiles for Aortic Aneurysm.",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a vascular surgeon.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery",
      "Referral Specialist: vascular surgeon",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "vascular surgeon",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "colorectal",
      "cancer",
      "change",
      "bowel",
      "habits",
      "such",
      "diarrhea",
      "constipation",
      "narrowing",
      "the",
      "stool",
      "blood",
      "abdominal",
      "pain",
      "unexplained",
      "weight",
      "loss"
    ],
    "condition": "Colorectal Cancer",
    "confidence": 95,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Change in bowel habits",
      "Such as diarrhea",
      "Constipation",
      "Narrowing of the stool",
      "Blood in the stool",
      "Abdominal pain",
      "Unexplained weight loss"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: gastroenterologist.",
    "reasoning": [
      "Symptom presentation (change in bowel habits, such as diarrhea, constipation) correlates strongly with diagnostic profiles for Colorectal Cancer.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a gastroenterologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery,chemotherapy,radiation therapy",
      "Referral Specialist: gastroenterologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "gastroenterologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "dementia",
      "memory",
      "loss",
      "confusion",
      "difficulty",
      "thinking",
      "changes",
      "personality",
      "behavior"
    ],
    "condition": "Dementia",
    "confidence": 93,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Memory loss",
      "Confusion",
      "Difficulty thinking",
      "Changes in personality or behavior"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: neurologist.",
    "reasoning": [
      "Symptom presentation (memory loss, confusion, difficulty thinking) correlates strongly with diagnostic profiles for Dementia.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a neurologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: there is no cure for dementia,but there are treatments that can help manage the symptoms",
      "Referral Specialist: neurologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "neurologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "erectile",
      "dysfunction",
      "difficulty",
      "getting",
      "keeping",
      "erection"
    ],
    "condition": "Erectile Dysfunction",
    "confidence": 94,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Difficulty getting",
      "Keeping an erection"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: urologist.",
    "reasoning": [
      "Symptom presentation (difficulty getting, keeping an erection) correlates strongly with diagnostic profiles for Erectile Dysfunction.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a urologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,lifestyle changes,surgery",
      "Referral Specialist: urologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "urologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "fibromyalgia",
      "widespread",
      "pain",
      "fatigue",
      "tenderness"
    ],
    "condition": "Fibromyalgia",
    "confidence": 95,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Widespread pain",
      "Fatigue",
      "Tenderness"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: rheumatologist.",
    "reasoning": [
      "Symptom presentation (widespread pain, fatigue, tenderness) correlates strongly with diagnostic profiles for Fibromyalgia.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a rheumatologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,lifestyle changes",
      "Referral Specialist: rheumatologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "rheumatologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "glaucoma",
      "increased",
      "pressure",
      "the",
      "eye",
      "that",
      "can",
      "damage",
      "optic",
      "nerve",
      "lead",
      "vision",
      "loss"
    ],
    "condition": "Glaucoma",
    "confidence": 92,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Increased pressure in the eye that can damage the optic nerve",
      "Lead to vision loss"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: ophthalmologist.",
    "reasoning": [
      "Symptom presentation (increased pressure in the eye that can damage the optic nerve, lead to vision loss) correlates strongly with diagnostic profiles for Glaucoma.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a ophthalmologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,surgery",
      "Referral Specialist: ophthalmologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "ophthalmologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "heart",
      "failure",
      "condition",
      "which",
      "the",
      "cannot",
      "pump",
      "blood",
      "well",
      "should"
    ],
    "condition": "Heart Failure",
    "confidence": 95,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Condition in which the heart cannot pump blood as well as it should"
    ],
    "flaggedWarning": "Risk Level: high (20%). Consult specialist: cardiologist.",
    "reasoning": [
      "Symptom presentation (condition in which the heart cannot pump blood as well as it should) correlates strongly with diagnostic profiles for Heart Failure.",
      "Evaluated risk score: high (20%). Primary clinical pathway directs consultation with a cardiologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,lifestyle changes,surgery",
      "Referral Specialist: cardiologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "cardiologist",
    "riskLevel": "high (20%)"
  },
  {
    "keywords": [
      "kidney",
      "disease",
      "damage",
      "the",
      "kidneys",
      "that",
      "can",
      "lead",
      "failure"
    ],
    "condition": "Kidney Disease",
    "confidence": 91,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Damage to the kidneys that can lead to kidney failure"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: nephrologist.",
    "reasoning": [
      "Symptom presentation (damage to the kidneys that can lead to kidney failure) correlates strongly with diagnostic profiles for Kidney Disease.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a nephrologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for the underlying cause,such as high blood pressure,diabetes,an infection",
      "Referral Specialist: nephrologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "nephrologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "lung",
      "disease",
      "condition",
      "that",
      "affects",
      "the",
      "lungs",
      "can",
      "make",
      "difficult",
      "breathe"
    ],
    "condition": "Lung Disease",
    "confidence": 94,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Condition that affects the lungs",
      "Can make it difficult to breathe"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: pulmonologist.",
    "reasoning": [
      "Symptom presentation (condition that affects the lungs, can make it difficult to breathe) correlates strongly with diagnostic profiles for Lung Disease.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a pulmonologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for the underlying cause,such as asthma,chronic obstructive pulmonary disease (copd),pneumonia",
      "Referral Specialist: pulmonologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "pulmonologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "parkinson's",
      "disease",
      "tremors",
      "slow",
      "movement",
      "stiffness",
      "difficulty",
      "with",
      "balance",
      "coordination"
    ],
    "condition": "Parkinson's Disease",
    "confidence": 94,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Tremors",
      "Slow movement",
      "Stiffness",
      "Difficulty with balance",
      "Coordination"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: neurologist.",
    "reasoning": [
      "Symptom presentation (tremors, slow movement, stiffness) correlates strongly with diagnostic profiles for Parkinson's Disease.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a neurologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,lifestyle changes",
      "Referral Specialist: neurologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "neurologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "peptic",
      "ulcer",
      "disease",
      "pain",
      "the",
      "upper",
      "abdomen",
      "indigestion",
      "nausea",
      "vomiting"
    ],
    "condition": "Peptic Ulcer Disease",
    "confidence": 95,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Pain in the upper abdomen",
      "Indigestion",
      "Nausea",
      "Vomiting"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: gastroenterologist.",
    "reasoning": [
      "Symptom presentation (pain in the upper abdomen, indigestion, nausea) correlates strongly with diagnostic profiles for Peptic Ulcer Disease.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a gastroenterologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,lifestyle changes,surgery",
      "Referral Specialist: gastroenterologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "gastroenterologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "peripheral",
      "artery",
      "disease",
      "pain",
      "numbness",
      "tingling",
      "the",
      "arms",
      "legs"
    ],
    "condition": "Peripheral Artery Disease",
    "confidence": 95,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Pain",
      "Numbness",
      "Tingling in the arms or legs"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: vascular surgeon.",
    "reasoning": [
      "Symptom presentation (pain, numbness, tingling in the arms or legs) correlates strongly with diagnostic profiles for Peripheral Artery Disease.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a vascular surgeon.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,lifestyle changes,surgery",
      "Referral Specialist: vascular surgeon",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "vascular surgeon",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "prostate",
      "cancer",
      "difficulty",
      "urinating",
      "blood",
      "the",
      "urine",
      "pain",
      "back",
      "hips",
      "erectile",
      "dysfunction"
    ],
    "condition": "Prostate Cancer",
    "confidence": 95,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Difficulty urinating",
      "Blood in the urine",
      "Pain in the back or hips",
      "Erectile dysfunction"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: urologist.",
    "reasoning": [
      "Symptom presentation (difficulty urinating, blood in the urine, pain in the back or hips) correlates strongly with diagnostic profiles for Prostate Cancer.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a urologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery,radiation therapy,hormone therapy",
      "Referral Specialist: urologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "urologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "rheumatoid",
      "arthritis",
      "pain",
      "swelling",
      "stiffness",
      "the",
      "joints"
    ],
    "condition": "Rheumatoid Arthritis",
    "confidence": 96,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Pain",
      "Swelling",
      "Stiffness in the joints"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: rheumatologist.",
    "reasoning": [
      "Symptom presentation (pain, swelling, stiffness in the joints) correlates strongly with diagnostic profiles for Rheumatoid Arthritis.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a rheumatologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,lifestyle changes",
      "Referral Specialist: rheumatologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "rheumatologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "stomach",
      "cancer",
      "pain",
      "the",
      "upper",
      "abdomen",
      "indigestion",
      "nausea",
      "vomiting",
      "weight",
      "loss"
    ],
    "condition": "Stomach Cancer",
    "confidence": 95,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Pain in the upper abdomen",
      "Indigestion",
      "Nausea",
      "Vomiting",
      "Weight loss"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: gastroenterologist.",
    "reasoning": [
      "Symptom presentation (pain in the upper abdomen, indigestion, nausea) correlates strongly with diagnostic profiles for Stomach Cancer.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a gastroenterologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery,chemotherapy,radiation therapy",
      "Referral Specialist: gastroenterologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "gastroenterologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "thyroid",
      "cancer",
      "lump",
      "the",
      "neck",
      "hoarseness",
      "fatigue",
      "weight",
      "loss",
      "unexplained",
      "heat",
      "intolerance",
      "sensitivity",
      "cold"
    ],
    "condition": "Thyroid Cancer",
    "confidence": 92,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Lump in the neck",
      "Hoarseness",
      "Fatigue",
      "Weight loss",
      "Unexplained heat intolerance",
      "Sensitivity to cold"
    ],
    "flaggedWarning": "Risk Level: high (70%). Consult specialist: endocrinologist.",
    "reasoning": [
      "Symptom presentation (lump in the neck, hoarseness, fatigue) correlates strongly with diagnostic profiles for Thyroid Cancer.",
      "Evaluated risk score: high (70%). Primary clinical pathway directs consultation with a endocrinologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: surgery,radiation therapy,hormone therapy",
      "Referral Specialist: endocrinologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "endocrinologist",
    "riskLevel": "high (70%)"
  },
  {
    "keywords": [
      "ulcerative",
      "colitis",
      "diarrhea",
      "bloody",
      "stool",
      "abdominal",
      "pain",
      "weight",
      "loss"
    ],
    "condition": "Ulcerative Colitis",
    "confidence": 91,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Diarrhea",
      "Bloody stool",
      "Abdominal pain",
      "Weight loss"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: gastroenterologist.",
    "reasoning": [
      "Symptom presentation (diarrhea, bloody stool, abdominal pain) correlates strongly with diagnostic profiles for Ulcerative Colitis.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a gastroenterologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,surgery",
      "Referral Specialist: gastroenterologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "gastroenterologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "atopic",
      "dermatitis",
      "itchy",
      "red",
      "inflamed",
      "skin"
    ],
    "condition": "Atopic Dermatitis",
    "confidence": 96,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Itchy",
      "Red",
      "Inflamed skin"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: dermatologist.",
    "reasoning": [
      "Symptom presentation (itchy, red, inflamed skin) correlates strongly with diagnostic profiles for Atopic Dermatitis.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a dermatologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,lifestyle changes",
      "Referral Specialist: dermatologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "dermatologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "celiac",
      "disease",
      "diarrhea",
      "bloating",
      "weight",
      "loss",
      "fatigue",
      "abdominal",
      "pain"
    ],
    "condition": "Celiac Disease",
    "confidence": 93,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Diarrhea",
      "Bloating",
      "Weight loss",
      "Fatigue",
      "Abdominal pain"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: gastroenterologist.",
    "reasoning": [
      "Symptom presentation (diarrhea, bloating, weight loss) correlates strongly with diagnostic profiles for Celiac Disease.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a gastroenterologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: gluten-free diet",
      "Referral Specialist: gastroenterologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "gastroenterologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "chronic",
      "kidney",
      "disease",
      "fatigue",
      "shortness",
      "breath",
      "swelling",
      "high",
      "blood",
      "pressure",
      "changes",
      "urination"
    ],
    "condition": "Chronic Kidney Disease",
    "confidence": 98,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Fatigue",
      "Shortness of breath",
      "Swelling",
      "High blood pressure",
      "Changes in urination"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: nephrologist.",
    "reasoning": [
      "Symptom presentation (fatigue, shortness of breath, swelling) correlates strongly with diagnostic profiles for Chronic Kidney Disease.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a nephrologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: treatment for the underlying cause,such as high blood pressure,diabetes,an infection",
      "Referral Specialist: nephrologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "nephrologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "crohn's",
      "disease",
      "diarrhea",
      "bloody",
      "stool",
      "abdominal",
      "pain",
      "weight",
      "loss"
    ],
    "condition": "Crohn's Disease",
    "confidence": 91,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Diarrhea",
      "Bloody stool",
      "Abdominal pain",
      "Weight loss"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: gastroenterologist.",
    "reasoning": [
      "Symptom presentation (diarrhea, bloody stool, abdominal pain) correlates strongly with diagnostic profiles for Crohn's Disease.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a gastroenterologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,surgery",
      "Referral Specialist: gastroenterologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "gastroenterologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "graves'",
      "disease",
      "hyperthyroidism",
      "which",
      "overactive",
      "thyroid"
    ],
    "condition": "Graves' Disease",
    "confidence": 95,
    "model": "Logistic Regression Baseline",
    "detectedSymptoms": [
      "Hyperthyroidism",
      "Which is an overactive thyroid"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: endocrinologist.",
    "reasoning": [
      "Symptom presentation (hyperthyroidism, which is an overactive thyroid) correlates strongly with diagnostic profiles for Graves' Disease.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a endocrinologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,surgery",
      "Referral Specialist: endocrinologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "endocrinologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "hashimoto's",
      "thyroiditis",
      "hypothyroidism",
      "which",
      "underactive",
      "thyroid"
    ],
    "condition": "Hashimoto's Thyroiditis",
    "confidence": 96,
    "model": "XGBoost (Optimized)",
    "detectedSymptoms": [
      "Hypothyroidism",
      "Which is an underactive thyroid"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: endocrinologist.",
    "reasoning": [
      "Symptom presentation (hypothyroidism, which is an underactive thyroid) correlates strongly with diagnostic profiles for Hashimoto's Thyroiditis.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a endocrinologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication",
      "Referral Specialist: endocrinologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "endocrinologist",
    "riskLevel": "varies"
  },
  {
    "keywords": [
      "lupus",
      "chronic",
      "autoimmune",
      "disease",
      "that",
      "can",
      "affect",
      "any",
      "part",
      "the",
      "body"
    ],
    "condition": "Lupus",
    "confidence": 93,
    "model": "Random Forest Classifier",
    "detectedSymptoms": [
      "Chronic autoimmune disease that can affect any part of the body"
    ],
    "flaggedWarning": "Risk Level: varies. Consult specialist: rheumatologist.",
    "reasoning": [
      "Symptom presentation (chronic autoimmune disease that can affect any part of the body) correlates strongly with diagnostic profiles for Lupus.",
      "Evaluated risk score: varies. Primary clinical pathway directs consultation with a rheumatologist.",
      "Validated using clinical weight matrices and multi-feature decision trees."
    ],
    "recommendedActions": [
      "Clinical Interventions & Cures: medication,lifestyle changes",
      "Referral Specialist: rheumatologist",
      "Monitor for acute escalation of primary symptoms."
    ],
    "doctorSpecialist": "rheumatologist",
    "riskLevel": "varies"
  }
];

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
    region: 'Asia',
    code: 'ASIA',
    pathogen: 'Dengue Virus Serotypes 2 & 3 (DENV-2/3)',
    status: 'Active Outbreak (High Alert)',
    category: 'ongoing',
    riskLevel: 'HIGH',
    alertColor: 'bg-error-container text-on-error-container border-error/30',
    casesLast30Days: 342800,
    trend: '+24.8% vs last month (Monsoon vector surge)',
    hotspots: ['Delhi, IN', 'Mumbai, IN', 'Dhaka, BD', 'Bangkok, TH', 'Jakarta, ID'],
    timeline: 'Active Monsoon Season Escalation',
    transmission: 'Aedes aegypti / Aedes albopictus vector',
    protocol: 'Immediate daily CBC platelet count monitoring, prompt IV crystalloid resuscitation for hematocrit spike >20%, vector abatement, and strict avoidance of NSAIDs/Aspirin.'
  },
  {
    region: 'Asia',
    code: 'ASIA',
    pathogen: 'Nipah Henipavirus (Encephalitis / Severe ARDS)',
    status: 'Localized Active Cluster',
    category: 'ongoing',
    riskLevel: 'CRITICAL',
    alertColor: 'bg-error-container text-on-error-container border-error/40',
    casesLast30Days: 18,
    trend: 'Localized high-fatality cluster (40-75% CFR)',
    hotspots: ['Kozhikode & Malappuram (Kerala), IN', 'Faridpur, BD', 'Meherpur, BD'],
    timeline: 'Active Surveillance & Containment Zone',
    transmission: 'Pteropus fruit bats, date palm sap contamination, nosocomial droplet',
    protocol: 'Strict BSL-4 contact barrier isolation, perimeter surveillance, date palm sap boiling advisory, m102.4 human monoclonal antibody emergency investigational protocol.'
  },
  {
    region: 'Asia',
    code: 'ASIA',
    pathogen: 'Chikungunya Alphavirus (Debilitating Polyarthralgia)',
    status: 'Monitored Alert',
    category: 'ongoing',
    riskLevel: 'MODERATE',
    alertColor: 'bg-secondary-container text-on-secondary-container border-secondary/30',
    casesLast30Days: 64500,
    trend: '+9.2% vs last month',
    hotspots: ['Chennai, IN', 'Colombo, LK', 'Kuala Lumpur, MY', 'Phnom Penh, KH'],
    timeline: 'Active Subtropical Wave',
    transmission: 'Aedes mosquito bite',
    protocol: 'Analgesic supportive care (Paracetamol; avoid NSAIDs until Dengue ruled out), mosquito bed netting, and early physical rehabilitation for chronic joint sequelae.'
  },
  {
    region: 'Asia',
    code: 'ASIA',
    pathogen: 'Avian Influenza A (H5N1 / H9N2 Clade 2.3.4.4b)',
    status: 'Zoonotic Sentinel Alert',
    category: 'ongoing',
    riskLevel: 'HIGH',
    alertColor: 'bg-error-container text-on-error-container border-error/30',
    casesLast30Days: 32,
    trend: '+14.0% seasonal poultry migration',
    hotspots: ['Guangdong, CN', 'Hanoi, VN', 'Siem Reap, KH', 'West Bengal, IN'],
    timeline: 'Active Migratory Season Watch',
    transmission: 'Direct contact with infected poultry / wild birds',
    protocol: 'Poultry culling security perimeters, full PPE for wet-market handlers, early Oseltamivir (75mg BID for 5 days) empiric therapy, RT-PCR subtyping.'
  },
  {
    region: 'Asia',
    code: 'ASIA',
    pathogen: 'SARS-CoV-1 (Severe Acute Respiratory Syndrome)',
    status: 'Contained / Historic Baseline',
    category: 'past',
    riskLevel: 'CONTAINED',
    alertColor: 'bg-surface-container text-on-surface border-outline-variant',
    casesLast30Days: 0,
    trend: '0 Active Cases (Global eradication achieved since 2004)',
    hotspots: ['Guangdong, CN (Historic)', 'Hong Kong, HK (Historic)', 'Singapore, SG (Historic)', 'Taipei, TW (Historic)'],
    timeline: 'Historic Epidemic (Nov 2002 – Jul 2003) • Contained',
    transmission: 'Respiratory droplets, fomites, civet cat intermediate host',
    protocol: 'Historical containment legacy: Established negative pressure biocontainment wards, rapid genomic sequencing pipelines, and international border contact tracing protocols.'
  },
  {
    region: 'Asia',
    code: 'ASIA',
    pathogen: 'Japanese Encephalitis Flavivirus (JEV)',
    status: 'Vaccine-Controlled / Historic Endemic',
    category: 'past',
    riskLevel: 'CONTROLLED',
    alertColor: 'bg-surface-container text-on-surface border-outline-variant',
    casesLast30Days: 1420,
    trend: '-38.5% post-pediatric mass immunization campaign',
    hotspots: ['Gorakhpur (UP), IN', 'Nippon rural belts, JP', 'Yangon, MM'],
    timeline: 'Historic Pediatric Crisis • Controlled via Mass Vaccination',
    transmission: 'Culex tritaeniorhynchus mosquitoes breeding in flooded rice paddies',
    protocol: 'Live attenuated SA 14-14-2 pediatric vaccination campaign, pig reservoir buffer management, vector larviciding, intensive neuro-supportive ICU care.'
  },
  {
    region: 'Asia',
    code: 'ASIA',
    pathogen: 'Cholera (Vibrio cholerae O1 / O139)',
    status: 'Post-Monsoon Surveillance',
    category: 'past',
    riskLevel: 'SEASONAL RISK',
    alertColor: 'bg-secondary-container text-on-secondary-container border-secondary/30',
    casesLast30Days: 12300,
    trend: 'Periodic seasonal spikes following flood displacement',
    hotspots: ['Ganges Delta, IN/BD', 'Karachi, PK', 'Manila, PH'],
    timeline: '7th Historic Pandemic Legacy • Seasonally Managed',
    transmission: 'Fecal-oral contamination of municipal and flood water supplies',
    protocol: 'Rapid Oral Rehydration Salt (ORS) distribution, IV Ringer\'s Lactate for severe dehydration, single-dose Doxycycline (300 mg) / Azithromycin, dual-dose Oral Cholera Vaccine (OCV).'
  },
  {
    region: 'North America',
    code: 'NA',
    pathogen: 'Influenza A (H3N2)',
    status: 'High Alert',
    category: 'ongoing',
    riskLevel: 'HIGH',
    alertColor: 'bg-error-container text-on-error-container border-error/30',
    casesLast30Days: 142500,
    trend: '+18.4% vs last month',
    hotspots: ['Chicago, IL', 'New York, NY', 'Toronto, ON'],
    timeline: 'Active Winter Season Wave',
    transmission: 'Respiratory droplets',
    protocol: 'Promote annual quadrivalent influenza vaccination. Mandate isolation for symptomatic clinical staff.'
  },
  {
    region: 'Europe',
    code: 'EU',
    pathogen: 'Respiratory Syncytial Virus (RSV)',
    status: 'Moderate Alert',
    category: 'ongoing',
    riskLevel: 'MODERATE',
    alertColor: 'bg-secondary-container text-on-secondary-container border-secondary/30',
    casesLast30Days: 48900,
    trend: '-4.2% vs last month',
    hotspots: ['London, UK', 'Berlin, DE', 'Paris, FR'],
    timeline: 'Active Seasonal Wave',
    transmission: 'Direct contact, respiratory droplets',
    protocol: 'Surveillance in pediatric and geriatric wards. Administer Beyfortus (nirsevimab) to eligible infants.'
  },
  {
    region: 'Asia-Pacific',
    code: 'APAC',
    pathogen: 'Dengue Virus Serotype 2',
    status: 'High Alert',
    category: 'ongoing',
    riskLevel: 'HIGH',
    alertColor: 'bg-error-container text-on-error-container border-error/30',
    casesLast30Days: 215000,
    trend: '+32.1% vs last month',
    hotspots: ['Manila, PH', 'Bangkok, TH', 'Singapore, SG'],
    timeline: 'Active Regional Cluster',
    transmission: 'Aedes aegypti mosquito',
    protocol: 'Vector control spraying, standing water management, and platelet monitoring protocols.'
  },
  {
    region: 'Global',
    code: 'GL',
    pathogen: 'COVID-19 Subvariant JN.1',
    status: 'Monitored',
    category: 'ongoing',
    riskLevel: 'MODERATE',
    alertColor: 'bg-secondary-container text-on-secondary-container border-secondary/30',
    casesLast30Days: 610000,
    trend: '+5.6% vs last month',
    hotspots: ['Global Transportation Hubs'],
    timeline: 'Continuous Global Monitoring',
    transmission: 'Aerosolized droplets',
    protocol: 'Updated mRNA booster administration, wastewater genomic surveillance.'
  }
];

export const MODEL_PERFORMANCE_METRICS = {
  xgboost: {
    name: 'XGBoost Classifier (Primary Diagnostic Lead)',
    type: 'Extreme Gradient Boosted Decision Trees',
    accuracy: 96.65,
    trainAccuracy: 96.82,
    generalizationGap: 0.17,
    f1Score: 0.967,
    sensitivity: 96.5,
    specificity: 96.8,
    latencyMs: 18,
    confusionMatrix: [
      [7452, 258],
      [258, 7452]
    ],
    rocPoints: [
      [0, 0], [0.01, 0.88], [0.02, 0.96], [0.04, 0.98], [0.08, 0.99], [1, 1]
    ],
    foldAccuracies: [96.37, 96.37, 97.08, 97.21, 96.63, 96.24, 96.43, 96.57, 97.08, 96.56],
    features: [
      '160 Multi-Modal Diagnostic Features',
      'Continuous Telemetry Vitals & Shock Indices',
      'Biochemical Serum & Renal Lab Biomarkers',
      'Pharmacovigilance Adverse Reaction Profiles',
      '132 Diagnostic Symptom Severity Vectors'
    ],
    datasetCount: '15,420 Combined Patient Records (10-Fold Stratified CV)'
  },
  random_forest: {
    name: 'Random Forest Ensemble (Validation Check)',
    type: 'Bagging Decision Trees (250 Estimators)',
    accuracy: 96.57,
    trainAccuracy: 96.65,
    generalizationGap: 0.08,
    f1Score: 0.966,
    sensitivity: 96.4,
    specificity: 96.7,
    latencyMs: 24,
    confusionMatrix: [
      [7446, 264],
      [265, 7445]
    ],
    rocPoints: [
      [0, 0], [0.02, 0.85], [0.04, 0.94], [0.07, 0.97], [0.12, 0.98], [1, 1]
    ],
    foldAccuracies: [96.24, 96.37, 96.76, 97.08, 96.43, 96.17, 96.37, 96.56, 97.21, 96.50],
    features: [
      '160 Multi-Modal Diagnostic Features',
      'Bootstrap Aggregation Across Clinical Subsets',
      'Multi-Feature Tree Ensembling'
    ],
    datasetCount: '15,420 Combined Patient Records (10-Fold Stratified CV)'
  },
  logistic_regression: {
    name: 'L2 Logistic Regression (Low-Latency Triage)',
    type: 'L2-Regularized Linear Classifier',
    accuracy: 96.65,
    trainAccuracy: 96.72,
    generalizationGap: 0.07,
    f1Score: 0.967,
    sensitivity: 96.5,
    specificity: 96.8,
    latencyMs: 8,
    confusionMatrix: [
      [7450, 260],
      [256, 7454]
    ],
    rocPoints: [
      [0, 0], [0.02, 0.82], [0.05, 0.93], [0.09, 0.96], [0.15, 0.98], [1, 1]
    ],
    foldAccuracies: [96.50, 96.56, 96.95, 97.21, 96.30, 96.24, 96.50, 96.70, 97.08, 96.50],
    features: [
      '160 Multi-Modal Diagnostic Features',
      'L2 Ridge Penalty Preventing Collinearity',
      'Fast Linear Probability Estimation'
    ],
    datasetCount: '15,420 Combined Patient Records (10-Fold Stratified CV)'
  }
};
