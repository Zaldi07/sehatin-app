import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  HelpCircle,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Compass,
} from 'lucide-react'
import { servicesData, designProcessData, faqData } from '../data/companyData'
import Card from '../components/common/Card'

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate()

  const handleConsultService = (serviceId: string) => {
    navigate(`/contact?service=${serviceId}`)
  }

  return (
    <div className="min-h-screen bg-canvas text-charcoal pt-24 sm:pt-28 pb-16 sm:pb-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-12 sm:pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Keahlian & Layanan Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-charcoal leading-[1.18] mb-5"
          >
            Solusi Desain Interior & Spasial yang Presisi dan Berjiwa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-charcoal/70 leading-relaxed font-normal"
          >
            Dari hunian privat hingga ruang komersial dinamis, kami merancang setiap sudut dengan
            pendekatan fungsional yang cermat, pemilihan material ramah lingkungan, dan estetika hangat yang abadi.
          </motion.p>
        </div>
      </section>

      {/* Daftar Layanan Utama (Mapped via Card Component) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={service.id}
              variant="white"
              hoverable={true}
              className="p-0 overflow-hidden border-charcoal/10 hover:border-primary/40 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-charcoal/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-xs text-xs font-mono font-semibold text-charcoal shadow-xs">
                    0{index + 1}
                  </div>
                  {service.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-white text-[11px] font-semibold shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Paling Populer</span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                      {service.tag || service.category}
                    </span>
                    {service.duration && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-charcoal/60 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{service.duration}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-charcoal mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Lingkup & Fitur Layanan */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal/50 mb-2.5">
                      Lingkup Pengerjaan Utama:
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  {service.idealFor && (
                    <div className="p-3.5 rounded-xl bg-canvas border border-charcoal/5 text-xs text-charcoal/70">
                      <span className="font-semibold text-charcoal">Ideal untuk: </span>
                      <span>{service.idealFor}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  type="button"
                  onClick={() => handleConsultService(service.id)}
                  className="w-full py-3 px-5 rounded-full text-xs sm:text-sm font-semibold bg-canvas hover:bg-primary hover:text-white border border-charcoal/15 hover:border-transparent text-charcoal transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group-hover:bg-primary group-hover:text-white"
                >
                  <span>Pilih & Konsultasikan Layanan Ini</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Alur Proses Kerja (Design Process Data Mapped via Card) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Metodologi Studio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-charcoal tracking-tight">
            Alur Perancangan yang Terukur & Transparan
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/60 mt-2 font-normal">
            Setiap fase dirancang untuk memberi Anda kepastian biaya, jadwal tepat waktu, dan visualisasi tanpa deviasi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {designProcessData.map((step) => (
            <Card
              key={step.number}
              variant="white"
              hoverable={true}
              className="p-5 sm:p-6 border-charcoal/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold font-mono text-primary">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-charcoal">
                    {step.duration}
                  </span>
                </div>

                <h4 className="text-base font-bold font-display text-charcoal mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-primary font-medium mb-3">
                  {step.subtitle}
                </p>
                <p className="text-xs text-charcoal/70 leading-relaxed mb-4 font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-charcoal/8">
                <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal/50 block mb-1.5">
                  Output Hasil:
                </span>
                <ul className="space-y-1">
                  {step.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="text-[11px] text-charcoal/75 flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Pertanyaan yang Sering Diajukan (FAQ) */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab Layanan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, fIdx) => (
            <Card key={fIdx} variant="white" hoverable={false} className="p-5 sm:p-6 border-charcoal/10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                  Q
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-display text-charcoal mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Banner Ajakan Konsultasi */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-6">
        <div className="bg-surface border border-charcoal/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparansi Biaya & Kualitas Terjamin</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-charcoal tracking-tight mb-2">
              Punya Ruang Khusus yang Ingin Direnovasi?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/65 font-normal leading-relaxed">
              Diskusikan rancangan tata ruang Anda secara langsung bersama Principal Architect kami.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-7 py-3 rounded-full text-xs sm:text-sm font-semibold bg-primary hover:bg-primary-dark text-white transition-all shadow-md inline-flex items-center gap-2 shrink-0"
          >
            <span>Hubungi Kami Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
