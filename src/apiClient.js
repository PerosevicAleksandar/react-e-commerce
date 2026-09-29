const BASE_URL = "https://api.advanziaeducation.com/api";
const API_KEY = import.meta.env.VITE_API_KEY;
 
export async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      ...options.headers
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
 
  if (!response.ok) {
    throw new Error("Request failed");
  }
 
  return response.json();
}