import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { heroData } from '../../data/companyData'

// section utama dengan background video dan judul animasi
export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }

    let ticking = false
    // atur posisi scroll layar buat efek parallax
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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length)
    }, 3200)

    return () => clearInterval(intervalId)
  }, [rotatingPhrases.length])

  const headlineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-[125%] top-[-12%] pointer-events-none will-change-transform"
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

      <div className="absolute inset-0 bg-charcoal/45 sm:bg-charcoal/50 backdrop-blur-[0.5px]" />

      <div className="absolute inset-x-0 top-0 h-36 sm:h-48 hero-scrim-top pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 md:h-56 lg:h-64 hero-scrim-bottom pointer-events-none z-10" />

      <div
        className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center py-24 sm:py-32 will-change-transform"
        style={{
          transform: `translate3d(0, ${textTranslate}px, 0)`,
          opacity: textOpacity,
        }}
      >
        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.15] sm:leading-[1.12] drop-shadow-md"
        >
          <motion.span variants={wordVariants} className="inline-block mr-2 sm:mr-3.5">
            Creating
          </motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-2 sm:mr-3.5">
            Meaningful
          </motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-2 sm:mr-3.5">
            Spaces
          </motion.span>
          <motion.span variants={wordVariants} className="inline-block mr-2 sm:mr-3.5">
            That
          </motion.span>{' '}
          <motion.span
            variants={wordVariants}
            className="relative inline-grid grid-cols-1 grid-rows-1 items-center justify-items-center text-secondary mr-2 sm:mr-3.5 align-baseline"
          >
            {rotatingPhrases.map((phrase) => (
              <span
                key={phrase}
                aria-hidden="true"
                className="invisible pointer-events-none select-none col-start-1 row-start-1 whitespace-nowrap opacity-0"
              >
                {phrase}
              </span>
            ))}

            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingPhrases[phraseIndex]}
                initial={{ opacity: 0, y: -24, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -24, filter: 'blur(6px)' }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative col-start-1 row-start-1 whitespace-nowrap inline-block text-center"
              >
                {rotatingPhrases[phraseIndex]}
                <svg
                  className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-2 sm:h-2.5 text-amber-300 pointer-events-none"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    key={phraseIndex}
                    d="M0 4 Q 50 8, 100 4"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="transparent"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                  />
                </svg>
              </motion.span>
            </AnimatePresence>
          </motion.span>{' '}
          <motion.span variants={wordVariants} className="inline-block mr-2 sm:mr-3.5">
            With
          </motion.span>
          <motion.span variants={wordVariants} className="inline-block">
            Style
          </motion.span>
        </motion.h1>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer transition-opacity duration-300 group"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <span className="text-[10px] tracking-widest uppercase font-medium text-white/80 group-hover:text-amber-300 transition-colors">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-white/40 flex items-start justify-center p-1 bg-black/20 backdrop-blur-xs group-hover:border-amber-300/60 transition-colors">
          <span className="w-1 h-2 rounded-full bg-amber-300 animate-bounce" />
        </div>
      </a>
    </section>
  )
}

export default HeroSection
