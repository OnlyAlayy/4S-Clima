import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
      className="bg-white pt-24 pb-2"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8 mb-8">
          
          {/* Brand Logo */}
          <div className="md:w-1/3 flex flex-col items-center justify-start text-center md:px-4">
            <a href="#hero" className="inline-block group">
              <img 
                src="/logo-clean.png" 
                alt="4S CLIMA" 
                className="h-16 md:h-18 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
            </a>
            <p className="text-gray-400 text-xs font-medium mt-3 max-w-[240px] text-center mx-auto">
              Soluciones integrales de climatización y ventilación.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:w-1/3 flex justify-around md:justify-center gap-16">
            <div>
              <h4 className="font-bold text-gray-800 mb-6 text-[15px]">Compañía</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#services" className="text-gray-500 hover:text-primary transition-colors text-sm">Servicios</a></li>
                <li><a href="#pourquoi-nous" className="text-gray-500 hover:text-primary transition-colors text-sm">Nosotros</a></li>
                <li><a href="#symptomes" className="text-gray-500 hover:text-primary transition-colors text-sm">Expertise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-6 text-[15px]">Enlaces</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#hero" className="text-gray-500 hover:text-primary transition-colors text-sm">Home</a></li>
                <li><a href="#depannage" className="text-gray-500 hover:text-primary transition-colors text-sm">Inspiración</a></li>
              </ul>
            </div>
          </div>

          {/* Contacto */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div>
              <h4 className="font-bold text-gray-800 mb-6 text-[15px]">Contacto</h4>
              <ul className="flex flex-col gap-5">
                <li>
                  <a href="#soumission" className="flex items-center gap-4 text-gray-500 hover:text-primary transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle size={16} fill="currentColor" />
                    </div>
                    Formulario de Contacto
                  </a>
                </li>
                <li>
                  <a href="mailto:contacto@cuatroeseclima.com" className="flex items-center gap-4 text-gray-500 hover:text-primary transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={14} fill="currentColor" strokeWidth={0} />
                    </div>
                    contacto@cuatroeseclima.com
                  </a>
                </li>
                <li>
                  <a href="tel:+541112345678" className="flex items-center gap-4 text-gray-500 hover:text-primary transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={14} fill="currentColor" strokeWidth={0} />
                    </div>
                    +54 9 11 1234-5678
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/cuatroeseclima" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-500 hover:text-primary transition-colors text-sm group">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram size={14} />
                    </div>
                    @cuatroeseclima
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-100/60 text-center text-[13px] text-gray-400">
          <p>© {new Date().getFullYear()} 4S CLIMA, designed by 4S</p>
        </div>

      </div>
    </motion.footer>
  )
}
