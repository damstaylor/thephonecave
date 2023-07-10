import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../Spinner/Spinner';
import './PhoneList.css';

const PhoneList = ({ onSelectPhone }) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get('/phones');
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching phones:', error);
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div className='phone-list'>
      <h1>Phone Catalog</h1>
      {loading ? (
        <Spinner />
      ) : (
        <ul>
          {phones.map(phone => (
            <li key={phone.id} onClick={() => onSelectPhone(phone)}>
              <div className="phone-item">
                <img src={phone.imageURL} alt={phone.name} />
                <div className="phone-details">
                  <h3>{phone.name}</h3>
                  <p>Manufacturer: {phone.manufacturer}</p>
                  <p>Price: ${phone.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhoneList;
