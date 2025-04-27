// src/services/userProfileService.js

export async function fetchUserProfile() {
    const response = await fetch('http://127.0.0.1:5000/api/user-profile');
    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }
    const data = await response.json();
    return data;
  }