import { Phone, MapPin, Clock, ChevronRight } from 'lucide-react'
import { useTranslation } from '../../contexts/LanguageContext'
import logo from '../../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const t = useTranslation()

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info - */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Armadillo Waste" className="h-10 w-auto filter brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold">{t('company.name')}</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {[
                { label: t('nav.home'), href: 'home' },
                { label: t('nav.about'), href: 'about' },
                { label: t('nav.services'), href: 'services' },
                { label: t('nav.contact'), href: 'contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2">
              {t('services.rental.items').map((service: string) => (
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
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="text-primary mt-1" />
                <div>
                  <a href={`tel:${t('company.phone')}`} className="text-gray-300 hover:text-primary transition-colors">
                    {t('company.phone')}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-1" />
                <a
                  href="https://maps.google.com/?q=11920+Mandy+Houston+TX+77050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t('company.address.street')}<br />
                  {t('company.address.city')}, {t('company.address.state')} {t('company.address.zip')}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={16} className="text-primary mt-1" />
                <div className="text-gray-300 text-sm">
                  <div>{t('company.hours.weekdaysLabel')}: {t('company.hours.weekdays')}</div>
                  <div>{t('company.hours.saturdayLabel')}: {t('company.hours.saturday')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {t('company.name')}. {t('footer.rights')}
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