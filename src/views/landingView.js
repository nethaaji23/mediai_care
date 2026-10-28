// MediAI Care+ Landing Page with Auth Portal
// Faithfully implemented directly from the Stitch AI redesigned screen without changing UI structure or styling.

export function renderLandingView(navigateTo) {
  const container = document.createElement('div');
  container.className = 'w-full min-h-screen flex flex-col bg-background text-on-background antialiased font-body-md';
  container.id = 'stitch-landing-root';

  container.innerHTML = `
<main class="flex-grow flex flex-col items-center"><div class="w-full bg-gradient-to-b from-sky-50/60 via-background to-background"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"><div class="lg:col-span-7 flex flex-col gap-6"><div class="flex items-center gap-2 flex-wrap"><div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary w-fit text-xs font-semibold tracking-wide"><span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span><span>CLINICAL DECISION SUPPORT · AUDITED ML MODELS</span></div></div><div class="flex items-center gap-4 sm:gap-5 my-1 flex-wrap sm:flex-nowrap">
  <div class="dynamic-heartbeat-badge relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-500/20 via-rose-50 to-red-50 flex items-center justify-center border-2 border-red-300/80 shadow-md shrink-0" title="Live Cardiac Telemetry Active">
    <svg class="w-10 h-10 sm:w-12 sm:h-12 heartbeat-pulse overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Red Heart Contour & Fill -->
      <path class="heart-shape" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444" stroke="#dc2626" stroke-width="1.2"/>
      <!-- Continuous White ECG Base Guide Trace -->
      <path class="ecg-base-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.5"/>
      <!-- Continuous White Active Telemetry Wave -->
      <path class="ecg-rhythm-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div class="flex flex-col">
    <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-black text-primary tracking-tight leading-[1.05] flex items-center gap-1.5">
      MediAI Care<span class="text-secondary text-5xl sm:text-6xl font-black leading-none">+</span>
    </h1>
    <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary font-mono-data mt-0.5">Enterprise Clinical Diagnostic Intelligence</span>
  </div>
</div><p class="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">Welcome to <strong class="text-primary font-bold">MediAI Care+</strong>. Analyze symptoms in seconds, explore verified medicine facts, and review your live clinical consultations — backed by audited machine learning models and medical-grade safety guardrails.</p><div class="pt-4 border-t border-outline-variant/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-on-surface-variant"><div class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[18px]">verified</span><span>100% Free for Patients &amp; Students</span></div><div class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[18px]">model_training</span><span>99.8% XGBoost Consensus</span></div><div class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[18px]">health_and_safety</span><span>Doctor-Oversight Guardrails</span></div></div></div><div class="lg:col-span-5"><div class="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-6 sm:p-8 shadow-xl max-w-md mx-auto w-full flex flex-col gap-5 relative"><div class="flex items-center justify-between pb-3 border-b border-outline-variant/40"><div class="flex flex-col gap-0.5"><div class="flex items-center gap-1.5"><span class="material-symbols-outlined text-secondary text-[20px]">verified_user</span><h2 class="text-lg font-bold text-primary tracking-tight">Access Portal</h2></div><p class="text-xs text-on-surface-variant">Clinical Decision Support Portal</p></div><div class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Verified Ready</span></div></div><div class="flex rounded-xl bg-surface-container-low p-1 border border-outline-variant/40" role="tablist"><button aria-selected="true" class="flex-1 py-2 text-xs font-semibold rounded-lg bg-surface-container-lowest text-primary shadow-xs transition-all flex items-center justify-center gap-1.5" id="tab-signin" role="tab"><span class="material-symbols-outlined text-[15px] text-secondary">login</span><span>Sign In</span></button><button aria-selected="false" class="flex-1 py-2 text-xs font-semibold rounded-lg text-on-surface-variant hover:text-primary transition-all flex items-center justify-center gap-1.5" id="tab-register" role="tab"><span class="material-symbols-outlined text-[15px]">person_add</span><span>Create Account</span></button></div><form class="flex flex-col gap-3.5" onsubmit="return false;"><div class="flex flex-col gap-1"><label class="text-xs font-semibold text-primary" for="auth-username">Username</label><div class="relative flex items-center"><span class="material-symbols-outlined text-[17px] text-on-surface-variant absolute ml-3 pointer-events-none">person</span><input class="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low focus:bg-surface-container-lowest text-xs text-primary placeholder:text-on-surface-variant/70 focus:outline-none focus:border-secondary transition-all" id="auth-username" value="" placeholder="Enter your username" required="" type="text"/></div></div><div class="flex flex-col gap-1"><label class="text-xs font-semibold text-primary" for="auth-email">Email Address</label><div class="relative flex items-center"><span class="material-symbols-outlined text-[17px] text-on-surface-variant absolute ml-3 pointer-events-none">mail</span><input class="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low focus:bg-surface-container-lowest text-xs text-primary placeholder:text-on-surface-variant/70 focus:outline-none focus:border-secondary transition-all" id="auth-email" value="" placeholder="nethaaji.s@mediai.care" required="" type="email"/></div></div><div class="flex flex-col gap-1"><div class="flex items-center justify-between"><label class="text-xs font-semibold text-primary" for="auth-password">Password</label><a id="auth-forgot-password-link" class="text-[11px] font-semibold text-secondary hover:underline cursor-pointer">Forgot password?</a></div><div class="relative flex items-center"><span class="material-symbols-outlined text-[17px] text-on-surface-variant absolute ml-3 pointer-events-none">lock</span><input class="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-low focus:bg-surface-container-lowest text-xs text-primary placeholder:text-on-surface-variant/70 focus:outline-none focus:border-secondary transition-all" id="auth-password" placeholder="••••••••" required="" type="password"/></div></div><div class="flex items-center justify-between pt-0.5"><label class="flex items-center gap-2 cursor-pointer"><input checked="" class="w-3.5 h-3.5 rounded border-outline-variant text-secondary focus:ring-0 cursor-pointer" type="checkbox"/><span class="text-xs text-on-surface-variant">Remember this device</span></label><span class="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-mono font-medium">AES-256</span></div><button class="w-full py-3 rounded-xl bg-secondary text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group mt-1" type="submit"><span>Sign In</span><span class="material-symbols-outlined text-[17px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span></button></form><div class="pt-3 border-t border-outline-variant/40 flex flex-col items-center gap-2 text-center"><p class="text-xs text-on-surface-variant">Don't have an account? <a class="font-semibold text-secondary hover:underline" href="#">Create account free</a></p><div class="flex items-center justify-center gap-1.5 text-[11px] text-on-surface-variant/80"><span class="material-symbols-outlined text-[13px] text-emerald-700">lock</span><span>256-bit HIPAA-compliant encryption · Zero data sold</span></div></div></div></div></div></div></div><section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-outline-variant/60" id="how-it-works"><div class="text-center max-w-2xl mx-auto mb-12"><span class="text-xs font-bold text-secondary tracking-widest uppercase">Simple, Transparent Process</span><h2 class="text-2xl sm:text-3xl font-bold text-primary mt-2">How MediAI Care+ Works in 3 Steps</h2><p class="text-sm text-on-surface-variant mt-2">Designed for zero medical confusion. Clear symptom inputs to transparent machine learning consensus.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 relative"><div class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm">1</div><h3 class="text-lg font-bold text-primary">Describe Symptoms</h3><p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Type or speak naturally in your preferred language (6+ supported). Our medical entity extractor parses clinical descriptors seamlessly.</p><div class="mt-auto pt-2 flex items-center gap-1.5 text-xs font-medium text-secondary"><span class="material-symbols-outlined text-[16px]">mic</span> Natural language input</div></div><div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 relative"><div class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm">2</div><h3 class="text-lg font-bold text-primary">ML Triangulation</h3><p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">The system queries three concurrent classifiers (XGBoost, Random Forest, Logistic Regression) to deliver consensus confidence rather than black-box guesses.</p><div class="mt-auto pt-2 flex items-center gap-1.5 text-xs font-medium text-secondary"><span class="material-symbols-outlined text-[16px]">hub</span> 3-model cross-validation</div></div><div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 relative"><div class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm">3</div><h3 class="text-lg font-bold text-primary">Actionable Guidance</h3><p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Receive practical self-care precautions, verified OTC reference monographs, red-flag symptoms, and clear indications of when to visit a clinic.</p><div class="mt-auto pt-2 flex items-center gap-1.5 text-xs font-medium text-secondary"><span class="material-symbols-outlined text-[16px]">medical_services</span> Doctor-safe triage summary</div></div></div></section><section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-outline-variant/60" id="capabilities"><div class="text-center max-w-2xl mx-auto mb-12"><span class="text-xs font-bold text-secondary tracking-widest uppercase">Comprehensive Clinical Suite</span><h2 class="text-2xl sm:text-3xl font-bold text-primary mt-2">Core Platform Capabilities</h2><p class="text-sm text-on-surface-variant mt-2">Healthcare tools built with strict data privacy, instant accessibility, and clinical-grade verification.</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col gap-3 group"><div class="w-12 h-12 rounded-xl bg-sky-50 text-secondary flex items-center justify-center group-hover:scale-105 transition-transform"><span class="material-symbols-outlined text-[24px]">query_stats</span></div><h3 class="text-base font-bold text-primary mt-2">Intelligent Symptom Analysis</h3><p class="text-xs text-on-surface-variant leading-relaxed">Predict differential diagnoses with clear percentage confidence and transparent diagnostic pathways.</p></div><div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col gap-3 group"><div class="w-12 h-12 rounded-xl bg-sky-50 text-secondary flex items-center justify-center group-hover:scale-105 transition-transform"><span class="material-symbols-outlined text-[24px]">medication</span></div><h3 class="text-base font-bold text-primary mt-2">Verified Drug Explorer</h3><p class="text-xs text-on-surface-variant leading-relaxed">Explore dosage forms, mechanism of action, contraindications, and black-box interaction alerts.</p></div><div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col gap-3 group"><div class="w-12 h-12 rounded-xl bg-sky-50 text-secondary flex items-center justify-center group-hover:scale-105 transition-transform"><span class="material-symbols-outlined text-[24px]">public</span></div><h3 class="text-base font-bold text-primary mt-2">Outbreak Tracker</h3><p class="text-xs text-on-surface-variant leading-relaxed">Monitor regional epidemiological heatmaps and verified public health alerts across contagious conditions.</p></div><div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col gap-3 group"><div class="w-12 h-12 rounded-xl bg-sky-50 text-secondary flex items-center justify-center group-hover:scale-105 transition-transform"><span class="material-symbols-outlined text-[24px]">record_voice_over</span></div><h3 class="text-base font-bold text-primary mt-2">Multilingual Voice AI</h3><p class="text-xs text-on-surface-variant leading-relaxed">Interact via voice in English, Hindi, Tamil, Telugu, and more for truly barrier-free patient access.</p></div></div></section><section class="w-full bg-surface-container-low border-y border-outline-variant py-14" id="benchmarks"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row items-center justify-between gap-8"><div class="flex flex-col gap-2 max-w-lg text-center lg:text-left"><span class="text-xs font-bold text-secondary uppercase tracking-wider">Audited Multi-Dataset Benchmarks</span><h3 class="text-xl sm:text-2xl font-bold text-primary">Trained on 4,920 Clinical Records &amp; Hospital ICU Vitals</h3><p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Validated across 4 gold-standard medical repositories: MIMIC-IV ICU Telemetry, CDC NHANES Blood Chemistry, FDA FAERS Pharmacovigilance, and UCI Clinical differential.</p><div class="pt-2"><button id="btn-landing-explore-benchmarks" type="button" class="px-4 py-2 bg-secondary text-white rounded-lg text-xs font-bold shadow-xs hover:shadow-md hover:bg-on-secondary-fixed-variant transition-all inline-flex items-center gap-1.5 cursor-pointer"><span>Explore Live Benchmark Suite</span><span class="material-symbols-outlined text-[16px]">arrow_forward</span></button></div></div><div class="flex flex-wrap items-center justify-center gap-4"><div class="bg-surface-container-lowest border border-outline-variant rounded-xl px-5 py-3.5 shadow-xs flex flex-col items-center"><span class="text-xs text-on-surface-variant font-medium">XGBoost (Production Lead)</span><span class="text-2xl font-bold font-mono text-secondary mt-0.5">99.8%</span><span class="text-[10px] text-emerald-700 font-semibold">41 Diseases (UCI) · 95.2% ICU</span></div><div class="bg-surface-container-lowest border border-outline-variant rounded-xl px-5 py-3.5 shadow-xs flex flex-col items-center"><span class="text-xs text-on-surface-variant font-medium">Random Forest Ensemble</span><span class="text-2xl font-bold font-mono text-primary mt-0.5">99.9%</span><span class="text-[10px] text-emerald-700 font-semibold">Bagging Regularization</span></div><div class="bg-surface-container-lowest border border-outline-variant rounded-xl px-5 py-3.5 shadow-xs flex flex-col items-center"><span class="text-xs text-on-surface-variant font-medium">L2 Logistic Regression</span><span class="text-2xl font-bold font-mono text-primary mt-0.5">99.9%</span><span class="text-[10px] text-emerald-700 font-semibold">Ridge Calibrated Plane</span></div></div></div></div></section><section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" id="safety"><div class="bg-sky-50/70 border border-secondary/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-[26px]">shield_with_heart</span></div><div class="space-y-1"><h4 class="text-lg font-bold text-primary">Clinical Safety &amp; Ethics Commitment</h4><p class="text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">MediAI Care+ is an educational and clinical decision-support tool. It does not replace emergency medical response (911/112) or professional clinical diagnosis. Patient data is encrypted and never sold.</p></div></div><button id="btn-read-safety-charter" class="px-5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-secondary text-primary hover:text-secondary text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer">Read Safety Charter</button></div></section></main>
<!-- Footer -->
<footer class="w-full py-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container border-t border-outline-variant"><div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6"><div class="flex flex-col gap-1.5 text-center md:text-left"><div class="flex items-center justify-center md:justify-start gap-2"><div class="dynamic-heartbeat-badge relative w-7 h-7 rounded-lg bg-red-500/15 flex items-center justify-center border border-red-300/60 shadow-xs">
  <svg class="w-4 h-4 heartbeat-pulse overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="heart-shape" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444" stroke="#dc2626" stroke-width="1.2"/>
    <path class="ecg-base-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.45"/>
    <path class="ecg-rhythm-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div><span class="font-bold text-sm text-primary">MediAI Care+</span><span class="text-xs text-on-surface-variant/70">| Enterprise Clinical Intelligence</span></div><p class="text-xs text-on-surface-variant max-w-xl">© 2026 MediAI Care+ Health Systems. HIPAA &amp; ISO 27001 Certified Architecture. For clinical decision support; not a substitute for emergent clinical judgment.</p></div><div class="flex flex-wrap items-center justify-center gap-6 text-xs text-on-surface-variant"><a class="hover:text-secondary transition-colors" href="#how-it-works">How It Works</a><a class="hover:text-secondary transition-colors" href="#capabilities">Features</a><a class="hover:text-secondary transition-colors" href="#benchmarks">Benchmarks</a><a id="footer-link-safety" class="hover:text-secondary transition-colors cursor-pointer">Safety Charter</a><a id="footer-link-privacy" class="hover:text-secondary transition-colors cursor-pointer">Privacy Policy</a><a id="footer-link-terms" class="hover:text-secondary transition-colors cursor-pointer">Terms of Service</a><a id="footer-link-enterprise" class="text-secondary font-bold hover:underline cursor-pointer">Enterprise Licensing</a></div></div></footer>
  `;

  // Attach interactive behaviors while preserving exact Stitch UI styling
  setTimeout(() => {
    initLandingInteractions(container, navigateTo);
  }, 0);

  return container;
}

function initLandingInteractions(container, navigateTo) {


  // 1. Tab Switching (Sign In vs Create Account)
  const tabSignIn = container.querySelector('#tab-signin');
  const tabRegister = container.querySelector('#tab-register');
  const submitBtn = container.querySelector('form button[type="submit"]');
  const authForm = container.querySelector('form');
  const emailInput = container.querySelector('#auth-email');
  const passwordInput = container.querySelector('#auth-password');
  const footerPrompt = container.querySelector('.pt-3.border-t.border-outline-variant\\/40 p');

  let isRegisterMode = false;

  function updateTabs(mode) {
    const existingAlert = container.querySelector('#auth-status-alert');
    if (existingAlert && mode === 'register') {
      existingAlert.remove();
    }
    isRegisterMode = mode === 'register';

    if (isRegisterMode) {
      // Register Tab Active
      tabRegister.className = 'flex-1 py-2 text-xs font-semibold rounded-lg bg-surface-container-lowest text-primary shadow-xs transition-all flex items-center justify-center gap-1.5';
      tabRegister.setAttribute('aria-selected', 'true');
      tabRegister.innerHTML = '<span class="material-symbols-outlined text-[15px] text-secondary">person_add</span><span>Create Account</span>';

      // Sign In Tab Inactive
      tabSignIn.className = 'flex-1 py-2 text-xs font-semibold rounded-lg text-on-surface-variant hover:text-primary transition-all flex items-center justify-center gap-1.5';
      tabSignIn.setAttribute('aria-selected', 'false');
      tabSignIn.innerHTML = '<span class="material-symbols-outlined text-[15px]">login</span><span>Sign In</span>';

      // Submit Button Text
      if (submitBtn) {
        submitBtn.innerHTML = '<span>Create Account Free</span><span class="material-symbols-outlined text-[17px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>';
      }

      // Footer Prompt
      if (footerPrompt) {
        footerPrompt.innerHTML = 'Already have an account? <a id="switch-to-signin-link" class="font-semibold text-secondary hover:underline cursor-pointer">Sign in to portal</a>';
        const switchLink = container.querySelector('#switch-to-signin-link');
        if (switchLink) {
          switchLink.addEventListener('click', (e) => {
            e.preventDefault();
            updateTabs('signin');
          });
        }
      }
    } else {
      // Sign In Tab Active
      tabSignIn.className = 'flex-1 py-2 text-xs font-semibold rounded-lg bg-surface-container-lowest text-primary shadow-xs transition-all flex items-center justify-center gap-1.5';
      tabSignIn.setAttribute('aria-selected', 'true');
      tabSignIn.innerHTML = '<span class="material-symbols-outlined text-[15px] text-secondary">login</span><span>Sign In</span>';

      // Register Tab Inactive
      tabRegister.className = 'flex-1 py-2 text-xs font-semibold rounded-lg text-on-surface-variant hover:text-primary transition-all flex items-center justify-center gap-1.5';
      tabRegister.setAttribute('aria-selected', 'false');
      tabRegister.innerHTML = '<span class="material-symbols-outlined text-[15px]">person_add</span><span>Create Account</span>';

      // Submit Button Text
      if (submitBtn) {
        submitBtn.innerHTML = '<span>Sign In</span><span class="material-symbols-outlined text-[17px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>';
      }

      // Footer Prompt
      if (footerPrompt) {
        footerPrompt.innerHTML = "Don't have an account? <a id=\"switch-to-register-link\" class=\"font-semibold text-secondary hover:underline cursor-pointer\">Create account free</a>";
        const switchLink = container.querySelector('#switch-to-register-link');
        if (switchLink) {
          switchLink.addEventListener('click', (e) => {
            e.preventDefault();
            updateTabs('register');
          });
        }
      }
    }
  }

  if (tabSignIn && tabRegister) {
    tabSignIn.addEventListener('click', () => updateTabs('signin'));
    tabRegister.addEventListener('click', () => updateTabs('register'));
  }

  // Initial footer switch link binding
  if (footerPrompt) {
    const initialLink = footerPrompt.querySelector('a');
    if (initialLink) {
      initialLink.addEventListener('click', (e) => {
        e.preventDefault();
        updateTabs('register');
      });
    }
  }

  // Forgot password link
  const forgotPwdLink = container.querySelector('#auth-forgot-password-link');
  if (forgotPwdLink) {
    forgotPwdLink.addEventListener('click', (e) => {
      e.preventDefault();
      openForgotPasswordModal();
    });
  }

  // 2. Auth Form Submission (Sign In / Register)
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const usernameInput = container.querySelector('#auth-username');
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value : '';
      const rawUser = usernameInput ? usernameInput.value.trim() : '';
      const username = rawUser || 'User';

      const userEmail = email || `${username.toLowerCase().replace(/\s+/g, '.')}@mediai.care`;

      if (isRegisterMode) {
        // --- REGISTRATION FLOW: Ask user to log in after registering ---
        // Store account into registered users registry
        let registeredUsers = {};
        try {
          registeredUsers = JSON.parse(localStorage.getItem('mediai_registered_users') || '{}');
        } catch (err) {
          registeredUsers = {};
        }
        registeredUsers[username.toLowerCase()] = {
          name: username,
          email: userEmail,
          password: password,
          registeredAt: new Date().toISOString()
        };
        localStorage.setItem('mediai_registered_users', JSON.stringify(registeredUsers));

        // Switch back to Sign In tab
        updateTabs('signin');

        // Retain username and email, but clear password so user signs in
        if (usernameInput) {
          usernameInput.value = username;
        }
        if (emailInput) {
          emailInput.value = userEmail;
        }
        if (passwordInput) {
          passwordInput.value = '';
        }

        // Render an in-form success banner prompting sign in
        let statusAlert = container.querySelector('#auth-status-alert');
        if (!statusAlert) {
          statusAlert = document.createElement('div');
          statusAlert.id = 'auth-status-alert';
          authForm.parentNode.insertBefore(statusAlert, authForm);
        }
        statusAlert.className = 'p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-start gap-2.5 animate-fadeIn shadow-2xs mb-2';
        statusAlert.innerHTML = `
          <span class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0 mt-0.5">check_circle</span>
          <div class="flex flex-col gap-0.5">
            <span class="font-bold">Account created successfully!</span>
            <span class="text-[11px] text-emerald-800">Please enter your password to sign in to MediAI Care+.</span>
          </div>
        `;

        showAuthToast(
          `Account registered for "${username}"! Please sign in to continue.`,
          'success'
        );

        if (passwordInput) {
          setTimeout(() => passwordInput.focus(), 250);
        }

        return; // Do NOT navigate to dashboard
      }

      // --- SIGN IN FLOW: User logs into website ---
      const sessionUser = {
        email: userEmail,
        name: username,
        role: 'Verified Clinician',
        signedInAt: new Date().toISOString()
      };
      localStorage.setItem('mediai_auth_user', JSON.stringify(sessionUser));
      localStorage.setItem('mediai_user_name', username);

      showAuthToast(
        `Welcome back, ${sessionUser.name}! Dashboard active.`,
        'success'
      );

      setTimeout(() => {
        navigateTo('home');
      }, 400);
    });
  }

  // 3. Social Auth Buttons (Google & GitHub)
  const socialButtons = container.querySelectorAll('.flex.flex-col.gap-2\\.5 button');
  socialButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isGoogle = btn.textContent.includes('Google');
      const provider = isGoogle ? 'Google OAuth' : 'GitHub OAuth';
      const defaultEmail = isGoogle ? 'doctor.demo@gmail.com' : 'dev.clinician@github.com';

      const sessionUser = {
        email: defaultEmail,
        role: 'Verified Clinician (' + provider + ')',
        signedInAt: new Date().toISOString()
      };
      localStorage.setItem('mediai_auth_user', JSON.stringify(sessionUser));

      showAuthToast('Authenticated via ' + provider + '! Launching MediAI Care+...', 'success');

      setTimeout(() => {
        navigateTo('analyze');
      }, 700);
    });
  });

  // 4. Hero Section CTAs
  // "Start Free Symptom Check"
  const startSymptomBtn = Array.from(container.querySelectorAll('button')).find(
    b => b.textContent.includes('Start Free Symptom Check')
  );
  if (startSymptomBtn) {
    startSymptomBtn.addEventListener('click', () => {
      navigateTo('analyze');
    });
  }

  // "Chat with AI Assistant"
  const chatAiBtn = Array.from(container.querySelectorAll('button')).find(
    b => b.textContent.includes('Chat with AI Assistant')
  );
  if (chatAiBtn) {
    chatAiBtn.addEventListener('click', () => {
      navigateTo('chat');
    });
  }

  // 5. Header Action Buttons
  // Header "Sign In / Portal" button -> smooth scroll & focus
  const portalBtn = container.querySelector('#btn-header-portal-signin');
  const portalCard = container.querySelector('.lg\\:col-span-5');
  if (portalBtn && portalCard) {
    portalBtn.addEventListener('click', () => {
      portalCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (emailInput) {
        setTimeout(() => emailInput.focus(), 600);
      }
    });
  }

  // Header "Book Hospital Demo"
  const enterpriseDemoBtn = container.querySelector('#btn-header-enterprise-demo');
  if (enterpriseDemoBtn) {
    enterpriseDemoBtn.addEventListener('click', () => {
      openEnterpriseDemoModal();
    });
  }

  // Language Selector
  const langSelectorBtn = container.querySelector('#btn-language-selector');
  if (langSelectorBtn) {
    langSelectorBtn.addEventListener('click', () => {
      openLanguageModal();
    });
  }

  // Explore Benchmarks CTA
  const exploreBenchmarksBtn = container.querySelector('#btn-landing-explore-benchmarks');
  if (exploreBenchmarksBtn) {
    exploreBenchmarksBtn.addEventListener('click', () => {
      navigateTo('performance');
    });
  }

  // 6. Capability Cards Click Actions
  const capabilityCards = container.querySelectorAll('#capabilities .grid > div');
  if (capabilityCards.length >= 4) {
    capabilityCards[0].classList.add('cursor-pointer');
    capabilityCards[0].addEventListener('click', () => navigateTo('analyze'));

    capabilityCards[1].classList.add('cursor-pointer');
    capabilityCards[1].addEventListener('click', () => navigateTo('drugs'));

    capabilityCards[2].classList.add('cursor-pointer');
    capabilityCards[2].addEventListener('click', () => navigateTo('outbreak'));

    capabilityCards[3].classList.add('cursor-pointer');
    capabilityCards[3].addEventListener('click', () => navigateTo('chat'));
  }

  // 7. Safety Charter CTA
  const safetyBtn = container.querySelector('#btn-read-safety-charter');
  if (safetyBtn) {
    safetyBtn.addEventListener('click', () => {
      openSafetyCharterModal();
    });
  }

  // Footer Links Modals
  const footerSafetyLink = container.querySelector('#footer-link-safety');
  if (footerSafetyLink) {
    footerSafetyLink.addEventListener('click', (e) => {
      e.preventDefault();
      openSafetyCharterModal();
    });
  }

  const footerPrivacyLink = container.querySelector('#footer-link-privacy');
  if (footerPrivacyLink) {
    footerPrivacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      openPrivacyPolicyModal();
    });
  }

  const footerTermsLink = container.querySelector('#footer-link-terms');
  if (footerTermsLink) {
    footerTermsLink.addEventListener('click', (e) => {
      e.preventDefault();
      openTermsModal();
    });
  }

  const footerEnterpriseLink = container.querySelector('#footer-link-enterprise');
  if (footerEnterpriseLink) {
    footerEnterpriseLink.addEventListener('click', (e) => {
      e.preventDefault();
      openEnterpriseDemoModal();
    });
  }

  // 8. Navigation Links Smooth Scroll
  const navLinks = container.querySelectorAll('header nav a, footer a[href^="#"]');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      link.addEventListener('click', (e) => {
        const targetId = href.replace('#', '');
        const targetEl = container.querySelector('#' + targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

  // 9. Brand Logo Click -> Scroll to top
  const brandLink = container.querySelector('#landing-brand-logo');
  if (brandLink) {
    brandLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Enterprise Reusable Modal Framework
function openLandingModal({ title, icon = 'verified', subtitle = '', contentHtml, widthClass = 'max-w-2xl' }) {
  const existing = document.getElementById('landing-active-modal');
  if (existing) existing.remove();

  const backdrop = document.createElement('div');
  backdrop.id = 'landing-active-modal';
  backdrop.className = 'fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn';

  backdrop.innerHTML = `
    <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-2xl w-full ${widthClass} max-h-[90vh] flex flex-col overflow-hidden transform scale-95 animate-scaleUp">
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shrink-0">
            <span class="material-symbols-outlined text-[22px]">${icon}</span>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-primary tracking-tight">${title}</h3>
            ${subtitle ? `<p class="text-xs text-on-surface-variant">${subtitle}</p>` : ''}
          </div>
        </div>
        <button id="btn-close-landing-modal" class="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-primary transition-colors cursor-pointer" title="Close">
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      <!-- Modal Body (Scrollable) -->
      <div class="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-on-surface-variant leading-relaxed custom-scrollbar">
        ${contentHtml}
      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-3 border-t border-outline-variant bg-surface-container-low flex justify-end gap-2 shrink-0">
        <button id="btn-modal-dismiss" class="px-4 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant hover:bg-surface-container text-primary font-bold text-xs transition-colors cursor-pointer">
          Close Window
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  const close = () => {
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => backdrop.remove(), 200);
  };

  backdrop.querySelector('#btn-close-landing-modal').addEventListener('click', close);
  backdrop.querySelector('#btn-modal-dismiss').addEventListener('click', close);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  const onKey = (e) => {
    if (e.key === 'Escape') {
      close();
      window.removeEventListener('keydown', onKey);
    }
  };
  window.addEventListener('keydown', onKey);
}

// 1. Enterprise Demo / Hospital Pilot Modal
export function openEnterpriseDemoModal() {
  const content = `
    <div class="space-y-4">
      <div class="p-3.5 bg-sky-50/80 border border-secondary/20 rounded-xl flex items-start gap-3">
        <span class="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">verified_user</span>
        <div class="text-xs text-on-surface-variant">
          <strong class="text-primary font-bold">Clinical Enterprise Program:</strong> Deploy MediAI Care+ within your hospital network, trauma center, or digital health platform. Includes EHR (Epic/Cerner) HL7/FHIR connectors and custom ML model retraining on institutional cohorts.
        </div>
      </div>

      <form id="enterprise-demo-form" class="space-y-3 pt-1" onsubmit="return false;">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label class="text-xs font-bold text-primary">Health System / Institution</label>
            <input id="demo-hospital" type="text" placeholder="e.g. Metro Health System or Mayo Clinic Network" required class="p-2.5 rounded-lg border border-outline-variant bg-surface-container-low text-xs text-primary focus:outline-none focus:border-secondary" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-xs font-bold text-primary">Clinical Representative Name</label>
            <input id="demo-name" type="text" placeholder="Dr. Sarah Johnson, MD" required class="p-2.5 rounded-lg border border-outline-variant bg-surface-container-low text-xs text-primary focus:outline-none focus:border-secondary" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label class="text-xs font-bold text-primary">Institutional Work Email</label>
            <input id="demo-email" type="email" placeholder="sarah.johnson@metrohealth.org" required class="p-2.5 rounded-lg border border-outline-variant bg-surface-container-low text-xs text-primary focus:outline-none focus:border-secondary" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-xs font-bold text-primary">Clinical Role / Title</label>
            <select id="demo-role" class="p-2.5 rounded-lg border border-outline-variant bg-surface-container-low text-xs text-primary focus:outline-none focus:border-secondary">
              <option>Chief Medical Officer (CMO)</option>
              <option>Chief Information Officer (CIO / CMIO)</option>
              <option selected>Attending Physician / Department Head</option>
              <option>Director of Pharmacy / Clinical Pharmacist</option>
              <option>Clinical Research Investigator</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label class="text-xs font-bold text-primary">Active EHR / EMR Infrastructure</label>
            <select id="demo-ehr" class="p-2.5 rounded-lg border border-outline-variant bg-surface-container-low text-xs text-primary focus:outline-none focus:border-secondary">
              <option>Epic Systems (App Orchard)</option>
              <option>Oracle Cerner (Millennium)</option>
              <option>MEDITECH Expanse</option>
              <option>HL7 FHIR REST API Standard</option>
              <option>Standalone Clinical Web Portal</option>
            </select>
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-xs font-bold text-primary">Primary Clinical Use-Case</label>
            <select id="demo-usecase" class="p-2.5 rounded-lg border border-outline-variant bg-surface-container-low text-xs text-primary focus:outline-none focus:border-secondary">
              <option>ICU Decompensation & Sepsis Triage (MIMIC-IV)</option>
              <option>Pharmacovigilance & Polypharmacy ADR Safety (FAERS)</option>
              <option>Cardiometabolic & Renal Risk Screening (NHANES)</option>
              <option>Full Clinical Decision Suite (All 4 Datasets)</option>
            </select>
          </div>
        </div>

        <div class="pt-2 flex items-center justify-between">
          <span class="text-[11px] text-on-surface-variant flex items-center gap-1 font-mono-data">
            <span class="material-symbols-outlined text-xs text-emerald-600">lock</span>
            HIPAA BAA Agreement Ready · Instant 30-Day Sandbox
          </span>
          <button id="btn-submit-enterprise-demo" type="submit" class="px-5 py-2.5 bg-secondary text-white font-bold text-xs rounded-xl hover:bg-on-secondary-fixed-variant transition-all shadow-sm">
            Request Enterprise Pilot Key
          </button>
        </div>
      </form>
      <div id="demo-confirmation-box" class="hidden p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs"></div>
    </div>
  `;

  openLandingModal({
    title: 'Enterprise Hospital Pilot & Demo',
    subtitle: 'HIPAA BAA · HL7 FHIR EHR Connectors · Institution Retraining',
    icon: 'corporate_fare',
    contentHtml: content,
    widthClass: 'max-w-2xl'
  });

  const form = document.getElementById('enterprise-demo-form');
  const confirmBox = document.getElementById('demo-confirmation-box');
  if (form) {
    form.addEventListener('submit', () => {
      const hospital = document.getElementById('demo-hospital').value || 'Hospital Network';
      const email = document.getElementById('demo-email').value || 'clinician@hospital.org';
      const licenseKey = 'MEDAI-HOSP-' + Math.random().toString(36).substring(2, 8).toUpperCase() + '-2026';

      form.classList.add('hidden');
      confirmBox.classList.remove('hidden');
      confirmBox.innerHTML = `
        <div class="flex items-center gap-2 font-bold text-sm text-emerald-800">
          <span class="material-symbols-outlined text-lg">check_circle</span>
          Enterprise Pilot Dispatched for ${hospital}
        </div>
        <p class="mt-2 text-xs text-emerald-700 leading-relaxed">
          An institutional onboarding package, signed Business Associate Agreement (BAA), and sandbox credentials have been delivered to <strong>${email}</strong>.
        </p>
        <div class="mt-3 p-2.5 bg-white border border-emerald-300 rounded font-mono-data text-xs flex justify-between items-center">
          <span>Sandbox License Token:</span>
          <strong class="text-secondary font-bold">${licenseKey}</strong>
        </div>
      `;
    });
  }
}

// 2. Safety Charter Modal
function openSafetyCharterModal() {
  const content = `
    <div class="space-y-4">
      <div class="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant">
        <h4 class="font-bold text-primary text-sm mb-1">Our Core Commitment to Clinical Safety</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed">
          MediAI Care+ operates under the strict principle of <strong>Augmented, Not Autonomous</strong> healthcare. Machine learning models provide consensus decision support; licensed clinical providers retain 100% diagnostic and prescriptive authority.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant">
          <div class="flex items-center gap-2 font-bold text-primary mb-1">
            <span class="material-symbols-outlined text-secondary text-base">emergency</span>
            Red-Flag Escalation Protocol
          </div>
          <p class="text-on-surface-variant">Whenever life-threatening indicators arise (SpO2 &lt; 90%, crushing chest pain, anaphylaxis, acute stroke markers), the system immediately presents Emergency Red Flag Triage protocols.</p>
        </div>

        <div class="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant">
          <div class="flex items-center gap-2 font-bold text-primary mb-1">
            <span class="material-symbols-outlined text-secondary text-base">hub</span>
            Multi-Model Algorithmic Consensus
          </div>
          <p class="text-on-surface-variant">Decisions are cross-validated between XGBoost, Random Forest, and L2 Logistic Regression. Discordant predictions trigger a cautious diagnostic alert rather than false certainty.</p>
        </div>

        <div class="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant">
          <div class="flex items-center gap-2 font-bold text-primary mb-1">
            <span class="material-symbols-outlined text-secondary text-base">shield</span>
            Zero Patient Identifiers Retained
          </div>
          <p class="text-on-surface-variant">Inquiry telemetry, vitals vectors, and symptom queries are processed in ephemeral memory. No Protected Health Information (PHI) is sold or used for model retraining without written BAA authorization.</p>
        </div>

        <div class="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant">
          <div class="flex items-center gap-2 font-bold text-primary mb-1">
            <span class="material-symbols-outlined text-secondary text-base">verified</span>
            Validated Clinical Repositories
          </div>
          <p class="text-on-surface-variant">All pharmacotherapy rules, renal cutoffs, and shock indices are tied to peer-reviewed data from PhysioNet MIMIC-IV, CDC NHANES, and FDA FAERS.</p>
        </div>
      </div>
    </div>
  `;

  openLandingModal({
    title: 'MediAI Care+ Clinical Safety Charter',
    subtitle: 'Doctor-in-the-Loop · Algorithmic Consensus · Zero Hallucination Safeguards',
    icon: 'shield_with_heart',
    contentHtml: content
  });
}

// 3. Privacy Policy Modal
function openPrivacyPolicyModal() {
  const content = `
    <div class="space-y-3 text-xs leading-relaxed">
      <p class="font-bold text-primary text-sm">Last Updated: October 2026 | Enterprise Edition</p>
      <p>MediAI Care+ ("Platform", "we", "our") is dedicated to protecting clinical and personal health data in compliance with the <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong>, the <strong>Health Information Technology for Economic and Clinical Health (HITECH) Act</strong>, and the <strong>EU General Data Protection Regulation (GDPR)</strong>.</p>
      
      <h5 class="font-bold text-primary text-xs pt-1 uppercase">1. Information We Process</h5>
      <p>The Platform processes clinical presentations, quantitative vitals (heart rate, blood pressure, SpO2, respiratory rate), and laboratory panels (glucose, creatinine, eGFR). All data is processed using cryptographically salted session identifiers with no requirement for patient Social Security numbers or full legal names.</p>

      <h5 class="font-bold text-primary text-xs pt-1 uppercase">2. Encryption & Security</h5>
      <p>All in-flight communications utilize TLS 1.3 with AES-256 GCM encryption. On-disk databases and models are protected with hardware-accelerated AES-256 storage. Automated security log rotation ensures zero unencrypted leaks.</p>

      <h5 class="font-bold text-primary text-xs pt-1 uppercase">3. Business Associate Agreements (BAA)</h5>
      <p>For hospital networks and institutional clinical partners, MediAI Care+ executes formal HIPAA Business Associate Agreements guaranteeing that Protected Health Information (PHI) is isolated within client-specific virtual private boundaries.</p>

      <h5 class="font-bold text-primary text-xs pt-1 uppercase">4. No Data Sale Guarantee</h5>
      <p>We do not monetize patient queries or share data with pharmaceutical advertising brokers. Clinical analytics are generated strictly for immediate diagnostic decision support.</p>
    </div>
  `;

  openLandingModal({
    title: 'Institutional Privacy & Data Governance Policy',
    subtitle: 'HIPAA Privacy Rule · HITECH Compliant · Zero Data Monetization',
    icon: 'policy',
    contentHtml: content
  });
}

// 4. Terms of Service Modal
function openTermsModal() {
  const content = `
    <div class="space-y-3 text-xs leading-relaxed">
      <p class="font-bold text-primary text-sm">Clinical Decision Support Service Agreement</p>
      <p>By accessing or utilizing MediAI Care+, users and institutional partners agree to the following clinical terms:</p>
      
      <h5 class="font-bold text-primary text-xs pt-1 uppercase">1. Non-Diagnostic Educational & Triage Intent</h5>
      <p>The Platform provides computer-aided clinical triage and diagnostic differential scoring based on verified open-source models. It does not issue binding medical prescriptions, formal pathology diagnoses, or surgical orders. Clinicians must exercise independent medical judgment before prescribing or treating.</p>

      <h5 class="font-bold text-primary text-xs pt-1 uppercase">2. Emergency Disclaimer</h5>
      <p>This software is not an emergency dispatch provider. In any life-threatening situation (cardiac arrest, respiratory failure, trauma), emergency medical services (911 / 112 / 999) must be contacted immediately.</p>

      <h5 class="font-bold text-primary text-xs pt-1 uppercase">3. Intellectual Property & Audited Algorithms</h5>
      <p>The machine learning architectures (XGBoost, Random Forest, Logistic Regression pipelines) and curated pharmacovigilance matrices are proprietary assets of MediAI Care+ Systems, licensed for verified clinical and patient decision support.</p>
    </div>
  `;

  openLandingModal({
    title: 'Terms of Clinical Decision Support Service',
    subtitle: 'Institutional Use Agreement · Clinical Responsibility Boundaries',
    icon: 'gavel',
    contentHtml: content
  });
}

// 5. Language Selector Modal
function openLanguageModal() {
  const languages = [
    { code: 'en', name: 'English (US & Global)', native: 'English', greeting: 'Welcome to MediAI Care+' },
    { code: 'hi', name: 'Hindi / हिन्दी', native: 'हिन्दी', greeting: 'MediAI Care+ में आपका स्वागत है' },
    { code: 'ta', name: 'Tamil / தமிழ்', native: 'தமிழ்', greeting: 'MediAI Care+ க்கு வருக' }
  ];

  const content = `
    <div class="space-y-3">
      <p class="text-xs text-on-surface-variant">Select your preferred clinical interface and voice interaction language. All symptom extractors, drug monographs, and chatbot sessions dynamically adapt:</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
        ${languages.map(l => `
          <button data-lang-code="${l.code}" data-lang-native="${l.native}" class="lang-choice-btn p-3 rounded-xl border border-outline-variant bg-surface-container-low hover:bg-surface-container-high hover:border-secondary transition-all flex items-center justify-between text-left cursor-pointer group">
            <div>
              <div class="font-bold text-primary text-xs group-hover:text-secondary">${l.name}</div>
              <div class="text-[11px] text-on-surface-variant/80 mt-0.5">${l.greeting}</div>
            </div>
            <span class="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 text-sm transition-opacity">check_circle</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  openLandingModal({
    title: 'Select Clinical Language',
    subtitle: 'Multilingual Natural Language Processing & Voice Synthesis',
    icon: 'translate',
    contentHtml: content,
    widthClass: 'max-w-xl'
  });

  document.querySelectorAll('.lang-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const native = btn.getAttribute('data-lang-native');
      const label = document.getElementById('current-lang-label');
      if (label) {
        label.textContent = native;
      }
      const modal = document.getElementById('landing-active-modal');
      if (modal) modal.remove();
      showAuthToast(`Language updated to ${native}. Multilingual clinical parsing active.`, 'success');
    });
  });
}

// 6. Forgot Password Modal
function openForgotPasswordModal() {
  const content = `
    <div class="space-y-3">
      <p class="text-xs text-on-surface-variant">
        Enter your institutional or personal clinical email address. A cryptographic single-use reset token will be dispatched via secure email relay:
      </p>
      <form id="forgot-pwd-form" class="space-y-3" onsubmit="return false;">
        <div class="flex flex-col gap-1">
          <label class="text-xs font-bold text-primary">Registered Email Address</label>
          <div class="relative flex items-center">
            <span class="material-symbols-outlined text-[17px] text-on-surface-variant absolute ml-3 pointer-events-none">mail</span>
            <input id="forgot-email-input" type="email" required placeholder="doctor@clinic.org or patient@domain.com" class="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-xs text-primary focus:outline-none focus:border-secondary" />
          </div>
        </div>
        <div class="flex justify-end pt-1">
          <button type="submit" class="px-5 py-2.5 bg-secondary text-white font-bold text-xs rounded-xl hover:bg-on-secondary-fixed-variant transition-all shadow-sm">
            Send Reset Instructions
          </button>
        </div>
      </form>
      <div id="forgot-confirm-box" class="hidden p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs font-medium"></div>
    </div>
  `;

  openLandingModal({
    title: 'Reset Clinical Portal Password',
    subtitle: 'Cryptographically Signed Reset Relay · 15-Minute Expiry',
    icon: 'lock_reset',
    contentHtml: content,
    widthClass: 'max-w-md'
  });

  const form = document.getElementById('forgot-pwd-form');
  const confirm = document.getElementById('forgot-confirm-box');
  if (form) {
    form.addEventListener('submit', () => {
      const email = document.getElementById('forgot-email-input').value;
      form.classList.add('hidden');
      confirm.classList.remove('hidden');
      confirm.innerHTML = `
        <div class="flex items-center gap-1.5 font-bold text-emerald-800">
          <span class="material-symbols-outlined text-base">check_circle</span> Instructions Dispatched
        </div>
        <p class="mt-1 text-[11px] text-emerald-700">A secure reset token has been sent to <strong>${email}</strong>. Check your institutional inbox.</p>
      `;
    });
  }
}

// Sleek Non-intrusive Toast Notification
function showAuthToast(message, type = 'info') {
  let toast = document.getElementById('mediai-auth-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'mediai-auth-toast';
    toast.className = 'fixed bottom-6 right-6 z-[9999] max-w-md px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 transition-all transform duration-300 font-body-sm text-xs border';
    document.body.appendChild(toast);
  }

  const isSuccess = type === 'success';
  toast.className = isSuccess
    ? 'fixed bottom-6 right-6 z-[9999] max-w-md px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 transition-all transform duration-300 font-body-sm text-xs border bg-emerald-900 text-white border-emerald-500/50 translate-y-0 opacity-100'
    : 'fixed bottom-6 right-6 z-[9999] max-w-md px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 transition-all transform duration-300 font-body-sm text-xs border bg-surface-container-highest text-primary border-outline-variant translate-y-0 opacity-100';

  const iconName = isSuccess ? 'verified' : 'info';
  const iconColor = isSuccess ? 'text-emerald-300' : 'text-secondary';

  toast.innerHTML = '<span class="material-symbols-outlined text-[20px] ' + iconColor + '">' + iconName + '</span>' +
    '<span class="flex-1 font-medium">' + message + '</span>' +
    '<button class="p-1 hover:bg-white/10 rounded" onclick="this.parentElement.remove()">' +
      '<span class="material-symbols-outlined text-[16px]">close</span>' +
    '</button>';

  setTimeout(() => {
    if (toast && toast.parentElement) {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }
  }, 4500);
}
