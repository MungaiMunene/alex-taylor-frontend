import axios from 'axios';

// Check if the app is running in production or development
const isProduction = window.location.hostname !== 'localhost';  // You can also check for other conditions

// Set the API base URL based on the environment
const api = axios.create({
  baseURL: isProduction
    ? 'https://alex-taylor-backend.onrender.com/api'  // Production backend URL
    : 'http://127.0.0.1:5000/api',  // Local backend URL (when running locally)
});

export default api;