import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'
import { COMPANY_INFO } from '../../utils/constants'

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
        <p className="text-gray-600 mb-8">
          Get in touch with us for all your waste management needs. 
          We're here to help with fast, reliable service.
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
            <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary hover:underline block">
              Main: {COMPANY_INFO.phone}
            </a>
            <a href={`tel:${COMPANY_INFO.officePhone}`} className="text-primary hover:underline block">
              Office: {COMPANY_INFO.officePhone}
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
            <h4 className="font-semibold text-gray-800 mb-1">Office Location</h4>
            <a 
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {COMPANY_INFO.address.street}<br />
              {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
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
            <h4 className="font-semibold text-gray-800 mb-1">Hours of Operation</h4>
            <div className="text-gray-600 space-y-1">
              <div className="flex justify-between max-w-xs">
                <span>Monday - Friday:</span>
                <span className="font-medium">{COMPANY_INFO.hours.weekdays}</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>Saturday:</span>
                <span className="font-medium">{COMPANY_INFO.hours.saturday}</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>Sunday:</span>
                <span className="font-medium">{COMPANY_INFO.hours.sunday}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Embed */}
      <div className="mt-8">
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <a
            href={COMPANY_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfo