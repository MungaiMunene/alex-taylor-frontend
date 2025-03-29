// src/api/index.js
import axios from 'axios';

// Create an axios instance for API calls
const api = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Flask backend URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Adding token (if needed) or modifying request
api.interceptors.request.use(
  (config) => {
    // You can add token here if needed in the headers
    // Example: config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle errors globally
api.interceptors.response.use(
  (response) => response, // Simply return the response if successful
  (error) => {
    // Handle response error globally (e.g., showing a message)
    if (error.response) {
      console.error('API error:', error.response.data);
    } else {
      console.error('Network error:', error.message);
    }
    return Promise.reject(error); // Reject the promise with error for specific component handling
  }
);

export default api;