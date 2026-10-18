import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-charcoal font-sans antialiased selection:bg-secondary/40 selection:text-charcoal">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
