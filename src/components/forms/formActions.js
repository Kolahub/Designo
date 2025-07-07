'use client'

/**
 * Form action to handle submission
 * @param {Object} prevState - Previous form state
 * @param {FormData} formData - Form data to validate and process
 * @returns {Object} Form state including errors and success status
 */
export const formAction = async (prevState, formData) => {
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
