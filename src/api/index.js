// src/api/index.js
import axios from 'axios';

// Create an axios instance for API calls
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,  // ✅ use environment variable
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Adding token (if needed) or modifying request
api.interceptors.request.use(
  (config) => {
    // You can add token here if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API error:', error.response.data);
    } else {
      console.error('Network error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;