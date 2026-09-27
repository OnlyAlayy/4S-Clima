import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Clock, FileText, Award } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: "Trato personalizado",
    text: "Al ser una empresa de gestión familiar de dos generaciones, trabajamos codo a codo con cada cliente, asegurando respuestas ágiles que las grandes corporaciones no pueden igualar."
  },
  {
    icon: Clock,
    title: "Compromiso absoluto",
    text: "El éxito de un proyecto no se mide en procesos ni en precios, sino en la tranquilidad final del cliente y la durabilidad de las instalaciones a lo largo de las décadas."
  },
  {
    icon: Sparkles,
    title: "Alcance y logística",
    text: "Nuestro equipo cuenta con la capacidad operativa para ejecutar obras de gran escala y alta complejidad en cualquier punto del país, garantizando siempre nuestros estándares."
  },
  {
    icon: FileText,
    title: "Infraestructura propia",
    text: "Disponemos de un taller especializado, flota vehicular propia e inventario permanente de repuestos críticos para asegurar tiempos de respuesta inmediatos."
  }
]

export default function QuienesSomos() {
  return (
    <section id="pourquoi-nous" className="py-24 bg-white relative overflow-hidden">
      {/* Imagen de fondo (marca de agua) */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: "url('/Decoracion/images2.jpg')" }}
      />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <span className="font-display tracking-widest text-primary text-xs font-bold uppercase mb-4 inline-flex items-center gap-4">
              <span className="w-8 h-[2px] bg-primary rounded-full"></span>
              QUIÉNES SOMOS
              <span className="w-8 h-[2px] bg-primary rounded-full"></span>
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight mt-4">
              Una empresa familiar dedicada a la excelencia térmica.
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Image Collage */}
          <motion.div 
            className="lg:w-1/2 relative w-full mt-8 lg:mt-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
          >
            {/* Main Image */}
            <div className="relative h-[450px] md:h-[550px] w-[85%] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
                alt="Ingeniería y Diseño"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Secondary Image Overlapping */}
            <div className="absolute top-[10%] right-0 w-[50%] h-[250px] md:h-[300px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" 
                alt="Instalaciones HVAC"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Glassmorphism Badge */}
            <div className="absolute -bottom-10 right-[5%] md:right-[15%] bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white max-w-[280px] flex items-center gap-4 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gradient-to-br from-primary to-[#088c8b] text-white p-3 rounded-xl flex-shrink-0 shadow-lg">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-gray-900 text-[15px] mb-1 leading-tight">Proyectos a Medida</h4>
                <p className="text-gray-500 text-xs font-medium">Diseño, instalación y servicio integral</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Features Timeline */}
          <div className="lg:w-1/2 flex flex-col gap-10 mt-20 lg:mt-0 relative">
            {/* Connecting Vertical Line */}
            <div className="hidden md:block absolute left-[27px] top-[40px] bottom-[40px] w-[2px] bg-gray-100 -z-10"></div>

            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div 
                  key={i}
                  className="flex gap-6 group cursor-default"
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: i * 0.25 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-[#f0f9ff] border-2 border-primary/20 rounded-full flex items-center justify-center text-primary shadow-sm z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <div className="pt-1 transform group-hover:scale-[1.03] origin-left transition-transform duration-300">
                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
