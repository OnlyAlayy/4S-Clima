import { Linkedin, Mail, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const logos = [
  { name: 'Carrier', src: '/Marcasquerepresentamos/carrier-logo.webp' },
  { name: 'Daikin', src: '/Marcasquerepresentamos/Daikin_logo.webp' },
  { name: 'Hisense', src: '/Marcasquerepresentamos/Hisense_Logo.webp' },
  { name: 'Prihoda', src: '/Marcasquerepresentamos/Prihoda.webp' },
  { name: 'Ciroc', src: '/Marcasquerepresentamos/Ciroc.webp' },
]

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative pt-32 lg:pt-40 bg-white min-h-[90vh] flex flex-col justify-center overflow-x-clip"
    >
      {/* Background subtle grid (optional, matching light design) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '120px 100%'
        }}
      />

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column (Text) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center max-w-xl xl:pr-10"
          >
            <span className="font-sans tracking-widest text-primary text-xs font-bold uppercase mb-4 block">
              Representantes en Argentina de Carrier y Prihoda Sudamericana
            </span>
            <h1 className="font-sans font-black text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Climatización,<br />Refrigeración y<br />Ventilación<br /><span className="text-4xl md:text-5xl lg:text-5xl text-primary">de alta exigencia.</span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed font-normal">
              31 años acompañando a nuestros clientes en Argentina y Latinoamérica con soluciones de climatización que agregan valor real a cada proyecto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-full transition-colors text-center text-[15px]">
                Nuestros Sectores
              </a>
              <a href="#soumission" className="inline-block bg-white hover:bg-gray-50 text-primary font-semibold py-3 px-8 rounded-full transition-colors text-center border border-primary text-[15px]">
                Contacto directo
              </a>
            </div>
          </motion.div>

          {/* Right Column (Image & Icons) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px] w-full flex items-center justify-center lg:justify-end gap-6 xl:gap-10"
          >
            <div className="relative w-full max-w-[600px] h-full rounded-[40px] shadow-[0_20px_60px_-15px_rgba(29,78,216,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                alt="Ingeniería y Climatización" 
                className="w-full h-full object-cover rounded-[40px] relative z-10"
              />
            </div>
            
            {/* Social Icons */}
            <div className="hidden xl:flex flex-col gap-4 z-20 shrink-0">
              <a href="#" className="w-11 h-11 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
                <ArrowRight size={20} /> 
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Logos Bar */}
      <motion.div 
        className="w-full border-t border-gray-100 bg-white relative z-10 py-6 overflow-hidden flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <li key={index}>
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                />
              </li>
            ))}
            {/* Duplicate for infinite scroll effect */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <li key={`dup-${index}`}>
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-4">Las mejores marcas confían en nosotros</p>
      </motion.div>
    </section>
  )
}
