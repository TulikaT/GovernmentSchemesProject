export function detectStateField(record) {
  if (!record) return null; 
  const candidates = [
    'state',
    'state_ut',
    'State/UT',
    'STATE/UT',
    'state / ut',
    'States/UTs',
    'statename',
    'district_state',
  ]; 
  const keys = Object.keys(record);
  for (const key of keys) {
    const k = key.trim();
    if (candidates.includes(k)) return k;
    const low = k.toLowerCase();
    if (['state', 'state_ut', 'state/ut', 'states/uts'].includes(low)) return key;
  }
  return null; 
} 

export const norm = (s) => (s || '').toString().trim().toLowerCase(); 

export function matchesState(record, desired) {
  if (!desired) return true;
  const desiredN = norm(desired);
  const vals = [
    record.state,
    record.state_ut,
    record['State/UT'],
    record['STATE/UT'],
    record['state / ut'],
    record['States/UTs'],
    record.statename,
  ]; 
  return vals.some(v => norm(v) === desiredN); 
} 
