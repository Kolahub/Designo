'use client'

import React, { useEffect, useRef } from 'react'

function MapComponent({ center, zoom, country }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    // Dynamically import Leaflet only on the client side
    const loadMap = async () => {
      if (typeof window === 'undefined') return
      
      // Dynamic import for Leaflet
      const L = await import('leaflet')

      // Import Leaflet CSS
      import('leaflet/dist/leaflet.css')
      
      // Add custom marker styles
      const style = document.createElement('style')
      style.textContent = `
        .custom-map-marker {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .marker-pin {
          width: 20px;
          height: 20px;
          border-radius: 50% 50% 50% 0;
          background-color: #E7816B;
          transform: rotate(-45deg);
          position: relative;
        }
      `
      document.head.appendChild(style)

      // Create map if it doesn't exist yet
      if (!mapInstanceRef.current) {
        // Add default icon path fix for Leaflet with webpack
        delete L.default.Icon.Default.prototype._getIconUrl
        L.default.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
        })

        // Create map
        mapInstanceRef.current = L.default.map(mapRef.current).setView(center, zoom)
        
        // Add tile layer
        L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(mapInstanceRef.current)
        
        // Custom marker icon with brand colors
        const customIcon = L.default.divIcon({
          className: 'custom-map-marker',
          html: `<div class="marker-pin"></div>`,
          iconSize: [30, 42],
          iconAnchor: [15, 42]
        })
        
        // Add marker with custom icon and popup
        const marker = L.default.marker(center, { icon: customIcon })
          .addTo(mapInstanceRef.current)
          .bindPopup(`<b>Designo ${country} Office</b>`)
        
        // Add subtle animation to marker
        setTimeout(() => {
          marker.openPopup()
          setTimeout(() => marker.closePopup(), 2000)
        }, 1000)
      } else {
        // Update existing map view if center or zoom changed
        mapInstanceRef.current.setView(center, zoom)
      }
    }
    
    loadMap()
    
    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [center, zoom, country])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full sm:rounded-xl min-h-[320px]" 
      style={{ zIndex: 0 }}
      aria-label={`Map showing location of Designo ${country} Office`}
    />
  )
}

export default MapComponent
