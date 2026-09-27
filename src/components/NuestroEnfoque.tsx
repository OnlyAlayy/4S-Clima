import { motion } from 'framer-motion'
import { Users, Leaf, Cog, ShieldCheck } from 'lucide-react'

const symptoms = [
  {
    badge: 'Prioridad',
    badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
    icon: Users,
    title: "El cliente siempre primero",
    text: "Creemos firmemente que lo más importante para el éxito de una organización son las personas, no solo los procesos. Nos enfocamos en entender y superar tus expectativas en cada etapa del proyecto.",
    className: "md:col-span-2",
  },
  {
    badge: 'Visión',
    badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    icon: Leaf,
    title: "Eficiencia y sustentabilidad",
    text: "Transformamos obras e instalaciones buscando el máximo aprovechamiento de recursos y la mayor eficiencia energética posible.",
    className: "md:col-span-1",
  },
  {
    badge: 'Capacidad',
    badgeColor: 'text-amber-600 bg-amber-50 border-amber-100',
    icon: Cog,
    title: "Ingeniería propia",
    text: "Nuestra Oficina de Ingeniería, Obras y Comercial trabajan de forma totalmente integrada para garantizar precisión absoluta.",
    className: "md:col-span-1",
  },
  {
    badge: 'Soporte',
    badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    icon: ShieldCheck,
    title: "Servicio integral y continuo",
    text: "Contamos con una División de Servicios y Mantenimiento dedicada exclusivamente a agregar valor y tranquilidad durante todo el ciclo de vida de tu sistema, mucho después de finalizada la obra.",
    className: "md:col-span-2",
  }
]

export default function NuestroEnfoque() {
  return (
    <section id="symptomes" className="py-24 bg-[#f0f9ff] relative overflow-hidden">
      {/* Fondo Decorativo y Marca de Agua */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Imagen provista por el usuario */}
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat mix-blend-multiply"
          style={{ backgroundImage: "url('/Decoracion/images.jpg')" }}
        />
        {/* Luces originales */}
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px]"></div>
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-400/20 blur-[120px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header de la Sección */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-end mb-20">
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <span className="font-display tracking-widest text-blue-600 text-xs font-bold uppercase mb-4 flex items-center gap-4">
              <span className="w-6 h-[2px] bg-blue-600 rounded-full"></span>
              NUESTRO ENFOQUE
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Lo que nos distingue en cada <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">proyecto.</span>
            </h2>
          </motion.div>

          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.2 }}
          >
            <p className="text-gray-500 text-lg leading-relaxed border-l-2 border-gray-200 pl-6">
              Aplicamos una metodología de trabajo estructurada y orientada a clientes de alta exigencia, asegurando resultados precisos, eficientes y duraderos.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {symptoms.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: i > 1 ? 50 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, type: "spring", bounce: 0.3, delay: i * 0.25 }}
                className={`group relative bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ${item.className}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.badgeColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-sm font-bold uppercase tracking-wider ${item.badgeColor.split(' ')[0]}`}>
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-4 leading-snug group-hover:text-blue-700 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
