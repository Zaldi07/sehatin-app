import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  Send,
  Share2,
  ExternalLink,
  AlertCircle,
  Sparkles,
} from 'lucide-react'
import { companyOverview, servicesData } from '../data/companyData'
import Card from '../components/common/Card'

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const preSelectedService = searchParams.get('service') || servicesData[0]?.id || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceId: preSelectedService,
    message: '',
  })

  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    message?: string
  }>({})

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, serviceId: preSelectedService }))
    }
  }, [preSelectedService])

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi.'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nama lengkap minimal 3 karakter.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi.'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Format email tidak valid (contoh: nama@domain.com).'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Bersihkan error field terkait saat user mulai mengetik
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 700)
  }

  const cleanPhone = companyOverview.phone.replace(/[^0-9]/g, '')
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Halo Hasuna Studio, saya ingin berkonsultasi mengenai proyek interior.`
  )}`

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
            <Mail className="w-3.5 h-3.5" />
            <span>Hubungi Kami</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-charcoal leading-[1.18] mb-5"
          >
            Mari Diskusikan Visi & Ruang Impian Anda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-charcoal/70 leading-relaxed font-normal"
          >
            Kami selalu terbuka untuk berdiskusi seputar proyek baru, renovasi ruang,
            kolaborasi kriya khusus, maupun pertanyaan umum. Tim kami siap merespons dalam waktu 1x24 jam kerja.
          </motion.p>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Kolom 1: Informasi Kontak & Media Sosial */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="white" hoverable={false} className="p-6 sm:p-8 border-charcoal/10">
              <h2 className="text-lg font-bold font-display text-charcoal mb-5 pb-3 border-b border-charcoal/8">
                Studio Utama Hasuna
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal/75">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-charcoal block mb-0.5">Alamat Studio</span>
                    <span>{companyOverview.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-charcoal block mb-0.5">Email Resmi</span>
                    <a
                      href={`mailto:${companyOverview.email}`}
                      className="hover:text-primary transition-colors underline-offset-2 hover:underline"
                    >
                      {companyOverview.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-charcoal block mb-0.5">Telepon / WhatsApp</span>
                    <a
                      href={`tel:${companyOverview.phone}`}
                      className="hover:text-primary transition-colors"
                    >
                      {companyOverview.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-charcoal block mb-0.5">Jam Operasional</span>
                    <span>{companyOverview.hours}</span>
                  </div>
                </div>
              </div>

              {/* Tombol WhatsApp */}
              <div className="mt-6 pt-6 border-t border-charcoal/8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Langsung via WhatsApp</span>
                </a>
              </div>
            </Card>

            {/* Media Sosial (Mapped via Card) */}
            <Card variant="white" hoverable={false} className="p-6 sm:p-8 border-charcoal/10">
              <div className="flex items-center gap-2 mb-4">
                <Share2 className="w-4 h-4 text-primary" />
                <h3 className="text-base font-bold font-display text-charcoal">
                  Info Media Sosial
                </h3>
              </div>
              <p className="text-xs text-charcoal/65 mb-5 font-normal leading-relaxed">
                Ikuti pembaruan karya terbaru, dokumentasi proses perancangan di workshop, dan inspirasi spasial kami:
              </p>

              <div className="space-y-3">
                {companyOverview.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-canvas hover:bg-surface border border-charcoal/8 hover:border-primary/40 text-xs transition-all group"
                  >
                    <div>
                      <span className="font-semibold text-charcoal block group-hover:text-primary transition-colors">
                        {social.name}
                      </span>
                      <span className="text-[11px] text-charcoal/60">
                        {social.handle}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-charcoal/40 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Kolom 2: Form Kontak dengan Validasi Sederhana */}
          <div className="lg:col-span-7">
            <Card variant="white" hoverable={false} className="p-6 sm:p-10 border-charcoal/10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 shadow-xs">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-charcoal mb-2">
                    Pesan Berhasil Terkirim!
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/65 mb-8 max-w-md leading-relaxed">
                    Terima kasih, <strong className="text-charcoal">{formData.name}</strong>. Tim Hasuna Studio akan meninjau pesan Anda dan segera menghubungi Anda melalui email <strong className="text-charcoal">{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        serviceId: servicesData[0]?.id || '',
                        message: '',
                      })
                      setErrors({})
                    }}
                    className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-canvas border border-charcoal/20 text-charcoal hover:bg-charcoal/5 transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </motion.div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal/8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold font-display text-charcoal">
                        Formulir Kontak
                      </h2>
                      <p className="text-xs text-charcoal/60 mt-0.5">
                        Lengkapi informasi di bawah ini untuk konsultasi awal.
                      </p>
                    </div>
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Input Nama */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">
                        Nama Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: Budi Santoso"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-canvas focus:bg-surface focus:outline-hidden transition-all text-charcoal ${
                          errors.name
                            ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                            : 'border-charcoal/15 focus:border-primary'
                        }`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-[11px] text-rose-500 mt-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Input Email */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">
                        Alamat Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@email.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-canvas focus:bg-surface focus:outline-hidden transition-all text-charcoal ${
                          errors.email
                            ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                            : 'border-charcoal/15 focus:border-primary'
                        }`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-[11px] text-rose-500 mt-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Pilihan Layanan */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">
                        Layanan yang Diminati
                      </label>
                      <select
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 text-xs sm:text-sm bg-canvas focus:bg-surface focus:border-primary focus:outline-hidden transition-all text-charcoal cursor-pointer"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title} ({s.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Input Pesan */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">
                        Pesan atau Keterangan Proyek <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Ceritakan rencana ruang, luasan, lokasi, atau pertanyaan spesifik yang ingin Anda diskusikan..."
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm bg-canvas focus:bg-surface focus:outline-hidden transition-all text-charcoal resize-none ${
                          errors.message
                            ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                            : 'border-charcoal/15 focus:border-primary'
                        }`}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 text-[11px] text-rose-500 mt-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Tombol Kirim Form */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3 rounded-full text-xs sm:text-sm font-semibold bg-primary hover:bg-primary-dark text-white transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Mengirimkan Pesan...</span>
                        ) : (
                          <>
                            <span>Kirim Pesan Sekarang</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
