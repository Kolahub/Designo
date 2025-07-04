import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'

function OurCompany() {
  return (
    <>
    <Header />
    <main>
      {/* Hero Section */}
      <section className="lg:container mx-auto sm:px-10 pt-8 md:pt-0">
        <div className="flex flex-col lg:flex-row overflow-hidden sm:rounded-2xl h-[480px]">
          <div className="bg-peach w-full lg:w-1/2 py-16 px-6 md:px-16 flex items-center justify-center">
            <div className="text-center lg:text-left">
              <h1 className="text-white text-3xl md:text-5xl font-medium mb-6">About Us</h1>
              <p className="text-white">
                Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                We've partnered with many startups, corporations, and nonprofits alike to craft designs 
                that make real impact. We're always looking forward to creating brands, products, and 
                digital experiences that connect with our clients' audiences.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-80 lg:h-auto relative">
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
      <section className="lg:container mx-auto sm:px-10 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row overflow-hidden sm:rounded-2xl">
          <div className="w-full lg:w-1/2 h-80 lg:h-auto relative order-1 lg:order-0">
            <Image 
              src="/about/desktop/image-world-class-talent.jpg" 
              alt="Gallery wall with hanging light fixtures" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="bg-cream w-full lg:w-1/2 py-16 px-6 md:px-16 flex items-center justify-center order-0 lg:order-1">
            <div className="text-center lg:text-left">
              <h2 className="text-peach text-3xl md:text-4xl font-medium mb-6">World-class talent</h2>
              <p className="text-dark-grey mb-6">
                We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
              </p>
              <p className="text-dark-grey">
                Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="lg:container mx-auto sm:px-10 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Canada Location */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <Image 
                src="/shared/desktop/illustration-canada.svg" 
                alt="Canada location" 
                width={200} 
                height={200} 
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-medium uppercase mb-6">Canada</h3>
            <Link 
              href="/locations" 
              className="inline-block bg-peach hover:bg-light-peach text-white transition-colors duration-300 uppercase font-medium tracking-wide px-6 py-4 rounded-lg"
            >
              See Location
            </Link>
          </div>

          {/* Australia Location */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <Image 
                src="/shared/desktop/illustration-australia.svg" 
                alt="Australia location" 
                width={200} 
                height={200} 
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-medium uppercase mb-6">Australia</h3>
            <Link 
              href="/locations" 
              className="inline-block bg-peach hover:bg-light-peach text-white transition-colors duration-300 uppercase font-medium tracking-wide px-6 py-4 rounded-lg"
            >
              See Location
            </Link>
          </div>

          {/* United Kingdom Location */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <Image 
                src="/shared/desktop/illustration-united-kingdom.svg" 
                alt="United Kingdom location" 
                width={200} 
                height={200} 
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-medium uppercase mb-6">United Kingdom</h3>
            <Link 
              href="/locations" 
              className="inline-block bg-peach hover:bg-light-peach text-white transition-colors duration-300 uppercase font-medium tracking-wide px-6 py-4 rounded-lg"
            >
              See Location
            </Link>
          </div>
        </div>
      </section>

      {/* The Real Deal Section */}
      <section className="lg:container mx-auto sm:px-10 pb-20 md:pb-32">
        <div className="flex flex-col lg:flex-row overflow-hidden sm:rounded-2xl">
          <div className="bg-cream w-full lg:w-1/2 py-16 px-6 md:px-16 flex items-center justify-center">
            <div className="text-center lg:text-left">
              <h2 className="text-peach text-3xl md:text-4xl font-medium mb-6">The real deal</h2>
              <p className="text-dark-grey mb-6">
                As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity.
              </p>
              <p className="text-dark-grey">
                We make design and technology more accessible and give you tools to measure success. We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-80 lg:h-auto relative">
            <Image 
              src="/about/desktop/image-real-deal.jpg" 
              alt="Design materials on table" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer component contains both CTA and actual footer */}
      <Footer />
    </main>
    </>

  )
}

export default OurCompany