import { Phone, MapPin, Clock, ChevronRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import { COMPANY_INFO, SERVICES } from '../../utils/constants'
import logo from '../../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Armadillo Waste" className="h-10 w-auto filter brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold">Armadillo Waste</h3>
                <p className="text-xs text-gray-400">Inc.</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner for waste management solutions in Houston 
              for over {COMPANY_INFO.yearsInBusiness} years.
            </p>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {SERVICES.rental.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="text-primary mt-1" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-300 hover:text-primary transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-1" />
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {COMPANY_INFO.address.street}<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={16} className="text-primary mt-1" />
                <div className="text-gray-300 text-sm">
                  <div>M-F: {COMPANY_INFO.hours.weekdays}</div>
                  <div>Sat: {COMPANY_INFO.hours.saturday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Armadillo Waste Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer