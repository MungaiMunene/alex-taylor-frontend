// src/api.js
import axios from 'axios';

// 🔧 Temporary fix: hardcode the deployed backend URL
const api = axios.create({
  baseURL: 'https://alex-taylor-backend-1.onrender.com/api'
});

export default api;