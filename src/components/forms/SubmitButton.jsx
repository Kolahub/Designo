'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'

/**
 * Submit button component with loading state
 * @returns {React.ReactElement} Submit button
 */
export default function SubmitButton() {
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
