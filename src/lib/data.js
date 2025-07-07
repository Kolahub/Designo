/**
 * Utility functions for data fetching in server components
 */

/**
 * Fetches service data based on service type
 * @param {string} serviceType - Type of service (appDesign, webDesign, or graphicDesign)
 * @returns {Promise<Object>} Service data object
 */
export async function getServiceData(serviceType) {
  try {
    // In a real Next.js app, this would use fs to read the file directly on the server
    // For this project, we'll use fetch for compatibility
    const response = await fetch('http://localhost:3000/data/projects.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch service data: ${response.status}`);
    }

    const data = await response.json();
    return data[serviceType];
  } catch (error) {
    console.error('Error fetching service data:', error);
    throw error;
  }
}
