const express = require('express');
const app = express();
const cors = require('cors');
const adminRoute = require('./routes/adminRoute');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
require('dotenv').config();


//env variables
const PORT = process.env.PORT || 5000;
const MongoUri = process.env.MONGO_URI;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MongoDB connection
mongoose.connect(MongoUri).then(() => {
  console.log('MongoDB connected successfully!');
}
).catch((err) => {
  console.error('MongoDB connection error:', err);
});


//Routes
app.use('/admin', adminRoute);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
