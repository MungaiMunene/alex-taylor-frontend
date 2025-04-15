// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://alex-taylor-backend-1.onrender.com/api'  // ✅ HARD CODED
});

export default api;