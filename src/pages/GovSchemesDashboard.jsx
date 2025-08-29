import React, { useEffect, useMemo, useState } from 'react';
import './GovSchemesDashboard.css';
import {
  AgricultureRuralAndEnvironment,
  BankingFinancialServicesAndInsurance,
  BusinessAndEnterpreneurship,
  EducationAndLearning,
  HealthAndWellness,
  HousingAndShelter,
  MSMEDevelopment,
  ScienceITAndCommunications,
  SkillsAndEmployment,
  SocialWelfareAndEmpowerment,
  SportsAndCulture,
  UrbanDevelopment,
  UtilityAndSanitation,
} from '../services/customApi'; 
import { fetchOGD } from '../services/ogd'; 
import { normalizeByEndpoint, normalizeCustomBlock } from '../data/unify'; 
import { detectStateField, matchesState, norm } from '../data/stateField'; 

const ENDPOINTS = [
  'a0d62cd1-d239-4b89-a538-6f8730975767',
  '88dd8ea5-5669-47d7-83b8-dd2e280b067c',
  '1ad8b7b8-41ae-464a-a89d-acf6f86a08f0',
  '994c0b92-ca70-4f19-87d4-cc3197f2bfe5',
  'c71bd3d5-1986-49f9-89bf-b8b6147ce322',
  'd82482d3-4688-434b-9f03-6305a26bd0e7',
  '8e9f1538-4ddc-4d88-8038-8670b543172a',
  '75e9d032-a422-4a53-bffc-67c5f44d108f',
  '0f35d14e-75c0-4255-a0ad-d52791ab83f4',
  'a8f075e7-bc5a-47e6-8a64-58d11de5e88b',
  'ad92a45d-c713-4c7d-8289-128eb89f2a81',
  'dfe38d33-f16a-463d-9ac2-2c58c6f07e4e',
  'c6bb798b-8733-4905-b015-147330653aaa',
]; 

const CUSTOM_BLOCKS = {
  'Agriculture, Rural & Environment': AgricultureRuralAndEnvironment,
  'Banking, Financial Services & Insurance': BankingFinancialServicesAndInsurance,
  'Business & Entrepreneurship': BusinessAndEnterpreneurship,
  'Education & Learning': EducationAndLearning,
  'Health & Wellness': HealthAndWellness,
  'Housing & Shelter': HousingAndShelter,
  'MSME Development': MSMEDevelopment,
  'Science, IT & Communications': ScienceITAndCommunications,
  'Skills & Employment': SkillsAndEmployment,
  'Social Welfare & Empowerment': SocialWelfareAndEmpowerment,
  'Sports & Culture': SportsAndCulture,
  'Urban Development': UrbanDevelopment,
  'Utility & Sanitation': UtilityAndSanitation,
}; 

const allCustomRecords = Object.entries(CUSTOM_BLOCKS)
  .flatMap(([sector, block]) => normalizeCustomBlock(sector, block).map(r => ({ ...r, sector: r.sector || sector }))); 

export default function GovSchemesDashboard() {
  const [filters, setFilters] = useState({ sector: '', ministry: '', year: '', state: '' }); 
  const [apiRecords, setApiRecords] = useState([]); 
  const [loading, setLoading] = useState(true); 

 
  useEffect(() => {
    let mounted = true;
    async function run() {
      setLoading(true);
      try {
        const arrays = await Promise.all(
          ENDPOINTS.map(async (id) => {
            
const sampleRows = await fetchOGD({ endpointId: id, limit: 1 }); 
const sample = (Array.isArray(sampleRows) && sampleRows.length > 0) ? sampleRows[0] : null;
            const stateField = sample ? detectStateField(sample) : null; 

            let rows;
            if (filters.state && stateField) {
              rows = await fetchOGD({ endpointId: id, limit: 1000, filters: { [stateField]: filters.state } });
            } else {
              rows = await fetchOGD({ endpointId: id, limit: 1000 }); 
            }
            const filtered = filters.state ? rows.filter(r => matchesState(r, filters.state)) : rows; 
            return filtered.map(normalizeByEndpoint(id));
          })
        ); 
        if (mounted) setApiRecords(arrays.flat());
        if (mounted) setApiRecords([]); 
        console.error('OGD fetch failed', e);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    run();
    return () => { mounted = false; }; 
  }, [filters.state]); 

  const combined = useMemo(() => [...allCustomRecords, ...apiRecords], [apiRecords]); 

  
  const sectors = Array.from(new Set(combined.map(r => (r.sector || '').toString()).filter(Boolean))).sort(); 
  const ministries = Array.from(new Set(combined.map(r => (r.ministry || '').toString()).filter(Boolean))).sort(); 
  const years = Array.from(new Set(combined.map(r => (r.launchYear || '').toString()).filter(Boolean))).sort(); 
  const states = Array.from(new Set(
    combined.flatMap(r => {
      const vals = [
        r.state,
        r.payload?.state,
        r.payload?.state_ut,
        r.payload?.['State/UT'],
        r.payload?.['STATE/UT'],
        r.payload?.statename,
      ].filter(Boolean);
      return vals.map(v => v.toString().trim());
    })
  )).sort(); 
 
  const visible = combined.filter((r) => {
    if (filters.sector && r.sector !== filters.sector) return false; 
    if (filters.ministry && r.ministry !== filters.ministry) return false; 
    if (filters.year && r.launchYear !== filters.year) return false;
    if (filters.state) {
      const stateVal =
        r.state ??
        r.payload?.state ??
        r.payload?.state_ut ??
        r.payload?.['State/UT'] ??
        r.payload?.['STATE/UT'] ??
        r.payload?.statename;
      if (norm(stateVal) !== norm(filters.state)) return false; 
    }
    return true;
  });

  return (
    <div className="dash">
      <h1>Government Schemes Dashboard</h1>
      <div className="filters">
        <div className="filter">
          <label>Sector</label>
          <select value={filters.sector} onChange={(e)=>setFilters(f=>({ ...f, sector: e.target.value }))}>
            <option value="">All Sectors</option>
            {sectors.map((s)=> <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="filter">
          <label>Ministry</label>
          <select value={filters.ministry} onChange={(e)=>setFilters(f=>({ ...f, ministry: e.target.value }))}>
            <option value="">All Ministries</option>
            {ministries.map((m)=> <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div className="filter">
          <label>Launch Year</label>
          <select value={filters.year} onChange={(e)=>setFilters(f=>({ ...f, year: e.target.value }))}>
            <option value="">All Years</option>
            {years.map((y)=> <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <div className="filter">
          <label>State</label>
          <select value={filters.state} onChange={(e)=>setFilters(f=>({ ...f, state: e.target.value }))}>
            <option value="">All States</option>
            {states.map((s)=> <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <button className="clear" onClick={()=>setFilters({ sector:'', ministry:'', year:'', state:'' })}>
          Clear Filters
        </button>
      </div>

      <div className="grid">
        {loading && <div className="card full-width"><p>Loading data…</p></div>}
        {!loading && (
          <div className="card full-width">
            <h2>All Schemes & Datasets</h2>
            <div className="data-grid">
              {visible.length ? visible.map((item) => (
                <div key={item.id} className="data-card">
                  <p><strong>Title:</strong> {item.title}</p>
                  {item.state && <p><strong>State:</strong> {item.state}</p>}
                  {item.ministry && <p><strong>Ministry:</strong> {item.ministry}</p>}
                  {item.sector && <p><strong>Sector:</strong> {item.sector}</p>}
                  {item.launchYear && <p><strong>Launch Year:</strong> {item.launchYear}</p>}
                  {item.status && <p><strong>Status:</strong> {item.status}</p>}
                  {item.budget && <p><strong>Budget:</strong> {item.budget}</p>}
                  {item.description && <p><strong>Description:</strong> {item.description}</p>}
                  {item.eligibility && <p><strong>Eligibility:</strong> {item.eligibility}</p>}
                  {item.benefits && <p><strong>Benefits:</strong> {item.benefits}</p>}
                  <p><strong>Source:</strong> {item.source === 'custom' ? 'Catalog' : `OGD API (${item.apiId})`}</p>
                </div>
              )) : <p className="no-data">No data available</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
