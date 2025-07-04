import React from 'react'
import Image from 'next/image'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import LocationMap from '@/components/LocationMap'

function Locations() {
  const locations = [
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

  return (
    <>
      {/* All Leaflet resources are now handled in the client components */}
      
      <Header />

      <main>
        <div className="lg:container mx-auto sm:px-10 pb-12 md:pb-20 lg:pb-32">
          <div className="flex flex-col space-y-16 md:space-y-24">
            {locations.map((location, index) => (
              <section 
                key={location.country} 
                className="flex flex-col md:flex-row gap-7.5 overflow-hidden"
                aria-labelledby={`location-${location.country.toLowerCase()}`}
              >
                {/* Map Container - Conditionally ordered based on reversed flag */}
                <div 
                  className={`w-full rounded-xl md:w-5/12 h-80 md:h-auto order-1 ${
                    location.reversed ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <LocationMap 
                    center={location.coordinates} 
                    zoom={13}
                    country={location.country}
                  />
                </div>
                
                {/* Content Container */}
                <div 
                  className={`w-full rounded-xl md:w-7/12 bg-cream relative px-6 md:px-12 lg:px-20 py-16 md:py-20 order-2 ${
                    location.reversed ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
                    <Image 
                      src="/shared/desktop/bg-pattern-three-circles.svg" 
                      alt="" 
                      fill 
                      className="object-cover" 
                      aria-hidden="true"
                    />
                  </div>

                  <div className="relative z-10">
                    <h2 
                      id={`location-${location.country.toLowerCase()}`}
                      className="text-peach text-3xl md:text-4xl font-medium mb-6"
                    >
                      {location.country}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
                      {/* Office Details */}
                      <div>
                        <h3 className="font-bold text-dark-grey mb-3">{location.office}</h3>
                        {location.address.map((line, i) => (
                          <p key={i} className="text-dark-grey">{line}</p>
                        ))}
                      </div>
                      
                      {/* Contact Details */}
                      <div>
                        <h3 className="font-bold text-dark-grey mb-3">Contact</h3>
                        <p className="text-dark-grey">P: {location.contact.phone}</p>
                        <p className="text-dark-grey">M: {location.contact.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Locations
