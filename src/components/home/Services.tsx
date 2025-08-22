import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Package, CheckCircle, XCircle, Truck, Home, Building, Recycle } from 'lucide-react'
import Section from '../layout/Section'
import Card from '../ui/Card'
import { SERVICES } from '../../utils/constants'

const Services = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'containers' | 'acceptable' | 'prohibited'>('services')

  const serviceIcons = {
    'Waste Removal': Truck,
    'Freight Hauler': Package,
    'Residential Projects': Home,
    'Commercial Projects': Building
  }

  return (
    <Section id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive waste management solutions for all your needs
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          { key: 'services', label: 'Rental Services' },
          { key: 'containers', label: 'Container Sizes' },
          { key: 'acceptable', label: 'Acceptable Waste' },
          { key: 'prohibited', label: 'Prohibited Items' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === tab.key
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Rental Services */}
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.rental.map((service, index) => {
                const Icon = serviceIcons[service as keyof typeof serviceIcons] || Truck
                return (
                  <Card key={service} animate>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 rounded-full mb-4">
                        <Icon className="text-primary" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {service}
                      </h3>
                      <p className="text-gray-600">
                        Professional {service.toLowerCase()} services with competitive pricing
                      </p>
                    </div>
                  </Card>
                )
              })}
            </div>
          )}

          {/* Container Sizes */}
          {activeTab === 'containers' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.containerSizes.map((container) => (
                <Card key={container.size} animate>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {container.size}
                    </div>
                    <div className="text-lg text-gray-600 mb-4">
                      Cubic Yards
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <Package size={16} />
                      <span>Roll-off Container</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Acceptable Waste */}
          {activeTab === 'acceptable' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {SERVICES.acceptableWaste.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Prohibited Items */}
          {activeTab === 'prohibited' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {SERVICES.nonAcceptableWaste.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-3 bg-red-50 p-4 rounded-lg"
                >
                  <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="md:col-span-2 mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200"
              >
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> For disposal of prohibited items, please contact your local waste management 
                  facility or hazardous waste disposal center for proper handling instructions.
                </p>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}

export default Services