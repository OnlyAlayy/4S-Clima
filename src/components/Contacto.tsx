import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, User, Phone, Building, FileText, Send, CheckCircle2 } from 'lucide-react'

export default function Contacto() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="soumission" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute bottom-[0%] -left-[10%] w-[30%] h-[50%] rounded-full bg-emerald-400/5 blur-[100px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Info */}
          <motion.div 
            className="lg:w-5/12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <span className="font-display tracking-widest text-primary text-xs font-bold uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-primary rounded-full"></span>
                INICIEMOS SU PROYECTO
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
                Sumemos valor a su próxima obra.
              </h2>
              <p className="text-gray-600 text-[17px] leading-relaxed">
                Comuníquese con nuestro equipo de ingeniería. Desarrollamos soluciones térmicas a medida para proyectos de alta complejidad.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#f0f9ff] p-3 rounded-xl text-primary mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="font-display tracking-widest text-gray-400 text-[11px] font-bold uppercase block mb-2">
                    OFICINAS CENTRALES
                  </span>
                  <p className="text-gray-900 font-medium text-[15px] leading-relaxed">
                    Av. Córdoba 1432 8B,<br />
                    CABA, Buenos Aires
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#f0f9ff] p-3 rounded-xl text-primary mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="font-display tracking-widest text-gray-400 text-[11px] font-bold uppercase block mb-2">
                    CONTACTO DIRECTO
                  </span>
                  <a href="mailto:contacto@cuatroeseclima.com" className="text-gray-900 font-medium text-[15px] hover:text-primary transition-colors block mt-1">
                    contacto@cuatroeseclima.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="lg:w-7/12 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-primary-hover to-emerald-400"></div>
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-8">Déjenos su consulta</h3>
                    
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="flex flex-col gap-2 relative group">
                          <label className="font-display tracking-widest text-gray-500 text-[11px] font-bold uppercase ml-1">Nombre y Apellido</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                              <User size={18} />
                            </div>
                            <input 
                              type="text" 
                              required
                              placeholder="Juan Pérez"
                              className="w-full bg-slate-50/50 border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-gray-900 text-[15px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>
                        
                        {/* Phone Input */}
                        <div className="flex flex-col gap-2 relative group">
                          <label className="font-display tracking-widest text-gray-500 text-[11px] font-bold uppercase ml-1">Teléfono</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                              <Phone size={18} />
                            </div>
                            <input 
                              type="tel" 
                              required
                              placeholder="(11) 1234-5678"
                              className="w-full bg-slate-50/50 border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-gray-900 text-[15px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email Input */}
                        <div className="flex flex-col gap-2 relative group">
                          <label className="font-display tracking-widest text-gray-500 text-[11px] font-bold uppercase ml-1">Correo Electrónico</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                              <Mail size={18} />
                            </div>
                            <input 
                              type="email" 
                              required
                              placeholder="juan@empresa.com"
                              className="w-full bg-slate-50/50 border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-gray-900 text-[15px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>

                        {/* Sector Select */}
                        <div className="flex flex-col gap-2 relative group">
                          <label className="font-display tracking-widest text-gray-500 text-[11px] font-bold uppercase ml-1">Sector de Interés</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                              <Building size={18} />
                            </div>
                            <select className="w-full bg-slate-50/50 border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-gray-900 text-[15px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer">
                              <option value="">Seleccione un sector...</option>
                              <option value="salud">Salud y Áreas Críticas</option>
                              <option value="industria">Industria General</option>
                              <option value="frio">Frío Industrial</option>
                              <option value="farma">Industria Farmacéutica</option>
                              <option value="mantenimiento">Abonos de Mantenimiento</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Message Textarea */}
                      <div className="flex flex-col gap-2 relative group">
                        <label className="font-display tracking-widest text-gray-500 text-[11px] font-bold uppercase ml-1">Mensaje (Opcional)</label>
                        <div className="relative">
                          <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                            <FileText size={18} />
                          </div>
                          <textarea 
                            rows={4}
                            placeholder="Detalles de la obra, requerimientos técnicos..."
                            className="w-full bg-slate-50/50 border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-gray-900 text-[15px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                          ></textarea>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(29,78,216,0.39)] hover:shadow-[0_6px_20px_rgba(29,78,216,0.23)] hover:-translate-y-0.5 mt-4"
                      >
                        Enviar Mensaje <Send size={18} className="ml-1" />
                      </button>
                      
                      <div className="text-center mt-2">
                        <p className="text-[11px] font-medium text-gray-400 tracking-wide uppercase mb-1">
                          Respuesta garantizada dentro de las 24 horas hábiles
                        </p>
                        <p className="text-[10px] text-gray-400 max-w-xs mx-auto leading-tight">
                          Al enviar este formulario, usted acepta el tratamiento de sus datos personales acorde a las normativas de protección de datos vigentes (Ley 25.326).
                        </p>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="font-display font-bold text-3xl text-gray-900 mb-4">¡Mensaje enviado!</h3>
                    <p className="text-gray-500 text-[15px] max-w-sm mb-8">
                      Gracias por contactarse con 4S CLIMA. Un especialista de nuestro equipo de ingeniería se comunicará a la brevedad.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold text-sm hover:underline"
                    >
                      Enviar otra consulta
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
