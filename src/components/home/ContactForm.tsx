import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'
import Button from '../ui/Button'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    alert('Thank you for your message! We will get back to you soon.')
    reset()
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-xl p-8"
    >
      <h3 className="text-2xl font-bold text-secondary mb-6">Get Free Quote</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Name"
          placeholder="Your full name"
          error={errors.name?.message}
          {...register('name', { 
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
        />
        
        <Input
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          error={errors.email?.message}
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        
        <Input
          label="Phone"
          type="tel"
          placeholder="(123) 456-7890"
          error={errors.phone?.message}
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[\d\s\-\(\)]+$/,
              message: 'Invalid phone number'
            }
          })}
        />
        
        <TextArea
          label="Message"
          placeholder="Tell us about your project..."
          rows={4}
          error={errors.message?.message}
          {...register('message', { 
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' }
          })}
        />
        
        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting}
          className="flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <Send size={18} />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}

export default ContactForm