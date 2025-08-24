import Section from '../layout/Section'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import { useTranslation } from '../../contexts/LanguageContext'

const Contact = () => {
  const t = useTranslation()
  return (
    <Section id="contact" className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </Section>
  )
}

export default Contact