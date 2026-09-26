import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const linksLeft = [
  { label: 'Sectores', href: '#services' },
  { label: 'Servicios', href: '#depannage' },
]

const linksRight = [
  { label: 'Trayectoria', href: '#symptomes' },
  { label: 'Enfoque', href: '#pourquoi-nous' },
  { label: 'Contacto', href: '#soumission' },
]

const allLinks = [...linksLeft, ...linksRight]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between lg:justify-center h-24 relative">
          
          {/* Mobile toggle (left side on mobile) */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 absolute left-0"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-0">
            {linksLeft.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-gray-600 font-bold hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Centered Logo */}
          <a href="#hero" className="flex flex-col flex-shrink-0 group items-center justify-center">
            <span className="font-sans text-2xl md:text-3xl font-black tracking-widest text-gray-900 group-hover:text-primary transition-colors uppercase">
              CLIMA 4S
            </span>
            <span className="font-sans text-[9px] font-bold tracking-widest text-primary uppercase mt-1">
              Alta Exigencia
            </span>
          </a>

          {/* Desktop Right Nav */}
          <nav className="hidden lg:flex items-center gap-10 absolute right-0">
            {linksRight.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-gray-600 font-bold hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {allLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-bold text-lg pb-3 border-b border-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+541112345678"
              className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded font-bold mt-2"
              onClick={() => setMobileOpen(false)}
            >
              <Phone size={18} />
              <span>Llamar ahora</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
