import axios from "axios";

/**
 * Fetch random photos from Unsplash.
 *
 * @param {number} count - The number of photos to fetch.
 * @returns {Promise<Array>} An array of objects containing photo URLs.
 */

export async function fetchUnsplashPhotos(count = 32) {
  // Unsplash API client ID
  const clientID = "aPQGSwNAIsVLhB3GcagU1gvw7JgrVm87bqHlVKx8au8";

  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        count,
        client_id: clientID,
      },
    });

    // Map the response data to extract photo URLs
    return response.data.map((photo) => ({
      url: photo.urls.regular,
    }));
  } catch (error) {
    console.error("Error fetching photos from Unsplash:", error);
    return [];
  }
}

/**
 * Search for photos on Unsplash based on a query.
 *
 * @param {string} query - The search query.
 * @param {number} count - The number of search results to fetch.
 * @returns {Promise<Array>} An array of objects containing photo URLs.
 */
export async function searchUnsplashPhotos(query, count = 32) {
  // Unsplash API client ID
  const clientID = "aPQGSwNAIsVLhB3GcagU1gvw7JgrVm87bqHlVKx8au8";

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        per_page: count,
        client_id: clientID,
      },
    });

    // Map the response data to extract photo URLs
    return response.data.results.map((photo) => ({
      url: photo.urls.regular,
    }));
  } catch (error) {
    console.error("Error fetching photos from Unsplash:", error);
    return [];
  }
}
