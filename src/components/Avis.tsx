import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

import { Building2, Utensils, Factory } from 'lucide-react'

const reviews = [
  {
    icon: Building2,
    text: "CEMIC, FUNDALEU, Sanatorio Mater Dei, Hospital Saladillo, Hospital San Juan de Dios, Breviss, Laboratorio Steigen, Droguería Meta, Laboratorio Megalabs.",
    author: "Salud",
    location: "Áreas Críticas y Farmacéutica"
  },
  {
    icon: Utensils,
    text: "Holliday Inn Ezeiza, Amerian Córdoba, Marriott Ezeiza, Fabric Sushi, Boulan, Tigre Morado, Porquísimo, Caramelo, Revolver.",
    author: "Hotelería y Gastronomía",
    location: "Climatización y Confort"
  },
  {
    icon: Factory,
    text: "Globoaves, La Anónima, Amcor Pet Packaging, Villa del Sur, Arredo, Ganga Home, Mirgor, NESS, Televisión Pública, Colegio Mekhitarista.",
    author: "Industria y Retail",
    location: "Procesos y Grandes Superficies"
  }
]

// StarRating removed

export default function Avis() {
  return (
    <section id="avis" className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-display tracking-widest text-primary text-[11px] font-bold uppercase mb-4 flex items-center gap-4">
              <span className="w-4 h-[1px] bg-primary"></span>
              CONFIANZA QUE RESPALDA CADA PROYECTO
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
              Empresas que confían en nosotros
            </h2>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="font-display font-bold text-5xl md:text-6xl text-primary leading-none">
              +25
            </span>
            <div className="flex flex-col gap-1 mt-2">
              <span className="font-bold text-gray-900 leading-none">Compañías e Instituciones</span>
              <span className="text-sm font-medium text-gray-500 tracking-tight">
                confían en 4S Clima para sus proyectos críticos.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {reviews.map((review, i) => {
            const Icon = review.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="mb-6 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded">
                    <Icon size={24} />
                  </div>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                    {review.text}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-lg">
                    {review.author}
                  </h4>
                  <p className="text-gray-500 text-sm font-mono tracking-tight">
                    {review.location}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>


      </div>
    </section>
  )
}
