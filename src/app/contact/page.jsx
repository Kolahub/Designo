'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useActionState } from 'react'  
import { useFormStatus } from 'react-dom'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

// Form action to handle submission
const formAction = async (prevState, formData) => {
  // Validate the form data
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message')
  
  const errors = {}
  if (!name) errors.name = 'Can\'t be empty'
  if (!email) errors.email = 'Can\'t be empty'
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Please use a valid email address'
  if (!phone) errors.phone = 'Can\'t be empty'
  if (!message) errors.message = 'Can\'t be empty'
  
  if (Object.keys(errors).length > 0) {
    return { errors, success: false }
  }
  
  // In a real app, we would submit the data to a server
  // For now, we'll simulate a successful submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    errors: {},
    success: true,
    message: 'Thanks for your submission! We will get back to you shortly.'
  }
}

// Form field component to eliminate repetition
function FormField({ type, name, placeholder, rows, formState }) {
  const isTextarea = type === 'textarea';
  const InputComponent = isTextarea ? 'textarea' : 'input';
  
  // Use React's useEffect to set up a timeout for error clearing
  const [showError, setShowError] = useState(!!formState.errors?.[name]);
  
  useEffect(() => {
    // When there is an error, show it
    if (formState.errors?.[name]) {
      setShowError(true);
      
      // Set a timeout to clear the error after 5 seconds
      const timer = setTimeout(() => {
        setShowError(false);
      }, 5000); // 5 seconds
      
      // Clear the timeout if the component unmounts or if the error changes
      return () => clearTimeout(timer);
    }
  }, [formState.errors, name]);
  
  return (
    <div className="relative border-b border-white">
      <InputComponent 
        type={!isTextarea ? type : undefined}
        name={name}
        placeholder={placeholder}
        rows={rows}
        className="w-full py-3 bg-transparent font-medium text-white placeholder-light-peach focus:outline-none resize-none"
        suppressHydrationWarning={true}
      />
      {formState.errors?.[name] && showError && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 text-sm text-white italic">
          <p>{formState.errors[name]}</p>
          <Image src="/contact/desktop/icon-error.svg" alt="error" width={24} height={24}/>
        </div>
      )}
    </div>
  );
}

// Submit button component with loading state
function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button 
      type="submit" 
      className="bg-white text-black font-medium py-4 px-12 rounded-lg hover:bg-light-peach hover:text-white transition-colors duration-300 uppercase tracking-wider disabled:opacity-70"
      disabled={pending}
      suppressHydrationWarning={true}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}

// Location card component
function LocationCard({ country, image, link }) {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="bg-[url('/shared/desktop/bg-pattern-small-circle.svg')]">
      <Image 
          src={image} 
          alt={country} 
          width={202}
          height={202}
          className="object-contain"
        />
      </div>
        <div className="flex flex-col items-center gap-8">
        <h3 className="text-2xl font-medium uppercase">{country}</h3>
      <Link href={link} className='bg-peach text-light-grey uppercase p-4.5 rounded-lg'>
          See Location
      </Link>
        </div>
    </div>
  )
}

function Contact() {
  const [formState, formDispatch] = useActionState(formAction, { 
    errors: {},
    success: false
  })

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
            <div className="w-full lg:w-1/2 relative z-10">
              <form action={formDispatch} className="flex flex-col space-y-5 lg:space-y-8">
                {formState.success && (
                  <div className="bg-white bg-opacity-90 p-4 rounded-lg text-green-600 mb-4">
                    {formState.message}
                  </div>
                )}
                
                <FormField 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  formState={formState} 
                />
                
                <FormField 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  formState={formState} 
                />
                
                <FormField 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone" 
                  formState={formState} 
                />
                
                <FormField 
                  type="textarea" 
                  name="message" 
                  placeholder="Your Message" 
                  rows="3" 
                  formState={formState} 
                />
                
                <div className="flex justify-center lg:justify-end mt-8">
                  <SubmitButton />
                </div>
              </form>
            </div>

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
        <section className="lg:container mx-auto sm:px-10 py-12 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
            <LocationCard 
              country="Canada" 
              image="/shared/desktop/illustration-canada.svg" 
              link="/locations#canada" 
            />
            <LocationCard 
              country="Australia" 
              image="/shared/desktop/illustration-australia.svg" 
              link="/locations#australia" 
            />
            <LocationCard 
              country="United Kingdom" 
              image="/shared/desktop/illustration-united-kingdom.svg" 
              link="/locations#united-kingdom" 
            />
          </div>
        </section>
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

export default Contact