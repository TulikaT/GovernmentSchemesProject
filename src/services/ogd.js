import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.data.gov.in/resource/',
  headers: { 'Content-Type': 'application/json' },
}); // [2]

const KEY = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b'; // sample key from OGD docs/examples [2]

const makeQS = (o) =>
  !o
    ? ''
    : Object.entries(o)
        .map(([k, v]) => `filters[${encodeURIComponent(k)}]=${encodeURIComponent(String(v))}`)
        .join('&'); // OGD filter syntax [2][1]

export async function fetchOGD({ endpointId, limit = 1000, offset = 0, filters, select }) {
  const selectQS = select && select.length ? `&fields=${select.join(',')}` : ''; // optional projection [2]
  const filterQS = makeQS(filters); // [2]
  const url = `${endpointId}?api-key=${KEY}&format=json&limit=${limit}&offset=${offset}${filterQS ? `&${filterQS}` : ''}${selectQS}`; // [2]
  const res = await api.get(url); // [2]
  return res.data?.records || []; // [2]
}
