export const normalizeCustomBlock = (blockName, block) => {
  return Object.entries(block).map(([title, v], idx) => ({
    id: `${blockName}:${idx}`,
    title,
    ministry: v.Ministry,
    sector: (v['Sector:'] || '').trim(),
    launchYear: v['Launch Year'],
    status: v.Status,
    budget: v.Budget,
    description: v.Description,
    eligibility: v.Eligibility,
    benefits: v['Key Benefits'],
    source: 'custom',
    payload: v,
  })); 
}; 

const clean = (s) => (s == null ? undefined : String(s).trim()); 

export const normalizeByEndpoint = (endpointId) => (rec, idx) => {
  const state =
    clean(rec.state) ||
    clean(rec.state_ut) ||
    clean(rec['State/UT']) ||
    clean(rec['STATE/UT']); 

  const base = {
    id: `${endpointId}:${idx}`,
    state,
    source: 'api',
    apiId: endpointId,
    payload: rec,
  }; 

  switch (endpointId) {
    case 'a0d62cd1-d239-4b89-a538-6f8730975767':
      return { ...base, title: 'Employment', ministry: 'Ministry of Labour & Employment', sector: 'Skills & Employment', description: 'Employment indicators by state (OGD India).' }; 
    case '88dd8ea5-5669-47d7-83b8-dd2e280b067c':
      return { ...base, title: 'Pension', ministry: 'Ministry of Finance', sector: 'Banking, Financial Services & Insurance', description: 'Pension enrolments by state (OGD India).' }; 
    case '1ad8b7b8-41ae-464a-a89d-acf6f86a08f0':
      return { ...base, title: 'Startups', ministry: 'DPIIT', sector: 'Business & Entrepreneurship', description: 'Funds approved under SISFS by state.' }; 
    case '994c0b92-ca70-4f19-87d4-cc3197f2bfe5':
      return { ...base, title: 'PM Kisan Benefited', ministry: 'Ministry of Agriculture and Farmers Welfare', sector: 'Agriculture, Rural & Environment', description: 'Beneficiaries by installment and state.' }; 
    case 'c71bd3d5-1986-49f9-89bf-b8b6147ce322':
      return { ...base, title: 'Infrastructure', ministry: 'Multiple', sector: 'Urban Development', description: 'Project counts by state.' }; 
    case 'd82482d3-4688-434b-9f03-6305a26bd0e7':
      return { ...base, title: 'Scholarship', ministry: 'Ministry of Education', sector: 'Education & Learning', description: 'Scholarship amount and beneficiaries by state.' }; 
    case '8e9f1538-4ddc-4d88-8038-8670b543172a':
      return { ...base, title: 'Minority', ministry: 'Ministry of Minority Affairs', sector: 'Social Welfare & Empowerment', description: 'Minority scheme beneficiaries by state.' }; 
    case '75e9d032-a422-4a53-bffc-67c5f44d108f':
      return { ...base, title: 'Ayushman Card', ministry: 'MoHFW', sector: 'Health & Wellness', description: 'AB PM-JAY cards and hospitals by state.' }; 
    case '0f35d14e-75c0-4255-a0ad-d52791ab83f4':
      return { ...base, title: 'Poshan', ministry: 'MoWCD', sector: 'Health & Wellness', description: 'POSHAN coverage by state.' }; 
    case 'a8f075e7-bc5a-47e6-8a64-58d11de5e88b':
      return { ...base, title: 'Awas Yojana', ministry: 'MoHUA', sector: 'Housing & Shelter', description: 'Houses sanctioned/completed by state.' }; 
    case 'ad92a45d-c713-4c7d-8289-128eb89f2a81':
      return { ...base, title: 'Smart Cities', ministry: 'MoHUA', sector: 'Urban Development', description: 'Project status by state/city.' }; 
    case 'dfe38d33-f16a-463d-9ac2-2c58c6f07e4e':
      return { ...base, title: 'Beti Bachao Beti Padhao', ministry: 'MoWCD', sector: 'Social Welfare & Empowerment', description: 'BBBP reach by state.' }; 
    case 'c6bb798b-8733-4905-b015-147330653aaa':
      return { ...base, title: 'One Stop', ministry: 'MoWCD', sector: 'Social Welfare & Empowerment', description: 'OSC centers and support by state.' }; 
    default:
      return { ...base, title: 'Dataset', description: 'OGD India record' }; 
  }
};

