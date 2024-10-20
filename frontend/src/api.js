import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust according to your server URL

// Register
export const register = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

// Login
export const login = async (userData) => {
  return await axios.post(`${API_URL}/auth/login`, userData);
};

// Get todos
export const getTodos = async (token) => {
  return await axios.get(`${API_URL}/todos`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// Add todo
export const addTodo = async (todoData, token) => {
  return await axios.post(`${API_URL}/todos`, todoData, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// Update todo
export const updateTodo = async (id, todoData, token) => {
  return await axios.put(`${API_URL}/todos/${id}`, todoData, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// Delete todo
export const deleteTodo = async (id, token) => {
  return await axios.delete(`${API_URL}/todos/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
