import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Maximize,
  Clock,
  User,
  CheckCircle2,
  Sparkles,
  Layers,
  X,
  Share2,
} from 'lucide-react'
import { portfolioData } from '../data/companyData'

export const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // Cari project berdasarkan id atau gunakan project pertama jika tidak ditemukan
  const projectIndex = portfolioData.findIndex((item) => item.id === id)
  const project = projectIndex !== -1 ? portfolioData[projectIndex] : portfolioData[0]

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image]

  // Navigasi ke project sebelumnya / selanjutnya
  const prevProject =
    projectIndex > 0 ? portfolioData[projectIndex - 1] : portfolioData[portfolioData.length - 1]
  const nextProject =
    projectIndex < portfolioData.length - 1 ? portfolioData[projectIndex + 1] : portfolioData[0]

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="min-h-screen bg-canvas text-charcoal pt-24 sm:pt-28 pb-16 sm:pb-24">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={galleryImages[activeImageIndex]}
              alt={project.title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Navigation Bar / Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-charcoal/8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted">
            <Link
              to="/"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              Beranda
            </Link>
            <span>/</span>
            <Link
              to="/portfolio"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              Portofolio
            </Link>
            <span>/</span>
            <span className="text-charcoal font-medium truncate max-w-[200px] sm:max-w-xs">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-charcoal/15 hover:border-charcoal/30 bg-surface text-charcoal hover:bg-charcoal/5 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Tautan Disalin!' : 'Bagikan'}</span>
            </button>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-white hover:bg-primary-dark transition-all duration-200 shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Semua Portofolio</span>
            </Link>
          </div>
        </div>

        {/* Project Header Info */}
        <div className="pt-8 sm:pt-12 pb-8 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20 mb-4 sm:mb-5">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year || '2025'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-charcoal leading-[1.14] mb-4 sm:mb-6">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed font-normal">
              {project.description}
            </p>
          </div>
        </div>

        {/* Main Hero Gallery Showcase */}
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <div className="relative aspect-16/10 sm:aspect-16/9 w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-charcoal/5 border border-charcoal/8 group shadow-sm">
            <img
              src={galleryImages[activeImageIndex]}
              alt={`${project.title} detail angle ${activeImageIndex + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2 rounded-full bg-surface/90 hover:bg-surface text-charcoal text-xs font-semibold backdrop-blur-md border border-charcoal/10 shadow-lg flex items-center gap-1.5 transition-all opacity-90 hover:opacity-100 cursor-pointer"
            >
              <Maximize className="w-3.5 h-3.5 text-primary" />
              <span>Perbesar Foto</span>
            </button>

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-1.5 rounded-full bg-charcoal/70 text-white text-[11px] sm:text-xs backdrop-blur-md">
              {activeImageIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={`thumb-${idx}`}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-primary ring-2 ring-primary/20 scale-[1.01]'
                      : 'border-transparent opacity-70 hover:opacity-100 hover:border-charcoal/20'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} thumb ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Metadata Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          <div className="bg-surface p-5 sm:p-6 rounded-2xl border border-charcoal/8 shadow-xs">
            <div className="flex items-center gap-2 text-muted mb-1.5 text-xs">
              <User className="w-3.5 h-3.5 text-primary" />
              <span className="uppercase tracking-wider font-semibold text-[10px] sm:text-[11px]">Klien</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-charcoal truncate">
              {project.client || 'Private Residence'}
            </p>
          </div>

          <div className="bg-surface p-5 sm:p-6 rounded-2xl border border-charcoal/8 shadow-xs">
            <div className="flex items-center gap-2 text-muted mb-1.5 text-xs">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="uppercase tracking-wider font-semibold text-[10px] sm:text-[11px]">Lokasi</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-charcoal truncate">
              {project.location || 'Bandung'}
            </p>
          </div>

          <div className="bg-surface p-5 sm:p-6 rounded-2xl border border-charcoal/8 shadow-xs">
            <div className="flex items-center gap-2 text-muted mb-1.5 text-xs">
              <Maximize className="w-3.5 h-3.5 text-primary" />
              <span className="uppercase tracking-wider font-semibold text-[10px] sm:text-[11px]">Luas Area</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-charcoal truncate">
              {project.area || '240 m²'}
            </p>
          </div>

          <div className="bg-surface p-5 sm:p-6 rounded-2xl border border-charcoal/8 shadow-xs">
            <div className="flex items-center gap-2 text-muted mb-1.5 text-xs">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span className="uppercase tracking-wider font-semibold text-[10px] sm:text-[11px]">Durasi</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-charcoal truncate">
              {project.duration || '5 Bulan'}
            </p>
          </div>
        </div>

        {/* In-Depth Architectural Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 sm:mb-24">
          {/* Main Story & Concept (8 cols) */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            {project.concept && (
              <section className="bg-surface p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-charcoal/8 shadow-xs">
                <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs tracking-wider uppercase mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Filosofi & Konsep Ruang</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-charcoal mb-4">
                  Harmoni Ketenangan dan Kejujuran Material
                </h3>
                <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal">
                  {project.concept}
                </p>
              </section>
            )}

            {/* Challenge & Solution Side by Side */}
            {(project.challenge || project.solution) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {project.challenge && (
                  <div className="bg-surface p-6 sm:p-7 rounded-2xl border border-charcoal/8 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-accent/30 text-charcoal flex items-center justify-center font-bold text-xs mb-4">
                      01
                    </div>
                    <h4 className="text-base font-bold text-charcoal mb-2 font-display">
                      Tantangan Desain
                    </h4>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="bg-primary/5 p-6 sm:p-7 rounded-2xl border border-primary/20 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs mb-4">
                      02
                    </div>
                    <h4 className="text-base font-bold text-charcoal mb-2 font-display">
                      Solusi Spasial
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div className="bg-surface p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-charcoal/8 shadow-xs">
                <h4 className="text-lg font-bold font-display text-charcoal mb-5">
                  Fitur Kunci & Pengerjaan Spesifik
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={`feat-${idx}`} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-charcoal/80 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Materials & Palette (4 cols) */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            {/* Color Palette Card */}
            {project.colorPalette && project.colorPalette.length > 0 && (
              <div className="bg-surface p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-charcoal/8 shadow-xs">
                <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wider uppercase mb-4">
                  <Layers className="w-4 h-4" />
                  <span>Palet Warna Arsitektur</span>
                </div>
                <div className="space-y-3">
                  {project.colorPalette.map((color, idx) => (
                    <div key={`color-${idx}`} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-lg border border-charcoal/15 shadow-xs shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs font-medium text-charcoal">
                          {color.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-muted uppercase">
                        {color.hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Material List Card */}
            {project.materials && project.materials.length > 0 && (
              <div className="bg-surface p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-charcoal/8 shadow-xs">
                <h4 className="text-sm uppercase tracking-wider font-semibold text-muted mb-4">
                  Spesifikasi Material
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((mat, idx) => (
                    <span
                      key={`mat-${idx}`}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-canvas border border-charcoal/10 text-charcoal"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Action Box */}
            <div className="bg-linear-to-br from-primary to-primary-dark text-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-lg">
              <h4 className="text-lg font-bold font-display mb-2">
                Ingin Konsep Serupa?
              </h4>
              <p className="text-xs text-white/85 leading-relaxed mb-5">
                Diskusikan visi ruang Anda bersama tim arsitek interior Hasuna Studio untuk mewujudkan hunian yang berkarakter.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/#contact')
                  setTimeout(() => {
                    const el = document.querySelector('#contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }, 150)
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary hover:bg-canvas font-semibold text-xs transition-colors shadow-sm cursor-pointer"
              >
                <span>Konsultasi Proyek Anda</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Project Navigator (Previous / Next) */}
        <div className="pt-8 sm:pt-12 border-t border-charcoal/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to={`/portfolio/${prevProject.id}`}
              className="group flex items-center gap-3 w-full sm:w-auto p-4 rounded-2xl bg-surface border border-charcoal/8 hover:border-primary/40 transition-all shadow-xs"
            >
              <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-charcoal group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-muted font-medium">
                  Proyek Sebelumnya
                </span>
                <span className="text-xs sm:text-sm font-semibold text-charcoal group-hover:text-primary transition-colors truncate block max-w-[200px]">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            <Link
              to="/portfolio"
              className="text-xs font-semibold text-muted hover:text-charcoal transition-colors px-4 py-2 rounded-full border border-charcoal/15 bg-surface hover:bg-canvas"
            >
              Lihat Semua Koleksi
            </Link>

            <Link
              to={`/portfolio/${nextProject.id}`}
              className="group flex items-center justify-end gap-3 w-full sm:w-auto p-4 rounded-2xl bg-surface border border-charcoal/8 hover:border-primary/40 transition-all shadow-xs"
            >
              <div className="text-right">
                <span className="block text-[10px] uppercase tracking-wider text-muted font-medium">
                  Proyek Selanjutnya
                </span>
                <span className="text-xs sm:text-sm font-semibold text-charcoal group-hover:text-primary transition-colors truncate block max-w-[200px]">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-charcoal group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetailPage
