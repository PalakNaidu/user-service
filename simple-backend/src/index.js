const express = require('express');
const connectDB = require('./utils/db');

const app = express();
// ...existing middleware/routes...

// register root handler
app.get('/', (req, res) => {
  res.send('API is running');
});

// ...existing code to connect DB and start server...
connectDB().then(() => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server listening on ${port}`));
});
