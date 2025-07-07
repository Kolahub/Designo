'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

/**
 * Form field component to eliminate repetition
 * @param {Object} props - Component props
 * @param {string} props.type - Input type (text, email, tel, textarea)
 * @param {string} props.name - Field name
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.rows - Number of rows for textarea
 * @param {Object} props.formState - Form state containing errors
 * @returns {React.ReactElement} Form field component
 */
export default function FormField({ type, name, placeholder, rows, formState }) {
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
