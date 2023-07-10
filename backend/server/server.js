require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const phones = require('../data/phones.json');
const images = express.static('images');

// Enable CORS for all routes in Express app (Access-Control-Allow-Origin header added in the response)
app.use(cors());
// Serve the 'images' folder as a static directory
app.use('/images', images);

function getImageURL(filename) {
  return `${process.env.BACKEND_URL}/images/${filename}`;
}

function getNewPhoneObject(obj) {
  return {
    ...obj,
    imageURL: getImageURL(obj.imageFileName)
  };
}

// ---------- ENDPOINTS ----------
// Phone list
app.get('/phones', (req, res) => {
  // Modify the phone objects to include the image URLs
  const phonesWithImageURLs = phones.map(phone => getNewPhoneObject(phone));
  res.json(phonesWithImageURLs);
});

// Get phone by id
app.get('/phones/:id', (req, res) => {
  const phoneId = parseInt(req.params.id);
  const phone = phones.find(phone => phone.id === phoneId);
  if (phone) {
    res.json(getNewPhoneObject(phone));
  } else {
    res.status(404).json({ error: 'Phone not found' });
  }
});
// ----------

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.BACKEND_URL}`);
});
