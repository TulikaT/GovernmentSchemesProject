import axios from "axios";

const api = axios.create({
  baseURL: "https://api.data.gov.in/resource/",
  headers: {
    "Content-Type": "application/json",
  },
});

// ============== Financial & social security ===================
export const getPensionData = () => {
  return api.get(
    "88dd8ea5-5669-47d7-83b8-dd2e280b067c?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

// ============== Employment & Skill Development ===================
export const getEmploymentData = () => {
  return api.get(
    "a0d62cd1-d239-4b89-a538-6f8730975767?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

export const getStartupsData = () => {
  return api.get(
    "1ad8b7b8-41ae-464a-a89d-acf6f86a08f0?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

// ============== Agriculture & Rural Development ===================
export const getPMKisanBenefitedData = () => {
  return api.get(
    "994c0b92-ca70-4f19-87d4-cc3197f2bfe5?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

export const getInfrastructureData = () => {
  return api.get(
    "c71bd3d5-1986-49f9-89bf-b8b6147ce322?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

// ============== Education And Scholarships ===================
export const getScholarshipData = () => {
  return api.get(
    "d82482d3-4688-434b-9f03-6305a26bd0e7?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

export const getMinorityData = () => {
  return api.get(
    "8e9f1538-4ddc-4d88-8038-8670b543172a?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

// ============== Health & Nutrition ===================
export const getAyushmanCardData = () => {
  return api.get(
    "75e9d032-a422-4a53-bffc-67c5f44d108f?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

export const getPoshanData = () => {
  return api.get(
    "0f35d14e-75c0-4255-a0ad-d52791ab83f4?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

// ============== Housing and urban Development ===================
export const getAwasYojanaData = () => {
  return api.get(
    "a8f075e7-bc5a-47e6-8a64-58d11de5e88b?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

export const getSmartCitiesData = () => {
  return api.get(
    "ad92a45d-c713-4c7d-8289-128eb89f2a81?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

// ============== Women, Child and Social Welfare ===================
export const getBetiBachaoBetiPadhaoData = () => {
  return api.get(
    "dfe38d33-f16a-463d-9ac2-2c58c6f07e4e?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};

export const getOneStopData = () => {
  return api.get(
    "c6bb798b-8733-4905-b015-147330653aaa?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
  );
};
