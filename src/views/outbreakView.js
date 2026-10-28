import { OUTBREAK_DATA } from '../data/mockData.js';
import { getOutbreaks } from '../services/apiService.js';

export function renderOutbreakView(navigateTo) {
  const container = document.createElement('div');
  container.className = 'w-full flex-1 flex flex-col p-margin-mobile md:p-margin-desktop gap-md min-h-[calc(100vh-64px)]';

  let currentRegion = 'ALL';
  let currentCategory = 'all'; // 'all' | 'ongoing' | 'past'

  container.innerHTML = `
    <div class="mb-xs">
      <div class="flex items-center gap-2 flex-wrap">
        <h2 class="font-headline-lg text-headline-lg text-on-background font-bold flex items-center gap-2">
          <span class="material-symbols-outlined text-secondary text-2xl">public</span>
          Outbreak Awareness &amp; Epidemiological Surveillance
        </h2>
        <span class="px-2.5 py-0.5 bg-error-container text-on-error-container font-mono-data text-xs rounded-full font-bold">Global Bio-Surveillance</span>
        <span id="backend-status-badge" class="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono-data text-xs rounded-full flex items-center gap-1 font-bold">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> FastAPI Live Feed
        </span>
        <button id="btn-export-outbreak" class="px-3 py-1.5 rounded-lg border border-outline-variant hover:border-secondary bg-surface-container-lowest text-primary text-xs font-bold transition-all flex items-center gap-1 shadow-xs cursor-pointer sm:ml-auto">
          <span class="material-symbols-outlined text-[16px] text-secondary">print</span>
          <span>Export Surveillance Bulletin</span>
        </button>
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant mt-xs">
        Real-time epidemiological tracking, predictive hotspot modeling, and clinical containment guidelines. Detailed regional coverage for <strong>Asia</strong>, APAC, Europe, and the Americas.
      </p>
    </div>

    <!-- Overview Metrics Summary Bar -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
        <span class="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Active &amp; Tracked Zones</span>
        <div class="text-2xl font-bold font-mono-data text-primary my-1" id="stat-tracked-zones">5 Regions (Asia Included)</div>
        <span class="text-[11px] text-emerald-600 font-bold">Multi-Regional Surveillance</span>
      </div>

      <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
        <span class="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Tracked Case Volume</span>
        <div class="text-2xl font-bold font-mono-data text-secondary my-1" id="stat-total-cases">1,452,550</div>
        <span class="text-[11px] text-amber-600 font-bold">Ongoing + Past Endemics</span>
      </div>

      <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
        <span class="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Dominant Asia Pathogens</span>
        <div class="text-xl font-bold font-mono-data text-error my-1">Dengue DENV-2/3 &amp; Nipah</div>
        <span class="text-[11px] text-error font-bold">Vector &amp; Zoonotic Containment</span>
      </div>

      <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
        <span class="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Early Warning Index</span>
        <div class="text-2xl font-bold font-mono-data text-emerald-600 my-1">96.2 Score</div>
        <span class="text-[11px] text-on-surface-variant">Low Latency Alerting</span>
      </div>
    </div>

    <!-- Filter Control Bars (Region + Status) -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-surface-container-low p-3 rounded-xl border border-outline-variant">
      
      <!-- Region Filter -->
      <div class="flex items-center gap-1.5 overflow-x-auto custom-scrollbar flex-wrap">
        <span class="text-xs font-bold text-on-surface-variant mr-1 flex items-center gap-1">
          <span class="material-symbols-outlined text-[16px]">location_on</span> Region:
        </span>
        <button data-region="ALL" class="region-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-secondary text-on-secondary border border-secondary transition-colors">
          All Regions
        </button>
        <button data-region="ASIA" class="region-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-surface-container-lowest text-on-surface border border-outline-variant hover:border-secondary transition-colors flex items-center gap-1">
          <span class="w-2 h-2 rounded-full bg-error animate-pulse"></span>
          Asia
        </button>
        <button data-region="APAC" class="region-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-surface-container-lowest text-on-surface border border-outline-variant hover:border-secondary transition-colors">
          Asia-Pacific
        </button>
        <button data-region="NA" class="region-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-surface-container-lowest text-on-surface border border-outline-variant hover:border-secondary transition-colors">
          North America
        </button>
        <button data-region="EU" class="region-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-surface-container-lowest text-on-surface border border-outline-variant hover:border-secondary transition-colors">
          Europe
        </button>
        <button data-region="GL" class="region-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-surface-container-lowest text-on-surface border border-outline-variant hover:border-secondary transition-colors">
          Global
        </button>
      </div>

      <!-- Disease Status Category Filter -->
      <div class="flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
        <span class="text-xs font-bold text-on-surface-variant mr-1 flex items-center gap-1">
          <span class="material-symbols-outlined text-[16px]">tune</span> Phase:
        </span>
        <button data-category="all" class="category-filter-btn px-2.5 py-1 rounded-md text-xs font-bold bg-surface-container-high text-primary border border-outline-variant transition-colors">
          All
        </button>
        <button data-category="ongoing" class="category-filter-btn px-2.5 py-1 rounded-md text-xs font-bold bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:text-primary transition-colors flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-error"></span> Ongoing Outbreaks
        </button>
        <button data-category="past" class="category-filter-btn px-2.5 py-1 rounded-md text-xs font-bold bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:text-primary transition-colors flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Past / Contained
        </button>
      </div>

    </div>

    <!-- Outbreak Alert Cards Grid -->
    <div id="outbreak-cards-grid" class="grid grid-cols-1 md:grid-cols-2 gap-md">
      <!-- Dynamically rendered -->
    </div>
  `;

  const cardsGrid = container.querySelector('#outbreak-cards-grid');

  async function renderOutbreaks() {
    cardsGrid.innerHTML = `
      <div class="col-span-full p-8 text-center text-on-surface-variant flex items-center justify-center gap-2">
        <span class="material-symbols-outlined animate-spin text-secondary">sync</span>
        <span>Querying FastAPI epidemiological surveillance for region "${currentRegion}"...</span>
      </div>
    `;

    try {
      const res = await getOutbreaks(currentRegion, currentCategory);
      const list = res.outbreaks || [];

      if (list.length === 0) {
        cardsGrid.innerHTML = `
          <div class="col-span-full bg-surface-container-lowest p-xl rounded-xl border border-outline-variant text-center text-on-surface-variant space-y-2">
            <span class="material-symbols-outlined text-4xl text-on-surface-variant/60">healing</span>
            <div class="font-bold text-sm text-primary">No records match filter: Region "${currentRegion}" &amp; Phase "${currentCategory}"</div>
            <p class="text-xs">Try selecting "All Regions" or "All" phases to view complete bio-surveillance records.</p>
          </div>
        `;
        return;
      }

      cardsGrid.innerHTML = list.map(o => {
        const isPast = (o.category || '').toLowerCase() === 'past' || (o.riskLevel || '').includes('CONTAINED');
        const phaseBadge = isPast 
          ? `<span class="px-2 py-0.5 rounded text-[11px] font-mono-data font-bold bg-slate-100 text-slate-700 border border-slate-300 flex items-center gap-1">
               <span class="material-symbols-outlined text-[13px]">history_edu</span> PAST / CONTAINED EPIDEMIC
             </span>`
          : `<span class="px-2 py-0.5 rounded text-[11px] font-mono-data font-bold bg-amber-50 text-amber-900 border border-amber-300 flex items-center gap-1">
               <span class="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span> ONGOING ACTIVE OUTBREAK
             </span>`;

        return `
          <div class="bg-surface-container-lowest rounded-xl p-md border ${isPast ? 'border-outline-variant/80' : 'border-outline-variant hover:border-secondary'} shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-md">
            <div>
              <div class="flex justify-between items-start gap-2 mb-2">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs text-on-surface-variant font-bold uppercase tracking-wider block">${o.region}</span>
                    <span class="text-on-surface-variant/40">•</span>
                    ${phaseBadge}
                  </div>
                  <h3 class="font-headline-md text-lg font-bold text-primary">${o.pathogen}</h3>
                  <div class="text-[11px] text-on-surface-variant mt-0.5 font-mono-data flex items-center gap-1">
                    <span class="material-symbols-outlined text-[13px] text-secondary">schedule</span>
                    <span>${o.timeline || o.status}</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-full text-xs font-mono-data font-bold border shrink-0 ${o.alertColor || 'bg-amber-100 text-amber-800'}">
                  ${o.riskLevel}
                </span>
              </div>

              <!-- Case statistics and trend -->
              <div class="grid grid-cols-2 gap-2 my-sm p-sm bg-surface-container-low rounded-lg border border-outline-variant font-mono-data text-xs">
                <div>
                  <span class="text-on-surface-variant block text-[11px]">30-Day Reported Cases:</span>
                  <span class="font-bold text-primary text-base">${typeof o.casesLast30Days === 'number' ? o.casesLast30Days.toLocaleString() : o.casesLast30Days}</span>
                </div>
                <div>
                  <span class="text-on-surface-variant block text-[11px]">Trajectory / Status:</span>
                  <span class="font-bold ${o.trend && o.trend.startsWith('+') ? 'text-error' : 'text-emerald-700'} text-xs leading-tight block mt-0.5">${o.trend}</span>
                </div>
              </div>

              <!-- Transmission vector -->
              ${o.transmission ? `
                <div class="text-xs mb-2 p-1.5 bg-surface-container/60 rounded border border-outline-variant/50 font-mono-data text-on-surface-variant flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px] text-secondary">coronavirus</span>
                  <span><strong>Vector:</strong> ${o.transmission}</span>
                </div>
              ` : ''}

              <!-- Hotspot centers -->
              <div class="space-y-1 text-xs">
                <span class="font-bold text-primary block flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px] text-secondary">pin_drop</span> Hotspot Urban Centers &amp; Areas:
                </span>
                <div class="flex flex-wrap gap-1">
                  ${(o.hotspots || []).map(h => `<span class="px-2 py-0.5 bg-surface-container text-on-surface rounded font-mono-data text-[11px] border border-outline-variant/40">${h}</span>`).join('')}
                </div>
              </div>
            </div>

            <!-- Protocol -->
            <div class="pt-2 border-t border-outline-variant text-xs space-y-1">
              <div class="flex justify-between items-center">
                <strong class="text-secondary font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-[15px]">medical_services</span> Clinical Containment Protocol:
                </strong>
                <span class="text-[10px] font-mono-data text-on-surface-variant">${res.isLive ? 'FastAPI Verified' : 'Local Matrix'}</span>
              </div>
              <p class="text-on-surface-variant leading-relaxed">${o.protocol}</p>
            </div>
          </div>
        `;
      }).join('');
    } catch (err) {
      console.error('Failed to load outbreaks:', err);
    }
  }

  // Region Filter handlers
  container.querySelectorAll('.region-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.region-filter-btn').forEach(b => {
        b.classList.remove('bg-secondary', 'text-on-secondary', 'border-secondary');
        b.classList.add('bg-surface-container-lowest', 'text-on-surface', 'border-outline-variant');
      });
      btn.classList.add('bg-secondary', 'text-on-secondary', 'border-secondary');
      btn.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'border-outline-variant');

      currentRegion = btn.getAttribute('data-region');
      renderOutbreaks();
    });
  });

  // Category Filter handlers
  container.querySelectorAll('.category-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.category-filter-btn').forEach(b => {
        b.classList.remove('bg-surface-container-high', 'text-primary');
        b.classList.add('bg-surface-container-lowest', 'text-on-surface-variant');
      });
      btn.classList.add('bg-surface-container-high', 'text-primary');
      btn.classList.remove('bg-surface-container-lowest', 'text-on-surface-variant');

      currentCategory = btn.getAttribute('data-category');
      renderOutbreaks();
    });
  });

  const exportBtn = container.querySelector('#btn-export-outbreak');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => window.print());
  }

  renderOutbreaks();

  return container;
}
