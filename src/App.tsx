import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Services from './components/home/Services'
import Contact from './components/home/Contact'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App