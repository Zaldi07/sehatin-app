import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { companyOverview } from '../../data/companyData'

interface RevealWordProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  className?: string
}

// komponen kata individual dengan efek reveal pas di-scroll
const RevealWord: React.FC<RevealWordProps> = ({
  children,
  progress,
  range,
  className = '',
}) => {
  const opacity = useTransform(progress, range, [0.18, 1])
  const y = useTransform(progress, range, [3, 0])

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block mr-[0.26em] will-change-transform ${className}`}
    >
      {children}
    </motion.span>
  )
}

// bagian tentang kami dengan efek sticky dan text reveal saat halaman di-scroll
export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const headingPart1 = ["We", "don't", "just", "design", "spaces", "—"]
  const headingPart2 = ["we", "craft", "how", "they", "feel."]
  const totalHeadingWords = headingPart1.length + headingPart2.length

  const historyWords = companyOverview.history.split(' ')

  // hitung rentang animasi scroll untuk kata di judul
  const getHeadingRange = (index: number): [number, number] => {
    const start = 0.04 + (index / totalHeadingWords) * 0.22
    const end = Math.min(0.30, start + 0.05)
    return [start, end]
  }

  // hitung rentang animasi scroll untuk kata di paragraf
  const getParagraphRange = (index: number): [number, number] => {
    const start = 0.24 + (index / historyWords.length) * 0.52
    const end = Math.min(0.80, start + 0.04)
    return [start, end]
  }

  const buttonOpacity = useTransform(smoothProgress, [0.76, 0.86], [0, 1])
  const buttonY = useTransform(smoothProgress, [0.76, 0.86], [18, 0])
  const buttonPointerEvents = useTransform(smoothProgress, (v) => (v >= 0.76 ? 'auto' : 'none'))

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full h-[220vh] sm:h-[240vh] bg-canvas"
    >
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-secondary/20 text-charcoal border border-secondary/50 mb-4 sm:mb-6 shadow-xs"
          >
          
            <span>About Us</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-charcoal tracking-tight leading-[1.18] sm:leading-[1.14] mb-5 sm:mb-7">
            {headingPart1.map((word, i) => (
              <RevealWord
                key={`h1-${i}`}
                progress={smoothProgress}
                range={getHeadingRange(i)}
              >
                {word}
              </RevealWord>
            ))}{' '}
            {headingPart2.map((word, i) => {
              const fullIndex = headingPart1.length + i
              return (
                <RevealWord
                  key={`h2-${i}`}
                  progress={smoothProgress}
                  range={getHeadingRange(fullIndex)}
                  className="text-primary italic font-serif"
                >
                  {word}
                </RevealWord>
              )
            })}
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal leading-relaxed max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto font-normal mb-8 sm:mb-10 text-center">
            {historyWords.map((word, i) => (
              <RevealWord
                key={`p-${i}`}
                progress={smoothProgress}
                range={getParagraphRange(i)}
              >
                {word}
              </RevealWord>
            ))}
          </p>

          <motion.div
            style={{
              opacity: buttonOpacity,
              y: buttonY,
              pointerEvents: buttonPointerEvents,
            }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-charcoal text-canvas hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Eksplorasi Portofolio Kami</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal/5 transition-all duration-300"
            >
              <span>Konsultasi Proyek</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
