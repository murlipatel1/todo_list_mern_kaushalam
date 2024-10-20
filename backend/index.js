const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import routes
const authRoute = require('./routes/users');
const todoRoute = require('./routes/todos');

// Initialize app
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/api/auth', authRoute); // Authentication routes
app.use('/api/todos', todoRoute); // Todo item routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
