// api.js

import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const API_BASE_URL = 'http://localhost:4000/api/task_managment';

// Create a task
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tasks`, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get a list of tasks
export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Mark a task as completed
export const markTaskAsCompleted = async (taskId) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a task
export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
