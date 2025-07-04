'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the Map component to prevent SSR issues with Leaflet
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-light-grey animate-pulse rounded-lg"></div>
})

// Client component wrapper for the map
function LocationMap({ center, zoom, country }) {
  return (
    <div className="w-full h-full relative">
      <MapComponent center={center} zoom={zoom} country={country} />
    </div>
  )
}

export default LocationMap
