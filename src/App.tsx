import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Services from './components/home/Services'
import Contact from './components/home/Contact'

function App() {
  return (
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
  )
}

export default App