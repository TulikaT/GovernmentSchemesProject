import React from "react";
import "./Card.css";

function Card({ heading, ministry, year, description, sector, budget }) {
  return (
    <div className="card">
      <div className="top">
                <h2 className="heading">{heading}</h2>       {" "}
        <div className="row">
                    <span className="ministry">{ministry}</span>         {" "}
          <span className="year-tag">{year}</span>       {" "}
        </div>
             {" "}
      </div>
            <hr className="divider" />     {" "}
      <div className="bottom">
                <p className="desc">{description}</p>       {" "}
        <div className="row">
                    <span className="sector-tag">{sector}</span>         {" "}
          <span className="budget">{budget}</span>       {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
}

export default Card;
