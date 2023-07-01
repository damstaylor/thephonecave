import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../Spinner/Spinner';

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
    <div>
      <h1>Phone Catalog</h1>
      {loading ? (
        <Spinner />
      ) : (
        <ul>
          {phones.map(phone => (
            <li key={phone.id} onClick={() => onSelectPhone(phone)}>
              {phone.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhoneList;
