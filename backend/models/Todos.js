const mongoose = require('mongoose');

// Define the schema for the todo item
const todoItemsSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true, // The task item is required
    minlength: 1,   // Ensure it’s not an empty string
  },
  status: {
    type: String,
    default: 'pending', // Default status is 'pending'
    enum: ['pending', 'in progress', 'completed'], // Allowed statuses
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true, // Each todo must be associated with a user
  },
  createdAt: {
    type: Date,
    default: Date.now, // Auto-generate creation date
  },
});

// Create the model from the schema
const todos = mongoose.model('todo', todoItemsSchema);

module.exports = todos;
