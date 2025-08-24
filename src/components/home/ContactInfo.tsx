import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'
import { useTranslation } from '../../contexts/LanguageContext'

const ContactInfo = () => {
  const t = useTranslation()
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-bold text-secondary mb-6">{t('contact.info.title')}</h3>
        <p className="text-gray-600 mb-8">
          {t('contact.infoDescription')}
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {/* Phone Numbers */}
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-start space-x-4"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
            <Phone className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">{t('contact.info.phone')}</h4>
            <a href={`tel:${t('company.phone')}`} className="text-primary hover:underline block">
              {t('contact.info.phone')}: {t('company.phone')}
            </a>
            <a href={`tel:${t('company.officePhone')}`} className="text-primary hover:underline block">
              {t('contact.info.officePhone')}: {t('company.officePhone')}
            </a>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-start space-x-4"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
            <MapPin className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">{t('contact.info.address')}</h4>
            <a 
              href="https://maps.google.com/?q=11920+Mandy+Houston+TX+77050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {t('company.address.street')}<br />
              {t('company.address.city')}, {t('company.address.state')} {t('company.address.zip')}
            </a>
          </div>
        </motion.div>

        {/* Hours */}
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-start space-x-4"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
            <Clock className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">{t('contact.info.hours')}</h4>
            <div className="text-gray-600 space-y-1">
              <div>
                <span>{t('company.hours.weekdaysLabel')}: </span>
                <span className="font-medium">{t('company.hours.weekdays')}</span>
              </div>
              <div>
                <span>{t('company.hours.saturdayLabel')}: </span>
                <span className="font-medium">{t('company.hours.saturday')}</span>
              </div>
              <div>
                <span>{t('company.hours.sundayLabel')}: </span>
                <span className="font-medium">{t('company.hours.sunday')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Embed */}
      <div className="mt-8">
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <a
            href="https://maps.google.com/?q=11920+Mandy+Houston+TX+77050"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t('common.viewOnMap')}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfo