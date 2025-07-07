'use client'

import React, { useState, useEffect } from 'react'
import { useActionState } from 'react'

// Import modularized form components
import { formAction } from '@/components/forms/formActions'
import FormField from '@/components/forms/FormField'
import SubmitButton from '@/components/forms/SubmitButton'

export default function ContactForm() {
  const [formState, formDispatch] = useActionState(formAction, { 
    errors: {},
    success: false
  })
  
  // Track whether to show success message
  const [showSuccess, setShowSuccess] = useState(false)
  
  // Set up effect to clear success message after 5 seconds
  useEffect(() => {
    if (formState.success) {
      setShowSuccess(true)
      
      // Set a timeout to clear the success message
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000) // 5 seconds
      
      // Clean up the timeout if component unmounts or formState changes
      return () => clearTimeout(timer)
    }
  }, [formState.success])
  
  return (
    <div className="w-full lg:w-1/2 relative z-10">
      <form action={formDispatch} className="flex flex-col space-y-5 lg:space-y-8">
        {formState.success && showSuccess && (
          <div className="bg-white bg-opacity-90 p-4 rounded-lg text-dark-grey mb-4 animate-fade-in">
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
  )
}
