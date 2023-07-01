const express = require('express');
const app = express();
const phones = require('../data/phones.json');

app.get('/phones', (req, res) => {
  res.json(phones);
});

app.get('/phones/:id', (req, res) => {
  const phoneId = parseInt(req.params.id);
  const phone = phones.find(phone => phone.id === phoneId);
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ error: 'Phone not found' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3000');
});
