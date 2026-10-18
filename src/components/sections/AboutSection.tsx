import React from 'react'
import { Target, Eye, CheckCircle2, ArrowUpRight } from 'lucide-react'
import Card from '../common/Card'
import { companyOverview, teamData } from '../../data/companyData'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center pb-14 sm:pb-20 border-b border-charcoal/10">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-secondary/20 text-charcoal border border-secondary/50">
              <span>About Us · Tentang Kami</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-charcoal tracking-tight leading-[1.15]">
              We don't just design spaces — we craft how they feel.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed">
              {companyOverview.history}
            </p>
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-charcoal text-canvas hover:bg-primary transition-all duration-300 shadow-sm"
              >
                <span>Eksplorasi Layanan Kami</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-charcoal/10 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                alt="Aurea Studio Interior Craftsmanship"
                className="w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-surface/90 backdrop-blur-md border border-white/40">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary">
                  Harmoni Ruang & Jiwa
                </p>
                <p className="text-xs sm:text-sm font-medium text-charcoal mt-1">
                  Setiap sudut dirancang dengan pertimbangan pencahayaan alami, sirkulasi udara, dan ketenangan visual.
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="pt-14 sm:pt-20">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary">
              Para Kreator di Balik Aurea
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-charcoal tracking-tight mt-1.5 sm:mt-2">
              Profil Tim & Arsitek
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted mt-2 sm:mt-3">
              Didukung oleh kolaborasi lintas disiplin antara arsitek terdaftar, desainer interior, dan perajin kriya nusantara.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {teamData.map((member) => (
              <Card key={member.id} variant="white" className="p-5 sm:p-6 flex flex-col">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-6 bg-charcoal/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold font-display text-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="text-[11px] sm:text-xs font-semibold text-primary mb-2 sm:mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
