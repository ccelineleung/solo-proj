const express = require('express');
const app = express();
const path = require('path');

const PORT = 5000;

app.get('api', (req, res) => {
  res.json({ users: ['1', '2'] });
});

// Unknown route Handler
app.use((req, res) => res.status(404).send('You are in the wrong place :O'));

app.listen(PORT, () => {
  console.log('Listening on PORT 5000');
});

module.exports = app;
