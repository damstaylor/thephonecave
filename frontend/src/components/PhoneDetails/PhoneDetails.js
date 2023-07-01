import React from 'react';
import './PhoneDetails.css';

const PhoneDetails = ({ phone }) => {
  return (
    <div className="phone-details">
      <h2>{phone.name}</h2>
      <div className="phone-details-grid">
        <div className="phone-details-item">
          <strong>Manufacturer:</strong>
          <span>{phone.manufacturer}</span>
        </div>
        <div className="phone-details-item">
          <strong>Color:</strong>
          <span>{phone.color}</span>
        </div>
        <div className="phone-details-item">
          <strong>Price:</strong>
          <span>${phone.price}</span>
        </div>
        <div className="phone-details-item">
          <strong>Screen:</strong>
          <span>{phone.screen}</span>
        </div>
        <div className="phone-details-item">
          <strong>Processor:</strong>
          <span>{phone.processor}</span>
        </div>
        <div className="phone-details-item">
          <strong>RAM:</strong>
          <span>{phone.ram}GB</span>
        </div>
      </div>
      <p>{phone.description}</p>
    </div>
  );
};

export default PhoneDetails;
