export function detectStateField(record) {
  if (!record) return null; // simple guard [2]
  const candidates = [
    'state',
    'state_ut',
    'State/UT',
    'STATE/UT',
    'state / ut',
    'States/UTs',
    'statename',
    'district_state',
  ]; // common field ids seen in OGD datasets and wrappers [3]
  const keys = Object.keys(record);
  for (const key of keys) {
    const k = key.trim();
    if (candidates.includes(k)) return k;
    const low = k.toLowerCase();
    if (['state', 'state_ut', 'state/ut', 'states/uts'].includes(low)) return key;
  }
  return null; // fallback if unknown [3]
} // [3]

export const norm = (s) => (s || '').toString().trim().toLowerCase(); // normalize [2]

export function matchesState(record, desired) {
  if (!desired) return true; // no filter [2]
  const desiredN = norm(desired);
  const vals = [
    record.state,
    record.state_ut,
    record['State/UT'],
    record['STATE/UT'],
    record['state / ut'],
    record['States/UTs'],
    record.statename,
  ]; // aliases to check [3]
  return vals.some(v => norm(v) === desiredN); // robust match [3]
} // [3]
