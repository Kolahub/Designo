export async function getServiceData(serviceType) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const url = `${baseUrl}/data/projects.json`;
    const response = await fetch(url);
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
