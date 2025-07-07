import { getServiceData } from '@/lib/data'
import ServicePageClient from '@/components/client/ServicePageClient'

// This is a Server Component - no 'use client' directive needed
export default async function WebDesign() {
  // Server-side data fetching
  const serviceData = await getServiceData('webDesign')
  
  return (
    <ServicePageClient 
      hero={serviceData.hero}
      projects={serviceData.projects}
      relatedServices={serviceData.relatedServices}
      bgPattern="/web-design/desktop/bg-pattern-intro-web.svg" 
    />
  )
}

// Add static metadata
export const metadata = {
  title: 'Web Design Services - Designo',
  description: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
}