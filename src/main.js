import { renderLandingView, openEnterpriseDemoModal } from './views/landingView.js';
import { renderHomeView } from './views/homeView.js';
import { renderAnalyzeView } from './views/analyzeView.js';
import { renderChatView } from './views/chatView.js';
import { renderDrugsView } from './views/drugsView.js';
import { renderOutbreakView } from './views/outbreakView.js';
import { renderPerformanceView } from './views/performanceView.js';
import { renderMcpView } from './views/mcpView.js';
import { checkBackendHealth } from './services/apiService.js';

let currentRoute = 'home';
let currentLayout = null; // 'app'
let isSidebarOpen = false;

export function isAuthenticated() {
  try {
    const raw = localStorage.getItem('mediai_auth_user');
    if (!raw) return false;
    const user = JSON.parse(raw);
    return Boolean(user && user.name && user.name.trim());
  } catch (e) {
    return false;
  }
}

export function getAuthenticatedUser() {
  try {
    const raw = localStorage.getItem('mediai_auth_user');
    if (raw) {
      const p = JSON.parse(raw);
      if (p && p.name && p.name.trim()) return p;
    }
  } catch (e) {}
  const saved = localStorage.getItem('mediai_user_name');
  if (saved && saved.trim()) return { email: `${saved.trim().toLowerCase().replace(/\s+/g, '.')}@mediai.care`, name: saved.trim() };
  return { email: 'clinician@mediai.care', name: 'Clinician' };
}

export function toggleSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!sidebar) return;

  isSidebarOpen = !isSidebarOpen;
  if (isSidebarOpen) {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
    if (backdrop) backdrop.classList.remove('hidden');
  } else {
    sidebar.classList.add('-translate-x-full');
    sidebar.classList.remove('translate-x-0');
    if (backdrop) backdrop.classList.add('hidden');
  }
}

export function closeSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  isSidebarOpen = false;
  if (sidebar) {
    sidebar.classList.add('-translate-x-full');
    sidebar.classList.remove('translate-x-0');
  }
  if (backdrop) backdrop.classList.add('hidden');
}

// Interactive Logout Confirmation Modal
export function openLogoutModal() {
  const existing = document.getElementById('logout-confirmation-modal');
  if (existing) existing.remove();

  const user = getAuthenticatedUser();
  const userName = user.name || "Clinician";
  const userInitials = userName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase() || "MD";
  const userEmail = user.email || 'nethaaji.s@mediai.care';

  const backdrop = document.createElement('div');
  backdrop.id = 'logout-confirmation-modal';
  backdrop.className = 'fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn';

  backdrop.innerHTML = `
    <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform scale-95 animate-scaleUp p-6 flex flex-col gap-5">
      <div class="flex items-center gap-3.5">
        <div class="w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 flex items-center justify-center border border-red-500/20 shrink-0">
          <span class="material-symbols-outlined text-[26px]">logout</span>
        </div>
        <div class="flex flex-col">
          <h3 class="text-lg font-bold text-primary leading-tight">Log Out Session</h3>
          <p class="text-xs text-on-surface-variant font-mono-data mt-0.5">${userEmail}</p>
        </div>
      </div>

      <div class="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/60 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-[#00593f] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
          NS
        </div>
        <div class="flex flex-col truncate">
          <strong class="text-xs font-bold text-primary truncate">${userName}</strong>
          <span class="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Active Student &amp; Clinician Session
          </span>
        </div>
      </div>

      <p class="text-xs text-on-surface-variant leading-relaxed">
        Are you sure you want to end your active session? You will be logged out and returned to the MediAI Care+ Landing &amp; Auth Portal.
      </p>

      <div class="flex items-center justify-end gap-2.5 pt-1 border-t border-outline-variant/60">
        <button id="btn-cancel-logout" class="px-4 py-2 rounded-xl border border-outline-variant text-xs font-semibold text-primary hover:bg-surface-container transition-all cursor-pointer">
          Cancel
        </button>
        <button id="btn-confirm-logout" class="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer">
          <span class="material-symbols-outlined text-[16px]">door_open</span>
          <span>Log Out to Landing Page</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  const close = () => backdrop.remove();
  backdrop.querySelector('#btn-cancel-logout').addEventListener('click', close);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  backdrop.querySelector('#btn-confirm-logout').addEventListener('click', () => {
    localStorage.removeItem('mediai_auth_user');
    close();
    closeSidebar();
    navigateTo('landing');
  });
}

function renderAppShell(appEl) {
  const user = getAuthenticatedUser();
  const userName = user.name || "Clinician";
  const userInitials = userName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase() || "MD";
  appEl.innerHTML = `
    <!-- Top Header Matching Reference Screenshot: 3 Lines, Dynamic Heartbeat, Dashboard, 0 credits, Search, Bell -->
    <header class="sticky top-0 w-full z-50 flex justify-between items-center px-3 sm:px-6 md:px-8 bg-surface-container-lowest border-b border-outline-variant shadow-sm h-16">
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- 3 Lines Hamburger Menu Button (Navigates to all tabs) -->
        <button id="btn-sidebar-toggle" type="button" class="p-2 -ml-1 rounded-xl text-primary hover:bg-surface-container active:bg-surface-container-high transition-colors flex items-center justify-center cursor-pointer focus:outline-none" aria-label="Toggle navigation menu" title="Toggle Navigation Menu (3 lines)">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <!-- Brand Link with Dynamic Red Heart Icon & Continuous White Heartbeat -->
        <a href="#home" data-route="home" id="brand-link" class="text-headline-md font-bold text-primary flex items-center gap-2 cursor-pointer group" title="MediAI Care+ | Enterprise Clinical AI">
          <div class="dynamic-heartbeat-badge relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-red-500/20 via-rose-50 to-red-50 flex items-center justify-center border-2 border-red-300/80 shadow-xs group-hover:scale-105 transition-transform" title="Live Cardiac Telemetry Active">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 heartbeat-pulse overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="heart-shape" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444" stroke="#dc2626" stroke-width="1.2"/>
              <path class="ecg-base-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.5"/>
              <path class="ecg-rhythm-line" d="M2 12h3.5l1-1.4 1 1.4h1.5l0.8 1.8 1.4-9.3 1.4 12.8 0.9-5.3h1.5l1.2-1.8 1.3 1.8h4.05" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="flex items-center gap-1 font-black text-lg sm:text-xl text-primary tracking-tight leading-none">
            MediAI Care<span class="text-secondary text-xl sm:text-2xl font-black leading-none">+</span>
          </span>
        </a>

        <!-- Top Breadcrumb Matching Screenshot (← → Dashboard) -->
        <div class="hidden sm:flex items-center gap-2 text-on-surface-variant text-xs border-l border-outline-variant/60 pl-3 ml-1">
          <button id="btn-nav-back" class="p-1 hover:bg-surface-container rounded-lg transition-colors cursor-pointer text-on-surface-variant hover:text-primary" title="Go Back">
            <span class="material-symbols-outlined text-[18px]">arrow_back</span>
          </button>
          <button id="btn-nav-forward" class="p-1 hover:bg-surface-container rounded-lg transition-colors cursor-pointer text-on-surface-variant hover:text-primary" title="Go Forward">
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
          <span class="font-bold text-primary text-xs ml-0.5">Dashboard</span><span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] font-bold font-mono-data ml-1.5 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span id="header-user-display">${userName}</span></span>
        </div>
      </div>

      <!-- Top Right Elements: Search Box (Credits & Notifications removed) -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Search Input Box (Search... Ctrl K) -->
        <div id="btn-top-search" class="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/60 text-xs text-on-surface-variant hover:bg-surface-container transition-all cursor-pointer shadow-2xs">
          <span class="material-symbols-outlined text-[16px]">search</span>
          <span class="text-on-surface-variant/70 text-xs">Search...</span>
          <kbd class="px-1.5 py-0.5 text-[10px] font-mono-data bg-surface-container-lowest border border-outline-variant/60 rounded text-on-surface-variant">Ctrl K</kbd>
        </div>
      </div>
    </header>

    <!-- Shell Container (Sidebar Drawer + Main View Content) -->
    <div class="flex-1 flex flex-col md:flex-row w-full overflow-hidden relative">
      
      <!-- Mobile Backdrop Overlay -->
      <div id="sidebar-backdrop" class="fixed inset-0 bg-black/40 z-40 hidden backdrop-blur-xs transition-opacity duration-300"></div>

      <!-- Left Desktop & Mobile Drawer SideNavBar (Cleaned: Removed Book Hospital Demo and Role) -->
      <aside id="app-sidebar" class="fixed inset-y-0 left-0 z-50 w-[260px] border-r border-outline-variant bg-surface-container-low p-2.5 flex flex-col gap-1 flex-shrink-0 transition-transform duration-300 ease-in-out -translate-x-full shadow-2xl top-16 h-[calc(100vh-64px)]">
        
        <!-- Sidebar Header with Title & Mobile Close Button -->
        <div class="flex items-center justify-between pb-2 mb-1 border-b border-outline-variant/60">
          <div class="flex items-center gap-1.5 px-1">
            <span class="material-symbols-outlined text-secondary text-base">vertical_split</span>
            <span class="text-[11px] font-bold text-primary uppercase tracking-wider font-mono-data">Navigation Tabs</span>
          </div>
          <button id="btn-close-sidebar" class="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors cursor-pointer" title="Close navigation menu">
            <span class="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        <!-- Navigation Tabs List (Seamless Access to All Features via 3 Lines Menu) -->
        <div class="flex-1 flex flex-col gap-1 overflow-y-auto pr-0.5 custom-scrollbar">
          <a data-route="home" class="sidebar-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer" href="#home" title="Dashboard / Home">
            <span class="material-symbols-outlined text-[19px]">home</span>
            <div class="flex flex-col">
              <span class="font-label-md text-xs font-bold leading-tight">Dashboard</span>
              <span class="text-[10px] text-on-surface-variant/70 leading-tight">Student &amp; Clinical Overview</span>
            </div>
          </a>
          <a data-route="analyze" class="sidebar-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer" href="#analyze" title="Differential Symptom Analysis">
            <span class="material-symbols-outlined text-[19px]">analytics</span>
            <div class="flex flex-col">
              <span class="font-label-md text-xs font-bold leading-tight">Symptom Analysis</span>
              <span class="text-[10px] text-on-surface-variant/70 leading-tight">80 Diseases Differential</span>
            </div>
          </a>
          <a data-route="chat" class="sidebar-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer" href="#chat" title="Clinical AI Chatbot">
            <span class="material-symbols-outlined text-[19px] text-secondary">smart_toy</span>
            <div class="flex flex-col">
              <span class="font-label-md text-xs font-bold leading-tight">MediAI Chatbot</span>
              <span class="text-[10px] text-on-surface-variant/70 leading-tight">EN / हिन्दी / தமிழ் Triage</span>
            </div>
          </a>
          <a data-route="drugs" class="sidebar-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer" href="#drugs" title="Verified Drug Monographs &amp; Interaction Checks">
            <span class="material-symbols-outlined text-[19px]">medical_services</span>
            <div class="flex flex-col">
              <span class="font-label-md text-xs font-bold leading-tight">Drug Profile &amp; Check</span>
              <span class="text-[10px] text-on-surface-variant/70 leading-tight">Formulary &amp; Dosing Limits</span>
            </div>
          </a>
          <a data-route="outbreak" class="sidebar-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer" href="#outbreak" title="Epidemiological Outbreak Awareness">
            <span class="material-symbols-outlined text-[19px]">public</span>
            <div class="flex flex-col">
              <span class="font-label-md text-xs font-bold leading-tight">Outbreak Awareness</span>
              <span class="text-[10px] text-on-surface-variant/70 leading-tight">Live Contagion Alerts</span>
            </div>
          </a>
          <a data-route="performance" class="sidebar-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer" href="#performance" title="Audited Machine Learning Benchmarks">
            <span class="material-symbols-outlined text-[19px]">speed</span>
            <div class="flex flex-col">
              <span class="font-label-md text-xs font-bold leading-tight font-mono-data">ML Model Benchmarks</span>
              <span class="text-[10px] text-on-surface-variant/70 leading-tight">15,420 Combined Records</span>
            </div>
          </a>
          <a data-route="mcp" class="sidebar-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer" href="#mcp" title="Model Context Protocol Hub">
            <span class="material-symbols-outlined text-[19px] text-secondary">terminal</span>
            <div class="flex flex-col">
              <span class="font-label-md text-xs font-bold leading-tight">MCP Protocol Hub</span>
              <span class="text-[10px] text-on-surface-variant/70 leading-tight">JSON-RPC 2.0 Tools</span>
            </div>
          </a>
          
        </div>

        <!-- Telemetry Status Box -->
        <div class="mt-auto flex flex-col gap-1 pt-2 border-t border-outline-variant text-xs text-on-surface-variant">
          <div id="sidebar-backend-status" class="p-2 bg-emerald-50 border border-emerald-200 rounded-xl font-mono-data text-[11px] text-emerald-900 mb-0.5">
            <div class="flex items-center gap-1 font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              FastAPI: Online (8000)
            </div>
            <div class="text-[10px] text-emerald-700 mt-0.5">Vite Frontend Active (/api)</div>
          </div>

          <!-- User ID Item at Bottom of Navigation Sidebar (Click triggers Logout Popup) -->
          <div id="btn-sidebar-user-id" class="mt-1 flex items-center justify-between p-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all cursor-pointer border border-outline-variant/60 shadow-2xs group" title="Click to view Account &amp; Log Out">
            <div class="flex items-center gap-2.5 truncate">
              <div class="w-8 h-8 rounded-full bg-[#00593f] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                NS
              </div>
              <div class="flex flex-col truncate">
                <span class="font-bold text-xs text-primary truncate leading-tight group-hover:text-emerald-800 transition-colors">${userName}</span>
                <span class="text-[10px] text-on-surface-variant font-mono-data truncate">Active Clinician · Online</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-red-600 transition-colors" title="Log Out">logout</span>
          </div>
        </div>
      </aside>

      <!-- Main Canvas Container -->
      <main id="main-content" class="flex-1 flex flex-col bg-background min-h-[calc(100vh-64px)] pb-16 md:pb-0 overflow-y-auto">
        <!-- Rendered view goes here -->
      </main>
    </div>
  `;

  // Attach 3-lines menu toggle listener
  const btnSidebarToggle = document.getElementById('btn-sidebar-toggle');
  if (btnSidebarToggle) {
    btnSidebarToggle.addEventListener('click', toggleSidebar);
  }

  // Attach mobile close button & backdrop listeners
  const btnCloseSidebar = document.getElementById('btn-close-sidebar');
  if (btnCloseSidebar) {
    btnCloseSidebar.addEventListener('click', closeSidebar);
  }

  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeSidebar);
  }

  // Close mobile sidebar on navigating via links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      closeSidebar();
    });
  });

  // User ID click handler at the bottom of the navigation tab -> Triggers Logout Pop-up
  const btnSidebarUserId = document.getElementById('btn-sidebar-user-id');
  if (btnSidebarUserId) {
    btnSidebarUserId.addEventListener('click', () => {
      openLogoutModal();
    });
  }

  // Back/Forward buttons in top header
  const btnBack = document.getElementById('btn-nav-back');
  if (btnBack) {
    btnBack.addEventListener('click', () => window.history.back());
  }
  const btnForward = document.getElementById('btn-nav-forward');
  if (btnForward) {
    btnForward.addEventListener('click', () => window.history.forward());
  }

  // Top search box
  const btnTopSearch = document.getElementById('btn-top-search');
  if (btnTopSearch) {
    btnTopSearch.addEventListener('click', () => navigateTo('drugs'));
  }

  // Poll FastAPI backend status
  checkBackendHealth().then(res => {
    const statusBox = document.getElementById('sidebar-backend-status');
    if (!statusBox) return;
    if (res.online) {
      statusBox.className = 'p-2 bg-emerald-50 border border-emerald-200 rounded-xl font-mono-data text-[11px] text-emerald-900 mb-0.5';
      statusBox.innerHTML = `
        <div class="flex items-center gap-1 font-bold">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          FastAPI: Online (8000)
        </div>
        <div class="text-[10px] text-emerald-700 mt-0.5">Vite Frontend Active (/api)</div>
      `;
    } else {
      statusBox.className = 'p-2 bg-amber-50 border border-amber-200 rounded-xl font-mono-data text-[11px] text-amber-900 mb-0.5';
      statusBox.innerHTML = `
        <div class="flex items-center gap-1 font-bold">
          <span class="w-2 h-2 rounded-full bg-amber-500"></span>
          FastAPI: Standby (Offline Mode)
        </div>
        <div class="text-[10px] text-amber-700 mt-0.5">Using local clinical matrix</div>
      `;
    }
  });
}

export function navigateTo(route, params = {}) {
  // If not authenticated and trying to access any dashboard views, enforce landing / login portal
  if (!isAuthenticated() && route !== 'landing' && route !== 'portal') {
    route = 'landing';
  }
  currentRoute = route;
  const appEl = document.getElementById('app');
  if (!appEl) return;

  // Sync hash without triggering infinite loop
  if (window.location.hash.replace('#', '') !== route) {
    history.pushState(null, '', '#' + route);
  }

  // Ensure standard app shell layout is rendered
  if (currentLayout !== 'app') {
    currentLayout = 'app';
    renderAppShell(appEl);
  }

  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  // Update active nav styling in sidebar
  document.querySelectorAll('.sidebar-link').forEach(el => {
    const r = el.getAttribute('data-route');
    if (r === route) {
      el.className = 'sidebar-link flex items-center gap-2.5 px-3 py-2 rounded-xl bg-secondary/15 text-secondary border border-secondary/30 font-bold cursor-pointer transition-all shadow-2xs';
    } else {
      el.className = 'sidebar-link flex items-center gap-2.5 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer';
    }
  });

  // Render view into mainContent
  mainContent.innerHTML = '';
  window.scrollTo(0, 0);

  switch (route) {
    case 'analyze':
      mainContent.appendChild(renderAnalyzeView(navigateTo, params.initialQuery || ''));
      break;
    case 'chat':
      mainContent.appendChild(renderChatView(navigateTo, params));
      break;
    case 'drugs':
      mainContent.appendChild(renderDrugsView(navigateTo, params.initialQuery || ''));
      break;
    case 'outbreak':
      mainContent.appendChild(renderOutbreakView(navigateTo));
      break;
    case 'performance':
      mainContent.appendChild(renderPerformanceView(navigateTo));
      break;
    case 'mcp':
      mainContent.appendChild(renderMcpView(navigateTo));
      break;
    case 'landing':
    case 'portal':
      mainContent.appendChild(renderLandingView(navigateTo));
      break;
    case 'home':
    default:
      mainContent.appendChild(renderHomeView(navigateTo));
      break;
  }
}

function initApp() {
  // Global click delegate for links with [data-route]
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-route]');
    if (link) {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      navigateTo(route);
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash);
  });

  // Responsive sidebar resize listener
  window.addEventListener('resize', () => {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!sidebar) return;
    if (!isSidebarOpen) {
      sidebar.classList.add('-translate-x-full');
      sidebar.classList.remove('translate-x-0');
      if (backdrop) backdrop.classList.add('hidden');
    }
  });

  // Keyboard shortcut Ctrl+K for search
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      navigateTo('drugs');
    }
  });

  // Initial Route Resolution:
  // Defaults directly to the official Home Dashboard ('home')
  const initialHash = window.location.hash.replace('#', '');
  // Opening localhost link or root URL always directs directly to the Login Page!
  let startRoute = 'landing';
  if (initialHash && initialHash !== 'landing' && initialHash !== 'portal') {
    if (isAuthenticated()) {
      startRoute = initialHash;
    } else {
      startRoute = 'landing';
    }
  } else {
    startRoute = 'landing';
  }
  navigateTo(startRoute);
}

document.addEventListener('DOMContentLoaded', initApp);
