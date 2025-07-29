const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const pool = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('API is running. Backend is alive!');
});

app.get('/api/images', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM images');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});