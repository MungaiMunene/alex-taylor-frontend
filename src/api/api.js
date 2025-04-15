// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://alex-taylor-backend-1.onrender.com/api'  // ✅ Hardcoded!
});

export default api;