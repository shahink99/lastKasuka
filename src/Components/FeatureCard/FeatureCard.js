import React from "react";
// import { Card } from "react-bootstrap";

import "./FeatureCard.css";

const FeatureCard = ({ title, description, icon , classNameIc }) => {
  return (
    <div className="feature-wrapper">
        <div className="icon-wrapper">
         <span className={`${classNameIc === true ? classNameIc : 'icon'}`}>{icon}</span>
        </div>
        <div className="text-wrapper">
            <h4 className="card-title">{title}</h4>
            <p className="card-descraption">{description}</p>
        </div>
    </div>
  );
};

export default FeatureCard;
