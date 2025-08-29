import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.data.gov.in/resource/',
  headers: { 'Content-Type': 'application/json' },
}); 
const KEY = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';
const makeQS = (o) =>
  !o
    ? ''
    : Object.entries(o)
        .map(([k, v]) => `filters[${encodeURIComponent(k)}]=${encodeURIComponent(String(v))}`)
        .join('&'); 
export async function fetchOGD({ endpointId, limit = 1000, offset = 0, filters, select }) {
  const selectQS = select && select.length ? `&fields=${select.join(',')}` : ''; 
  const filterQS = makeQS(filters); // [2]
  const url = `${endpointId}?api-key=${KEY}&format=json&limit=${limit}&offset=${offset}${filterQS ? `&${filterQS}` : ''}${selectQS}`; 
  const res = await api.get(url); 
  return res.data?.records || []; 
}
