require('dotenv').config();
const express = require('express');
const app = express();
const db = require('../js/db');

app.use(express.json());

// Example route
app.get('/api/test', (req, res) => {
  db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ result: results[0].solution });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
