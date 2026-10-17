import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navItems } from '../../data/companyData'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['#hero', '#about', '#services', '#portfolio', '#contact']
      const scrollPos = window.scrollY + 120

      for (const sectionId of sections) {
        const el = document.querySelector(sectionId)
        if (el) {
          const top = (el as HTMLElement).offsetTop
          const height = (el as HTMLElement).offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault()
    setIsOpen(false)
    setActiveSection(path)
    const target = document.querySelector(path)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-charcoal/8 shadow-xs'
          : 'bg-canvas/80 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-18 sm:h-20">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-hidden"
            aria-label="Aurea Studio Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary flex items-center justify-center text-surface font-bold text-base sm:text-lg shadow-sm transition-transform duration-300 group-hover:scale-105">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-charcoal font-display">
                Aurea Studio
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted font-medium -mt-1">
                Architecture & Interior
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.path
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`relative px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-primary font-semibold bg-primary/10'
                      : 'text-muted hover:text-charcoal hover:bg-charcoal/5'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    )}
                  </span>
                </a>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 bg-surface border border-charcoal/15 text-charcoal hover:border-primary hover:bg-primary hover:text-surface shadow-xs hover:shadow-md"
            >
              <span>Let's Talk</span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary/30 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 sm:p-2.5 rounded-xl border border-charcoal/10 text-charcoal hover:bg-charcoal/5 transition-colors focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-charcoal/8 bg-canvas ${
          isOpen ? 'max-h-96 opacity-100 py-3 sm:py-4 px-4 sm:px-6' : 'max-h-0 opacity-0 py-0 px-4 sm:px-6'
        }`}
      >
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.path
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-charcoal hover:bg-charcoal/5'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40" />
              </a>
            )
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-primary text-surface shadow-sm hover:bg-primary-dark transition-colors"
            >
              <span>Konsultasi Proyek</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
