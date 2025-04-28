// src/api.js
import axios from 'axios';

// Use environment variable to set the base URL dynamically
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,  // ✅ Dynamically gets from .env
});

export default api;