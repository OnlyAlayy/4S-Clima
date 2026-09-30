import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Factory, Globe, Diamond, Flame, ZapOff } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "DUCTOS TEXTILES",
    subtitle: "UNA GRAN SOLUCIÓN TÉCNICO/ARQUITECTÓNICA",
    images: ["/DuctosTextiles/ductostextilesimagen0.jpg"],
    content: (
      <div className="text-gray-500 text-lg leading-relaxed">
        <p>La evolución en distribución de aire. Sistemas textiles a medida que superan en eficiencia, higiene y sustentabilidad a los conductos tradicionales de chapa metálica.</p>
      </div>
    )
  },
  {
    id: 2,
    title: "Nuestra Historia",
    subtitle: "RESPALDO INTERNACIONAL PRIHODA",
    images: ["/DuctosTextiles/prihoda.jpg"], // Asumimos que esta es la imagen de la mariposa / corporativa
    content: (
      <div className="grid grid-cols-2 gap-6 mt-4">
        <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100">
          <Globe className="text-primary mb-2" size={24} />
          <h4 className="font-bold text-gray-900">1994</h4>
          <p className="text-sm text-gray-500">Fundada en Rep. Checa</p>
        </div>
        <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100">
          <Factory className="text-primary mb-2" size={24} />
          <h4 className="font-bold text-gray-900">+120.000</h4>
          <p className="text-sm text-gray-500">Proyectos Originales</p>
        </div>
        <div className="col-span-2 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm text-gray-500">
            <strong>Casa Matriz América:</strong> Barcelona. <br />
            <strong>Plantas de fabricación:</strong> República Checa, México, India y China. <br />
            <strong>Alcance:</strong> Exportamos a más de 70 países.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "¿POR QUÉ DUCTOS TEXTILES?",
    subtitle: "PROPIEDADES TÉCNICAS SUPERIORES",
    images: [], // Sin imagen según la descripción del cliente
    content: (
      <ul className="space-y-5 text-base text-gray-600">
        <li className="flex gap-4 items-start">
          <Diamond className="text-primary flex-shrink-0 mt-0.5" size={22} /> 
          <span><strong className="text-gray-900">Alta Rigidez y Fuerza:</strong> Imposible de rasgar bajo uso normal.</span>
        </li>
        <li className="flex gap-4 items-start">
          <Flame className="text-primary flex-shrink-0 mt-0.5" size={22} /> 
          <span><strong className="text-gray-900">Resistencia al Fuego:</strong> Normas europeas EN 13501-1 y US UL 723.</span>
        </li>
        <li className="flex gap-4 items-start">
          <Sparkles className="text-primary flex-shrink-0 mt-0.5" size={22} /> 
          <span><strong className="text-gray-900">Salas Blancas:</strong> Insignificante desprendimiento de partículas.</span>
        </li>
        <li className="flex gap-4 items-start">
          <ZapOff className="text-primary flex-shrink-0 mt-0.5" size={22} /> 
          <span><strong className="text-gray-900">Efecto Antiestático:</strong> Uso de fibra de carbono para evitar cargas.</span>
        </li>
        <li className="flex gap-4 items-start">
          <ShieldCheck className="text-primary flex-shrink-0 mt-0.5" size={22} /> 
          <span><strong className="text-gray-900">Antibacteriano:</strong> 10 años de garantía, resiste múltiples lavados.</span>
        </li>
      </ul>
    )
  },
  {
    id: 4,
    title: "TEXTIL vs CHAPA (I)",
    subtitle: "FLUJO DE AIRE Y MANTENIMIENTO",
    images: ["/DuctosTextiles/velocityimagen2.jpg", "/DuctosTextiles/imagen1.jpg"], // CFD y collage de lavadora
    content: (
      <div className="space-y-6 text-gray-600">
        <div>
          <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Flujo Basado en Requisitos</h4>
          <p className="text-sm">El textil proporciona un flujo uniforme y personalizado. La chapa genera una distribución desigual, creando corrientes molestas y zonas mal ventiladas.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Perfecta Limpieza</h4>
          <p className="text-sm">El conducto textil es el único sistema que se puede lavar a fondo en lavadora con desinfectante. La chapa es imposible de limpiar al 100%.</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "TEXTIL vs CHAPA (II)",
    subtitle: "INSTALACIÓN Y ESTRUCTURA",
    images: ["/DuctosTextiles/ductosimagen3.jpg", "/DuctosTextiles/imagenductos4.jpg"], // Render semicircular y cancha
    content: (
      <div className="space-y-6 text-gray-600">
        <div>
          <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Velocidad de Instalación</h4>
          <p className="text-sm">La instalación textil toma solo el 20% del tiempo que llevaría ensamblar chapa. Los metálicos son pesados y técnicamente muy complejos.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Peso Estructural Mínimo</h4>
          <p className="text-sm">El textil pesa menos del 5% frente a la chapa, facilitando enormemente el manejo y eliminando cargas peligrosas para los techos.</p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "TEXTIL vs CHAPA (III)",
    subtitle: "CONDENSACIÓN Y AHORRO",
    images: ["/DuctosTextiles/imagentela5.jpg", "/DuctosTextiles/imagenmuseo6.jpg"], // Tela roja y Museo de arte
    content: (
      <div className="space-y-6 text-gray-600">
        <div>
          <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Condensación Libre</h4>
          <p className="text-sm">La tela permeable elimina el riesgo de condensación de agua por completo. La chapa condensa y exige un costoso aislamiento térmico obligatorio.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Ahorro de Inversión</h4>
          <p className="text-sm">El textil ya incorpora la distribución (sin requerir rejillas extra). Además, su transporte es ultra económico al plegarse en cajas pequeñas.</p>
        </div>
      </div>
    )
  }
]

export default function DuctosTextiles() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  // Auto-play (Se reinicia si el usuario toca las flechas)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 7500) // Reducido a 7.5 segundos
    return () => clearInterval(timer)
  }, [current]) // Al depender de 'current', el temporizador vuelve a cero si el usuario navega manualmente

  return (
    <section id="ductos" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/40 rounded-full blur-[80px] md:blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-100/30 rounded-full blur-[100px] md:blur-[120px] translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="font-display tracking-widest text-primary text-[10px] md:text-xs font-bold uppercase flex items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
            <span className="w-4 md:w-6 h-[1px] bg-primary"></span>
            TECNOLOGÍA DE VANGUARDIA
            <span className="w-4 md:w-6 h-[1px] bg-primary"></span>
          </span>
          <h2 className="font-display text-3xl md:text-6xl font-black text-gray-900 uppercase tracking-wide">
            Sistemas Prihoda
          </h2>
        </motion.div>

        {/* Contenedor del Carrusel (Diseño Ultra Premium Flotante) */}
        <div className="relative min-h-[900px] sm:min-h-[850px] md:min-h-[600px] w-full group">
          
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col md:flex-row items-center gap-6 md:gap-16"
            >
              
              {/* Lado Imágenes (Flotantes tipo Cuadro) */}
              <div className="w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-[550px] flex items-center justify-center relative z-20">
                {slides[current].images.length > 1 ? (
                  <div className="flex flex-col h-full w-full gap-4 md:gap-6 justify-center">
                    {slides[current].images.map((img, idx) => (
                      <div key={idx} className="w-full h-[45%] relative group/img">
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 -z-10 transition-transform md:group-hover/img:translate-x-4 md:group-hover/img:translate-y-4"></div>
                        <img 
                          src={img} 
                          alt={`Slide ${current + 1} view ${idx + 1}`} 
                          className="w-full h-full object-contain rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-4 md:border-[6px] border-white bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                    ))}
                  </div>
                ) : slides[current].images.length === 1 ? (
                  <div className="w-full h-full relative group/img flex items-center justify-center">
                    {/* Sombra/marco desfasado para efecto 3D */}
                    <div className="absolute inset-4 bg-blue-200/20 rounded-3xl transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10 transition-transform duration-500 md:group-hover/img:translate-x-6 md:group-hover/img:translate-y-6 blur-md"></div>
                    <img 
                      src={slides[current].images[0]} 
                      alt={`Slide ${current + 1}`} 
                      className="max-w-full max-h-full object-contain rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-4 md:border-8 border-white bg-white/80 backdrop-blur-md transform transition-transform duration-700 md:hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full relative group/img flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/80 to-slate-50/50 rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border-4 md:border-8 border-white backdrop-blur-md p-6 md:p-10 overflow-hidden">
                    <ShieldCheck size={150} strokeWidth={1} className="text-blue-500/10 absolute -top-10 -right-10 transform rotate-12 md:w-[200px] md:h-[200px]" />
                    <Sparkles size={100} strokeWidth={1} className="text-indigo-500/10 absolute -bottom-10 -left-10 md:w-[120px] md:h-[120px]" />
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-4 md:mb-6 relative z-10">
                      <ShieldCheck size={32} className="md:w-[40px] md:h-[40px]" />
                    </div>
                    <h4 className="font-display text-xl md:text-2xl font-black text-gray-800 text-center uppercase tracking-wider relative z-10">Ingeniería<br/>Superior</h4>
                    <p className="text-center text-gray-500 text-xs md:text-sm mt-3 md:mt-4 relative z-10 max-w-[250px]">Materiales técnicos diseñados para la máxima eficiencia y durabilidad.</p>
                  </div>
                )}
              </div>

              {/* Lado Textos (Tarjeta Glassmorphism) */}
              <div className="w-full md:w-1/2 relative z-10">
                <div className="bg-white/80 md:bg-white/70 backdrop-blur-2xl p-6 sm:p-8 md:p-14 rounded-[30px] md:rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white relative overflow-hidden">
                  
                  {/* Número de fondo estilizado */}
                  <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-[100px] md:text-[150px] font-black text-blue-50/80 z-0 pointer-events-none font-display leading-none">
                    0{slides[current].id}
                  </div>

                  <div className="relative z-10">
                    <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="block font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 tracking-[0.15em] text-sm md:text-lg uppercase mb-2 md:mb-3"
                    >
                      {slides[current].subtitle}
                    </motion.span>
                    
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 mb-6 md:mb-8 uppercase leading-[1.1]"
                    >
                      {slides[current].title}
                    </motion.h3>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-gray-600 prose prose-base md:prose-lg prose-blue max-w-none font-medium leading-relaxed"
                    >
                      {slides[current].content}
                    </motion.div>
                  </div>
                  
                  {/* Panel de Controles (Indicadores y Flechas) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200/50 relative z-10">
                    {/* Indicadores */}
                    <div className="flex items-center justify-center sm:justify-start gap-2 md:gap-3">
                      {slides.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setCurrent(idx)}
                          className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ease-out ${current === idx ? 'w-8 md:w-12 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md' : 'w-2 md:w-3 bg-gray-300 hover:bg-gray-400'}`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Flechas Integradas */}
                    <div className="flex items-center justify-center sm:justify-end gap-3 md:gap-4">
                      <button 
                        onClick={prevSlide}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg transition-all duration-300 group/btn"
                      >
                        <ChevronLeft size={20} strokeWidth={2.5} className="md:group-hover/btn:-translate-x-0.5 transition-transform" />
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg transition-all duration-300 group/btn"
                      >
                        <ChevronRight size={20} strokeWidth={2.5} className="md:group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}
