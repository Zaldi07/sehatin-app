import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { companyOverview, navItems } from '../../data/companyData'
import brandLogoLight from '../../../public/brandLogoLight.svg'
// footer halaman berisi informasi kontak dan navigasi
export const Footer: React.FC = () => {

  return (
    <footer className="bg-primary text-charcoal pt-12 sm:pt-16 pb-8 sm:pb-12 mt-14 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary flex items-center justify-center text-surface font-bold text-base sm:text-lg">
                 <img src={brandLogoLight} alt="hasuna logo studio" className='w-12' />
                </div>
                <span className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
                  {companyOverview.name}
                </span>
              </div>
              <p className="text-white text-xs sm:text-sm max-w-sm leading-relaxed mb-5 sm:mb-6">
                Menciptakan ruang berjiwa yang menggabungkan keindahan arsitektural kontemporer, kenyamanan ergonomis, dan kehangatan material alami.
              </p>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/50 flex items-center justify-center text-white/80 hover:text-white hover:border-primary hover:bg-primary transition-all"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/50 flex items-center justify-center text-white/80 hover:text-white hover:border-primary hover:bg-primary transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-white font-semibold mb-4 sm:mb-6">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-xs sm:text-sm text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-white font-semibold mb-4 sm:mb-6">
              Studio & Kontak
            </h4>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/70">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0 mt-0.5" />
                <span>{companyOverview.address}</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
                <a
                  href={`mailto:${companyOverview.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyOverview.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
                <a
                  href={`tel:${companyOverview.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {companyOverview.phone}
                </a>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white transition-colors"
              >
                <span>Mulai Konsultasi Desain</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center text-white justify-between text-[11px] sm:text-base text-whitegap-3 sm:gap-4 text-center sm:text-left">

          <p>&copy; {new Date().getFullYear()} {companyOverview.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 sm:gap-2">
            <span>Crafted with</span>
            <Heart/>
            <span>in Bandung, Indonesia</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
