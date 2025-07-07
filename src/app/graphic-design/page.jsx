import { getServiceData } from '@/lib/data'
import ServicePageClient from '@/components/client/ServicePageClient'

// This is a Server Component - no 'use client' directive needed
export default async function GraphicDesign() {
  // Server-side data fetching
  const serviceData = await getServiceData('graphicDesign')
  
  return (
    <ServicePageClient 
      hero={serviceData.hero}
      projects={serviceData.projects}
      relatedServices={serviceData.relatedServices}
      bgPattern="/graphic-design/desktop/bg-pattern-intro-graphic.svg" 
    />
  )
}

// Add static metadata
export const metadata = {
  title: 'Graphic Design Services - Designo',
  description: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
}