const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());

const movies = JSON.parse(fs.readFileSync(path.join(__dirname, 'movies_metadata.json')));

app.get('/api/movies', (req, res) => {
  const simplified = movies.map(({ id, title, tagline, vote_average }) => ({
    id,
    title,
    tagline,
    vote_average,
  }));
  res.json(simplified);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
