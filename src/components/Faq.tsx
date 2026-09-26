import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: "Aire Acondicionado Central",
    a: "Manejan Chillers, Roof Top, sistemas DX en general y VRV, ofreciendo cobertura integral."
  },
  {
    q: "Sistemas de Frío Industrial",
    a: "Realizan montaje de cámaras, centrales de frío (NH3 y freones), mantenimiento y servicios."
  },
  {
    q: "Abonos de Mantenimiento",
    a: "Brindan servicio preventivo y correctivo para distintos sistemas HVAC, gerenciado bajo la plataforma PROTECNUS."
  }
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-[var(--color-light-bg)]">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-display tracking-widest text-primary text-[11px] font-bold uppercase mb-4 flex items-center gap-3">
            <span className="w-4 h-[1px] bg-primary"></span>
            ÁREAS DE SERVICIO
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
            Cobertura Integral
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`bg-white border transition-colors ${isOpen ? 'border-primary' : 'border-teal-50 hover:border-teal-100'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 md:px-8 py-5 flex items-center justify-between gap-6"
                >
                  <span className="font-bold text-gray-800 text-[15px] md:text-base">{faq.q}</span>
                  <span className="flex-shrink-0 text-primary transition-transform duration-200" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 1L6.5 6L1.5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 md:px-8 pb-6 text-gray-600 leading-relaxed text-[15px]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
