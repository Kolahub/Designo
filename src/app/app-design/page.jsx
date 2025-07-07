import { getServiceData } from '@/lib/data'
import ServicePageClient from '@/components/client/ServicePageClient'

// This is a Server Component - no 'use client' directive needed
export default async function AppDesign() {
  // Server-side data fetching
  const serviceData = await getServiceData('appDesign')
  
  return (
    <ServicePageClient 
      hero={serviceData.hero}
      projects={serviceData.projects}
      relatedServices={serviceData.relatedServices}
      bgPattern="/app-design/desktop/bg-pattern-intro-app.svg" 
    />
  )
}

// Add static metadata
export const metadata = {
  title: 'App Design Services - Designo',
  description: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
}