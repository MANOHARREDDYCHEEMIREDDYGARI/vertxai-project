const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');



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




const mongoURI = process.env.MONGO_URI;
console.log('MONGO_URI:', mongoURI); // Should print the actual URI now, not undefined

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection failed', err);
});


// Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    })
    .catch((error) => console.error('MongoDB connection failed', error));
