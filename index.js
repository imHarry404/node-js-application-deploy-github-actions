import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World! from node server - Guru Bhai😵‍💫' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
