import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  ArrowRight,
} from 'lucide-react'
import { companyOverview, servicesData } from '../../data/companyData'
import Card from '../common/Card'

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceId: servicesData[0]?.id || '',
    message: '',
  })
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    message?: string
  }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Tangkap jika layanan diklik dari bagian Services
  useEffect(() => {
    const handleCustomServiceSelect = (event: Event) => {
      const customEvent = event as CustomEvent<{ serviceId: string; serviceTitle: string }>
      if (customEvent.detail?.serviceId) {
        setFormData((prev) => ({
          ...prev,
          serviceId: customEvent.detail.serviceId,
        }))
      }
    }

    window.addEventListener('hasuna-select-service', handleCustomServiceSelect)
    return () => window.removeEventListener('hasuna-select-service', handleCustomServiceSelect)
  }, [])

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi.'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nama minimal 3 karakter.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi.'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Format email tidak valid.'
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
    <section id="contact" className="py-20 sm:py-28 bg-canvas border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
              <span>Kontak Studio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-charcoal tracking-tight mb-3">
              Mari Mulai Percakapan
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/60 font-normal leading-relaxed">
              Punya rencana proyek hunian atau komersial? Kirim pesan atau hubungi studio kami secara langsung.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark transition-colors shrink-0"
          >
            <span>Buka Halaman Kontak Lengkap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Column Layout with Reusable Card Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Info Studio */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="white" hoverable={false} className="p-6 sm:p-8 border-charcoal/10">
              <h3 className="text-base font-bold font-display text-charcoal mb-5 pb-3 border-b border-charcoal/8">
                Hasuna Studio Bandung
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal/70">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{companyOverview.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href={`mailto:${companyOverview.email}`} className="hover:text-primary transition-colors">
                    {companyOverview.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href={`tel:${companyOverview.phone}`} className="hover:text-primary transition-colors">
                    {companyOverview.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>{companyOverview.hours}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-charcoal/8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat via WhatsApp</span>
                </a>
              </div>
            </Card>

            {/* Social Media Links via Card */}
            <Card variant="white" hoverable={false} className="p-5 sm:p-6 border-charcoal/10">
              <div className="flex items-center gap-2 mb-3">
                <Share2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Sosial Media
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {companyOverview.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas hover:bg-surface border border-charcoal/10 hover:border-primary/40 text-xs text-charcoal/80 hover:text-primary transition-all"
                  >
                    <span>{social.name}</span>
                    <ExternalLink className="w-3 h-3 text-charcoal/40" />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Form Kontak dengan Validasi */}
          <div className="lg:col-span-7">
            <Card variant="white" hoverable={false} className="p-6 sm:p-8 border-charcoal/10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-charcoal mb-1">
                    Pesan Terkirim
                  </h4>
                  <p className="text-xs text-charcoal/60 mb-6 max-w-sm">
                    Terima kasih, <strong>{formData.name}</strong>. Tim Hasuna Studio akan menghubungi Anda melalui email <strong>{formData.email}</strong> secepatnya.
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
                    className="px-5 py-2 rounded-full text-xs font-medium border border-charcoal/20 text-charcoal hover:bg-charcoal/5 transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-charcoal mb-1">
                        Nama Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-canvas focus:bg-surface focus:outline-hidden transition-all text-charcoal ${
                          errors.name
                            ? 'border-rose-400 bg-rose-50/20'
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

                    <div>
                      <label className="block text-xs font-medium text-charcoal mb-1">
                        Alamat Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@email.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-canvas focus:bg-surface focus:outline-hidden transition-all text-charcoal ${
                          errors.email
                            ? 'border-rose-400 bg-rose-50/20'
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
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-charcoal mb-1">
                      Layanan yang Diminati
                    </label>
                    <select
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal/15 text-xs sm:text-sm bg-canvas focus:bg-surface focus:border-primary focus:outline-hidden transition-all text-charcoal cursor-pointer"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title} ({s.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-charcoal mb-1">
                      Pesan atau Keterangan Proyek <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ceritakan rencana ruang atau pertanyaan Anda..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-canvas focus:bg-surface focus:outline-hidden transition-all text-charcoal resize-none ${
                        errors.message
                          ? 'border-rose-400 bg-rose-50/20'
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-primary hover:bg-primary-dark text-white transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Mengirim...</span>
                    ) : (
                      <>
                        <span>Kirim Pesan</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
