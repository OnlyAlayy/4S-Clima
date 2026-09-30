import { motion } from 'framer-motion'
import { Globe, Factory, MapPin, Award, ShieldCheck, Zap, Sparkles, Wind, Weight, Droplets, Leaf } from 'lucide-react'

const stats = [
  { icon: Globe, label: "Presencia Global", desc: "Más de 70 países" },
  { icon: Factory, label: "Proyectos", desc: "+120.000 desarrollos" },
  { icon: Award, label: "Trayectoria", desc: "Desde 1994" },
  { icon: MapPin, label: "Sede América", desc: "Barcelona" },
]

const properties = [
  { 
    icon: ShieldCheck, 
    title: "Resistencia al Fuego", 
    desc: "Certificación europea EN 13501-1 (clase A y B-s1, d0) y norma estadounidense US UL 723." 
  },
  { 
    icon: Sparkles, 
    title: "Antibacteriano y Limpio", 
    desc: "Ideales para 'salas blancas'. Tratamiento especial que garantiza que ninguna bacteria sobreviva, con 10 años de garantía." 
  },
  { 
    icon: Zap, 
    title: "Efecto Antiestático", 
    desc: "Materiales con fibra de carbono para eliminar la acumulación de carga eléctrica en la superficie de la tela." 
  },
  { 
    icon: Weight, 
    title: "Peso Optimizado", 
    desc: "Pesan menos del 5% que la chapa (aprox. 200 g/m2), reduciendo drásticamente la carga estructural." 
  },
]

const comparisons = [
  { text: "Flujo de aire uniforme y personalizado sin corrientes molestas." },
  { text: "Limpieza profunda al 100% en lavadora con desinfectante." },
  { text: "Instalación 80% más rápida y sencilla sin maquinaria pesada." },
  { text: "Condensación libre: la tela permeable evita goteras sin necesidad de aislamiento." },
  { text: "Ahorro total: sin requerir rejillas ni costosos elementos de distribución." },
]

export default function DuctosTextiles() {
  return (
    <section id="ductos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans font-bold tracking-widest text-primary uppercase text-sm mb-4 block">
            Representantes Prihoda
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            Ductos Textiles
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            La evolución en distribución de aire. Sistemas textiles a medida que superan en eficiencia, limpieza y sustentabilidad a los conductos tradicionales de chapa metálica.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center border border-gray-100 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4">
                  <Icon size={20} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm uppercase">{stat.label}</h4>
                <p className="text-gray-500 text-sm">{stat.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Dos Columnas: Propiedades vs Comparativa */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Propiedades Técnicas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-3xl font-bold text-gray-900 uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Ingeniería del Tejido
            </h3>
            <div className="space-y-6">
              {properties.map((prop, i) => {
                const Icon = prop.icon
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">{prop.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{prop.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Comparativa & Sistemas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-3xl font-bold text-gray-900 uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Textil vs. Chapa
            </h3>
            <ul className="space-y-4 mb-10">
              {comparisons.map((comp, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckIcon />
                  </div>
                  <p className="text-gray-600 text-[15px]">{comp.text}</p>
                </li>
              ))}
            </ul>

            <h3 className="font-display text-xl font-bold text-gray-900 uppercase mb-4">Sistemas de Difusión Inteligente</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
              Desde microperforaciones láser (200µm) por inducción hasta boquillas direccionales gigantes de más de 80mm capaces de arrojar aire a más de 20 metros de distancia. Innovación patentada con <strong>Bolsillos Textiles ("pockets")</strong> para equilibrar el flujo perfecto.
            </p>
          </motion.div>
        </div>

        {/* Sustentabilidad Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Bg decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-2 text-emerald-400 mb-4 font-bold text-sm uppercase tracking-widest">
              <Leaf size={16} />
              <span>Sustentabilidad Ecológica</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold uppercase mb-4">Material REPREVE®</h3>
            <p className="text-gray-400 max-w-xl text-[15px] leading-relaxed">
              Hilo de poliéster fabricado a partir de botellas de plástico recicladas. En comparación con el poliéster virgen, logramos un impacto drásticamente menor:
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-6">
            <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4 min-w-[140px]">
              <div className="text-3xl font-black text-white mb-1">-66%</div>
              <div className="text-xs text-gray-400 uppercase font-bold">Consumo<br/>Energía</div>
            </div>
            <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4 min-w-[140px]">
              <div className="text-3xl font-black text-white mb-1">-50%</div>
              <div className="text-xs text-gray-400 uppercase font-bold">Consumo<br/>Agua</div>
            </div>
            <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4 min-w-[140px]">
              <div className="text-3xl font-black text-white mb-1">-34%</div>
              <div className="text-xs text-gray-400 uppercase font-bold">Emisiones<br/>GHG</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}
