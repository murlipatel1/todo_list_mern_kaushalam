const router = require('express').Router();
const todos = require('../models/Todos');
const authenticateToken = require('../middleware/auth');

// Add Todo Item 
router.post('/item', authenticateToken, async (req, res) => {
  try {
    const newItem = new todos({
      item: req.body.item,
      status: req.body.status || 'pending',
      userId: req.user._id  // Save the user ID to associate with the todo item
    });
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

// Get All Todo Items 
router.get('/items', authenticateToken, async (req, res) => {
  try {
    const allTodoItems = await todos.find({ userId: req.user._id });
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

// Update Todo Item 
router.put('/item/:id', authenticateToken, async (req, res) => {
  try {
    const updateItem = await todos.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateItem);
  } catch (err) {
    res.json(err);
  }
});

// Delete Todo Item 
router.delete('/item/:id', authenticateToken, async (req, res) => {
  try {
    const deleteItem = await todos.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    res.status(200).json('Item Deleted');
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
