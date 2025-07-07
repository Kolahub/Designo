import React from 'react'
import Image from 'next/image'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import LocationMap from '@/components/LocationMap'
import { locations } from '@/lib/locationData'

// Define static metadata for SEO
export const metadata = {
  title: 'Our Locations - Designo',
  description: 'Visit Designos offices across Canada, Australia, and the United Kingdom. Find contact information and directions to our global locations.'
}

export default function Locations() {

  return (
    <>
      {/* All Leaflet resources are now handled in the client components */}
      
      <Header />

      <main>
        <div className="lg:container mx-auto sm:px-10 pb-20 lg:pb-32">
          <div className="flex flex-col space-y-16 lg:space-y-24">
            {locations.map((location, index) => (
              <section 
                key={location.country} 
                className="flex flex-col lg:flex-row gap-7.5 overflow-hidden"
                aria-labelledby={`location-${location.country.toLowerCase()}`}
              >
                {/* Map Container - Conditionally ordered based on reversed flag */}
                <div 
                  className={`w-full sm:rounded-xl lg:w-5/12 h-80 lg:h-auto order-1 ${
                    location.reversed ? 'lg:order-2' : 'lg:order-1'
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
                  className={`w-full sm:rounded-xl lg:w-7/12 bg-cream relative px-6 md:px-12 lg:px-20 py-16 lg:py-20 order-2 ${
                    location.reversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Background Pattern */}
                  <div className="absolute left-0 bottom-0">
                    <Image 
                      src="/shared/desktop/bg-pattern-two-circles.svg" 
                      alt="" 
                      width={584}
                      height={292}
                      className="object-cover" 
                      aria-hidden="true"
                    />
                  </div>

                  <div className="relative z-10 text-center lg:text-start">
                    <h2 
                      id={`location-${location.country.toLowerCase()}`}
                      className="text-peach text-[2rem] lg:text-[2.5rem] font-medium mb-6"
                    >
                      {location.country}
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4">
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

