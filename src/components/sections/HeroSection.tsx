import React, { useRef, useEffect, useState } from 'react'
import { heroData } from '../../data/companyData'

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback handled gracefully
      })
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Parallax calculations for depth and layered motion
  const videoTranslate = scrollY * 0.4
  const videoScale = 1.08 + Math.min(scrollY * 0.0002, 0.08)
  const textTranslate = scrollY * 0.22
  const textOpacity = Math.max(0, 1 - scrollY / 550)
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollY / 140)

  const rotatingPhrases = [
    'Tell Your Story',
    'Elevate Your Life',
    'Inspire Your Soul',
  ]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isPhraseVisible, setIsPhraseVisible] = useState(true)

  useEffect(() => {
    let timeoutId: number
    const intervalId = window.setInterval(() => {
      setIsPhraseVisible(false)
      timeoutId = window.setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length)
        setIsPhraseVisible(true)
      }, 400)
    }, 3200)

    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Video Layer */}
      <div
        className="absolute inset-0 w-full h-[125%] -top-[12%] pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${videoTranslate}px, 0) scale(${videoScale})`,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={heroData.heroImage}
          className="w-full h-full object-cover object-center"
        >
          <source src={heroData.heroVideo || '/footage-interior.mp4'} type="video/mp4" />
          <source src="/footage-interio.mp4" type="video/mp4" />
          <img
            src={heroData.heroImage}
            alt="Aurea Studio Modern Interior"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </video>
      </div>

      {/* Balanced cinematic dark overlay */}
      <div className="absolute inset-0 bg-charcoal/45 sm:bg-charcoal/50 backdrop-blur-[0.5px]" />

      {/* Top smooth scrim gradient for transparent navbar legibility */}
      <div className="absolute inset-x-0 top-0 h-36 sm:h-48 hero-scrim-top pointer-events-none" />

      {/* Bottom ultra-smooth scrim gradient transition */}
      <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 md:h-80 lg:h-[400px] hero-scrim-bottom pointer-events-none z-10" />

      {/* Foreground Hero Content with Parallax and Fade */}
      <div
        className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center py-24 sm:py-32 will-change-transform"
        style={{
          transform: `translate3d(0, ${textTranslate}px, 0)`,
          opacity: textOpacity,
        }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.15] sm:leading-[1.12] drop-shadow-md">
          Creating Meaningful Spaces That{' '}
          <span className="relative inline-block text-amber-200">
            <span
              className={`inline-block transition-all duration-400 ease-out transform ${
                isPhraseVisible
                  ? 'opacity-100 translate-y-0 filter-none scale-100'
                  : 'opacity-0 -translate-y-3 filter blur-[2px] scale-95'
              }`}
            >
              {rotatingPhrases[phraseIndex]}
            </span>
            <svg
              className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-2 sm:h-2.5 text-amber-300 pointer-events-none transition-all duration-500"
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

      {/* Scroll to Explore Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <span className="text-[10px] tracking-widest uppercase font-medium text-white/70">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1 bg-black/10 backdrop-blur-xs">
          <span className="w-1 h-2 rounded-full bg-amber-300 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
