import React from 'react'
import Image from 'next/image'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import LocationsSection from '@/components/shared/LocationsSection'

export default function OurCompany() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
    <Header />
    <main>
      {/* Hero Section */}
      <section className="lg:container mx-auto sm:px-10">
        <div className="flex flex-col-reverse lg:flex-row overflow-hidden sm:rounded-2xl">
          <div className="bg-peach w-full lg:w-[55%] flex items-center justify-center lg:justify-start py-20 px-6 md:py-16 md:px-14.5 lg:py-33.75 lg:px-0 lg:pl-23.75 relative">
            <div className="text-center lg:text-left w-full lg:max-w-114.5">
              <h1 className="text-white text-[2rem] md:text-5xl font-medium mb-6">About Us</h1>
              <p className="text-white">
                Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                We've partnered with many startups, corporations, and nonprofits alike to craft designs 
                that make real impact. We're always looking forward to creating brands, products, and 
                digital experiences that connect with our clients' audiences.
              </p>
            </div>
            <div className="absolute -left-31 bottom-26 lg:bottom-0 lg:left-auto lg:right-0">
              <Image src="/about/desktop/bg-pattern-hero-about-desktop.svg" width={640} height={640} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-[45%] h-80 lg:h-auto relative">
            <Image 
              src="/about/desktop/image-about-hero.jpg" 
              alt="Collaborative workspace" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* World-class Talent Section */}
      <section className="lg:container mx-auto sm:px-10 sm:py-20 md:py-32">
        <div className="flex flex-col lg:flex-row overflow-hidden sm:rounded-2xl">
          <div className="w-full lg:w-[40%] h-80 lg:h-auto relative z-10">
            <Image 
              src="/about/desktop/image-world-class-talent.jpg" 
              alt="Gallery wall with hanging light fixtures" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="bg-cream w-full lg:w-[60%] py-20 px-6 md:py-17 md:px-14.5 lg:py-38.5 lg:px-23.5 flex items-center justify-center order-0 lg:order-1 relative">
            <div className="text-center lg:text-left">
              <h2 className="text-peach text-[2rem] md:text-[2.5rem] font-medium mb-6">World-class talent</h2>
              <p className="text-dark-grey mb-6">
                We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
              </p>
              <p className="text-dark-grey">
                Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.
              </p>
            </div>
            <div className="absolute bottom-0 -left-36.5">
              <Image src="/shared/desktop/bg-pattern-two-circles.svg" width={584} height={292} alt="" />
            </div>
          </div>
        </div>


      </section>

      {/* Locations Section */}
      <LocationsSection className="pt-20 sm:pt-0" />

      {/* The Real Deal Section */}
      <section className="lg:container mx-auto sm:px-10 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row-reverse overflow-hidden sm:rounded-2xl">
          <div className="w-full lg:w-[40%] h-80 lg:h-auto relative z-10">
            <Image 
              src="/about/desktop/image-real-deal.jpg" 
              alt="Gallery wall with hanging light fixtures" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="bg-cream w-full lg:w-[60%] py-20 px-6 md:py-17 md:px-14.5 lg:py-38.5 lg:px-23.5 flex items-center justify-center order-0 lg:order-1 relative">
            <div className="text-center lg:text-left">
              <h2 className="text-peach text-[2rem] md:text-[2.5rem] font-medium mb-6">The real deal</h2>
              <p className="text-dark-grey mb-6">
              As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
              </p>
              <p className="text-dark-grey">
              We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
              </p>
            </div>

            <div className="absolute bottom-0 left-0">
              <Image src="/shared/desktop/bg-pattern-two-circles.svg" width={584} height={292} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer component contains both CTA and actual footer */}
      <Footer />
    </main>

         <div className="absolute top-[475px] left-0 z-[-1] hidden md:block">
            <Image src="/shared/desktop/bg-pattern-leaf.svg" alt="leaf" width={1006} height={594} />
          </div>
    
          <div className="absolute bottom-290.25 -right-99 z-[-1] hidden md:block overflow-hidden">
            <Image src="/shared/desktop/bg-pattern-leaf.svg" alt="leaf" width={1006} height={594} />
          </div>
    </div>

  )
}

// Add static metadata
export const metadata = {
  title: 'Our Company - Designo',
  description: 'Learn about Designo, our world-class team, and how we transform businesses through award-winning design.'
}