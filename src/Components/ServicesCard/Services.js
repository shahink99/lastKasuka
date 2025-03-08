import React from "react";
// import { Card } from "react-bootstrap";

import './ServiecCard.css'

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card-wrapper">
            <div className="icon-wrapperr">
                <span className="service-icon">{icon}</span>
            </div>
            <h3 className="services-title">{title}</h3>
            <p className="services-p">{description}</p>
        </div>
    );
};

export default ServiceCard