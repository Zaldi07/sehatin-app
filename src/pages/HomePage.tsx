import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import ServicesSection from '../components/sections/ServicesSection'
import ContactSection from '../components/sections/ContactSection'

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}

export default HomePage
