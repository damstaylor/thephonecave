import React, { useState } from 'react';

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
