const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('express').json;
const cors = require('cors');
const connectDB = require('./utils/db');
const AuthController = require('./controllers/authController');
const User = require('./models/userModel');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// enable CORS for all routes
app.use(cors());

// Middleware
app.use(bodyParser());

// register root handler
app.get('/', (req, res) => {
  res.send('API is running');
});

// Routes
app.use('/auth', authRoutes(new AuthController(User)));
app.use('/', authRoutes(new AuthController(User)));

// error‐handler middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});

// Database connection and server start
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
  })
  .catch(err => console.error('DB connection error:', err));