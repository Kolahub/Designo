import Image from 'next/image'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import LocationsSection from '@/components/shared/LocationsSection'
import ContactForm from '@/components/client/ContactForm'

// Add static metadata for SEO
export const metadata = {
  title: 'Contact Us - Designo',
  description: 'Get in touch with Designo for custom designs and digital branding solutions. Contact our offices in Canada, Australia, and the United Kingdom.'
}

export default function Contact() {

  return (
    <div className='relative'>
      <Header />
      <main className="">
        {/* Contact Form Section */}
        <section className="lg:container mx-auto sm:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-10 relative overflow-hidden sm:rounded-2xl bg-peach px-6 py-18 lg:py-14 sm:px-13.5 lg:px-23.5">
            {/* Contact Info */}
            <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
              <h1 className="text-white text-3xl sm:text-5xl font-medium mb-6 sm:mb-8">Contact Us</h1>
              <p className="text-white w-full sm:max-w-md mx-auto lg:mx-0">
                Ready to take it to the next level? Let's talk about your project or
                idea and find out how we can help your business grow. If you are
                looking for unique digital experiences that's relatable to your
                users, drop us a line.
              </p>
            </div>
            
            {/* Contact Form */}
            <ContactForm />

               {/* Background pattern */}
          <div className="hidden sm:block absolute -top-18 -left-20.5 lg:-top-16 lg:left-0">
            <Image 
              src="/contact/desktop/bg-pattern-hero-desktop.svg" 
              width={640} 
              height={640} 
              alt="" 
              aria-hidden="true" 
            />
          </div>

          <div className="block sm:hidden absolute top-0 -right-[28%]">
            <Image 
              src="/shared/desktop/bg-pattern-small-circle.svg" 
              width={292} 
              height={292} 
              alt="" 
              aria-hidden="true" 
            />
          </div>

          <div className="block sm:hidden absolute top-0 -left-[21.8%] rotate-180">
            <Image 
              src="/shared/desktop/bg-pattern-small-circle.svg" 
              width={292} 
              height={292} 
              alt="" 
              aria-hidden="true" 
            />
          </div>

          </div>
          
       
        </section>
        
        {/* Locations Section */}
        <LocationsSection className='py-20 md:py-32' />
      </main>

      <div className="absolute bottom-40.25 right-0 -z-10 hidden lg:block">
        <Image 
        src='/shared/desktop/bg-pattern-leaf.svg'
        alt='leaf'
        width={1000}
        height={594}
        />
      </div>
      <Footer hideCta={true} />
    </div>
  )
}