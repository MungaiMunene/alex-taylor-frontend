// src/Services/userProfileService.js

export async function fetchUserProfile() {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Get from .env
    const response = await fetch(`${API_BASE_URL}/user-profile`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }
  
    return await response.json();
  }