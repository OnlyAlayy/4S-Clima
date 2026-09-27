import { motion } from 'framer-motion'
import { ArrowRight, Building2, Utensils, Factory } from 'lucide-react'

const categories = [
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

export default function ServiciosExtra() {
  return (
    <section id="depannage" className="py-24 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="font-sans text-primary text-lg font-bold mb-2">
            Servicios
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl text-gray-800 leading-tight">
            ¿Qué Ofrecemos?
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 overflow-hidden py-2">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center"
          >
            <div className="mb-6 flex flex-col items-center justify-center">
              <span className="font-sans font-bold text-gray-400 text-[10px] leading-tight tracking-widest uppercase">
                CLIMA 4S
              </span>
              <span className="font-sans font-bold text-primary text-sm leading-tight tracking-widest uppercase mt-1">
                HVAC
              </span>
            </div>
            
            <h3 className="font-sans font-black text-xl text-gray-900 mb-4">
              Aire Acondicionado Central
            </h3>
            <p className="font-sans text-gray-500 mb-8 leading-relaxed text-sm flex-grow">
              Manejan Chillers, Roof Top, sistemas DX en general y VRV, ofreciendo cobertura integral.
            </p>
            
            <a href="#soumission" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary-hover transition-colors mt-auto">
              Saber más <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center"
          >
            <div className="mb-6 flex flex-col items-center justify-center">
              <span className="font-sans font-bold text-gray-400 text-[10px] leading-tight tracking-widest uppercase">
                CLIMA 4S
              </span>
              <span className="font-sans font-bold text-primary text-sm leading-tight tracking-widest uppercase mt-1">
                FRÍO
              </span>
            </div>
            
            <h3 className="font-sans font-black text-xl text-gray-900 mb-4">
              Frío Industrial
            </h3>
            <p className="font-sans text-gray-500 mb-8 leading-relaxed text-sm flex-grow">
              Montaje de cámaras frigoríficas y centrales de frío operadas con Amoníaco (NH3) y freones.
            </p>
            
            <a href="#soumission" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary-hover transition-colors mt-auto">
              Saber más <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center"
          >
            <div className="mb-6 flex flex-col items-center justify-center">
              <span className="font-sans font-bold text-gray-400 text-[10px] leading-tight tracking-widest uppercase">
                CLIMA 4S
              </span>
              <span className="font-sans font-bold text-primary text-sm leading-tight tracking-widest uppercase mt-1">
                ABONOS
              </span>
            </div>
            
            <h3 className="font-sans font-black text-xl text-gray-900 mb-4">
              Mantenimiento
            </h3>
            <p className="font-sans text-gray-500 mb-8 leading-relaxed text-sm flex-grow">
              Servicio preventivo y correctivo para distintos sistemas HVAC, gerenciado bajo la plataforma PROTECNUS.
            </p>
            
            <a href="#soumission" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary-hover transition-colors mt-auto">
              Saber más <ArrowRight size={14} />
            </a>
          </motion.div>

        </div>

        {/* Stats Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white rounded-3xl py-8 px-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-0 mb-20"
        >
          <div className="text-center w-full md:w-1/3">
            <span className="block font-sans font-black text-2xl text-primary mb-2">31</span>
            <span className="font-sans text-[11px] text-gray-600">Años de<br/>trayectoria</span>
          </div>
          <div className="text-center w-full md:w-1/3">
            <span className="block font-sans font-black text-2xl text-primary mb-2">+25</span>
            <span className="font-sans text-[11px] text-gray-600">Compañías e<br/>instituciones</span>
          </div>
          <div className="text-center w-full md:w-1/3">
            <span className="block font-sans font-black text-2xl text-primary mb-2">3+</span>
            <span className="font-sans text-[11px] text-gray-600">Áreas de<br/>especialización</span>
          </div>
        </motion.div>

        {/* Mural de Marcas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 mb-20 text-center w-full"
        >
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-gray-800 mb-16">
            Empresas que confían en nosotros
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-24 px-4">
            {[
              "Colegio Mekhitaristalogo.webp", "LaAnonimaLogo.webp", "MerDei-Logo.webp", "VillaDelSur.webp",
              "amcorLogo.webp", "americancordobalogo.webp", "arredologo.webp", "boulanlogo.webp",
              "breviss.webp", "caramelo.webp", "casahospitalramosmejia.webp", "drogueriameta.webp",
              "fabricsushilogo.webp", "gangahomelogo.webp", "globoaveslogo.webp", "holidays lnn ezeiza.webp",
              "hospitalsaladillo-logo.webp", "labsteing.webp", "logo-fundaleu.webp", "logo-vector-cemic.webp", "marriotlogo (1).webp",
              "megalabs.webp", "mirgorlogo.webp", "ness.webp", "porquisimologo.webp", "revolver.webp",
              "tigremoradologo.webp", "tvpublica.webp"
            ].map((marca, i) => {
              const isWhiteLogo = marca === "casahospitalramosmejia.webp";
              
              // Ajuste manual de escalas para equilibrar el "peso visual" de las imágenes 
              // que traen mucho relleno (padding) transparente o proporciones extremas desde el archivo original.
              const scaleMap: Record<string, string> = {
                "caramelo.webp": "scale-[0.65] hover:scale-[0.75]", // Era gigante
                "tvpublica.webp": "scale-[0.75] hover:scale-[0.85]", // Era muy grande
                "boulanlogo.webp": "scale-90 hover:scale-100", 
                "globoaveslogo.webp": "scale-90 hover:scale-100",
                "casahospitalramosmejia.webp": "scale-[2.5] hover:scale-[2.6]", // Era diminuto
                "hospitalsaladillo-logo.webp": "scale-[2.2] hover:scale-[2.3]", // Era diminuto
                "mirgorlogo.webp": "scale-[1.8] hover:scale-[1.9]", // Era diminuto
                "ness.webp": "scale-[1.8] hover:scale-[1.9]", // Era diminuto
                "porquisimologo.webp": "scale-[2.5] hover:scale-[2.6]", // Aún más grande
                "labsteing.webp": "scale-[2.2] hover:scale-[2.3]", // Era diminuto
                "revolver.webp": "scale-[1.8] hover:scale-[1.9]", // Era chico
                "americancordobalogo.webp": "scale-[2] hover:scale-[2.1]", // Era diminuto
                "arredologo.webp": "scale-[1.7] hover:scale-[1.8]", // Era chico
                "gangahomelogo.webp": "scale-125 hover:scale-[1.35]",
              };
              const hasCustomScale = !!scaleMap[marca];
              const scaleClass = scaleMap[marca] || "hover:scale-110";
              
              // Si NO tiene escala custom, le damos un tamaño base más grande.
              // Si YA tiene escala custom (agrandada o achicada), le mantenemos el tamaño base original 
              // para no romper el equilibrio visual logrado.
              const baseImgClass = hasCustomScale 
                ? "max-h-12 md:max-h-16 max-w-[140px] md:max-w-[180px]" 
                : "max-h-16 md:max-h-20 max-w-[160px] md:max-w-[220px]";

              if (isWhiteLogo) {
                // San Juan de Dios tiene escala custom (agrandada), mantiene su base original chica
                return (
                  <div
                    key={i}
                    title="Casa Hospital San Juan de Dios"
                    className={`h-10 md:h-12 w-auto min-w-[120px] md:min-w-[150px] drop-shadow-sm transition-transform duration-300 bg-blue-800 opacity-90 hover:opacity-100 ${scaleClass}`}
                    style={{
                      WebkitMaskImage: `url('/Marcas/${marca}')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskPosition: 'center',
                      WebkitMaskRepeat: 'no-repeat',
                      maskImage: `url('/Marcas/${marca}')`,
                      maskSize: 'contain',
                      maskPosition: 'center',
                      maskRepeat: 'no-repeat'
                    }}
                  />
                )
              }

              return (
                <img 
                  key={i}
                  src={`/Marcas/${marca}`}
                  alt="Cliente CLIMA 4S"
                  className={`${baseImgClass} w-auto object-contain drop-shadow-sm transition-transform duration-300 ${scaleClass}`}
                />
              )
            })}
          </div>
        </motion.div>

        {/* Categories Grid (Moved from Avis) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((review, i) => {
            const Icon = review.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="mb-8 w-14 h-14 bg-[#f0f9ff] text-primary flex items-center justify-center rounded-2xl border-2 border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-10">
                    {review.text}
                  </p>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-display font-bold text-gray-900 text-lg mb-1">
                    {review.author}
                  </h4>
                  <p className="text-primary text-xs tracking-widest uppercase font-bold">
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
