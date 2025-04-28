import { fetchWithRetry } from './fetchWithRetry'; // Import the retry helper

export async function fetchUserProfile() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Get from .env
  const url = `${API_BASE_URL}/user-profile`;
  
  return await fetchWithRetry(url);
}