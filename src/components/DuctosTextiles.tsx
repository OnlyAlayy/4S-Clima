import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Zap, Weight, CheckCircle2, Leaf, Globe, Award } from 'lucide-react'

const properties = [
  { 
    icon: ShieldCheck, 
    title: "Resistencia al Fuego", 
    desc: "Certificación europea EN 13501-1 y US UL 723." 
  },
  { 
    icon: Sparkles, 
    title: "Antibacteriano", 
    desc: "Para 'salas blancas'. 10 años de garantía sin bacterias." 
  },
  { 
    icon: Zap, 
    title: "Antiestático", 
    desc: "Fibra de carbono para eliminar cargas eléctricas." 
  },
  { 
    icon: Weight, 
    title: "Ultra Liviano", 
    desc: "Pesa -5% que la chapa. Reduce carga estructural." 
  },
]

const comparisons = [
  "Flujo de aire uniforme sin corrientes molestas.",
  "Limpieza 100% en lavadora con desinfectante.",
  "Instalación 80% más rápida sin maquinaria pesada.",
  "Condensación libre: evita goteras sin aislamiento.",
  "Ahorro: sin rejillas ni distribución costosa."
]

export default function DuctosTextiles() {
  return (
    <section id="ductos" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header (Matching Services style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <span className="w-4 h-[1px] bg-primary"></span>
            <span className="font-display tracking-widest text-primary text-xs font-bold uppercase">
              REPRESENTANTES PRIHODA DESDE 1994
            </span>
            <span className="hidden lg:block w-4 h-[1px] bg-primary"></span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-gray-900 leading-tight mb-6 uppercase">
            Ductos Textiles
          </h2>
          <p className="font-sans text-gray-500 max-w-2xl text-lg leading-relaxed mx-auto lg:mx-0">
            La evolución absoluta en distribución de aire. Sistemas textiles a medida que superan en eficiencia, higiene y sustentabilidad a los conductos tradicionales de chapa metálica. Más de 120.000 proyectos en 70 países.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Properties Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {properties.map((prop, i) => {
              const Icon = prop.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(29,78,216,0.08)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#f0f9ff] rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3 uppercase tracking-wide">
                    {prop.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {prop.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column: Textil vs Chapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0f9ff] rounded-bl-full -z-0 opacity-50"></div>
            <h3 className="font-display text-3xl font-bold text-gray-900 uppercase mb-8 relative z-10">
              Textil vs. Chapa
            </h3>
            <ul className="space-y-5 relative z-10">
              {comparisons.map((text, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="mt-0.5 text-primary group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} strokeWidth={2} />
                  </div>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-8 border-t border-gray-100 relative z-10">
              <h4 className="font-display text-lg font-bold text-gray-900 uppercase mb-2">
                Difusión Inteligente
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Microperforaciones láser (200µm) y toberas de +80mm para arrojar aire a más de 20 metros. Tecnología patentada de <strong>Bolsillos Textiles</strong>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sustentabilidad REPREVE (Rediseñado estilo premium) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="bg-[#f0f9ff] rounded-3xl p-8 md:p-12 border border-blue-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-12"
        >
          <div className="absolute -right-20 -bottom-20 text-blue-200/40 z-0">
            <Leaf size={300} strokeWidth={1} />
          </div>

          <div className="relative z-10 flex-1 lg:pr-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Leaf size={14} />
              Sustentabilidad
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-black text-gray-900 uppercase mb-6 leading-tight">
              Material REPREVE®
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Hilo de poliéster fabricado 100% a partir de botellas de plástico recicladas. Logramos una reducción de impacto drástica frente al poliéster virgen, manteniendo la máxima calidad industrial.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-50 text-center flex-1 min-w-[130px]">
              <div className="font-display text-5xl font-black text-primary mb-2">-66%</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Energía</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-50 text-center flex-1 min-w-[130px]">
              <div className="font-display text-5xl font-black text-primary mb-2">-50%</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Agua</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-50 text-center flex-1 min-w-[130px]">
              <div className="font-display text-5xl font-black text-primary mb-2">-34%</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Gases</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
