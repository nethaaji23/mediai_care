import { getMcpInfo, executeMcpToolCall } from '../services/apiService.js';

export function renderMcpView(navigateTo) {
  const container = document.createElement('div');
  container.className = 'w-full flex-1 flex flex-col p-margin-mobile md:p-margin-desktop gap-md min-h-[calc(100vh-64px)]';

  container.innerHTML = `
    <!-- Header -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-xs">
      <div>
        <div class="flex items-center gap-2 flex-wrap">
          <h2 class="font-headline-lg text-headline-lg text-on-background font-bold">Model Context Protocol (MCP) Gateway</h2>
          <span class="px-2.5 py-0.5 bg-secondary-container text-on-secondary-container font-mono-data text-xs rounded-full font-bold">
            JSON-RPC 2.0 Standard
          </span>
          <span id="mcp-live-badge" class="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono-data text-xs rounded-full flex items-center gap-1 font-bold">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            MCP Server Live
          </span>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant mt-xs">
          Open standard protocol enabling AI agents (Antigravity, Claude, Cursor, Groq) to natively interact with MediAI Care+ clinical datasets, ML models, and pharmacotherapy tools.
        </p>
      </div>

      <div class="flex items-center gap-2">
        <button id="btn-copy-mcp-config" class="text-xs px-3 py-1.5 bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant rounded-lg font-bold transition-all flex items-center gap-1 shadow-sm">
          <span class="material-symbols-outlined text-sm">content_copy</span> Copy MCP Config
        </button>
      </div>
    </div>

    <!-- Top Architecture Metrics Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
        <span class="text-xs text-on-surface-variant font-bold uppercase tracking-wider">MCP Protocol Version</span>
        <div class="text-2xl font-bold font-mono-data text-primary my-1">2024-11-05</div>
        <span class="text-[11px] text-emerald-600 font-bold">Anthropic & Linux Foundation Spec</span>
      </div>

      <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
        <span class="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Registered Clinical Tools</span>
        <div class="text-2xl font-bold font-mono-data text-secondary my-1" id="mcp-tools-count">7 Active Tools</div>
        <span class="text-[11px] text-secondary font-bold">Executable via JSON-RPC</span>
      </div>

      <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
        <span class="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Clinical Resources</span>
        <div class="text-2xl font-bold font-mono-data text-emerald-700 my-1">4 URIs (clinical://)</div>
        <span class="text-[11px] text-on-surface-variant">Standardized Schemas</span>
      </div>

      <div class="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
        <span class="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Supported Transports</span>
        <div class="text-xl font-bold font-mono-data text-primary my-1">Stdio & HTTP</div>
        <span class="text-[11px] text-emerald-600 font-bold">Local CLI + /api/mcp</span>
      </div>
    </div>

    <!-- Main Two-Column Playground -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter flex-1">
      
      <!-- Left Column: Tool Selector & Configuration Snippet (5 cols) -->
      <section class="lg:col-span-5 flex flex-col gap-md">
        
        <!-- Tool Selection Card -->
        <div class="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm flex flex-col gap-sm">
          <div class="flex items-center justify-between border-b border-outline-variant pb-xs">
            <h3 class="font-headline-md text-base font-bold text-primary flex items-center gap-2">
              <span class="material-symbols-outlined text-secondary">extension</span>
              Exposed MCP Tools
            </h3>
            <span class="text-xs font-mono-data text-on-surface-variant">Select to test</span>
          </div>

          <div class="space-y-1.5" id="mcp-tools-list">
            <!-- Dynamically populated -->
          </div>
        </div>

        <!-- MCP Client Configuration Snippet Box -->
        <div class="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm flex flex-col gap-sm">
          <div class="flex items-center justify-between border-b border-outline-variant pb-xs">
            <h4 class="font-headline-md text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <span class="material-symbols-outlined text-sm text-secondary">settings</span>
              Client Config (mcp_config.json)
            </h4>
            <span class="text-[11px] font-mono-data text-emerald-700 font-bold">Auto-configured</span>
          </div>

          <pre class="bg-surface-container-low p-sm rounded-lg border border-outline-variant font-mono-data text-xs text-on-surface overflow-x-auto custom-scrollbar max-h-48"><code>{
  "mcpServers": {
    "mediai-care": {
      "command": "python",
      "args": ["server/mcp_server.py"]
    },
    "mediai-http": {
      "url": "http://localhost:8000/api/mcp"
    }
  }
}</code></pre>
          <p class="text-[11px] text-on-surface-variant">
            Compatible with Google Antigravity, Claude Desktop, Cursor, and any MCP-compliant agent.
          </p>
        </div>

      </section>

      <!-- Right Column: Interactive MCP Tool Runner & Inspector (7 cols) -->
      <section class="lg:col-span-7 flex flex-col gap-md">
        
        <div class="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm flex flex-col h-full">
          <div class="flex items-center justify-between border-b border-outline-variant pb-xs mb-sm">
            <div>
              <span class="text-xs text-on-surface-variant font-mono-data block">Active MCP Execution Test</span>
              <h3 class="font-headline-md text-base font-bold text-primary flex items-center gap-2" id="runner-tool-name">
                analyze_symptoms
              </h3>
            </div>
            <button id="btn-run-mcp-tool" class="px-md py-sm bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant rounded-lg font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm">
              <span class="material-symbols-outlined text-sm">play_arrow</span> Dispatch MCP Call
            </button>
          </div>

          <p class="text-xs text-on-surface-variant mb-sm" id="runner-tool-desc">
            Analyzes patient clinical symptoms, evaluates against 132 weighted severity features, and returns differential diagnosis.
          </p>

          <!-- Arguments Input Area -->
          <div class="mb-md">
            <label class="font-label-md text-xs font-bold text-on-surface block mb-1">Tool Arguments (JSON Payload):</label>
            <textarea 
              id="mcp-args-input" 
              class="w-full h-32 bg-surface-container-low border border-outline-variant rounded-lg p-sm font-mono-data text-xs text-on-background focus:ring-1 focus:ring-secondary focus:outline-none resize-none custom-scrollbar"
            ></textarea>
          </div>

          <!-- Tabs for Response: Formatted vs Raw Wire JSON-RPC -->
          <div class="flex items-center gap-2 border-b border-outline-variant pb-xs mb-sm">
            <button id="tab-formatted" class="px-sm py-1 font-bold text-xs bg-secondary text-on-secondary rounded transition-colors">
              Formatted Clinical View
            </button>
            <button id="tab-wire" class="px-sm py-1 font-bold text-xs bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded transition-colors">
              Raw JSON-RPC 2.0 Wire Packet
            </button>
          </div>

          <!-- Output Console Window -->
          <div class="flex-1 min-h-[220px] bg-surface-container-low rounded-xl border border-outline-variant p-sm flex flex-col overflow-hidden">
            <div id="mcp-output-formatted" class="flex-1 overflow-y-auto font-body-sm text-xs space-y-2 custom-scrollbar p-1">
              <div class="text-on-surface-variant italic p-4 text-center">
                Click "Dispatch MCP Call" above to execute this tool through the Model Context Protocol.
              </div>
            </div>

            <pre id="mcp-output-wire" class="hidden flex-1 overflow-auto font-mono-data text-xs text-emerald-800 p-2 custom-scrollbar"></pre>
          </div>

        </div>

      </section>

    </div>
  `;

  // Pre-configured test presets for each MCP tool
  const TOOL_PRESETS = {
    analyze_symptoms: {
      text: "Patient presents with high fever, persistent dry cough, myalgia, and fatigue for 3 days",
      model: "xgboost",
      durationDays: 3
    },
    check_drug_interactions: {
      drugIds: ["warfarin", "aspirin"]
    },
    search_drug_catalog: {
      query: "lisinopril"
    },
    get_disease_differential: {
      query: "pneumonia"
    },
    get_epidemiological_surveillance: {
      region: "APAC"
    },
    get_ml_model_benchmarks: {
      modelKey: "xgboost"
    },
    groq_clinical_consult: {
      query: "What is the emergency triage protocol for suspected bacterial meningitis?",
      patientVitals: { hr: "98 bpm", bp: "135/88", spo2: "97%", temp: "102.4 F" }
    }
  };

  let activeToolKey = 'analyze_symptoms';
  let activeToolsMeta = [];

  const toolsListContainer = container.querySelector('#mcp-tools-list');
  const runnerToolName = container.querySelector('#runner-tool-name');
  const runnerToolDesc = container.querySelector('#runner-tool-desc');
  const argsInput = container.querySelector('#mcp-args-input');
  const runBtn = container.querySelector('#btn-run-mcp-tool');
  const formattedBox = container.querySelector('#mcp-output-formatted');
  const wireBox = container.querySelector('#mcp-output-wire');
  const tabFormatted = container.querySelector('#tab-formatted');
  const tabWire = container.querySelector('#tab-wire');

  // Load MCP metadata from FastAPI
  getMcpInfo().then(info => {
    activeToolsMeta = info.tools || [];
    renderToolList(activeToolsMeta);
    selectTool(activeToolKey);
  }).catch(() => {
    renderToolList(Object.keys(TOOL_PRESETS).map(name => ({ name, description: `MCP clinical tool ${name}` })));
    selectTool(activeToolKey);
  });

  function renderToolList(tools) {
    toolsListContainer.innerHTML = tools.map(t => `
      <button data-tool="${t.name}" class="mcp-tool-pill w-full text-left p-2 rounded-lg border border-outline-variant hover:border-secondary transition-all flex items-start gap-2 ${t.name === activeToolKey ? 'bg-secondary-container text-on-secondary-container font-bold border-secondary' : 'bg-surface-container-low text-on-surface'}">
        <span class="material-symbols-outlined text-sm mt-0.5 text-secondary">bolt</span>
        <div class="flex-1 min-w-0">
          <div class="text-xs font-mono-data truncate">${t.name}</div>
          <div class="text-[11px] text-on-surface-variant line-clamp-1">${t.description || ''}</div>
        </div>
      </button>
    `).join('');

    // Attach listeners
    toolsListContainer.querySelectorAll('.mcp-tool-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        selectTool(btn.getAttribute('data-tool'));
      });
    });
  }

  function selectTool(toolName) {
    activeToolKey = toolName;
    toolsListContainer.querySelectorAll('.mcp-tool-pill').forEach(btn => {
      if (btn.getAttribute('data-tool') === toolName) {
        btn.className = 'mcp-tool-pill w-full text-left p-2 rounded-lg border border-secondary bg-secondary-container text-on-secondary-container font-bold transition-all flex items-start gap-2';
      } else {
        btn.className = 'mcp-tool-pill w-full text-left p-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface hover:border-secondary transition-all flex items-start gap-2';
      }
    });

    runnerToolName.textContent = toolName;
    const meta = activeToolsMeta.find(t => t.name === toolName);
    runnerToolDesc.textContent = meta?.description || `Model Context Protocol tool: ${toolName}`;

    // Fill with preset arguments
    const preset = TOOL_PRESETS[toolName] || {};
    argsInput.value = JSON.stringify(preset, null, 2);
  }

  // Dispatch MCP Tool Call
  runBtn.addEventListener('click', async () => {
    let parsedArgs = {};
    try {
      parsedArgs = JSON.parse(argsInput.value || '{}');
    } catch (e) {
      alert('Invalid JSON in arguments input. Please check syntax.');
      return;
    }

    runBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-sm">refresh</span> Executing MCP Tool...';
    runBtn.classList.add('opacity-75');

    try {
      const resp = await executeMcpToolCall(activeToolKey, parsedArgs);

      // Raw Wire JSON-RPC
      wireBox.textContent = JSON.stringify(resp.raw, null, 2);

      // Formatted Clinical Output
      let contentData = null;
      try {
        contentData = JSON.parse(resp.content);
      } catch (e) {
        contentData = resp.content;
      }

      if (typeof contentData === 'object' && contentData !== null) {
        formattedBox.innerHTML = `
          <div class="p-3 bg-surface-container rounded-lg border border-outline-variant space-y-2">
            <div class="flex justify-between items-center border-b border-outline-variant pb-1">
              <span class="font-bold text-primary font-mono-data">Status: SUCCESS (200 OK via MCP)</span>
              <span class="text-[11px] font-mono-data text-emerald-700 font-bold">Standard JSON-RPC 2.0</span>
            </div>
            <pre class="font-mono-data text-xs text-on-surface overflow-x-auto">${JSON.stringify(contentData, null, 2)}</pre>
          </div>
        `;
      } else {
        formattedBox.innerHTML = `
          <div class="p-3 bg-surface-container rounded-lg border border-outline-variant font-mono-data text-xs whitespace-pre-wrap">
            ${resp.content}
          </div>
        `;
      }
    } catch (err) {
      formattedBox.innerHTML = `<div class="p-3 bg-error-container text-on-error-container rounded-lg text-xs font-mono-data">Error: ${err.message}</div>`;
      wireBox.textContent = JSON.stringify({ error: err.message }, null, 2);
    } finally {
      runBtn.innerHTML = '<span class="material-symbols-outlined text-sm">play_arrow</span> Dispatch MCP Call';
      runBtn.classList.remove('opacity-75');
    }
  });

  // Tab switching
  tabFormatted.addEventListener('click', () => {
    tabFormatted.className = 'px-sm py-1 font-bold text-xs bg-secondary text-on-secondary rounded transition-colors';
    tabWire.className = 'px-sm py-1 font-bold text-xs bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded transition-colors';
    formattedBox.classList.remove('hidden');
    wireBox.classList.add('hidden');
  });

  tabWire.addEventListener('click', () => {
    tabWire.className = 'px-sm py-1 font-bold text-xs bg-secondary text-on-secondary rounded transition-colors';
    tabFormatted.className = 'px-sm py-1 font-bold text-xs bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded transition-colors';
    formattedBox.classList.add('hidden');
    wireBox.classList.remove('hidden');
  });

  // Copy config
  container.querySelector('#btn-copy-mcp-config').addEventListener('click', () => {
    const configSnippet = JSON.stringify({
      mcpServers: {
        "mediai-care": {
          command: "python",
          args: ["server/mcp_server.py"]
        },
        "mediai-http": {
          url: "http://localhost:8000/api/mcp"
        }
      }
    }, null, 2);

    navigator.clipboard.writeText(configSnippet).then(() => {
      alert('MCP configuration JSON copied to clipboard!');
    }).catch(() => {
      prompt('Copy MCP Config:', configSnippet);
    });
  });

  return container;
}
