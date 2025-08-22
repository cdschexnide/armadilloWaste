import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY_INFO } from '../../utils/constants'
import logo from '../../assets/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Armadillo Waste" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-primary">Armadillo Waste</h1>
              <p className="text-xs text-gray-600">Inc.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              <Phone size={18} />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center space-x-2 text-primary font-semibold py-2"
                >
                  <Phone size={18} />
                  <span>Call: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header