import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import {Galaxy_S7} from "../../backend/images/Galaxy_S7";

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get('/phones');
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    };

    fetchPhones();
  }, []);

  const handlePhoneSelect = async (phoneId) => {
    try {
      const response = await axios.get(`/phones/${phoneId}`);
      console.log('Phone selected:', response.data)
      setSelectedPhone(response.data);
    } catch (error) {
      console.error('Error fetching phone detail:', error);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Phone Catalog</h2>
          <ul>
            {phones.map((phone) => (
              <li key={phone.id} onClick={() => handlePhoneSelect(phone.id)}>
                {phone.name}
              </li>
            ))}
          </ul>
          {selectedPhone && (
            <div>
              <h3>{selectedPhone.name}</h3>
              <p>Brand: {selectedPhone.manufacturer}</p>
              <p>Price: ${selectedPhone.price}</p>
              <img src={selectedPhone.imageFileName} alt={selectedPhone.name} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
