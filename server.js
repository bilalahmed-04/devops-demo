const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.json({ message: 'WRONG MESSAGE', version: '1.0' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3000, () => console.log('Running on port 3000'));
module.exports = app;