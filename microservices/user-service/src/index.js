const express = require('express');
const app = express();
const PORT = 4003;

app.get('/', (req, res) => {
  res.send('User Service is running!');
});

app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
  });
