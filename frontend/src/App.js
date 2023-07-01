import React, { useState, useEffect } from 'react';

//import {Galaxy_S7} from "../../backend/images/Galaxy_S7";
import PhoneList from './components/PhoneList/PhoneList';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';

function App() {
  const [selectedPhone, setSelectedPhone] = useState(null);

  const handleSelectPhone = (phone) => {
    setSelectedPhone(phone);
  };

  return (
    <div>
      <PhoneList onSelectPhone={handleSelectPhone} />
      {selectedPhone && <PhoneDetails phone={selectedPhone} />}
    </div>
  );
}

export default App;
