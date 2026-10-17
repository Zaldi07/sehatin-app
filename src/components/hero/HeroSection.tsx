import React from 'react'
import { ArrowUpRight, Sparkles, MapPin } from 'lucide-react'
import { heroData, statsData } from '../../data/companyData'

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-6 sm:pt-8 md:pt-10 pb-14 sm:pb-18 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-accent/60 border border-accent text-charcoal">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
            <span>{heroData.tagline}</span>
          </div>
          <span className="hidden sm:inline-block w-6 md:w-8 h-[1px] bg-secondary" />
          <span className="hidden sm:inline-block text-[11px] sm:text-xs font-medium text-muted">
            Est. 2017 · Studio Bandung
          </span>
        </div>

        <div className="max-w-5xl mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-charcoal font-display leading-[1.1] sm:leading-[1.08]">
            Creating Meaningful Spaces That{' '}
            <span className="relative inline-block text-primary">
              Tell Your Story
              <svg
                className="absolute left-0 -bottom-1 w-full h-1.5 sm:h-2 text-secondary"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 4 Q 50 8, 100 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
            </span>{' '}
            With Style
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-end mb-8 sm:mb-10 md:mb-14 pb-2 sm:pb-4">
          <div className="md:col-span-8 lg:col-span-9">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted font-normal leading-relaxed max-w-2xl">
              We blend aesthetics, function, and soul into timeless interiors —
              designed to elevate how you live, feel, and connect with your space.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-3 flex md:justify-end">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base font-semibold text-charcoal hover:text-primary transition-colors"
            >
              <span>View Our Work</span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-charcoal/20 group-hover:border-primary group-hover:bg-primary group-hover:text-surface flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </div>
        </div>

        <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden border border-charcoal/10 shadow-2xl bg-charcoal/5 group">
          <img
            src={heroData.heroImage}
            alt="Aurea Studio Modern Interior Design"
            className="w-full h-[280px] sm:h-[400px] md:h-[520px] lg:h-[620px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-10">
            <div className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 pr-3.5 sm:pr-5 rounded-xl sm:rounded-2xl bg-surface/95 backdrop-blur-md border border-white/40 shadow-lg">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center text-surface shrink-0">
                <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-bold text-charcoal">
                  {heroData.floatingBadge.label}
                </span>
                <span className="text-[10px] sm:text-xs text-muted font-medium">
                  {heroData.floatingBadge.subtitle} · {heroData.floatingBadge.location}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span>Project 01 / Spatial Craft</span>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 md:mt-18 pt-8 sm:pt-10 md:pt-14 border-t border-charcoal/10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal font-display tracking-tight group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted mt-1 sm:mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
