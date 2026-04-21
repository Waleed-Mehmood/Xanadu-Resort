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
const ClientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
// Middleware
app.use(cors({
  origin: ClientUrl,
  credentials: true
}));
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
  res.send('Xanadu Resort API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
