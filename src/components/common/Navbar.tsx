import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/companyData'
import brandLogoDark from '../../../public/brandLogoDark.svg'
import brandLogoLight from '../../../public/brandLogoLight.svg'

// navigasi header fixed di atas
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'
  const isDarkHeader = isHomePage && !scrolled

  useEffect(() => {
    // atur background navbar waktu halaman di-scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // scroll ke atas jika navigasi ke rute yang sama
  const handleNavClick = (path: string) => {
    setIsOpen(false)
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isItemActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkHeader
          ? 'bg-transparent border-b border-transparent'
          : 'bg-surface/90 backdrop-blur-md border-b border-charcoal/8 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 sm:gap-2.5 focus:outline-hidden group z-10"
            aria-label="Hasuna Studio"
          >
            <img
              src={isDarkHeader ? brandLogoLight : brandLogoDark}
              alt="Hasuna Studio Logo"
              className="w-12 transition-all duration-300"
            />
            <span
              className={`text-base sm:text-lg font-medium tracking-tight font-display transition-colors duration-300 ${
                isDarkHeader ? 'text-white' : 'text-charcoal'
              }`}
            >
              Hasuna <span className="text-primary">Studio</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 sm:gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const active = isItemActive(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-xs sm:text-[13px] lg:text-sm transition-colors duration-300 focus:outline-hidden py-1 ${
                    active
                      ? 'text-primary font-semibold'
                      : isDarkHeader
                      ? 'text-white/80 hover:text-white font-normal'
                      : 'text-charcoal/70 hover:text-charcoal font-normal'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center z-10">
            <Link
              to="/contact"
              onClick={() => handleNavClick('/contact')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-normal transition-all duration-300 ${
                isDarkHeader
                  ? 'border border-white/40 text-white bg-white/10 backdrop-blur-xs hover:bg-white hover:text-charcoal'
                  : 'border border-charcoal/30 text-charcoal hover:border-transparent hover:bg-primary hover:text-surface'
              }`}
            >
              Let's Talk
            </Link>
          </div>

          <div className="flex md:hidden z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`p-2 rounded-full transition-colors focus:outline-hidden ${
                isDarkHeader
                  ? 'border border-white/30 text-white bg-black/20 hover:bg-white/10'
                  : 'border border-charcoal/15 text-charcoal hover:bg-charcoal/5'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface/98 backdrop-blur-md border-b border-charcoal/8 shadow-lg ${
          isOpen ? 'max-h-96 opacity-100 py-4 px-5 sm:px-8' : 'max-h-0 opacity-0 py-0 px-5 sm:px-8'
        }`}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => {
            const active = isItemActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-xs sm:text-sm py-2 border-b border-charcoal/5 transition-colors ${
                  active
                    ? 'text-primary font-semibold'
                    : 'text-charcoal/80 hover:text-charcoal font-normal'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <div className="pt-3 pb-1">
            <Link
              to="/contact"
              onClick={() => handleNavClick('/contact')}
              className="block text-center w-full py-2.5 rounded-full border border-charcoal/30 text-charcoal hover:bg-primary hover:border-transparent hover:text-surface text-xs font-normal transition-colors"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
