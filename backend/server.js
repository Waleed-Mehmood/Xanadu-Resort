const express = require('express');
const app = express();
const cors = require('cors');
const adminRoute = require('./routes/adminRoute');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRoute);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
