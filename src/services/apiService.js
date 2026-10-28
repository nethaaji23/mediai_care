import {
  PRESET_SYMPTOMS,
  SYMPTOM_WEIGHT_MAP,
  USER_DISEASE_DATASET,
  CLINICAL_CASES,
  DRUG_DATABASE,
  DRUG_INTERACTION_MATRIX,
  OUTBREAK_DATA,
  MODEL_PERFORMANCE_METRICS
} from '../data/mockData.js';

// Base API endpoints (proxied via Vite /api -> http://localhost:8000 or direct)
const PRIMARY_API_BASE = '/api';
const DIRECT_BACKEND_BASE = 'http://localhost:8000/api';

let backendLive = false;
let lastHealthCheck = null;

/**
 * Universal fetcher with automatic fallback from proxy -> direct backend -> mock fallback
 */
async function apiFetch(endpoint, options = {}) {
  // 1. Try relative URL (proxied by Vite)
  try {
    const res = await fetch(`${PRIMARY_API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });
    if (res.ok) {
      backendLive = true;
      return await res.json();
    }
  } catch (err) {
    // ignore and try direct
  }

  // 2. Try direct FastAPI backend URL
  try {
    const res = await fetch(`${DIRECT_BACKEND_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });
    if (res.ok) {
      backendLive = true;
      return await res.json();
    }
  } catch (err) {
    // ignore and fall back to local mock
  }

  backendLive = false;
  return null;
}

/**
 * Check backend health status
 */
export async function checkBackendHealth() {
  const data = await apiFetch('/health');
  if (data && data.status === 'ok') {
    backendLive = true;
    lastHealthCheck = data;
    return { online: true, data };
  }
  backendLive = false;
  return { online: false, data: null };
}

export function isBackendLive() {
  return backendLive;
}

/**
 * Fetch Preset Symptoms & Weights
 */
export async function getPresetSymptoms() {
  const data = await apiFetch('/symptoms');
  if (data && data.presetSymptoms) {
    return {
      presetSymptoms: data.presetSymptoms,
      symptomWeights: data.symptomWeights || SYMPTOM_WEIGHT_MAP,
      isLive: true
    };
  }
  return {
    presetSymptoms: PRESET_SYMPTOMS,
    symptomWeights: SYMPTOM_WEIGHT_MAP,
    isLive: false
  };
}

/**
 * Analyze symptoms with ML differential engine
 */
export async function analyzeSymptoms(text, model = 'xgboost', durationDays = 3) {
  const payload = {
    text,
    model,
    durationDays: parseInt(durationDays) || 3
  };

  const data = await apiFetch('/analyze-symptoms', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (data && data.condition) {
    return {
      ...data,
      isLive: true
    };
  }

  // Fallback to client-side heuristic if backend unreachable
  const textLower = (text || '').toLowerCase();
  let matchedCase = CLINICAL_CASES.find(c => c.keywords.some(k => textLower.includes(k))) || CLINICAL_CASES[0];
  let finalConfidence = matchedCase.confidence;
  let modelLabel = 'XGBoost (Lead Classifier)';

  if (model === 'random_forest') {
    finalConfidence = Math.max(75, matchedCase.confidence - 2);
    modelLabel = 'Random Forest Ensemble';
  } else if (model === 'logistic_regression') {
    finalConfidence = Math.max(70, matchedCase.confidence - 5);
    modelLabel = 'Logistic Regression Baseline';
  }

  return {
    condition: matchedCase.condition,
    confidence: finalConfidence,
    modelLabel,
    totalSymptomWeight: 14,
    matchedSymptomWeights: [],
    detectedSymptoms: matchedCase.detectedSymptoms,
    associatedToMonitor: [],
    differentials: [],
    reasoning: matchedCase.reasoning,
    recommendedActions: matchedCase.recommendedActions,
    flaggedWarning: 'Assigned Risk Level: Evaluated by local fallback matrix.',
    riskLevel: 'Moderate',
    doctorSpecialist: 'Family Physician',
    durationDays,
    isLive: false
  };
}

/**
 * Fetch Drug Catalog
 */
export async function getDrugs(query = '') {
  const queryParam = query ? `?q=${encodeURIComponent(query)}` : '';
  const data = await apiFetch(`/drugs${queryParam}`);

  if (data && data.drugs) {
    return {
      drugs: data.drugs,
      total: data.total,
      isLive: true
    };
  }

  // Fallback
  const q = query.toLowerCase().trim();
  const filtered = q
    ? DRUG_DATABASE.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.indications.toLowerCase().includes(q)
      )
    : DRUG_DATABASE;

  return {
    drugs: filtered,
    total: filtered.length,
    isLive: false
  };
}

/**
 * Multi-Tier Dynamic Drug Lookup (Tier 4 Local -> Tier 3 Alias -> Tier 1 OpenFDA/RxNorm -> Tier 2 Groq AI)
 */
export async function lookupDrug(query) {
  if (!query || !query.trim()) return null;
  const data = await apiFetch(`/drugs/lookup?q=${encodeURIComponent(query.trim())}`);
  if (data && data.drug) {
    return {
      ...data,
      isLive: true
    };
  }
  return null;
}

/**
 * Generate full clinical monograph via Groq AI LPU
 */
export async function generateDrugMonograph(drugName) {
  if (!drugName) return null;
  const data = await apiFetch('/drugs/generate-monograph', {
    method: 'POST',
    body: JSON.stringify({ drugName })
  });
  if (data && data.monograph) {
    return data.monograph;
  }
  return null;
}

/**
 * Check Drug-Drug Interactions
 */
export async function checkDrugInteractions(drugIds) {
  if (!drugIds || drugIds.length < 2) {
    return null;
  }

  const data = await apiFetch('/check-interactions', {
    method: 'POST',
    body: JSON.stringify({ drugIds })
  });

  if (data) {
    return {
      ...data,
      isLive: true
    };
  }

  // Fallback logic
  const selectedSet = new Set(drugIds.map(d => d.toLowerCase()));
  let matchedRule = null;

  for (const rule of DRUG_INTERACTION_MATRIX) {
    if (rule.drugs.every(id => selectedSet.has(id.toLowerCase()))) {
      matchedRule = rule;
      break;
    }
  }

  if (matchedRule) {
    return {
      hasInteraction: true,
      evaluatedDrugs: Array.from(selectedSet),
      interaction: matchedRule,
      isLive: false
    };
  }

  return {
    hasInteraction: false,
    evaluatedDrugs: Array.from(selectedSet),
    message: 'No severe interaction flagged for selected combination in current clinical matrix.',
    isLive: false
  };
}

/**
 * Fetch Outbreak Data
 */
export async function getOutbreaks(region = 'ALL', category = 'all') {
  const params = [];
  if (region && region !== 'ALL') params.push(`region=${encodeURIComponent(region)}`);
  if (category && category !== 'all') params.push(`category=${encodeURIComponent(category)}`);
  const queryParam = params.length > 0 ? `?${params.join('&')}` : '';
  const data = await apiFetch(`/outbreaks${queryParam}`);

  if (data && data.outbreaks) {
    return {
      outbreaks: data.outbreaks,
      total: data.total,
      isLive: true
    };
  }

  // Fallback
  let list = OUTBREAK_DATA;
  if (region !== 'ALL') list = list.filter(o => o.code === region);
  if (category !== 'all') list = list.filter(o => (o.category || 'ongoing') === category);

  return {
    outbreaks: list,
    total: list.length,
    isLive: false
  };
}

/**
 * Fetch Model Performance Benchmarks
 */
export async function getPerformanceMetrics() {
  const data = await apiFetch('/performance');

  if (data && data.models) {
    return {
      models: data.models,
      sampleCount: data.sampleCount || 15420,
      featuresCount: data.featuresCount || 160,
      validationProtocol: data.validationProtocol || '10-Fold Stratified Cross-Validation',
      availableModels: data.availableModels || ['xgboost', 'random_forest', 'logistic_regression'],
      source: data.source || 'Combined Clinical Evaluation Dataset (15,420 Patient Records)',
      isLive: true
    };
  }

  return {
    models: MODEL_PERFORMANCE_METRICS,
    sampleCount: 15420,
    featuresCount: 160,
    validationProtocol: '10-Fold Stratified Cross-Validation',
    availableModels: ['xgboost', 'random_forest', 'logistic_regression'],
    source: 'Combined Clinical Evaluation Dataset (15,420 Patient Records)',
    isLive: false
  };
}

/**
 * Predict ICU Telemetry & Sepsis Decompensation (MIMIC-IV Model)
 */
export async function predictICUTelemetry(vitals) {
  const res = await apiFetch('/predict/icu-telemetry', {
    method: 'POST',
    body: JSON.stringify(vitals)
  });
  return res;
}

/**
 * Predict Cardiometabolic & Renal Syndrome Risk (CDC NHANES Model)
 */
export async function predictNHANESLabs(labs) {
  const res = await apiFetch('/predict/nhanes-labs', {
    method: 'POST',
    body: JSON.stringify(labs)
  });
  return res;
}

/**
 * Predict Severe Adverse Drug Reaction Risk (FDA FAERS Model)
 */
export async function predictFAERSDrugRisk(drugData) {
  const res = await apiFetch('/predict/faers-drug-risk', {
    method: 'POST',
    body: JSON.stringify(drugData)
  });
  return res;
}

/**
 * Model Context Protocol (MCP) Client Gateway Functions
 */
export async function getMcpInfo() {
  const data = await apiFetch('/mcp/info');
  if (data && data.serverInfo) {
    return { ...data, isLive: true };
  }
  return {
    status: 'offline',
    serverInfo: { name: 'mediai-clinical-mcp', version: '1.2.0' },
    toolsCount: 7,
    resourcesCount: 4,
    promptsCount: 2,
    isLive: false
  };
}

export async function executeMcpToolCall(toolName, args = {}) {
  const payload = {
    jsonrpc: '2.0',
    id: Date.now(),
    method: 'tools/call',
    params: {
      name: toolName,
      arguments: args
    }
  };

  const data = await apiFetch('/mcp', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (data && data.result) {
    return {
      raw: data,
      content: data.result.content?.[0]?.text || '',
      isError: data.result.isError || false,
      isLive: true
    };
  }

  return {
    raw: data || { error: 'MCP server unreachable' },
    content: 'Failed to communicate with MCP endpoint.',
    isError: true,
    isLive: false
  };
}

export async function listMcpTools() {
  const payload = {
    jsonrpc: '2.0',
    id: Date.now(),
    method: 'tools/list'
  };

  const data = await apiFetch('/mcp', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (data && data.result && data.result.tools) {
    return data.result.tools;
  }
  return [];
}
