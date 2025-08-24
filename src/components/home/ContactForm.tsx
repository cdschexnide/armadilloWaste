import { useForm, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'
import Button from '../ui/Button'
import { initEmailJS, sendEmail } from '../../utils/emailjs'
import { formatPhoneNumber, cleanPhoneNumber, isValidPhoneNumber } from '../../utils/phoneFormatter'
import { useTranslation } from '../../contexts/LanguageContext'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm = () => {
  const t = useTranslation()
  const [submitStatus2, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>()

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS()
  }, [])

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus('idle')
      setSubmitMessage('')
      
      // Clean phone number before sending
      const emailData = {
        ...data,
        phone: cleanPhoneNumber(data.phone)
      }
      
      await sendEmail(emailData)
      
      setSubmitStatus('success')
      setSubmitMessage(t('contact.form.success'))
      reset()
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 5000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setSubmitMessage(t('contact.form.error'))
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 5000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-xl p-8"
    >
      <h3 className="text-2xl font-bold text-secondary mb-6">{t('common.getQuote')}</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label={t('contact.form.name.label')}
          placeholder={t('contact.form.name.placeholder')}
          error={errors.name?.message}
          {...register('name', { 
            required: t('contact.form.name.required'),
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
        />
        
        <Input
          label={t('contact.form.email.label')}
          type="email"
          placeholder={t('contact.form.email.placeholder')}
          error={errors.email?.message}
          {...register('email', { 
            required: t('contact.form.email.required'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('contact.form.email.invalid')
            }
          })}
        />
        
        <Controller
          name="phone"
          control={control}
          rules={{
            required: t('contact.form.phone.required'),
            validate: (value) => isValidPhoneNumber(value) || t('contact.form.phone.invalid')
          }}
          render={({ field: { onChange, value, ...field } }) => (
            <Input
              label={t('contact.form.phone.label')}
              type="tel"
              placeholder={t('contact.form.phone.placeholder')}
              error={errors.phone?.message}
              value={formatPhoneNumber(value || '')}
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value)
                onChange(formatted)
              }}
              {...field}
            />
          )}
        />
        
        <TextArea
          label={t('contact.form.message.label')}
          placeholder={t('contact.form.message.placeholder')}
          rows={4}
          error={errors.message?.message}
          {...register('message', { 
            required: t('contact.form.message.required'),
            minLength: { value: 10, message: 'Message must be at least 10 characters' }
          })}
        />
        
        {/* Status Messages */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center space-x-2 p-3 rounded-lg ${
              submitStatus2 === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {submitStatus2 === 'success' ? (
              <CheckCircle size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            <span className="text-sm">{submitMessage}</span>
          </motion.div>
        )}
        
        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting}
          className="flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>{t('contact.form.submitting')}</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>{t('contact.form.submit')}</span>
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}

export default ContactForm