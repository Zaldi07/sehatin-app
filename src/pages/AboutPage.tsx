import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Compass,
  Target,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Leaf,
  HeartHandshake,
} from 'lucide-react'
import { companyOverview, teamData, statsData } from '../data/companyData'
import Card from '../components/common/Card'

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Mindful Aesthetics',
      description:
        'Setiap sudut dan garis dirancang memiliki makna, bukan sekadar dekorasi kosmetik visual semata.',
    },
    {
      icon: Leaf,
      title: 'Harmoni Material Alami',
      description:
        'Menghargai kejujuran kayu solid, batu alam, tekstil organik, dan kriya lokal nusantara.',
    },
    {
      icon: HeartHandshake,
      title: 'Kolaborasi Terbuka',
      description:
        'Kami mendengar ritme kehidupan dan mimpi Anda, menjadikannya poros utama setiap rancangan.',
    },
  ]

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
            <Compass className="w-3.5 h-3.5" />
            <span>Tentang Hasuna Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-charcoal leading-[1.18] mb-5"
          >
            Menciptakan Ruang Tenang yang Menceritakan Kisah Hidup Anda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-charcoal/70 leading-relaxed font-normal"
          >
            Kami adalah biro arsitektur interior dan perancangan spasial berbasis di Bandung.
            Sejak 2017, kami berdedikasi melahirkan hunian dan ruang komersial yang bernyawa,
            mengedepankan keselarasan fungsional, material alami, dan keindahan abadi.
          </motion.p>
        </div>
      </section>

      {/* Sejarah Singkat Perusahaan */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-charcoal/10 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="Studio Atmosphere Hasuna"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-canvas">
                  <p className="text-xs uppercase tracking-wider font-semibold text-secondary mb-1">
                    Est. 2017 &bull; Bandung, Indonesia
                  </p>
                  <p className="text-sm sm:text-base font-display font-medium">
                    "Ruang bukan sekadar susunan dinding, tapi tempat jiwa beristirahat."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Sejarah Singkat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal tracking-tight mb-4">
              Perjalanan Dedikasi dalam Seni Merancang Ruang
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-charcoal/75 leading-relaxed mb-6 font-normal">
              {companyOverview.history}
            </p>

            {/* Statistik dalam Card reusable */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-charcoal/10">
              {statsData.map((stat, i) => (
                <div key={i} className="bg-surface rounded-xl p-3.5 border border-charcoal/8 text-center">
                  <div className="text-xl sm:text-2xl font-bold font-display text-primary">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-charcoal/60 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Fondasi & Arah Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-charcoal tracking-tight">
            Visi dan Misi Perusahaan
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/60 mt-2 font-normal">
            Komitmen berkelanjutan kami dalam setiap goresan desain dan eksekusi tata ruang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-10">
          {/* Card Visi */}
          <div className="lg:col-span-5">
            <Card
              variant="white"
              hoverable={true}
              className="h-full flex flex-col justify-between border-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center mb-5 shadow-xs">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-primary block mb-2">
                  Visi Utama
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-charcoal tracking-tight mb-4">
                  Menjadi Pionir Ruang Berkelanjutan & Tenang
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-normal">
                  {companyOverview.vision}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-charcoal/8 flex items-center justify-between text-xs text-charcoal/60">
                <span className="font-medium">Jangka Panjang & Abadi</span>
                <Award className="w-4 h-4 text-primary" />
              </div>
            </Card>
          </div>

          {/* Card Misi (Mapped) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal/50 mb-1">
              3 Pilar Misi Kami
            </div>
            {companyOverview.mission.map((missionText, index) => (
              <Card
                key={index}
                variant="white"
                hoverable={true}
                className="flex items-start gap-4 p-5 sm:p-6 border-charcoal/10 hover:border-primary/40"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-secondary/30 text-charcoal font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-display text-charcoal mb-1">
                    Pilar {index + 1}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                    {missionText}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Nilai-Nilai Dasar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-8">
          {values.map((v, idx) => {
            const Icon = v.icon
            return (
              <Card key={idx} variant="white" hoverable={true} className="p-5 sm:p-6">
                <div className="w-10 h-10 rounded-xl bg-canvas border border-charcoal/10 flex items-center justify-center text-primary mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-display text-charcoal mb-2">
                  {v.title}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal/65 leading-relaxed font-normal">
                  {v.description}
                </p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Profil Tim (Menggunakan Card Reusable dan .map) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Tim Kreatif Kami</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-charcoal tracking-tight">
              Profil Tim & Arsitek Spasial
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal/60 max-w-md font-normal leading-relaxed">
            Digerakkan oleh arsitek dan desainer interior berpengalaman yang memiliki dedikasi mendalam terhadap presisi detail dan estetika berjiwa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamData.map((member) => (
            <Card
              key={member.id}
              variant="white"
              hoverable={true}
              className="p-0 overflow-hidden border-charcoal/10 hover:border-primary/50 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-charcoal/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-secondary block mb-0.5">
                      {member.role.split('&')[0]}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <span className="text-xs font-semibold text-primary block mb-2">
                    {member.role}
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-0">
                <div className="pt-3 border-t border-charcoal/8 flex items-center justify-between text-xs text-charcoal/60">
                  <span className="text-[11px] uppercase tracking-wider font-semibold">Hasuna Core Team</span>
                  <span className="text-primary font-medium text-[11px]">Bandung Studio</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Konsultasi */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-10">
        <div className="bg-charcoal text-canvas rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
              Ingin Berkolaborasi Mewujudkan Ruang Impian Anda?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white/70 mb-8 font-normal leading-relaxed">
              Jadwalkan sesi konsultasi gratis 45 menit bersama tim arsitek Hasuna Studio,
              baik tatap muka di studio kami di Bandung atau secara virtual.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-semibold bg-primary hover:bg-primary-dark text-white transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Mulai Konsultasi Desain</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-semibold border border-white/20 text-white hover:bg-white/10 transition-all text-center"
              >
                <span>Lihat Karya Portofolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
