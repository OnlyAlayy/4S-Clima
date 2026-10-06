import { useState, useEffect } from 'react'
import { Sparkles, Wrench, Search, CheckCircle2, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  { id: 'salud', label: 'Salud', sub: 'Áreas críticas y quirófanos', icon: Sparkles },
  { id: 'industria', label: 'Industria', sub: 'Procesos térmicos', icon: Wrench },
  { id: 'alimenticia', label: 'Ind. Alimenticia', sub: 'Producción continua', icon: Search },
  { id: 'frio', label: 'Frío Industrial', sub: 'Cámaras de temperatura', icon: Sparkles },
  { id: 'farma', label: 'Ind. Farmacéutica', sub: 'Áreas limpias GMP/ISO', icon: Search },
  { id: 'carnicas', label: 'Lácteas y Cárnicas', sub: 'Frigoríficos de faena', icon: Wrench },
]

const content = {
  salud: {
    title: "Salud",
    description: "Áreas críticas, quirófanos, filtrado y cadena de frío para equipos de imágenes (modalidad llave en mano).",
    images: ["/Secciones/quirofano.jpg"]
  },
  industria: {
    title: "Industria",
    description: "Climatización y tratamiento de fluidos térmicos para procesos plásticos, petroquímicos y de producción.",
    images: ["/Secciones/industria.jpg"]
  },
  alimenticia: {
    title: "Industria alimenticia",
    description: "Agua helada para producción, enfriamiento en línea continua y filtrado de harinas y polvos volátiles.",
    images: ["/Secciones/Industriaalimenticia.jpg"]
  },
  frio: {
    title: "Frío industrial",
    description: "Panelería y cámaras de Alta, Mediana y Baja temperatura, con montaje integral.",
    images: ["/Secciones/frioindustrial.png"]
  },
  farma: {
    title: "Industria farmacéutica",
    description: "Áreas limpias GMP/ISO, agua helada, VRV para UTA's y cabinas Bag in / Bag out.",
    images: ["/Secciones/farmaceutica.jpg", "/Secciones/farmaceutica2.png"]
  },
  carnicas: {
    title: "Cárnicas, queseras y lácteas",
    description: "Frigoríficos de faena, cámaras de conservación y salas de cocción a medida.",
    images: ["/Secciones/camarafrigorificacarnica.jpg", "/Secciones/camarafrigorificaquesera.jpg"]
  }
}

function ImageCarousel({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) {
      setCurrentIndex(0)
      return
    }
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100 isolate transform-gpu">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} - ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === i ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  )
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<keyof typeof content>('salud')

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <span className="font-display tracking-widest text-primary text-xs font-bold uppercase mb-4 flex items-center gap-4">
            <span className="w-4 h-[1px] bg-primary"></span>
            OBRAS
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
            Obras a medida para mayor exigencia
          </h2>
        </motion.div>

        {/* Top Tabs */}
        <div className="flex overflow-x-auto gap-4 mb-12 py-2 hide-scrollbar">
          {tabs.map((tab, i) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                onClick={() => setActiveTab(tab.id as keyof typeof content)}
                className={`flex items-center gap-2 px-6 py-4 rounded font-bold text-[15px] transition-colors shadow-sm whitespace-nowrap flex-shrink-0 ${
                  isActive 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-100'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </motion.button>
            )
          })}
        </div>

        {/* Content Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-t-lg overflow-hidden shadow-sm border border-gray-100"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row"
            >
              {/* Image side */}
              <div className="lg:w-1/2 relative h-[300px] lg:h-auto min-h-[400px]">
                <ImageCarousel 
                  images={content[activeTab].images} 
                  title={content[activeTab].title} 
                />
              </div>

              {/* Text side */}
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
                  {content[activeTab].title}
                </h2>
                
                <div className="flex items-start gap-4 mb-10">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                    {content[activeTab].description}
                  </p>
                </div>

                <div>
                  <a href="#soumission" className="inline-flex items-center gap-2 font-display font-bold text-primary hover:text-primary-hover text-sm md:text-base uppercase tracking-wider transition-colors">
                    Consultar por su sector <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>



      </div>
    </section>
  )
}
