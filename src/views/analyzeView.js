import { PRESET_SYMPTOMS } from '../data/mockData.js';
import { analyzeSymptoms } from '../services/apiService.js';

export function renderAnalyzeView(navigateTo, initialQuery = '') {
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
    return { name: 'Clinician' };
  })();
  const userName = currentUser.name || 'Clinician';

  const container = document.createElement('div');
  container.className = 'w-full flex-1 flex flex-col p-margin-mobile md:p-margin-desktop gap-md min-h-[calc(100vh-64px)]';

  container.innerHTML = `
    <!-- Top Header -->
    <div class="mb-xs">
      <div class="flex items-center gap-2 flex-wrap">
        <h2 class="font-headline-lg text-headline-lg text-on-background font-bold">Clinical Symptom Analyzer</h2>
        <span class="px-2.5 py-0.5 bg-secondary-container text-on-secondary-container font-mono-data text-xs rounded-full font-bold">ML Differential Engine</span>
        <span class="px-2.5 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 font-mono-data text-xs rounded-full flex items-center gap-1 font-bold"><span class="material-symbols-outlined text-[14px]">person</span> Clinician: <strong>${userName}</strong></span><span id="backend-status-badge" class="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono-data text-xs rounded-full flex items-center gap-1 font-bold">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> FastAPI Engine Active
        </span>
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant mt-xs">
        Enter clinical descriptors or natural language presentation. Evaluated against 80+ diseases with multi-model consensus.
      </p>
    </div>

    <!-- Split Layout Container (Ergonomic & Compact at 100% Zoom) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-start">
      
      <!-- Left Panel: Input Area (7 cols on desktop) -->
      <section class="lg:col-span-6 flex flex-col gap-3">
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant flex flex-col gap-3">
          
          <div class="flex justify-between items-center">
            <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider" for="symptom-input">
              Patient Clinical Presentation
            </label>
            <button id="voice-btn" type="button" class="flex items-center gap-1 text-secondary hover:text-on-secondary-fixed-variant transition-colors px-2.5 py-1 rounded-full border border-secondary/40 bg-surface-container-low text-xs cursor-pointer">
              <span class="material-symbols-outlined text-[15px]" id="voice-icon">mic</span>
              <span class="font-semibold text-[11px]" id="voice-status">Voice Input</span>
            </button>
          </div>

          <!-- Compact Textarea with keyboard submission -->
          <div class="relative">
            <textarea 
              id="symptom-input" 
              rows="3"
              class="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-xs sm:text-sm text-on-background focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none resize-none custom-scrollbar transition-all leading-relaxed"
              placeholder="E.g., Patient reports headache, mild cold, and low-grade fever for 2 days... (Press Enter to Analyze)"
            >${initialQuery}</textarea>
            <span class="absolute bottom-2 right-2 text-[10px] text-on-surface-variant/60 font-mono-data pointer-events-none hidden sm:inline">
              ↵ Enter to Analyze
            </span>
          </div>

          <!-- Quick Select Common Symptoms Chips -->
          <div>
            <span class="text-[11px] text-on-surface-variant font-bold uppercase tracking-wider block mb-1">
              Quick Add Common Symptoms:
            </span>
            <div class="flex flex-wrap gap-1.5" id="symptom-chips-container">
              ${PRESET_SYMPTOMS.slice(0, 10).map(s => `
                <button type="button" class="symptom-chip text-[11px] font-semibold px-2 py-0.5 bg-surface-container hover:bg-secondary-container hover:text-on-secondary-container rounded-full text-on-surface transition-all border border-outline-variant/60 cursor-pointer">
                  + ${s}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Model Choice & Duration Controls Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-outline-variant/60">
            <div>
              <label class="font-label-md text-[11px] text-on-surface-variant block mb-1 font-bold uppercase tracking-wider">
                Classification Architecture
              </label>
              <select id="model-select" class="w-full bg-surface-container-low border border-outline-variant rounded-lg p-2 text-xs font-semibold text-primary focus:ring-1 focus:ring-secondary">
                <option value="xgboost" selected>XGBoost (Lead Diagnostic • 96.65%)</option>
                <option value="random_forest">Random Forest Ensemble (96.57%)</option>
                <option value="logistic_regression">L2 Logistic Regression (96.65%)</option>
              </select>
            </div>

            <div>
              <div class="flex justify-between items-center mb-1">
                <label class="font-label-md text-[11px] text-on-surface-variant font-bold uppercase tracking-wider">
                  Symptom Duration
                </label>
                <span class="font-mono-data text-xs text-secondary font-bold" id="duration-val">3 Days</span>
              </div>
              <input id="duration-slider" type="range" min="1" max="30" value="3" class="w-full accent-secondary h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer mt-1" />
              <div class="flex justify-between text-[10px] text-on-surface-variant font-mono-data mt-0.5">
                <span>1d</span>
                <span>15d</span>
                <span>30d+</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-2 pt-1">
            <button id="analyze-btn" type="button" class="flex-1 bg-secondary text-on-primary py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm hover:bg-on-secondary-fixed-variant transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
              <span class="material-symbols-outlined text-[18px]">biotech</span>
              <span>Analyze Symptoms</span>
            </button>
            <button id="clear-btn" type="button" class="bg-surface-container-low text-on-surface-variant border border-outline-variant px-3 py-2 rounded-xl text-xs font-semibold hover:bg-surface-container transition-all cursor-pointer">
              Clear
            </button>
          </div>

          <!-- Compact Clinical Safety Disclaimer -->
          <div class="p-2 bg-sky-50/70 border border-secondary/20 rounded-lg flex items-start gap-2 text-[11px] text-on-surface-variant">
            <span class="material-symbols-outlined text-secondary text-sm shrink-0 mt-0.5">shield</span>
            <span>
              <strong>Clinical Guardrail:</strong> Output is calibrated for decision support. Seek emergency care (911/112) for chest pain, acute dyspnea, or altered consciousness.
            </span>
          </div>

        </div>
      </section>

      <!-- Right Panel: Results & Output Area (6 cols on desktop, compact & shrunken) -->
      <section class="lg:col-span-6 flex flex-col gap-3">
        
        <!-- Shrunken, Helpful Initial Staging Box (Replaces Giant Empty Void) -->
        <div id="results-empty" class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant flex flex-col gap-3">
          <div class="flex items-center gap-3 pb-3 border-b border-outline-variant/60">
            <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <span class="material-symbols-outlined text-[22px]">clinical_notes</span>
            </div>
            <div>
              <h3 class="font-headline-md text-sm font-bold text-primary">Diagnostic Assessment Panel</h3>
              <p class="text-xs text-on-surface-variant">Describe symptoms on the left or select an instant test presentation:</p>
            </div>
          </div>

          <!-- 1-Click Interactive Test Scenarios (Instant Results) -->
          <div class="space-y-1.5">
            <span class="text-[10px] font-mono-data font-bold uppercase tracking-wider text-on-surface-variant block">
              1-Click Clinical Test Scenarios:
            </span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button type="button" data-scenario="Headache, runny nose, sneezing, and mild cold symptoms" class="test-scenario-btn p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 text-left transition-all cursor-pointer">
                <div class="flex items-center justify-between text-xs font-bold text-primary">
                  <span>Headache &amp; Cold</span>
                  <span class="material-symbols-outlined text-[14px] text-secondary">arrow_forward</span>
                </div>
                <div class="text-[11px] text-on-surface-variant truncate">Headache, sneezing, runny nose</div>
              </button>

              <button type="button" data-scenario="High fever, persistent dry cough, body aches, and severe fatigue" class="test-scenario-btn p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 text-left transition-all cursor-pointer">
                <div class="flex items-center justify-between text-xs font-bold text-primary">
                  <span>Fever &amp; Severe Cough</span>
                  <span class="material-symbols-outlined text-[14px] text-secondary">arrow_forward</span>
                </div>
                <div class="text-[11px] text-on-surface-variant truncate">High fever, body aches, fatigue</div>
              </button>

              <button type="button" data-scenario="Shortness of breath, chest pain, mucus production, and wheezing" class="test-scenario-btn p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 text-left transition-all cursor-pointer">
                <div class="flex items-center justify-between text-xs font-bold text-primary">
                  <span>Dyspnea &amp; Chest Pain</span>
                  <span class="material-symbols-outlined text-[14px] text-secondary">arrow_forward</span>
                </div>
                <div class="text-[11px] text-on-surface-variant truncate">Shortness of breath, chest tightness</div>
              </button>

              <button type="button" data-scenario="Joint pain, morning stiffness, and swelling in knees and fingers" class="test-scenario-btn p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 text-left transition-all cursor-pointer">
                <div class="flex items-center justify-between text-xs font-bold text-primary">
                  <span>Arthritis / Joint Pain</span>
                  <span class="material-symbols-outlined text-[14px] text-secondary">arrow_forward</span>
                </div>
                <div class="text-[11px] text-on-surface-variant truncate">Stiffness, swelling, joint pain</div>
              </button>
            </div>
          </div>

          <div class="pt-2 text-[11px] text-on-surface-variant flex items-center justify-between border-t border-outline-variant/50">
            <span class="flex items-center gap-1 font-mono-data">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 80+ Disease Differential Database
            </span>
            <span class="font-bold text-secondary">100% Free &amp; Instant</span>
          </div>
        </div>

        <!-- Populated Results Card (High-Density, Instant Response, Zero Bloat) -->
        <div id="results-content" class="hidden flex-col gap-3">
          
          <!-- Primary Diagnosis Header Card -->
          <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant">
            <div class="flex justify-between items-start gap-2 mb-2">
              <div>
                <span class="text-[10px] text-on-surface-variant uppercase tracking-wider block font-mono-data font-bold">
                  Primary Diagnostic Impression
                </span>
                <div class="text-xl sm:text-2xl font-bold text-primary mt-0.5 flex items-center gap-2" id="res-condition">
                  Condition Name
                </div>
                <div class="text-xs text-secondary font-mono-data mt-0.5" id="res-model-used">
                  Model: XGBoost Classifier
                </div>
              </div>

              <!-- Confidence & Risk Badge -->
              <div class="flex flex-col items-end gap-1 shrink-0">
                <div class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300">
                  <span class="material-symbols-outlined text-emerald-600 text-[16px]">verified</span>
                  <span class="font-mono-data text-sm font-bold text-emerald-700" id="res-confidence">94%</span>
                </div>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono-data font-bold bg-surface-container text-on-surface-variant" id="res-risk-level">
                  Risk: Low
                </span>
              </div>
            </div>

            <!-- Animated Confidence Progress Bar -->
            <div class="w-full bg-surface-container-highest rounded-full h-2 my-2 overflow-hidden">
              <div id="res-progress-bar" class="bg-emerald-600 h-2 rounded-full transition-all duration-500" style="width: 90%"></div>
            </div>

            <div class="flex items-center justify-between text-[11px] text-on-surface-variant font-mono-data">
              <span>Indicated Specialist: <strong class="text-primary font-bold" id="res-doctor-specialist">General Physician</strong></span>
              <span class="text-emerald-700 font-bold">Consensus Validated</span>
            </div>
          </div>

          <!-- Detected Symptoms vs Associated Symptoms Breakdown -->
          <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant space-y-2.5">
            <div>
              <h4 class="text-[11px] text-on-surface-variant uppercase tracking-wider font-bold mb-1">
                Reported Patient Symptoms:
              </h4>
              <div class="flex flex-wrap gap-1" id="res-symptoms-tags">
                <!-- Dynamically populated -->
              </div>
            </div>

            <!-- Associated Symptoms to Check -->
            <div id="res-associated-container" class="pt-2 border-t border-outline-variant/50">
              <h4 class="text-[11px] text-secondary uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <span class="material-symbols-outlined text-[13px]">help</span>
                Possible Associated Symptoms to Monitor:
              </h4>
              <div class="flex flex-wrap gap-1" id="res-associated-tags">
                <!-- Dynamically populated -->
              </div>
            </div>
          </div>

          <!-- Differentials Preview (if available) -->
          <div id="res-differentials-box" class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant">
            <h4 class="text-[11px] text-on-surface-variant uppercase tracking-wider font-bold mb-2 flex items-center justify-between">
              <span>Differential Diagnosis Candidates</span>
              <span class="font-mono-data text-[10px] text-secondary">Multi-Model Ranking</span>
            </h4>
            <div class="space-y-1.5" id="res-differentials-list">
              <!-- Dynamically populated -->
            </div>
          </div>

          <!-- Clinical Reasoning & Recommended Actions -->
          <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant flex flex-col gap-3">
            <div>
              <h4 class="text-[11px] text-on-surface-variant uppercase tracking-wider font-bold mb-1">
                Clinical Pathophysiology &amp; Reasoning
              </h4>
              <ul class="space-y-1 text-xs text-on-surface" id="res-reasoning-list">
                <!-- Dynamically populated -->
              </ul>
            </div>

            <div class="pt-2 border-t border-outline-variant/60">
              <h4 class="text-[11px] text-on-surface-variant uppercase tracking-wider font-bold mb-1">
                Recommended Actions &amp; Interventions
              </h4>
              <ul class="space-y-1 text-xs text-on-surface-variant" id="res-actions-list">
                <!-- Dynamically populated -->
              </ul>
            </div>

            <!-- Action Buttons -->
            <div class="pt-3 border-t border-outline-variant/60 flex flex-col sm:flex-row gap-2">
              <button id="btn-talk-assistant" type="button" class="flex-1 bg-secondary text-on-primary py-2 px-3 rounded-lg text-xs font-bold hover:bg-on-secondary-fixed-variant transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                <span class="material-symbols-outlined text-[16px]">chat</span>
                <span>Discuss with Groq AI</span>
              </button>
              <button id="btn-generate-report" type="button" class="flex-1 bg-surface-container-low text-primary border border-outline-variant py-2 px-3 rounded-lg text-xs font-bold hover:bg-surface-container transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                <span class="material-symbols-outlined text-[16px]">description</span>
                <span>Export Report (PDF)</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>

    <!-- Printable Report Modal Container -->
    <div id="report-modal-backdrop" class="fixed inset-0 bg-black/50 z-50 hidden flex items-center justify-center p-md modal-fade-in">
      <div class="bg-surface-container-lowest rounded-xl p-lg max-w-2xl w-full border border-outline-variant shadow-xl max-h-[90vh] overflow-y-auto flex flex-col gap-md">
        <div class="flex justify-between items-center border-b border-outline-variant pb-sm">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-secondary">biotech</span>
            <h3 class="font-headline-md text-headline-md font-bold text-primary">MediAI Care+ Clinical Assessment Report</h3>
          </div>
          <button id="btn-close-modal" class="p-1 hover:bg-surface-container rounded-full text-on-surface-variant cursor-pointer">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <div id="report-modal-content" class="space-y-md text-sm">
          <!-- Populated dynamically -->
        </div>

        <div class="flex justify-end gap-sm border-t border-outline-variant pt-md">
          <button id="btn-print-modal" class="bg-secondary text-on-primary px-md py-sm rounded-lg font-label-md font-bold hover:bg-on-secondary-fixed-variant transition-colors flex items-center gap-1 cursor-pointer">
            <span class="material-symbols-outlined text-sm">print</span> Print / Export PDF
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach elements
  const inputEl = container.querySelector('#symptom-input');
  const durationSlider = container.querySelector('#duration-slider');
  const durationVal = container.querySelector('#duration-val');
  const analyzeBtn = container.querySelector('#analyze-btn');
  const clearBtn = container.querySelector('#clear-btn');
  const voiceBtn = container.querySelector('#voice-btn');
  const voiceStatus = container.querySelector('#voice-status');
  const voiceIcon = container.querySelector('#voice-icon');
  const modelSelect = container.querySelector('#model-select');

  const resultsEmpty = container.querySelector('#results-empty');
  const resultsContent = container.querySelector('#results-content');
  const modalBackdrop = container.querySelector('#report-modal-backdrop');

  let isListening = false;
  let activeAnalysisResult = null;

  // Duration Slider update
  durationSlider.addEventListener('input', (e) => {
    durationVal.textContent = `${e.target.value} Day${e.target.value > 1 ? 's' : ''}`;
  });

  // Symptom quick add chips
  container.querySelectorAll('.symptom-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const symptomText = chip.textContent.replace('+', '').trim();
      const currentVal = inputEl.value.trim();
      inputEl.value = currentVal ? `${currentVal}, ${symptomText}` : symptomText;
      inputEl.focus();
    });
  });

  // 1-Click Interactive Test Scenarios
  container.querySelectorAll('.test-scenario-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const scenarioText = btn.getAttribute('data-scenario');
      inputEl.value = scenarioText;
      executeAnalysis();
    });
  });

  // Press Enter inside textarea to trigger analysis
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      executeAnalysis();
    }
  });

  // Voice mic simulation
  voiceBtn.addEventListener('click', () => {
    isListening = !isListening;
    if (isListening) {
      voiceBtn.classList.add('pulse-ring', 'bg-secondary-container');
      voiceStatus.textContent = 'Listening...';
      voiceIcon.textContent = 'mic_settings';

      setTimeout(() => {
        if (isListening) {
          inputEl.value = 'Patient reports high fever, persistent cough, and severe body ache for 3 days.';
          isListening = false;
          voiceBtn.classList.remove('pulse-ring', 'bg-secondary-container');
          voiceStatus.textContent = 'Voice Input';
          voiceIcon.textContent = 'mic';
          executeAnalysis();
        }
      }, 2500);
    } else {
      voiceBtn.classList.remove('pulse-ring', 'bg-secondary-container');
      voiceStatus.textContent = 'Voice Input';
      voiceIcon.textContent = 'mic';
    }
  });

  // Clear button
  clearBtn.addEventListener('click', () => {
    inputEl.value = '';
    resultsEmpty.classList.remove('hidden');
    resultsContent.classList.add('hidden');
    resultsContent.classList.remove('flex');
    activeAnalysisResult = null;
    inputEl.focus();
  });

  function recordSymptomSearchHistory(query, result) {
    try {
      const KEY = 'mediai_symptom_search_history';
      const raw = localStorage.getItem(KEY);
      const list = raw ? JSON.parse(raw) : [];
      const item = {
        id: 'symp_' + Date.now(),
        query: query,
        condition: result.condition || 'Clinical Evaluation',
        confidence: result.confidence || 95.0,
        riskLevel: result.riskLevel || 'Moderate',
        specialist: result.doctorSpecialist || 'Primary Care Physician',
        modelLabel: result.modelLabel || 'XGBoost Lead Diagnostic',
        detectedSymptoms: result.detectedSymptoms || [],
        differential: result.differential ? result.differential.slice(0, 3) : [],
        timestamp: new Date().toISOString()
      };
      list.unshift(item);
      if (list.length > 20) list.pop();
      localStorage.setItem(KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('Could not record symptom search:', e);
    }
  }

  // Analysis Execution Routine
  async function executeAnalysis() {
    const text = inputEl.value.toLowerCase().trim();
    if (!text) {
      inputEl.focus();
      return;
    }

    analyzeBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-sm">refresh</span> Evaluating Differential...';
    analyzeBtn.classList.add('opacity-80');

    try {
      const selectedModel = modelSelect.value;
      const durationValInt = parseInt(durationSlider.value) || 3;

      const result = await analyzeSymptoms(text, selectedModel, durationValInt);
      activeAnalysisResult = result;
      recordSymptomSearchHistory(text, result);

      // 1. Diagnosis & Confidence
      container.querySelector('#res-condition').textContent = result.condition;
      container.querySelector('#res-model-used').textContent = `Engine: ${result.modelLabel}`;
      
      const confEl = container.querySelector('#res-confidence');
      if (confEl) confEl.textContent = `${result.confidence}%`;
      
      const progEl = container.querySelector('#res-progress-bar');
      if (progEl) progEl.style.width = `${result.confidence}%`;

      const riskEl = container.querySelector('#res-risk-level');
      if (riskEl) {
        const rVal = result.riskLevel || 'Moderate';
        riskEl.textContent = `Risk: ${rVal}`;
        if (rVal.toLowerCase().includes('high') || rVal.toLowerCase().includes('critical')) {
          riskEl.className = 'px-2 py-0.5 rounded text-[10px] font-mono-data font-bold bg-error-container text-on-error-container';
        } else {
          riskEl.className = 'px-2 py-0.5 rounded text-[10px] font-mono-data font-bold bg-emerald-50 text-emerald-800 border border-emerald-300';
        }
      }

      const docEl = container.querySelector('#res-doctor-specialist');
      if (docEl) docEl.textContent = result.doctorSpecialist || 'Primary Care Physician';

      // 2. Reported Symptoms Tags
      const tagsContainer = container.querySelector('#res-symptoms-tags');
      const detected = result.detectedSymptoms || [];
      tagsContainer.innerHTML = detected.map(s => `
        <span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-mono-data text-xs font-bold flex items-center gap-1 border border-emerald-300">
          <span class="material-symbols-outlined text-[13px]">check</span>
          ${s}
        </span>
      `).join('');

      // 3. Associated Symptoms to Check
      const assocContainer = container.querySelector('#res-associated-container');
      const assocTags = container.querySelector('#res-associated-tags');
      const associated = result.associatedToMonitor || [];
      if (associated.length > 0) {
        assocContainer.classList.remove('hidden');
        assocTags.innerHTML = associated.map(s => `
          <span class="px-2 py-0.5 bg-secondary/10 text-secondary rounded-full font-mono-data text-xs font-semibold flex items-center gap-1 border border-secondary/20">
            <span class="material-symbols-outlined text-[13px]">help_outline</span>
            ${s}
          </span>
        `).join('');
      } else {
        assocContainer.classList.add('hidden');
      }

      // 4. Differentials Preview
      const diffBox = container.querySelector('#res-differentials-box');
      const diffList = container.querySelector('#res-differentials-list');
      const differentials = result.differentials || [];
      if (differentials.length > 0) {
        diffBox.classList.remove('hidden');
        diffList.innerHTML = differentials.map(df => `
          <div class="flex items-center justify-between p-2 rounded-lg bg-surface-container-low border border-outline-variant/50 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span class="font-bold text-primary">${df.condition}</span>
              <span class="text-[11px] text-on-surface-variant font-mono-data">(${df.specialist})</span>
            </div>
            <span class="font-mono-data font-bold text-secondary text-xs">${df.relativeConfidence}% Match</span>
          </div>
        `).join('');
      } else {
        diffBox.classList.add('hidden');
      }

      // 5. Reasoning
      const reasoningList = container.querySelector('#res-reasoning-list');
      const reasoning = result.reasoning || [];
      reasoningList.innerHTML = reasoning.map(r => `
        <li class="flex items-start gap-1.5">
          <span class="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">check_circle</span>
          <span class="leading-relaxed">${r}</span>
        </li>
      `).join('');

      // 6. Actions
      const actionsList = container.querySelector('#res-actions-list');
      const actions = result.recommendedActions || [];
      actionsList.innerHTML = actions.map(a => `
        <li class="flex items-start gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5"></span>
          <span class="leading-relaxed">${a}</span>
        </li>
      `).join('');

      // Display results card smoothly
      resultsEmpty.classList.add('hidden');
      resultsContent.classList.remove('hidden');
      resultsContent.classList.add('flex');
    } catch (err) {
      console.error('Symptom Analysis Failed:', err);
    } finally {
      analyzeBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">biotech</span> <span>Analyze Symptoms</span>';
      analyzeBtn.classList.remove('opacity-80');
    }
  }

  // Connect Analyze Button
  analyzeBtn.addEventListener('click', executeAnalysis);

  // Model switch re-evaluation if results active
  modelSelect.addEventListener('change', () => {
    if (activeAnalysisResult && inputEl.value.trim()) {
      executeAnalysis();
    }
  });

  // Report Modal
  container.querySelector('#btn-generate-report').addEventListener('click', () => {
    if (!activeAnalysisResult) return;
    const modalContent = container.querySelector('#report-modal-content');
    modalContent.innerHTML = `
      <div class="bg-surface-container-low p-3 rounded-lg border border-outline-variant font-mono-data text-xs space-y-1">
        <div><strong>Date/Time:</strong> ${new Date().toLocaleString()}</div>
        <div><strong>Patient ID:</strong> PT-${Math.floor(1000 + Math.random() * 9000)}</div>
        <div><strong>Symptom Duration:</strong> ${activeAnalysisResult.durationDays} Days</div>
        <div><strong>Diagnostic Classifier:</strong> ${activeAnalysisResult.modelLabel}</div>
        <div><strong>Assigned Triage Risk:</strong> ${activeAnalysisResult.riskLevel}</div>
      </div>

      <div>
        <h4 class="font-bold text-primary mb-1">Primary Diagnostic Impression:</h4>
        <div class="text-xl font-bold text-secondary">${activeAnalysisResult.condition} (${activeAnalysisResult.confidence}% Confidence)</div>
      </div>

      <div>
        <h4 class="font-bold text-primary mb-1">Reported Patient Symptoms:</h4>
        <p class="text-on-surface-variant">${activeAnalysisResult.detectedSymptoms.join(', ')}</p>
      </div>

      <div>
        <h4 class="font-bold text-primary mb-1">Associated Symptoms to Monitor:</h4>
        <p class="text-on-surface-variant">${(activeAnalysisResult.associatedToMonitor || []).join(', ') || 'None noted'}</p>
      </div>

      <div>
        <h4 class="font-bold text-primary mb-1">Clinical Reasoning:</h4>
        <ul class="list-disc pl-5 space-y-1 text-on-surface-variant">
          ${activeAnalysisResult.reasoning.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-primary mb-1">Recommended Actions &amp; Specialist:</h4>
        <ul class="list-disc pl-5 space-y-1 text-on-surface-variant">
          ${activeAnalysisResult.recommendedActions.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    `;
    modalBackdrop.classList.remove('hidden');
  });

  container.querySelector('#btn-close-modal').addEventListener('click', () => {
    modalBackdrop.classList.add('hidden');
  });

  container.querySelector('#btn-print-modal').addEventListener('click', () => {
    window.print();
  });

  // Switch to Groq AI chat with full diagnostic context
  container.querySelector('#btn-talk-assistant').addEventListener('click', () => {
    const prompt = activeAnalysisResult 
      ? `I ran a symptom analysis: primary impression is ${activeAnalysisResult.condition} (${activeAnalysisResult.confidence}% confidence) based on symptoms: ${activeAnalysisResult.detectedSymptoms.join(', ')}. What clinical precautions, non-pharmacological therapies, or specialist steps do you recommend?`
      : 'Hello MediAI Care+ Clinical Assistant, I need clinical guidance on my symptoms.';
    navigateTo('chat', { initialPrompt: prompt });
  });

  // If initialQuery was provided, automatically trigger analysis
  if (initialQuery && initialQuery.trim().length > 2) {
    setTimeout(executeAnalysis, 100);
  }

  return container;
}
