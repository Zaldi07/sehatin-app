import React, { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  MapPin,
  Maximize,
  Search,
  SlidersHorizontal,
  X,
  Layers,
  Sparkles,
  ArrowRight,
  Eye,
} from 'lucide-react'
import { portfolioData, statsData } from '../data/companyData'
import type { PortfolioItem } from '../types'

export const PortfolioPage: React.FC = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [quickViewProject, setQuickViewProject] = useState<PortfolioItem | null>(null)

  // Ekstrak kategori unik
  const categories = useMemo(() => {
    const cats = new Set(portfolioData.map((item) => item.category))
    return ['All', ...Array.from(cats)]
  }, [])

  // Filter projects berdasarkan kategori dan pencarian kata kunci
  const filteredProjects = useMemo(() => {
    return portfolioData.filter((item) => {
      const matchCategory =
        selectedCategory === 'All' || item.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      const matchSearch =
        query === '' ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.location && item.location.toLowerCase().includes(query)) ||
        (item.materials &&
          item.materials.some((m) => m.toLowerCase().includes(query)))
      return matchCategory && matchSearch
    })
  }, [selectedCategory, searchQuery])

  // Proyek unggulan pertama
  const featuredProject = portfolioData[0]

  return (
    <div className="min-h-screen bg-canvas text-charcoal pt-24 sm:pt-28 pb-16 sm:pb-24">
      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuickViewProject(null)}
            className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface w-full max-w-2xl rounded-2xl sm:rounded-3xl border border-charcoal/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="relative aspect-16/9 w-full bg-charcoal/5">
                <img
                  src={quickViewProject.image}
                  alt={quickViewProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setQuickViewProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-charcoal/60 hover:bg-charcoal text-white transition-colors cursor-pointer"
                  aria-label="Tutup modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white shadow-md">
                  <span>{quickViewProject.category}</span>
                  <span>•</span>
                  <span>{quickViewProject.year || '2025'}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-charcoal mb-2">
                    {quickViewProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {quickViewProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2 border-y border-charcoal/8 text-xs">
                  <div>
                    <span className="text-muted block text-[10px] uppercase font-semibold">Lokasi</span>
                    <span className="font-semibold text-charcoal">{quickViewProject.location || '-'}</span>
                  </div>
                  <div>
                    <span className="text-muted block text-[10px] uppercase font-semibold">Luas Area</span>
                    <span className="font-semibold text-charcoal">{quickViewProject.area || '-'}</span>
                  </div>
                  <div>
                    <span className="text-muted block text-[10px] uppercase font-semibold">Durasi</span>
                    <span className="font-semibold text-charcoal">{quickViewProject.duration || '-'}</span>
                  </div>
                </div>

                {quickViewProject.materials && (
                  <div>
                    <span className="text-muted block text-[10px] uppercase font-semibold mb-2">Material Utama</span>
                    <div className="flex flex-wrap gap-1.5">
                      {quickViewProject.materials.map((m, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-canvas border border-charcoal/10 text-charcoal">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setQuickViewProject(null)}
                    className="px-4 py-2 rounded-full border border-charcoal/20 text-xs font-medium text-charcoal hover:bg-charcoal/5 transition-colors cursor-pointer"
                  >
                    Tutup
                  </button>
                  <Link
                    to={`/portfolio/${quickViewProject.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                  >
                    <span>Buka Halaman Detail Penuh</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Breadcrumb & Subtitle */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6">
          <Link to="/" className="hover:text-primary transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-charcoal font-medium">Portofolio</span>
        </div>

        {/* Hero Section Banner */}
        <div className="pb-10 sm:pb-16 border-b border-charcoal/8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20 mb-4 sm:mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Works & Spatial Archive</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-charcoal tracking-tight leading-[1.14] mb-4 sm:mb-6">
              Karya Kurasi &{' '}
              <span className="text-primary italic">Detail Portofolio.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed font-normal">
              Eksplorasi ruang yang kami rancang dengan filosofi minimalisme bernyawa — memadukan ketenangan spasial, ergonomi humanis, dan keindahan material alami nusantara yang bertahan melintasi waktu.
            </p>
          </div>
        </div>

        {/* Featured Signature Case Study */}
        {featuredProject && (
          <div className="py-10 sm:py-14 border-b border-charcoal/8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-primary flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                Sorotan Proyek Unggulan
              </span>
              <span className="text-xs text-muted font-mono">01 / Signature Residence</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 bg-surface rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-charcoal/8 shadow-xs overflow-hidden">
              <div className="lg:col-span-7 relative aspect-16/10 rounded-xl sm:rounded-2xl overflow-hidden group">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-surface/90 backdrop-blur-md text-charcoal shadow-sm">
                  <span>{featuredProject.category}</span>
                  <span>•</span>
                  <span>{featuredProject.year || '2025'}</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted mb-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{featuredProject.location}</span>
                    <span>•</span>
                    <Maximize className="w-3.5 h-3.5 text-primary" />
                    <span>{featuredProject.area}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal mb-3">
                    {featuredProject.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-4">
                    {featuredProject.description}
                  </p>

                  {featuredProject.materials && (
                    <div className="mb-4">
                      <span className="text-[11px] uppercase tracking-wider text-muted font-semibold block mb-2">
                        Material Pilihan:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.materials.map((mat, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-full text-xs bg-canvas border border-charcoal/10 text-charcoal/85"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-charcoal/8">
                  <Link
                    to={`/portfolio/${featuredProject.id}`}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-primary hover:bg-primary-dark text-white transition-all shadow-md group cursor-pointer"
                  >
                    <span>Lihat Detail Studi Kasus</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <button
                    onClick={() => setQuickViewProject(featuredProject)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium border border-charcoal/15 hover:border-charcoal/30 bg-surface text-charcoal hover:bg-charcoal/5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Pratinjau</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="pt-10 sm:pt-14 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-charcoal text-white shadow-xs'
                    : 'bg-surface border border-charcoal/10 text-charcoal/70 hover:text-charcoal hover:border-charcoal/25'
                }`}
              >
                {category === 'All' ? 'Semua Proyek' : category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama, kota, material..."
              className="w-full pl-10 pr-9 py-2 rounded-full text-xs sm:text-sm bg-surface border border-charcoal/15 focus:border-primary focus:outline-hidden text-charcoal placeholder:text-muted/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="pb-6 flex items-center justify-between text-xs text-muted">
          <span>Menampilkan {filteredProjects.length} proyek</span>
          {selectedCategory !== 'All' && (
            <span>Kategori: <strong className="text-charcoal">{selectedCategory}</strong></span>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-surface rounded-2xl sm:rounded-3xl p-12 text-center border border-charcoal/8 my-8">
            <SlidersHorizontal className="w-8 h-8 text-muted mx-auto mb-3" />
            <h3 className="text-base sm:text-lg font-bold text-charcoal mb-1">
              Tidak ada proyek yang sesuai
            </h3>
            <p className="text-xs sm:text-sm text-muted mb-4">
              Coba gunakan kata kunci pencarian yang lain atau pilih kategori yang berbeda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSearchQuery('')
              }}
              className="px-4 py-2 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-colors"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
            {filteredProjects.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group bg-surface rounded-2xl sm:rounded-3xl border border-charcoal/8 hover:border-primary/40 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-charcoal/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-surface/90 backdrop-blur-md text-charcoal shadow-xs">
                      <span>{item.category}</span>
                      <span>•</span>
                      <span>{item.year || '2025'}</span>
                    </div>

                    <button
                      onClick={() => setQuickViewProject(item)}
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-surface/90 backdrop-blur-md text-charcoal text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md flex items-center gap-1 hover:bg-surface cursor-pointer"
                    >
                      <Eye className="w-3 h-3 text-primary" />
                      <span>Quick View</span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-primary" />
                        {item.location || 'Indonesia'}
                      </span>
                      {item.area && (
                        <span className="flex items-center gap-1">
                          <Maximize className="w-3 h-3 text-primary" />
                          {item.area}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-charcoal group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {item.materials && (
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {item.materials.slice(0, 3).map((mat, i) => (
                          <span
                            key={i}
                            className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-canvas border border-charcoal/8 text-charcoal/70"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 sm:p-6 pt-0 border-t border-charcoal/5 mt-3">
                  <Link
                    to={`/portfolio/${item.id}`}
                    className="inline-flex items-center justify-between w-full pt-3 text-xs font-semibold text-primary group-hover:text-primary-dark transition-colors"
                  >
                    <span>Lihat Detail Portofolio</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Studio Stats Summary */}
        <div className="bg-surface rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-charcoal/8 shadow-xs mb-16 sm:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-charcoal/8">
            {statsData.map((stat, i) => (
              <div key={i} className="px-3">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold font-display text-primary mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-muted font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-charcoal text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl text-center sm:text-left">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block text-[11px] uppercase tracking-widest text-secondary font-semibold mb-3">
              Mulai Kolaborasi
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-4 leading-tight">
              Punya Rencana Renovasi atau Pembangunan Ruang Baru?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mb-6 sm:mb-8 font-normal">
              Konsultasikan gagasan dan kebutuhan ruang Anda bersama arsitek interior kami. Kami siap mendampingi mulai dari studi konsep hingga tahap pengerjaan kriya presisi.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-start">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-primary hover:bg-primary-dark text-white transition-all shadow-lg cursor-pointer"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <span>Kembali ke Beranda</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
