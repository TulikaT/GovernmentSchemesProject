import React, { useState } from "react";
import SchemeModal from "../components/SchemeModal";
import {
  AgricultureRuralAndEnvironment,
  BusinessAndEnterpreneurship,
  BankingFinancialServicesAndInsurance,
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
} from "../services/customApi";
import Card from "../components/Card";
import "./Home.css";

function Home() {
  const categories = [
    {
      name: "Agriculture, Rural & Environment",
      data: AgricultureRuralAndEnvironment,
    },
    {
      name: "Banking, Financial Services & Insurance",
      data: BankingFinancialServicesAndInsurance,
    },
    { name: "Business & Entrepreneurship", data: BusinessAndEnterpreneurship },
    { name: "Education & Learning", data: EducationAndLearning },
    { name: "Health & Wellness", data: HealthAndWellness },
    { name: "Housing & Shelter", data: HousingAndShelter },
    { name: "MSME Development", data: MSMEDevelopment },
    { name: "Science, IT & Communications", data: ScienceITAndCommunications },
    { name: "Skills & Employment", data: SkillsAndEmployment },
    { name: "Social Welfare & Empowerment", data: SocialWelfareAndEmpowerment },
    { name: "Sports & Culture", data: SportsAndCulture },
    { name: "Urban Development", data: UrbanDevelopment },
    { name: "Utility & Sanitation", data: UtilityAndSanitation },
  ];

  const [modalData, setModalData] = useState(null);

  const handleCardClick = (schemeName, schemeDetails) => {
    setModalData({ schemeName, ...schemeDetails });
  };

  const closeModal = () => setModalData(null);

  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="fancy-font">
          People's Welfare Schemes By Indian Government
        </h1>
        <div className="stats-container">
          <div className="stat-card">
  <div className="stat-icon stat1">📊</div>
  <div className="stat-text">
    <div className="stat-value">20</div>
    <div className="stat-label">Total Schemes</div>
  </div>
</div>

<div className="stat-card">
  <div className="stat-icon stat2">✅</div>
  <div className="stat-text">
    <div className="stat-value">20</div>
    <div className="stat-label">Active Schemes</div>
  </div>
</div>

<div className="stat-card">
  <div className="stat-icon stat3">🏛️</div>
  <div className="stat-text">
    <div className="stat-value">13</div>
    <div className="stat-label">Ministries</div>
  </div>
</div>

<div className="stat-card">
  <div className="stat-icon stat4">💰</div>
  <div className="stat-text">
    <div className="stat-value">₹4.5L Cr</div>
    <div className="stat-label">Total Budget</div>
  </div>
</div>

        </div>
      </div>

      <div className="categories">
        {categories.map((category) => (
          <div key={category.name} className="category-section">
            <h2 className="category-heading">{category.name}</h2>
            <div className="cards-container">
              {Object.entries(category.data).map(
                ([schemeName, schemeDetails]) => (
                  <div
                    key={schemeName}
                    onClick={() => handleCardClick(schemeName, schemeDetails)}
                  >
                    <Card
                      heading={schemeName}
                      ministry={schemeDetails.Ministry}
                      year={schemeDetails["Launch Year"]}
                      description={schemeDetails.Description}
                      sector={schemeDetails["Sector:"]}
                      budget={schemeDetails.Budget}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {modalData && <SchemeModal data={modalData} onClose={closeModal} />}
    </div>
  );
}

export default Home;
