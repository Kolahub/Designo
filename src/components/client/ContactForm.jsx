"use client";

import React, { useState, useEffect } from 'react'
import { useActionState } from 'react'
import { formAction } from '@/components/forms/formActions'
import FormField from '@/components/forms/FormField'
import SubmitButton from '@/components/forms/SubmitButton'

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formState, formDispatch] = useActionState(formAction, { 
    errors: {},
    success: false
  });

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (formState.success) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [formState.success]);

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
          value={formValues.name}
          setFormValues={setFormValues}
          formState={formState}
        />
        
        <FormField 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formValues.email}
          setFormValues={setFormValues}
          formState={formState}
        />
        
        <FormField 
          type="tel" 
          name="phone" 
          placeholder="Phone" 
          value={formValues.phone}
          setFormValues={setFormValues}
          formState={formState}
        />
        
        <FormField 
          type="textarea" 
          name="message" 
          placeholder="Your Message" 
          rows="3" 
          value={formValues.message}
          setFormValues={setFormValues}
          formState={formState}
        />

        <div className="flex justify-center lg:justify-end mt-8">
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}