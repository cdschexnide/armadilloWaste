import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

interface LanguageToggleProps {
  compact?: boolean
}

export default function LanguageToggle({ compact = false }: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage()

  if (compact) {
    return (
      <motion.button
        onClick={toggleLanguage}
        className="relative inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow min-w-[50px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
      >
        <div className="relative flex items-center gap-1">
          <motion.div
            className="absolute inset-0 bg-primary rounded-md"
            initial={false}
            animate={{
              x: language === 'en' ? 0 : '100%',
              width: '50%'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <span
            className={`relative z-10 px-1.5 py-0.5 text-xs font-medium transition-colors ${
              language === 'en' ? 'text-white' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            EN
          </span>
          <span
            className={`relative z-10 px-1.5 py-0.5 text-xs font-medium transition-colors ${
              language === 'es' ? 'text-white' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            ES
          </span>
        </div>
      </motion.button>
    )
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
    >
      <div className="relative flex items-center gap-2">
        <motion.div
          className="absolute inset-0 bg-primary rounded-full"
          initial={false}
          animate={{
            x: language === 'en' ? 0 : '100%',
            width: '50%'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
        <span
          className={`relative z-10 px-2 py-0.5 text-sm font-medium transition-colors ${
            language === 'en' ? 'text-white' : 'text-gray-700 dark:text-gray-300'
          }`}
        >
          EN
        </span>
        <span
          className={`relative z-10 px-2 py-0.5 text-sm font-medium transition-colors ${
            language === 'es' ? 'text-white' : 'text-gray-700 dark:text-gray-300'
          }`}
        >
          ES
        </span>
      </div>
    </motion.button>
  )
}