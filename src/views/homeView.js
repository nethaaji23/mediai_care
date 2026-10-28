// MediAI Care+ Official Home Dashboard View
// 1. Dashboard Header: "Dashboard" + "Your personalized health insights at a glance" (Username & Logout removed)
// 2. Health Overview: 38 Symptoms Logged, 50 Treatments Taken, 5 Active Insights, 27 Days Tracking
// 3. Quick Actions: Log Symptom, Add Treatment, View Insights
// 4. MediAI Chatbot Consultation History
// 5. Two Separate Dedicated Boxes: Last 5 Searched History of Symptom Analysis & Last 5 Searched History of Drug Discovery

import { loadSavedSessions, formatFullDateTime } from './chatView.js';

// Pre-seeded realistic symptom searches (last 5 searches)
const DEFAULT_SYMPTOM_SEARCHES = [
  {
    id: 'symp_1',
    query: 'High fever, productive purulent cough, pleuritic chest pain, chills for 3 days',
    condition: 'Community-Acquired Pneumonia',
    confidence: 89.2,
    riskLevel: 'Moderate-High',
    specialist: 'Pulmonologist',
    modelLabel: 'XGBoost Lead Diagnostic (96.65%)',
    detectedSymptoms: ['high_fever', 'cough', 'chest_pain', 'chills'],
    differential: [
      { disease: 'Community-Acquired Pneumonia', probability: 0.892 },
      { disease: 'Acute Bronchitis', probability: 0.654 },
      { disease: 'Influenza A', probability: 0.421 }
    ],
    timestamp: '2026-10-24T04:12:00.000Z'
  },
  {
    id: 'symp_2',
    query: 'Severe pressure-like substernal chest pain radiating to left jaw, dyspnea, diaphoresis',
    condition: 'Acute Coronary Syndrome / Angina Pectoris',
    confidence: 74.8,
    riskLevel: 'Critical Alert',
    specialist: 'Cardiologist / Emergency',
    modelLabel: 'Random Forest Ensemble (96.57%)',
    detectedSymptoms: ['chest_pain', 'breathlessness', 'sweating'],
    differential: [
      { disease: 'Angina Pectoris', probability: 0.748 },
      { disease: 'Costochondritis', probability: 0.381 },
      { disease: 'GERD', probability: 0.225 }
    ],
    timestamp: '2026-10-23T10:45:00.000Z'
  },
  {
    id: 'symp_3',
    query: 'Nuchal rigidity, severe throbbing headache, high fever, photophobia, confusion',
    condition: 'Bacterial Meningitis (Emergency Red Flag)',
    confidence: 94.1,
    riskLevel: 'Emergency Red Flag',
    specialist: 'Infectious Disease / ER',
    modelLabel: 'XGBoost Lead Diagnostic (96.65%)',
    detectedSymptoms: ['stiff_neck', 'headache', 'high_fever'],
    differential: [
      { disease: 'Bacterial Meningitis', probability: 0.941 },
      { disease: 'Viral Meningitis', probability: 0.713 },
      { disease: 'Migraine with Aura', probability: 0.180 }
    ],
    timestamp: '2026-10-22T05:50:00.000Z'
  },
  {
    id: 'symp_4',
    query: 'Chronic fatigue, polyuria, excessive thirst (polydipsia), blurred vision, weight loss',
    condition: 'Type 2 Diabetes Mellitus',
    confidence: 88.7,
    riskLevel: 'Moderate',
    specialist: 'Endocrinologist',
    modelLabel: 'L2 Logistic Regression (96.65%)',
    detectedSymptoms: ['fatigue', 'excessive_hunger', 'blurred_and_distorted_vision'],
    differential: [
      { disease: 'Type 2 Diabetes Mellitus', probability: 0.887 },
      { disease: 'Metabolic Syndrome', probability: 0.610 },
      { disease: 'Hyperthyroidism', probability: 0.294 }
    ],
    timestamp: '2026-10-21T09:15:00.000Z'
  },
  {
    id: 'symp_5',
    query: 'Acute wheezing, dry paroxysmal cough, expiratory dyspnea, chest tightness at night',
    condition: 'Bronchial Asthma (Acute Bronchospasm)',
    confidence: 86.4,
    riskLevel: 'Moderate',
    specialist: 'Pulmonologist / Allergist',
    modelLabel: 'XGBoost Lead Diagnostic (96.65%)',
    detectedSymptoms: ['breathlessness', 'cough', 'chest_pain'],
    differential: [
      { disease: 'Bronchial Asthma', probability: 0.864 },
      { disease: 'Chronic Bronchitis', probability: 0.582 },
      { disease: 'GERD-induced Bronchospasm', probability: 0.241 }
    ],
    timestamp: '2026-10-20T08:30:00.000Z'
  }
];

// Pre-seeded realistic drug discovery searches (last 5 searches)
const DEFAULT_DRUG_SEARCHES = [
  {
    id: 'drug_1',
    query: 'Amoxicillin 500mg PO Monograph',
    drugName: 'Amoxicillin (Amoxil / Mox 500)',
    category: 'Aminopenicillin Antibiotic',
    indications: 'Bacterial otitis media, community-acquired respiratory tract infections, sinusitis, streptococcal pharyngitis.',
    dosage: '500 mg PO q8h or 875 mg PO q12h for 7-10 days.',
    mechanism: 'Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs), leading to lysis.',
    safetyAlert: 'Verify absence of beta-lactam hypersensitivity/anaphylaxis history prior to dispensing.',
    tier: 'Tier 1 FDA / RxNorm Approved',
    statusBadge: 'Prescription Rx',
    timestamp: '2026-10-24T04:45:00.000Z'
  },
  {
    id: 'drug_2',
    query: 'Warfarin + Aspirin Bleeding Risk Interaction',
    drugName: 'Warfarin Sodium + Aspirin',
    category: 'Anticoagulant + Antiplatelet Combination',
    indications: 'Concomitant atrial fibrillation and ischemic coronary disease / prosthetic heart valve management.',
    dosage: 'Warfarin individualized to target INR 2.0-2.5 + Low-dose Aspirin 81 mg once daily.',
    mechanism: 'Dual pathway hemostatic suppression (Vitamin K dependent factors II, VII, IX, X inhibition + COX-1 thromboxane A2 blockade).',
    safetyAlert: 'MAJOR BLEEDING RISK: 2.5x increase in major GI hemorrhage. Requires routine INR monitoring & PPI prophylaxis.',
    tier: 'Clinical Interaction Alert',
    statusBadge: 'Major Warning',
    timestamp: '2026-10-23T09:00:00.000Z'
  },
  {
    id: 'drug_3',
    query: 'Metformin HCl Renal Dosing & eGFR Limits',
    drugName: 'Metformin HCl (Glucophage / Glycomet 500)',
    category: 'Biguanide Antidiabetic Agent',
    indications: 'First-line therapy for type 2 diabetes mellitus glycemic control and insulin sensitization.',
    dosage: '500 mg PO BID with meals; titrate to maximum 2000-2550 mg daily in divided doses.',
    mechanism: 'Decreases hepatic gluconeogenesis, decreases intestinal absorption of glucose, and enhances peripheral insulin sensitivity.',
    safetyAlert: 'CONTRAINDICATION: Discontinue if eGFR < 30 mL/min/1.73m² due to lactic acidosis risk. Monitor renal function yearly.',
    tier: 'Tier 1 FDA / RxNorm Approved',
    statusBadge: 'Renal Caution',
    timestamp: '2026-10-22T11:40:00.000Z'
  },
  {
    id: 'drug_4',
    query: 'Levofloxacin Fluoroquinolone Safety Profile',
    drugName: 'Levofloxacin (Levaquin / Tavanic 500)',
    category: 'Respiratory Fluoroquinolone',
    indications: 'Community-acquired pneumonia, pyelonephritis, complicated skin and soft tissue infections.',
    dosage: '500 mg to 750 mg PO/IV once daily for 5-14 days based on pathogen and site.',
    mechanism: 'Inhibits bacterial DNA gyrase and topoisomerase IV, interrupting DNA replication and transcription.',
    safetyAlert: 'FDA BLACK BOX WARNING: Discontinue immediately on first sign of tendonitis, tendon rupture, or peripheral neuropathy.',
    tier: 'Tier 1 FDA / RxNorm Approved',
    statusBadge: 'Boxed Warning',
    timestamp: '2026-10-21T09:50:00.000Z'
  },
  {
    id: 'drug_5',
    query: 'Semaglutide 0.5mg SC Dosing & Glycemic Control',
    drugName: 'Semaglutide (Ozempic / Wegovy)',
    category: 'GLP-1 Receptor Agonist',
    indications: 'Type 2 diabetes mellitus glycemic management, weight regulation, and major adverse cardiac event prevention.',
    dosage: '0.25 mg SC weekly for 4 weeks; escalate to 0.5 mg, up to max 2.0 mg weekly.',
    mechanism: 'Selectively binds and activates GLP-1 receptors, stimulating glucose-dependent insulin secretion and slowing gastric emptying.',
    safetyAlert: 'BOXED WARNING: Medullary thyroid carcinoma risk (contraindicated in MEN 2). Discontinue if pancreatitis suspected.',
    tier: 'Tier 1 FDA / RxNorm Approved',
    statusBadge: 'Prescription Rx',
    timestamp: '2026-10-20T07:15:00.000Z'
  }
];

export function loadSymptomSearches() {
  try {
    const raw = localStorage.getItem('mediai_symptom_search_history');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Could not read symptom search history:', e);
  }
  return DEFAULT_SYMPTOM_SEARCHES;
}

export function loadDrugSearches() {
  try {
    const raw = localStorage.getItem('mediai_drug_search_history');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Could not read drug search history:', e);
  }
  return DEFAULT_DRUG_SEARCHES;
}

export function renderHomeView(navigateTo) {
  const container = document.createElement('div');
  container.className = 'w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-7 flex flex-col gap-6 text-on-surface';

  // Dynamic formatted date matching reference
  const now = new Date();
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const formattedDate = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;

  // Load real-time stored chat sessions, symptom searches, and drug searches
  const currentUser = (function() {
    try {
      const raw = localStorage.getItem('mediai_auth_user');
      if (raw) {
        const p = JSON.parse(raw);
        if (p && p.name) return p;
      }
    } catch (e) {}
    const saved = localStorage.getItem('mediai_user_name');
    if (saved) return { name: saved };
    return { name: 'User' };
  })();
  const userName = currentUser.name || 'User';
  const allChatSessions = loadSavedSessions();
  const allSymptomSearches = loadSymptomSearches();
  const allDrugSearches = loadDrugSearches();

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function cleanSnippet(text, maxLength = 130) {
    if (!text) return '';
    const clean = text
      .replace(/#{1,6}\s+/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\|/g, ' ')
      .replace(/[-*]\s+/g, '')
      .replace(/\n+/g, ' ')
      .trim();
    return clean.length > maxLength ? clean.substring(0, maxLength) + '...' : clean;
  }

  container.innerHTML = `
    <!-- Top Header: Title "Dashboard" and Subtitle (Username and Logout removed) -->
    <section class="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1 border-b border-outline-variant/60 pb-5">
      <div class="flex flex-col gap-1.5">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider font-mono-data">
            ${formattedDate}
          </span>
          <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-bold font-mono-data flex items-center gap-1.5 shadow-2xs">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Clinical Diagnostic Intelligence Active
          </span>
        </div>
        
        <h1 class="text-3xl sm:text-4xl font-black text-primary tracking-tight leading-tight">
          Dashboard
        </h1>
        
        <p class="text-xs sm:text-sm text-on-surface-variant font-medium">
          Welcome back, <strong class="text-primary font-bold">${userName}</strong> &bull; Your personalized health insights at a glance
        </p>
      </div>
    </section>

    <!-- SECTION 1: Health Overview Card (Exact Replica of Reference Screenshot) -->
    <section class="w-full bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col gap-4">
      <div class="flex items-center justify-between border-b border-outline-variant/50 pb-3">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-emerald-800 text-xl">bar_chart</span>
          <h2 class="text-base sm:text-lg font-bold text-primary tracking-tight">Health Overview</h2>
        </div>
        <span class="text-xs font-mono-data text-on-surface-variant">Live Telemetry &bull; Audited Metrics</span>
      </div>

      <!-- 4 Stats Grid Matching Reference Screenshot: 38 Symptoms Logged, 50 Treatments Taken, 5 Active Insights, 27 Days Tracking -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
        <!-- Card 1: 38 Symptoms Logged -->
        <div class="p-4 sm:p-5 rounded-2xl bg-[#f0f9f4] border border-emerald-200/80 flex items-center gap-3.5 transition-all hover:shadow-2xs">
          <div class="text-3xl sm:text-4xl shrink-0 select-none">🤒</div>
          <div class="flex flex-col">
            <span class="text-2xl sm:text-3xl font-black text-emerald-900 font-mono-data leading-none">38</span>
            <span class="text-xs sm:text-sm font-semibold text-emerald-950/80 mt-1">Symptoms Logged</span>
          </div>
        </div>

        <!-- Card 2: 50 Treatments Taken -->
        <div class="p-4 sm:p-5 rounded-2xl bg-[#f0f9f4] border border-emerald-200/80 flex items-center gap-3.5 transition-all hover:shadow-2xs">
          <div class="text-3xl sm:text-4xl shrink-0 select-none">💊</div>
          <div class="flex flex-col">
            <span class="text-2xl sm:text-3xl font-black text-emerald-900 font-mono-data leading-none">50</span>
            <span class="text-xs sm:text-sm font-semibold text-emerald-950/80 mt-1">Treatments Taken</span>
          </div>
        </div>

        <!-- Card 3: 5 Active Insights -->
        <div class="p-4 sm:p-5 rounded-2xl bg-[#f0f9f4] border border-emerald-200/80 flex items-center gap-3.5 transition-all hover:shadow-2xs cursor-pointer group" id="card-stat-insights" title="Click to view all 5 Active Insights">
          <div class="text-3xl sm:text-4xl shrink-0 select-none group-hover:scale-110 transition-transform">🔔</div>
          <div class="flex flex-col">
            <span class="text-2xl sm:text-3xl font-black text-emerald-900 font-mono-data leading-none group-hover:text-emerald-700 transition-colors">5</span>
            <span class="text-xs sm:text-sm font-semibold text-emerald-950/80 mt-1">Active Insights</span>
          </div>
        </div>

        <!-- Card 4: 27 Days Tracking -->
        <div class="p-4 sm:p-5 rounded-2xl bg-[#f0f9f4] border border-emerald-200/80 flex items-center gap-3.5 transition-all hover:shadow-2xs">
          <div class="text-3xl sm:text-4xl shrink-0 select-none">📈</div>
          <div class="flex flex-col">
            <span class="text-2xl sm:text-3xl font-black text-emerald-900 font-mono-data leading-none">27</span>
            <span class="text-xs sm:text-sm font-semibold text-emerald-950/80 mt-1">Days Tracking</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: Quick Actions Card (Exact Replica of Reference Screenshot) -->
    <section class="w-full bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col gap-4">
      <div class="flex items-center justify-between border-b border-outline-variant/50 pb-3">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-amber-600 text-xl">bolt</span>
          <h2 class="text-base sm:text-lg font-bold text-primary tracking-tight">Quick Actions</h2>
        </div>
        <span class="text-xs text-on-surface-variant font-medium">One-click clinical workflows</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
        <!-- Quick Action 1: Log Symptom -->
        <button id="btn-quick-log-symptom" class="p-4 sm:p-5 rounded-2xl bg-surface-container-low hover:bg-emerald-50/70 border border-outline-variant/70 hover:border-emerald-300 text-left flex items-center gap-4 transition-all group cursor-pointer shadow-2xs hover:shadow-xs">
          <div class="text-3xl shrink-0 select-none group-hover:scale-110 transition-transform">🤒</div>
          <div class="flex flex-col">
            <strong class="text-sm sm:text-base font-bold text-primary group-hover:text-emerald-900 transition-colors">Log Symptom</strong>
            <span class="text-xs text-on-surface-variant mt-0.5">Track how you're feeling right now</span>
          </div>
          <span class="material-symbols-outlined text-emerald-800 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
        </button>

        <!-- Quick Action 2: Add Treatment / Drug Discovery -->
        <button id="btn-quick-add-treatment" class="p-4 sm:p-5 rounded-2xl bg-surface-container-low hover:bg-emerald-50/70 border border-outline-variant/70 hover:border-emerald-300 text-left flex items-center gap-4 transition-all group cursor-pointer shadow-2xs hover:shadow-xs">
          <div class="text-3xl shrink-0 select-none group-hover:scale-110 transition-transform">💊</div>
          <div class="flex flex-col">
            <strong class="text-sm sm:text-base font-bold text-primary group-hover:text-emerald-900 transition-colors">Add Treatment</strong>
            <span class="text-xs text-on-surface-variant mt-0.5">Record medications or therapies</span>
          </div>
          <span class="material-symbols-outlined text-emerald-800 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
        </button>

        <!-- Quick Action 3: View Insights -->
        <button id="btn-quick-view-insights" class="p-4 sm:p-5 rounded-2xl bg-surface-container-low hover:bg-emerald-50/70 border border-outline-variant/70 hover:border-emerald-300 text-left flex items-center gap-4 transition-all group cursor-pointer shadow-2xs hover:shadow-xs">
          <div class="text-3xl shrink-0 select-none group-hover:scale-110 transition-transform">🔔</div>
          <div class="flex flex-col">
            <strong class="text-sm sm:text-base font-bold text-primary group-hover:text-emerald-900 transition-colors">View Insights</strong>
            <span class="text-xs text-on-surface-variant mt-0.5">See AI-powered health patterns</span>
          </div>
          <span class="material-symbols-outlined text-emerald-800 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
        </button>
      </div>
    </section>

    <!-- SECTION 3: MediAI Chatbot Consultation History -->
    <section class="w-full flex flex-col gap-4 bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-5 sm:p-6 shadow-xs">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant/60 pb-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center shadow-xs shrink-0">
            <span class="material-symbols-outlined text-[22px]">smart_toy</span>
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h3 class="text-base sm:text-lg font-bold text-primary tracking-tight">
                MediAI Chatbot Consultation History
              </h3>
              <span class="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-mono-data text-[10px] font-bold" id="home-history-count-badge">
                ${allChatSessions.length} Sessions
              </span>
            </div>
            <p class="text-xs text-on-surface-variant mt-0.5">
              Maintained clinical consultation transcripts and triage records
            </p>
          </div>
        </div>

        <!-- Chat Header Controls -->
        <div class="flex items-center gap-2">
          <button id="btn-home-new-chat" class="px-3.5 py-1.5 rounded-xl bg-secondary hover:bg-on-secondary-fixed-variant text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer">
            <span class="material-symbols-outlined text-[15px]">add</span>
            <span>New Consultation</span>
          </button>
          <button id="btn-home-open-chat-hub" class="px-3.5 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant text-primary text-xs font-bold transition-all flex items-center gap-1 cursor-pointer">
            <span>Open Chat Hub</span>
            <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>
      </div>

      <!-- Real-Time Search Filter for Chat History -->
      <div class="relative w-full">
        <span class="material-symbols-outlined text-[16px] text-on-surface-variant absolute left-3 top-2.5">search</span>
        <input 
          id="home-chat-filter-input" 
          type="text" 
          placeholder="Search chat history (e.g. Pneumonia, Warfarin, Meningitis, बुखार, காய்ச்சல்)..." 
          class="w-full pl-9 pr-3 py-2 bg-surface-container-low border border-outline-variant/60 rounded-xl text-xs text-primary focus:outline-none focus:border-secondary transition-all"
        />
      </div>

      <!-- Chat Sessions List (Dynamically populated & filterable) -->
      <div id="home-chat-sessions-container" class="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
        <!-- Rendered by populateChatHistoryList -->
      </div>
    </section>

    <!-- SECTION 4: TWO SEPARATE BOXES (DISPLAYING STRICTLY THE LAST 5 SEARCHES) -->
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      
      <!-- BOX 1: User's Search on Symptoms (Displaying Last 5 Searched History) -->
      <section class="w-full bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col gap-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant/60 pb-3">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">analytics</span>
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-sm sm:text-base font-bold text-primary tracking-tight">
                  Recent Symptom Searches (Last 5)
                </h3>
                <span class="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 font-mono-data text-[10px] font-bold" id="symptom-history-badge">
                  Last 5 Searches
                </span>
              </div>
              <p class="text-[11px] text-on-surface-variant">
                Evaluated against 80+ diseases with multi-model consensus
              </p>
            </div>
          </div>

          <!-- Action Button: Log New Symptoms -->
          <button id="btn-home-log-new-symptoms" class="px-3 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all flex items-center gap-1 shadow-2xs cursor-pointer shrink-0">
            <span class="material-symbols-outlined text-[15px]">add</span>
            <span>Check Symptoms</span>
          </button>
        </div>

        <!-- Filter Input for Symptom History -->
        <div class="relative w-full">
          <span class="material-symbols-outlined text-[16px] text-on-surface-variant absolute left-3 top-2.5">search</span>
          <input 
            id="home-symptom-filter-input" 
            type="text" 
            placeholder="Filter recent 5 symptom queries (e.g. fever, chest pain, diabetes)..." 
            class="w-full pl-9 pr-3 py-2 bg-surface-container-low border border-outline-variant/60 rounded-xl text-xs text-primary focus:outline-none focus:border-emerald-700 transition-all"
          />
        </div>

        <!-- Symptom Searches List Container (Displaying strictly the last 5) -->
        <div id="home-symptom-searches-container" class="flex flex-col gap-3 max-h-[480px] overflow-y-auto pr-1 custom-scrollbar">
          <!-- Rendered by renderSymptomSearches -->
        </div>
      </section>

      <!-- BOX 2: User's Search on Drug Discovery (Displaying Last 5 Searched History) -->
      <section class="w-full bg-surface-container-lowest border border-outline-variant/70 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col gap-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant/60 pb-3">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-sky-50 border border-sky-300 text-sky-800 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">medication</span>
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-sm sm:text-base font-bold text-primary tracking-tight">
                  Recent Drug Discovery Searches (Last 5)
                </h3>
                <span class="px-2 py-0.5 rounded-full bg-sky-50 border border-sky-300 text-sky-800 font-mono-data text-[10px] font-bold" id="drug-history-badge">
                  Last 5 Searches
                </span>
              </div>
              <p class="text-[11px] text-on-surface-variant">
                4-Tier Pharmacopeia &amp; interaction checks
              </p>
            </div>
          </div>

          <!-- Action Button: Search Drug Catalog -->
          <button id="btn-home-search-drug-catalog" class="px-3 py-1.5 rounded-xl bg-sky-800 hover:bg-sky-900 text-white text-xs font-bold transition-all flex items-center gap-1 shadow-2xs cursor-pointer shrink-0">
            <span class="material-symbols-outlined text-[15px]">search</span>
            <span>Drug Catalog</span>
          </button>
        </div>

        <!-- Filter Input for Drug History -->
        <div class="relative w-full">
          <span class="material-symbols-outlined text-[16px] text-on-surface-variant absolute left-3 top-2.5">search</span>
          <input 
            id="home-drug-filter-input" 
            type="text" 
            placeholder="Filter recent 5 drug searches (e.g. amoxicillin, warfarin, metformin)..." 
            class="w-full pl-9 pr-3 py-2 bg-surface-container-low border border-outline-variant/60 rounded-xl text-xs text-primary focus:outline-none focus:border-sky-700 transition-all"
          />
        </div>

        <!-- Drug Searches List Container (Displaying strictly the last 5) -->
        <div id="home-drug-searches-container" class="flex flex-col gap-3 max-h-[480px] overflow-y-auto pr-1 custom-scrollbar">
          <!-- Rendered by renderDrugSearches -->
        </div>
      </section>

    </div>
  `;

  // ==========================================
  // RENDER FUNCTION: MediAI Chat History Cards
  // ==========================================
  function renderHomeChatSessions(filterQuery = '') {
    const chatContainer = container.querySelector('#home-chat-sessions-container');
    if (!chatContainer) return;

    const q = filterQuery.toLowerCase().trim();
    const sessions = loadSavedSessions();
    const filtered = sessions.filter(s => 
      (s.title && s.title.toLowerCase().includes(q)) ||
      (s.messages && s.messages.some(m => m.content && m.content.toLowerCase().includes(q)))
    );

    const countBadge = container.querySelector('#home-history-count-badge');
    if (countBadge) countBadge.textContent = `${sessions.length} Sessions`;

    if (filtered.length === 0) {
      chatContainer.innerHTML = `
        <div class="col-span-full text-center p-6 bg-surface-container-low/40 rounded-xl border border-outline-variant/60 flex flex-col items-center gap-2">
          <span class="material-symbols-outlined text-2xl text-on-surface-variant">forum</span>
          <p class="text-xs text-on-surface-variant">No consultations match "${escapeHtml(filterQuery)}".</p>
          <button id="btn-empty-start-chat" class="px-3.5 py-1.5 rounded-lg bg-secondary text-white text-xs font-bold transition-all cursor-pointer mt-1">
            Start New Consultation
          </button>
        </div>
      `;
      const emptyBtn = chatContainer.querySelector('#btn-empty-start-chat');
      if (emptyBtn) {
        emptyBtn.addEventListener('click', () => navigateTo('chat', { newSession: true }));
      }
      return;
    }

    chatContainer.innerHTML = filtered.map(s => {
      const userMsg = (s.messages && s.messages.find(m => m.role === 'user'))?.content || '';
      const assistantMsg = (s.messages && s.messages.find(m => m.role === 'assistant'))?.content || '';
      const msgCount = s.messages ? s.messages.length : 0;
      const formattedTime = formatFullDateTime(s.createdAt);

      return `
        <div class="home-chat-card p-3.5 bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 hover:border-secondary/60 rounded-xl transition-all shadow-2xs flex flex-col justify-between gap-2.5">
          <div>
            <div class="flex items-start justify-between gap-2 mb-1.5">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <strong class="text-xs font-bold text-primary truncate max-w-[220px]">${escapeHtml(s.title || 'Clinical Consultation')}</strong>
              </div>
              <div class="flex items-center gap-1.5 text-[10px] font-mono-data text-on-surface-variant shrink-0">
                <span class="material-symbols-outlined text-[12px] text-secondary">calendar_today</span>
                <span>${formattedTime}</span>
                <span class="px-1.5 py-0.2 rounded bg-surface-container-lowest border border-outline-variant/60 font-bold ml-0.5">${msgCount} msgs</span>
              </div>
            </div>

            <!-- Preview of User Query & Assistant Response -->
            <div class="space-y-1.5">
              ${userMsg ? `
                <div class="text-[11px] text-on-surface-variant bg-surface-container-lowest/90 p-2 rounded-lg border border-outline-variant/40 line-clamp-2">
                  <span class="font-bold text-primary">Patient:</span> "${escapeHtml(cleanSnippet(userMsg, 120))}"
                </div>
              ` : ''}

              ${assistantMsg ? `
                <div class="text-[11px] text-emerald-950 bg-emerald-50/70 p-2 rounded-lg border border-emerald-200/60 line-clamp-2">
                  <span class="font-bold text-emerald-900">MediAI:</span> ${escapeHtml(cleanSnippet(assistantMsg, 130))}
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Card Bottom Actions & Badges -->
          <div class="flex items-center justify-between pt-1 border-t border-outline-variant/40 text-[11px] mt-1">
            <div class="flex items-center gap-1.5 text-[10px] font-mono-data text-emerald-800">
              <span class="material-symbols-outlined text-[13px] text-emerald-600">verified_user</span>
              <span>Groq LPU™ Guardrails</span>
            </div>
            <button class="btn-resume-chat-session px-3 py-1 rounded-lg bg-secondary hover:bg-on-secondary-fixed-variant text-white font-bold text-xs shadow-2xs transition-all flex items-center gap-1 cursor-pointer" data-session-id="${s.id}">
              <span>Resume Chat</span>
              <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to Resume Chat buttons
    chatContainer.querySelectorAll('.btn-resume-chat-session').forEach(btn => {
      btn.addEventListener('click', () => {
        const sessionId = btn.getAttribute('data-session-id');
        navigateTo('chat', { sessionId });
      });
    });
  }

  // =========================================================================
  // RENDER FUNCTION: Box 1 - Symptom Searches (Strictly Last 5 Searched History)
  // =========================================================================
  function renderSymptomSearches(filterQuery = '') {
    const listContainer = container.querySelector('#home-symptom-searches-container');
    if (!listContainer) return;

    const q = filterQuery.toLowerCase().trim();
    const searches = loadSymptomSearches();
    const matched = q ? searches.filter(s =>
      (s.query && s.query.toLowerCase().includes(q)) ||
      (s.condition && s.condition.toLowerCase().includes(q)) ||
      (s.specialist && s.specialist.toLowerCase().includes(q))
    ) : searches;

    // Display STRICTLY the last 5 searches
    const filtered = matched.slice(0, 5);

    const badge = container.querySelector('#symptom-history-badge');
    if (badge) badge.textContent = `Last ${filtered.length} Searches`;

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center p-6 bg-surface-container-low/40 rounded-xl border border-outline-variant/60 flex flex-col items-center gap-2">
          <span class="material-symbols-outlined text-2xl text-on-surface-variant">search_off</span>
          <p class="text-xs text-on-surface-variant">No symptom searches match "${escapeHtml(filterQuery)}".</p>
          <button id="btn-empty-symptom-search" class="px-3.5 py-1.5 rounded-lg bg-emerald-800 text-white text-xs font-bold transition-all cursor-pointer mt-1">
            Analyze New Symptoms
          </button>
        </div>
      `;
      const btn = listContainer.querySelector('#btn-empty-symptom-search');
      if (btn) btn.addEventListener('click', () => navigateTo('analyze'));
      return;
    }

    listContainer.innerHTML = filtered.map(item => {
      const formattedTime = formatFullDateTime(item.timestamp);
      const isRedFlag = item.riskLevel && (item.riskLevel.includes('Critical') || item.riskLevel.includes('Red Flag') || item.riskLevel.includes('Emergency'));
      const riskClass = isRedFlag
        ? 'bg-red-50 text-red-800 border-red-300'
        : 'bg-emerald-50 text-emerald-800 border-emerald-300';

      return `
        <div class="symptom-search-card p-3.5 bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 hover:border-emerald-600/50 rounded-xl transition-all shadow-2xs flex flex-col gap-2.5">
          <div class="flex items-start justify-between gap-2">
            <div class="flex flex-col">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-bold text-primary">${escapeHtml(item.condition)}</span>
                <span class="px-2 py-0.5 rounded-full border text-[10px] font-mono-data font-bold ${riskClass}">
                  ${escapeHtml(item.riskLevel || 'Moderate')}
                </span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-mono-data text-[10px] font-bold">
                  ${item.confidence}% Match
                </span>
              </div>
              <span class="text-[10px] text-on-surface-variant font-mono-data mt-0.5">
                ${formattedTime} &bull; ${escapeHtml(item.modelLabel || 'XGBoost Consensus')}
              </span>
            </div>

            <button class="btn-reevaluate-symptom px-2.5 py-1 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-emerald-700 text-emerald-900 font-bold text-xs shadow-2xs transition-all flex items-center gap-1 cursor-pointer shrink-0" data-query="${escapeHtml(item.query)}">
              <span>Re-Evaluate</span>
              <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
            </button>
          </div>

          <!-- Query text -->
          <div class="text-[11px] text-on-surface-variant bg-surface-container-lowest/80 p-2 rounded-lg border border-outline-variant/40">
            <span class="font-bold text-primary">Reported:</span> "${escapeHtml(item.query)}"
          </div>

          <!-- Differential diagnosis pills & Specialist recommendation -->
          <div class="flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-outline-variant/40 text-[11px]">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[10px] font-bold text-on-surface-variant uppercase font-mono-data">Differential:</span>
              ${(item.differential || []).slice(0, 2).map(d => `
                <span class="px-1.5 py-0.2 rounded bg-surface-container-lowest border border-outline-variant/60 text-[10px] font-mono-data">
                  ${escapeHtml(d.disease || d)} (${d.probability ? Math.round(d.probability * 100) + '%' : ''})
                </span>
              `).join('')}
            </div>

            <div class="text-[10px] text-emerald-800 font-bold font-mono-data flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px]">stethoscope</span>
              <span>Referral: ${escapeHtml(item.specialist || 'General Medicine')}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to Re-Evaluate buttons
    listContainer.querySelectorAll('.btn-reevaluate-symptom').forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-query');
        navigateTo('analyze', { initialQuery: query });
      });
    });
  }

  // =========================================================================
  // RENDER FUNCTION: Box 2 - Drug Searches (Strictly Last 5 Searched History)
  // =========================================================================
  function renderDrugSearches(filterQuery = '') {
    const listContainer = container.querySelector('#home-drug-searches-container');
    if (!listContainer) return;

    const q = filterQuery.toLowerCase().trim();
    const searches = loadDrugSearches();
    const matched = q ? searches.filter(d =>
      (d.query && d.query.toLowerCase().includes(q)) ||
      (d.drugName && d.drugName.toLowerCase().includes(q)) ||
      (d.category && d.category.toLowerCase().includes(q)) ||
      (d.indications && d.indications.toLowerCase().includes(q))
    ) : searches;

    // Display STRICTLY the last 5 searches
    const filtered = matched.slice(0, 5);

    const badge = container.querySelector('#drug-history-badge');
    if (badge) badge.textContent = `Last ${filtered.length} Searches`;

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center p-6 bg-surface-container-low/40 rounded-xl border border-outline-variant/60 flex flex-col items-center gap-2">
          <span class="material-symbols-outlined text-2xl text-on-surface-variant">search_off</span>
          <p class="text-xs text-on-surface-variant">No drug searches match "${escapeHtml(filterQuery)}".</p>
          <button id="btn-empty-drug-search" class="px-3.5 py-1.5 rounded-lg bg-sky-800 text-white text-xs font-bold transition-all cursor-pointer mt-1">
            Search Drug Catalog
          </button>
        </div>
      `;
      const btn = listContainer.querySelector('#btn-empty-drug-search');
      if (btn) btn.addEventListener('click', () => navigateTo('drugs'));
      return;
    }

    listContainer.innerHTML = filtered.map(item => {
      const formattedTime = formatFullDateTime(item.timestamp);
      const isWarning = item.statusBadge && (item.statusBadge.includes('Warning') || item.statusBadge.includes('Caution') || item.statusBadge.includes('Risk'));
      const badgeClass = isWarning
        ? 'bg-amber-50 text-amber-900 border-amber-300'
        : 'bg-sky-50 text-sky-800 border-sky-300';

      return `
        <div class="drug-search-card p-3.5 bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 hover:border-sky-600/50 rounded-xl transition-all shadow-2xs flex flex-col gap-2.5">
          <div class="flex items-start justify-between gap-2">
            <div class="flex flex-col">
              <div class="flex items-center gap-2 flex-wrap">
                <strong class="text-xs font-bold text-primary">${escapeHtml(item.drugName || item.query)}</strong>
                <span class="px-2 py-0.5 rounded-full border text-[10px] font-mono-data font-bold ${badgeClass}">
                  ${escapeHtml(item.statusBadge || 'Rx Approved')}
                </span>
                <span class="text-[10px] font-mono-data text-sky-800 font-bold bg-sky-100/70 px-2 py-0.5 rounded-full">
                  ${escapeHtml(item.category || 'Therapeutic Agent')}
                </span>
              </div>
              <span class="text-[10px] text-on-surface-variant font-mono-data mt-0.5">
                ${formattedTime} &bull; ${escapeHtml(item.tier || 'Tier 1 FDA / RxNorm Verified')}
              </span>
            </div>

            <button class="btn-view-monograph-action px-2.5 py-1 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-sky-700 text-sky-900 font-bold text-xs shadow-2xs transition-all flex items-center gap-1 cursor-pointer shrink-0" data-query="${escapeHtml(item.query || item.drugName)}">
              <span>View Monograph</span>
              <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
            </button>
          </div>

          <!-- Dosage and Indications -->
          <div class="text-[11px] space-y-1">
            <div class="text-on-surface-variant">
              <span class="font-bold text-primary">Indications:</span> ${escapeHtml(cleanSnippet(item.indications || 'Approved clinical indications', 110))}
            </div>
            ${item.dosage ? `
              <div class="font-mono-data text-[10px] text-secondary font-bold">
                Regimen: ${escapeHtml(cleanSnippet(item.dosage, 90))}
              </div>
            ` : ''}
          </div>

          <!-- Safety Alert / Warning Banner -->
          ${item.safetyAlert ? `
            <div class="p-2 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-[10px] text-on-surface-variant leading-relaxed">
              <strong class="text-amber-800">Safety Advisory:</strong> ${escapeHtml(cleanSnippet(item.safetyAlert, 130))}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Attach click listeners to View Monograph buttons
    listContainer.querySelectorAll('.btn-view-monograph-action').forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-query');
        navigateTo('drugs', { initialQuery: query });
      });
    });
  }

  // ==========================================
  // INSIGHTS MODAL (For "View Insights" button)
  // ==========================================
  function openInsightsModal() {
    const existing = document.getElementById('active-insights-modal');
    if (existing) existing.remove();

    const backdrop = document.createElement('div');
    backdrop.id = 'active-insights-modal';
    backdrop.className = 'fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn';

    backdrop.innerHTML = `
      <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden transform scale-95 animate-scaleUp p-6 flex flex-col gap-5 max-h-[90vh] overflow-y-auto custom-scrollbar">
        <div class="flex items-center justify-between border-b border-outline-variant/60 pb-3">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[24px]">insights</span>
            </div>
            <div class="flex flex-col">
              <h3 class="text-lg font-bold text-primary leading-tight">5 Active AI-Powered Health Insights</h3>
              <p class="text-xs text-on-surface-variant font-mono-data mt-0.5">Continuous Clinical Telemetry</p>
            </div>
          </div>
          <button id="btn-close-insights-modal" class="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        <div class="flex flex-col gap-3.5 text-xs text-on-surface">
          <!-- Insight 1 -->
          <div class="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3">
            <span class="text-xl shrink-0">💡</span>
            <div class="flex flex-col gap-1">
              <strong class="text-emerald-950 font-bold">1. High-Concordance Differential Diagnostic Consensus</strong>
              <p class="text-emerald-900/90 leading-relaxed">
                Your 38 logged symptom consultations show a <strong>98.4% diagnostic concordance</strong> across XGBoost, Random Forest, and L2 Logistic Regression. Respiratory presentations (Pneumonia, Bronchitis) were accurately distinguished from upper viral infections with sub-second inference.
              </p>
            </div>
          </div>

          <!-- Insight 2 -->
          <div class="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200/80 flex items-start gap-3">
            <span class="text-xl shrink-0">💊</span>
            <div class="flex flex-col gap-1">
              <strong class="text-sky-950 font-bold">2. Polypharmacy Safety &amp; Drug Interaction Clearance</strong>
              <p class="text-sky-900/90 leading-relaxed">
                50 pharmacological evaluations logged. The real-time interaction screening engine successfully intercepted synergistic bleeding risks in <em>Warfarin + Aspirin</em>, while routine antimicrobials (Amoxicillin, Azithromycin) maintain zero active contraindications.
              </p>
            </div>
          </div>

          <!-- Insight 3 -->
          <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
            <span class="text-xl shrink-0">🔔</span>
            <div class="flex flex-col gap-1">
              <strong class="text-amber-950 font-bold">3. Regional Epidemiological Alert Calibration</strong>
              <p class="text-amber-900/90 leading-relaxed">
                Local surveillance indicators report a <strong>14.2% seasonal elevation</strong> in respiratory tract presentations within the regional healthcare district. The triage engine has dynamically weighted bacterial vs. viral differential probabilities accordingly.
              </p>
            </div>
          </div>

          <!-- Insight 4 -->
          <div class="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200/80 flex items-start gap-3">
            <span class="text-xl shrink-0">🩺</span>
            <div class="flex flex-col gap-1">
              <strong class="text-purple-950 font-bold">4. Preventive Metabolic Panel Trajectory</strong>
              <p class="text-purple-900/90 leading-relaxed">
                Analysis of symptoms over 27 tracking days reveals consistent metabolic metrics. Periodic fasting plasma glucose and eGFR surveillance is recommended within the upcoming 30 days to sustain proactive clinical baseline monitoring.
              </p>
            </div>
          </div>

          <!-- Insight 5 -->
          <div class="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200/80 flex items-start gap-3">
            <span class="text-xl shrink-0">📈</span>
            <div class="flex flex-col gap-1">
              <strong class="text-teal-950 font-bold">5. 27 Days Health Tracking Consistency Milestone</strong>
              <p class="text-teal-900/90 leading-relaxed">
                Continuous health and vital telemetry tracking has reached 27 days. Continuous tracking significantly enhances machine learning calibration and reduces false-positive differential flags.
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between gap-3 pt-3 border-t border-outline-variant/60 flex-wrap">
          <button id="btn-insights-view-models" class="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant text-primary text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
            <span class="material-symbols-outlined text-[16px]">speed</span>
            <span>View ML Model Benchmarks (98.4%)</span>
          </button>
          
          <div class="flex items-center gap-2">
            <button id="btn-insights-open-chat" class="px-4 py-2 rounded-xl bg-secondary hover:bg-on-secondary-fixed-variant text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs">
              <span class="material-symbols-outlined text-[16px]">forum</span>
              <span>Discuss with MediAI Chatbot</span>
            </button>
            <button id="btn-insights-close" class="px-4 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-primary text-xs font-bold transition-all cursor-pointer">
              Close
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    backdrop.querySelector('#btn-close-insights-modal').addEventListener('click', close);
    backdrop.querySelector('#btn-insights-close').addEventListener('click', close);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });

    backdrop.querySelector('#btn-insights-view-models').addEventListener('click', () => {
      close();
      navigateTo('performance');
    });

    backdrop.querySelector('#btn-insights-open-chat').addEventListener('click', () => {
      close();
      navigateTo('chat', { newSession: true });
    });
  }

  // Initial rendering of sections
  renderHomeChatSessions();
  renderSymptomSearches();
  renderDrugSearches();

  // ==========================================
  // ATTACH EVENT LISTENERS
  // ==========================================

  // Quick Actions Button Listeners
  const btnQuickLogSymptom = container.querySelector('#btn-quick-log-symptom');
  if (btnQuickLogSymptom) {
    btnQuickLogSymptom.addEventListener('click', () => navigateTo('analyze'));
  }

  const btnQuickAddTreatment = container.querySelector('#btn-quick-add-treatment');
  if (btnQuickAddTreatment) {
    btnQuickAddTreatment.addEventListener('click', () => navigateTo('drugs'));
  }

  const btnQuickViewInsights = container.querySelector('#btn-quick-view-insights');
  if (btnQuickViewInsights) {
    btnQuickViewInsights.addEventListener('click', openInsightsModal);
  }

  const cardStatInsights = container.querySelector('#card-stat-insights');
  if (cardStatInsights) {
    cardStatInsights.addEventListener('click', openInsightsModal);
  }

  // Search Filters Listeners
  const chatFilterInput = container.querySelector('#home-chat-filter-input');
  if (chatFilterInput) {
    chatFilterInput.addEventListener('input', (e) => {
      renderHomeChatSessions(e.target.value);
    });
  }

  const symptomFilterInput = container.querySelector('#home-symptom-filter-input');
  if (symptomFilterInput) {
    symptomFilterInput.addEventListener('input', (e) => {
      renderSymptomSearches(e.target.value);
    });
  }

  const drugFilterInput = container.querySelector('#home-drug-filter-input');
  if (drugFilterInput) {
    drugFilterInput.addEventListener('input', (e) => {
      renderDrugSearches(e.target.value);
    });
  }

  // Header buttons in Chat Section
  const btnHomeNewChat = container.querySelector('#btn-home-new-chat');
  if (btnHomeNewChat) {
    btnHomeNewChat.addEventListener('click', () => {
      navigateTo('chat', { newSession: true });
    });
  }

  const btnHomeOpenChatHub = container.querySelector('#btn-home-open-chat-hub');
  if (btnHomeOpenChatHub) {
    btnHomeOpenChatHub.addEventListener('click', () => {
      navigateTo('chat');
    });
  }

  // Header buttons in Symptom and Drug Boxes
  const btnHomeLogNewSymptoms = container.querySelector('#btn-home-log-new-symptoms');
  if (btnHomeLogNewSymptoms) {
    btnHomeLogNewSymptoms.addEventListener('click', () => navigateTo('analyze'));
  }

  const btnHomeSearchDrugCatalog = container.querySelector('#btn-home-search-drug-catalog');
  if (btnHomeSearchDrugCatalog) {
    btnHomeSearchDrugCatalog.addEventListener('click', () => navigateTo('drugs'));
  }

  return container;
}
