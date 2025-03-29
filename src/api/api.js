// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://alex-taylor-backend.onrender.com/api',  // Replace with your actual backend API URL
});

export default api;