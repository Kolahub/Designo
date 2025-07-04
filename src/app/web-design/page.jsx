'use client'

import React, { useState, useEffect } from 'react'
import ServicePage from '@/components/ServicePage'

function WebDesign() {
  const [serviceData, setServiceData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data/projects.json')
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setServiceData(data.webDesign)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError('Failed to load service data. Please try again later.')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>
  }
  
  return (
    <ServicePage 
      hero={serviceData.hero}
      projects={serviceData.projects}
      relatedServices={serviceData.relatedServices}
      serviceType="webDesign" 
    />
  )
}

export default WebDesign