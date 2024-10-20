const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register Route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if the user exists
    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json('User already exists');
    
    // Create new user
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json('User registered');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json('User not found');
    
    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json('Invalid password');
    
    // Generate JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.header('Authorization', token).json({ token });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
