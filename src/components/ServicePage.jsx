'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

export default function ServicePage({ hero, projects, relatedServices, serviceType }) {

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="lg:container mx-auto sm:px-10 my-8">
          <div className="relative bg-peach overflow-hidden sm:rounded-2xl">
          <div className="relative z-10 py-16 px-6 md:px-16 text-center max-w-3xl mx-auto">
            <h1 className="text-white text-3xl md:text-5xl font-medium mb-6">{hero.title}</h1>
            <p className="text-white">{hero.description}</p>
          </div>
          {/* Background patterns */}
          <div className="absolute top-0 left-0 opacity-20">
            <Image 
              src="/shared/desktop/bg-pattern-small-circle.svg" 
              width={200} 
              height={200} 
              alt="" 
              aria-hidden="true" 
            />
          </div>
          <div className="absolute bottom-0 right-0 opacity-20">
            <Image 
              src="/shared/desktop/bg-pattern-small-circle.svg" 
              width={200} 
              height={200} 
              alt="" 
              aria-hidden="true" 
            />
          </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="lg:container mx-auto sm:px-10 py-16 md:py-24">
          <div className={`grid grid-cols-1 md:grid-cols-2 ${serviceType === 'webDesign' ? 'lg:grid-cols-3' : ''} gap-6 md:gap-8`}>
            {projects.map((project, index) => (
              <div key={index} className="overflow-hidden rounded-2xl">
                <div className="w-full aspect-[5/4] relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="bg-cream p-8 text-center">
                  <h3 className="text-peach text-xl font-medium mb-4">{project.title}</h3>
                  <p className="text-dark-grey">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Related Services Section */}
        <section className="lg:container mx-auto sm:px-10 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {relatedServices.map((service) => (
              <Link 
                key={service.type} 
                href={service.path}
                className="relative overflow-hidden rounded-4xl group"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center transition-opacity group-hover:opacity-70">
                    <h2 className="text-white text-3xl md:text-4xl font-medium mb-5">
                      {service.name.toUpperCase()}
                    </h2>
                    <div className="flex items-center">
                      <span className="text-white text-sm font-medium tracking-wide mr-4">VIEW PROJECTS</span>
                      <Image 
                        src="/shared/desktop/icon-right-arrow.svg" 
                        width={7} 
                        height={10} 
                        alt="" 
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
