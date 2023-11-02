const Task = require('../models/Task');

const createTask = async (req, res) => {
	try {
	  const { title, description } = req.body;
  
	  if (!title || !description) {
		return res.status(400).json({ error: 'Both title and description are required' });
	  }
	  const task = new Task({ title, description});
	  await task.save();
	  res.status(201).json(task);
	} catch (error) {
		console.log(error,"error")
	  res.status(500).json({ error: 'An error occurred while saving the task' });
	}
  };

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({createdAt:-1});
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

const markTaskAsCompleted = async (req, res) => {
	try {
	  const task = await Task.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
	  if (!task) {
		return res.status(404).json({ error: 'Task not found' });
	  }
	  res.json(task);
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred while marking the task as completed' });
	}
  };
  
  const deleteTask = async (req, res) => {
	try {
	  const task = await Task.findByIdAndDelete(req.params.id);
	  if (!task) {
		return res.status(404).json({ error: 'Task not found' });
	  }
	  res.json(task);
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred while deleting the task' });
	}
  };
  

module.exports = {
  createTask,
  getTasks,
  markTaskAsCompleted,
  deleteTask,
};
