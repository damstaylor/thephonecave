import React from 'react';

const PhoneDetails = ({ phone }) => {
  return (
    <div>
      <h2>{phone.name}</h2>
      <p>{phone.description}</p>
      {/* Render other phone details */}
    </div>
  );
};

export default PhoneDetails;
