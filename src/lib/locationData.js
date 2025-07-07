/**
 * Location data for all Designo offices
 * Contains information about each location including address, contact details and map coordinates
 */
export const locations = [
  {
    country: 'Canada',
    office: 'Designo Central Office',
    address: ['3886 Wellington Street', 'Toronto, Ontario M9C 3J5'],
    contact: {
      phone: '+1 253-863-8967',
      email: 'contact@designo.co'
    },
    coordinates: [43.6532, -79.3832], // Toronto coordinates
    reversed: false
  },
  {
    country: 'Australia',
    office: 'Designo AU Office',
    address: ['19 Balonne Street', 'New South Wales 2443'],
    contact: {
      phone: '(02) 6720 9092',
      email: 'contact@designo.au'
    },
    coordinates: [-33.8688, 151.2093], // Sydney coordinates
    reversed: true
  },
  {
    country: 'United Kingdom',
    office: 'Designo UK Office',
    address: ['13 Colorado Way', 'Rhyd-y-fro SA8 9GA'],
    contact: {
      phone: '078 3115 1400',
      email: 'contact@designo.uk'
    },
    coordinates: [51.5074, -0.1278], // London coordinates
    reversed: false
  }
]
