import projectsData from '../../public/data/projects.json';

export async function getServiceData(serviceType) {
  try {
    // Direct access to the imported JSON file
    // This works both in development and production builds
    if (!projectsData[serviceType]) {
      throw new Error(`Service type '${serviceType}' not found in data`);
    }
    
    return projectsData[serviceType];
  } catch (error) {
    console.error('Error fetching service data:', error);
    throw error;
  }
}
