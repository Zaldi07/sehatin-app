import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, type Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../../data/companyData'

// komponen utama portofolio dengan efek scroll membesar dan slider proyek
export const PortfolioSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [hasExpanded, setHasExpanded] = useState(false)

  const currentProject = portfolioData[currentIndex]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const cardScale = useTransform(smoothProgress, [0, 0.36], [0.86, 1])
  const cardRadius = useTransform(smoothProgress, [0, 0.36], [28, 0])
  const cardBorderColor = useTransform(
    smoothProgress,
    [0, 0.36],
    ['rgba(255, 255, 255, 0.12)', 'rgba(255, 255, 255, 0)']
  )
  const cardShadow = useTransform(
    smoothProgress,
    [0, 0.36],
    ['0 25px 50px -12px rgba(0, 0, 0, 0.55)', '0 0 0 0 rgba(0, 0, 0, 0)']
  )

  const fullUiOpacity = useTransform(smoothProgress, [0.34, 0.46], [0, 1])
  const fullUiY = useTransform(smoothProgress, [0.34, 0.46], [20, 0])
  const bottomUiY = useTransform(smoothProgress, [0.34, 0.46], [20, 0])
  const uiPointerEvents = useTransform(smoothProgress, (v) => (v >= 0.34 ? 'auto' : 'none'))

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (v) => {
      const expanded = v >= 0.34
      setHasExpanded((prev) => (prev !== expanded ? expanded : prev))
    })
    return () => unsubscribe()
  }, [smoothProgress])

  // atur perpindahan slide portofolio maju atau mundur
  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection
      if (nextIndex < 0) nextIndex = portfolioData.length - 1
      if (nextIndex >= portfolioData.length) nextIndex = 0
      return nextIndex
    })
  }, [])

  // preload gambar slide berikutnya biar transisi lancar
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % portfolioData.length
    const prevIdx = (currentIndex - 1 + portfolioData.length) % portfolioData.length
    const img1 = new Image()
    img1.src = portfolioData[nextIdx].image
    const img2 = new Image()
    img2.src = portfolioData[prevIdx].image
  }, [currentIndex])

  useEffect(() => {
    if (!isAutoPlay || !hasExpanded) return
    const interval = setInterval(() => {
      paginate(1)
    }, 6000)
    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlay, hasExpanded, paginate])

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.03,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 240, damping: 28 },
        opacity: { duration: 0.45 },
        scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 240, damping: 28 },
        opacity: { duration: 0.35 },
      },
    }),
  }

  return (
    <section
      ref={containerRef}
      id="portfolio"
      className="relative w-full h-[220vh] sm:h-[240vh] bg-canvas"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="sticky top-0 w-full h-screen flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <motion.div
            style={{
              scale: cardScale,
              borderRadius: cardRadius,
              borderColor: cardBorderColor,
              boxShadow: cardShadow,
            }}
            className="relative w-full h-full overflow-hidden bg-charcoal will-change-transform flex items-center justify-center pointer-events-auto border"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag={hasExpanded ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x
                  if (swipe < -8000 || offset.x < -60) {
                    paginate(1)
                  } else if (swipe > 8000 || offset.x > 60) {
                    paginate(-1)
                  }
                }}
                className={`absolute inset-0 w-full h-full select-none ${
                  hasExpanded ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
                }`}
              >
                <motion.img
                  src={currentProject.image}
                  alt={currentProject.title}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6, ease: 'easeOut' }}
                  className="w-full h-full object-cover object-center pointer-events-none"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            <motion.div
              style={{
                opacity: fullUiOpacity,
                pointerEvents: uiPointerEvents,
              }}
              className="absolute inset-0 z-30 flex flex-col justify-between pointer-events-none"
            >
              <motion.div
                style={{ y: fullUiY }}
                className="w-full pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-8 lg:px-12 pointer-events-none"
              >
                <div className="max-w-7xl mx-auto flex items-start sm:items-end justify-between gap-3 sm:gap-6">
                  <div className="pointer-events-auto max-w-xl lg:max-w-2xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-display text-white tracking-tight drop-shadow-md leading-[1.2] sm:leading-[1.15]">
                      Ruang Bermakna yang{' '}
                      <span className="text-secondary italic font-serif">Telah Kami Wujudkan.</span>
                    </h2>
                  </div>

                  <div className="pointer-events-auto flex items-center gap-2 sm:gap-2.5 shrink-0 self-end sm:self-auto">
                    <button
                      type="button"
                      onClick={() => paginate(-1)}
                      aria-label="Previous Project"
                      className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-charcoal/70 hover:bg-primary text-white backdrop-blur-md border border-white/20 hover:border-primary flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => paginate(1)}
                      aria-label="Next Project"
                      className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-charcoal/70 hover:bg-primary text-white backdrop-blur-md border border-white/20 hover:border-primary flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ y: bottomUiY }}
                className="w-full pb-6 sm:pb-8 md:pb-10 lg:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 pointer-events-none"
              >
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 md:gap-6 pointer-events-auto">
                  <div className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-charcoal/80 backdrop-blur-md border border-white/15 text-white shadow-xl self-start sm:self-auto max-w-full">
                    <span className="text-[11px] sm:text-xs font-mono text-secondary font-bold tracking-wider shrink-0">
                      0{currentIndex + 1} / 0{portfolioData.length}
                    </span>
                    <span className="text-white/30 shrink-0">|</span>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide font-display truncate">
                      {currentProject.title}
                    </span>
                    {currentProject.location && (
                      <span className="hidden md:inline text-xs text-white/60 truncate">
                        — {currentProject.location}
                      </span>
                    )}
                  </div>

                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-primary hover:bg-primary-dark text-white shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95 self-start sm:self-auto shrink-0"
                  >
                    <span>See More Our Portfolio</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
