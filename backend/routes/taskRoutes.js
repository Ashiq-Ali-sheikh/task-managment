const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Create a new task
router.post('/tasks', taskController.createTask);

// Get a list of tasks
router.get('/tasks', taskController.getTasks);

// Mark a task as completed
router.patch('/tasks/:id', taskController.markTaskAsCompleted);

// Delete a task
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
