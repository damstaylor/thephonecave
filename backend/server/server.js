const express = require('express');
const app = express();
const cors = require('cors');

const phones = require('../data/phones.json');
const images = express.static('images');

// Enable CORS for all routes in Express app (Access-Control-Allow-Origin header added in the response)
app.use(cors());
// Serve the 'images' folder as a static directory
app.use('/images', images);

// ---------- ENDPOINTS ----------
// Phone list
app.get('/phones', (req, res) => {
  // Modify the phone objects to include the image URLs
  const phonesWithImageURLs = phones.map(phone => ({
    ...phone,
    imageURL: `http://localhost:3001/images/${phone.imageFileName}`
  }));
  res.json(phonesWithImageURLs);
});

// Get phone by id
app.get('/phones/:id', (req, res) => {
  const phoneId = parseInt(req.params.id);
  const phone = phones.find(phone => phone.id === phoneId);
  if (phone) {
    const phoneWithImageURL = { ...phone, imageURL: `http://localhost:3001/images/${phone.imageFileName}` };
    res.json(phoneWithImageURL);
  } else {
    res.status(404).json({ error: 'Phone not found' });
  }
});
// ----------

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3000');
});
