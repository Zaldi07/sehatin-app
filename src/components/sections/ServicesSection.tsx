import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { servicesData } from '../../data/companyData'
import Card from '../common/Card'

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-canvas">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
              <span>Layanan Kami</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-charcoal tracking-tight">
              Layanan & Keahlian Studio
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-charcoal/60 max-w-md font-normal leading-relaxed">
              Perancangan arsitektur interior dan tata ruang yang memadukan kenyamanan, material alami, dan keindahan abadi.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark transition-colors shrink-0"
            >
              <span>Semua Layanan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4-Column Grid with Reusable Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <Card
                variant="white"
                hoverable={true}
                className="p-0 overflow-hidden border-charcoal/10 hover:border-primary/40 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-charcoal/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-surface/90 backdrop-blur-xs text-[11px] font-mono font-semibold text-charcoal shadow-xs">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-primary block mb-1">
                      {service.tag || service.category}
                    </span>
                    <h3 className="text-lg font-bold font-display text-charcoal mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-charcoal/65 leading-relaxed mb-4 font-normal">
                      {service.description}
                    </p>

                    {/* Clean Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feat, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-canvas text-charcoal/70 border border-charcoal/5"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    to={`/contact?service=${service.id}`}
                    className="w-full inline-flex items-center justify-between pt-3 border-t border-charcoal/8 text-xs font-semibold text-charcoal group-hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>Konsultasi Proyek</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
