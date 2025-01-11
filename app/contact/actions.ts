'use server'

export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Here you would typically send an email or save to a database
  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')
  
  return { success: true, message: 'Thank you for your message. We will get back to you soon!' }
}

