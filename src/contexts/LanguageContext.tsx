import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Language } from '../i18n/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (path: string) => any
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage')
    return (savedLang === 'es' ? 'es' : 'en') as Language
  })

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language)
    // Update document language attribute for accessibility
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'en' ? 'es' : 'en')
  }

  // Translation helper function that supports nested paths
  const t = (path: string): any => {
    const keys = path.split('.')
    let current: any = translations[language]
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation missing for path: ${path} in language: ${language}`)
        // Fallback to English if translation is missing
        current = translations.en
        for (const fallbackKey of keys) {
          if (current[fallbackKey] !== undefined) {
            current = current[fallbackKey]
          } else {
            return path // Return the path itself if translation is completely missing
          }
        }
        return current
      }
      current = current[key]
    }
    
    return current
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    toggleLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Helper hook to get just the translation function
export const useTranslation = () => {
  const { t } = useLanguage()
  return t
}