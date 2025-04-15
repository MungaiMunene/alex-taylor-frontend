// src/api.js
import axios from 'axios';

// Check if the app is running in production or development
const isProduction = window.location.hostname !== 'localhost';

// Set the API base URL based on the environment
const api = axios.create({
  baseURL: isProduction
    ? 'https://alex-taylor-backend-1.onrender.com/api'  // ✅ Correct Render backend
    : 'http://127.0.0.1:5000/api',                       // Local backend for dev
});

export default api;