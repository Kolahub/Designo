import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Individual location card component
function LocationCard({ country, image, link }) {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="bg-[url('/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center">
        <Image 
          src={image} 
          alt={country} 
          width={202}
          height={202}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-2xl font-medium uppercase">{country}</h3>
        <Link href={link} className="bg-peach hover:bg-light-peach text-white transition-colors duration-300 uppercase font-medium tracking-wide px-6 py-4 rounded-lg">
          See Location
        </Link>
      </div>
    </div>
  )
}

// Main locations section component
export default function LocationsSection({ className }) {
  const locations = [
    {
      country: "Canada",
      image: "/shared/desktop/illustration-canada.svg",
      link: "/locations#canada"
    },
    {
      country: "Australia",
      image: "/shared/desktop/illustration-australia.svg",
      link: "/locations#australia"
    },
    {
      country: "United Kingdom",
      image: "/shared/desktop/illustration-united-kingdom.svg",
      link: "/locations#united-kingdom"
    }
  ];

  return (
    <section className={`lg:container mx-auto px-6 sm:px-10 ${className || ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
        {locations.map((location, index) => (
          <LocationCard 
            key={index}
            country={location.country}
            image={location.image}
            link={location.link}
          />
        ))}
      </div>
    </section>
  )
}
