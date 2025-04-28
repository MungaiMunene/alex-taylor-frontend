export async function fetchWithRetry(url, options = {}, retries = 3, delay = 2000) {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Fetch failed with status ${response.status}`);
        return await response.json();
      } catch (error) {
        if (i < retries - 1) {
          console.warn(`Fetch attempt ${i + 1} failed. Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          throw error;
        }
      }
    }
  }