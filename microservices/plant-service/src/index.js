const express = require('express');
const app = express();
const PORT = 4002;

app.get('/', (req, res) => {
  res.send('Plant Service is running!');
});

app.listen(PORT, () => {
    console.log(`Plant service running on port ${PORT}`);
  });
