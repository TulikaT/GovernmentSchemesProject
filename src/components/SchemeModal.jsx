import React from "react";
import './SchemeModal.css';

function SchemeModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h1>{data.schemeName}</h1>
        <hr />
        <div className="modal-main">
          <div className="modal-overview">
            <h3>Overview</h3>
            <div><strong>Ministry:</strong> <span>{data.Ministry}</span></div>
            <div><strong>Sector:</strong> <span>{data["Sector:"]}</span></div>
            <div><strong>Launch Year:</strong> <span>{data["Launch Year"]}</span></div>
            <div><strong>Status:</strong> <span className="status-active">{data.Status}</span></div>
            <div><strong>Budget:</strong> <span>{data.Budget}</span></div>
          </div>
          <div className="modal-details">
            <h3>Description</h3>
            <div>{data.Description}</div>
            {data.Eligibility && (
              <>
                <h4>Eligibility</h4>
                <div>{data.Eligibility}</div>
              </>
            )}
            {data["Key Benefits"] && (
              <>
                <h4>Key Benefits</h4>
                <div>{data["Key Benefits"]}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SchemeModal;
