export async function getServiceData(serviceType) {
  try {
    const response = await fetch('/data/projects.json');
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
