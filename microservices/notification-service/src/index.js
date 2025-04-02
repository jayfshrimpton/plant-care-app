const express = require('express');
const app = express();
const PORT = 4001;

app.get('/', (req, res) => {
  res.send('Notification Service is running!');
});

app.listen(PORT, () => {
    console.log(`Notification service running on port ${PORT}`);
  });
