const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


console.log('MONGO_URI:', process.env.MONGO_URI);


const authRoutes = require('./routes/authRoutes');
const feedRoutes = require('./routes/feedRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/admin', adminRoutes);

// Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    })
    .catch((error) => console.error('MongoDB connection failed', error));
