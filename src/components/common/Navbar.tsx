import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/companyData'
import brandLogoDark from '../../../public/brandLogoDark.svg'
import brandLogoLight from '../../../public/brandLogoLight.svg'

// navigasi header fixed di atas
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // atur background navbar waktu halaman di-scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // scroll halus ke target section pas menu diklik
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(path)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-surface/90 backdrop-blur-md border-b border-charcoal/8 shadow-xs'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 sm:gap-2.5 focus:outline-hidden group z-10"
            aria-label="Aurea Studio"
          >

            {
              scrolled ? <img src={brandLogoDark} className='w-12' /> : <img src={brandLogoLight} className='w-12' />
            }
            {/* <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white'
                }`}
            >
              <path d="M4 20V11a8 8 0 0 1 16 0v9H4z" />
              <path d="M9 20a3 3 0 0 1 6 0" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="9.5" y1="17" x2="7.5" y2="13.5" />
              <line x1="14.5" y1="17" x2="16.5" y2="13.5" />
            </svg> */}
            <span
              className={`text-base sm:text-lg font-medium tracking-tight font-display transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white'
                }`}
            >
              Hasuna <span className='text-primary'>Studio</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 sm:gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-xs sm:text-[13px] lg:text-sm font-normal transition-colors duration-300 focus:outline-hidden py-1 ${scrolled
                  ? 'text-charcoal/70 hover:text-charcoal'
                  : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center z-10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-4 border-primary sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-normal transition-all duration-300 ${scrolled
                ? 'border border-charcoal/30 text-charcoal hover:border-none hover:bg-primary hover:text-surface'
                : 'border border-white/40 text-white bg-white/10 backdrop-blur-xs hover:bg-white hover:text-charcoal'
                }`}
            >
              Let's Talk
            </a>
          </div>

          <div className="flex md:hidden z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`p-2 rounded-full transition-colors focus:outline-hidden ${scrolled
                ? 'border border-charcoal/15 text-charcoal hover:bg-charcoal/5'
                : 'border border-white/30 text-white bg-black/20 hover:bg-white/10'
                }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface/98 backdrop-blur-md border-b border-charcoal/8 shadow-lg ${isOpen ? 'max-h-96 opacity-100 py-4 px-5 sm:px-8' : 'max-h-0 opacity-0 py-0 px-5 sm:px-8'
          }`}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className="text-xs sm:text-sm font-normal text-charcoal/80 hover:text-charcoal py-2 border-b border-charcoal/5"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 pb-1">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block text-center w-full py-2.5 rounded-full border border-charcoal/30 text-charcoal hover:bg-primary hover:border-none hover:text-surface text-xs font-normal transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
