import { motion } from 'framer-motion'
import { Award, Users, Clock, Truck } from 'lucide-react'
import Section from '../layout/Section'
import { COMPANY_INFO } from '../../utils/constants'

const About = () => {
  const features = [
    {
      icon: Award,
      title: `${COMPANY_INFO.yearsInBusiness}+ Years`,
      description: 'Of trusted service in Houston'
    },
    {
      icon: Users,
      title: 'Family Owned',
      description: 'Local business you can trust'
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Same-day service available'
    },
    {
      icon: Truck,
      title: 'Full Service',
      description: 'Complete waste management solutions'
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
            About Armadillo Waste
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Armadillo Waste is an independent waste management company, servicing Houston 
            and surrounding cities for {COMPANY_INFO.yearsInBusiness} years & counting. 
            We provide comprehensive solutions for full waste removal.
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