import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-wrap">
      <h1>About GovSchemes</h1>

      <section className="about-card about-hero">
        <img
  src="https://img.freepik.com/premium-vector/stylish-woman-wearing-sunglasses-blazer_999679-23054.jpg"
  alt="Map of India illustration"
  className="about-hero-img"
/>

        <p className="about-credit">
          Illustrative infographic for educational use; verify details on official portals.
        </p>
      </section>

      <section className="about-card">
        <h2>Mission</h2>
        <p>
          GovSchemes makes it simple to explore key Indian government initiatives by presenting concise scheme summaries and state-focused program insights in a clear, modern interface.
        </p>
      </section>

      <section className="about-card">
        <h2>What this includes</h2>
        <ul>
          <li>Plain-language overviews: sector, ministry, launch year, status, budgets, eligibility, and benefits.</li>
          <li>Lightweight, responsive UI so information is readable on any device.</li>
          <li>Filterable views to narrow exploration by sector, ministry, launch year, and geography (when applicable).</li>
        </ul>
      </section>

      <section className="about-card">
        <h2>How it’s built</h2>
        <ul>
          <li>Curated content combined with public information to keep summaries consistent and easy to scan.</li>
          <li>A unified card layout with accessible typography and color contrast for comfortable reading.</li>
          <li>Modular pages so sections like “About” are independent from data-heavy views.</li>
        </ul>
      </section>

      <section className="about-card">
        <h2>Disclaimer</h2>
        <p>
          This site is for information and learning. Scheme rules, budgets, and eligibility can change—always confirm with official notifications, departmental websites, or published guidelines.
        </p>
      </section>
    </div>
  );
}

export default About;
