import emailjs from '@emailjs/browser'

// EmailJS configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

// Initialize EmailJS
export const initEmailJS = () => {
  if (emailjsConfig.publicKey) {
    emailjs.init(emailjsConfig.publicKey)
  }
}

// Send email function
export const sendEmail = async (formData: {
  name: string
  email: string
  phone: string
  message: string
}) => {
  if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
    throw new Error('EmailJS configuration is missing. Please check your environment variables.')
  }

  try {
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Armadillo Waste Inc.',
      },
      emailjsConfig.publicKey
    )
    
    return response
  } catch (error) {
    console.error('EmailJS Error:', error)
    throw error
  }
}