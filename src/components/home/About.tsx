import { motion } from 'framer-motion'
import { Award, Users, Clock, Truck } from 'lucide-react'
import Section from '../layout/Section'
import { useTranslation } from '../../contexts/LanguageContext'

const About = () => {
  const t = useTranslation()
  
  const features = [
    {
      icon: Award,
      title: t('about.features.years.title'),
      description: t('about.features.years.description')
    },
    {
      icon: Users,
      title: t('about.features.family.title'),
      description: t('about.features.family.description')
    },
    {
      icon: Clock,
      title: t('about.features.response.title'),
      description: t('about.features.response.description')
    },
    {
      icon: Truck,
      title: t('about.features.service.title'),
      description: t('about.features.service.description')
    }
  ]

  return (
    <Section id="about" className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 rounded-full mb-4">
                <feature.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About