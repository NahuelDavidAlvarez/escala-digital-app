import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const services = [
    {
      title: 'Marketing Digital',
      description:
        'Estrategias personalizadas para hacer crecer tu presencia digital y alcanzar nuevas alturas en el mercado.',
      icon: '📈'
    },
    {
      title: 'Desarrollo Web',
      description:
        'Sitios web modernos y responsivos que reflejan la esencia de tu marca con tecnología de vanguardia.',
      icon: '💻'
    },
    {
      title: 'SEO & Analytics',
      description:
        'Optimización para motores de búsqueda y análisis de datos para escalar tu negocio de manera inteligente.',
      icon: '🔍'
    },
    {
      title: 'Branding',
      description:
        'Construimos identidades de marca sólidas que conectan emocionalmente con tu audiencia objetivo.',
      icon: '🎨'
    }
  ]

  /*   const values = [
    {
      title: 'Innovación',
      description:
        'Utilizamos las últimas tecnologías y tendencias para mantener a nuestros clientes a la vanguardia.'
    },
    {
      title: 'Resultados',
      description:
        'Nos enfocamos en métricas reales y ROI medible para garantizar el crecimiento de tu negocio.'
    },
    {
      title: 'Transparencia',
      description:
        'Comunicación clara y reportes detallados en cada etapa del proceso.'
    },
    {
      title: 'Excelencia',
      description:
        'Buscamos la perfección en cada proyecto, sin importar su tamaño o complejidad.'
    }
  ] */

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
          {/* Mountain SVG */}
          <svg
            className="absolute bottom-0 w-full h-96"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
              d="M0,400 L0,300 L200,110 L400,180 L600,30 L800,130 L1000,1 L1200,90 L1200,500 Z"
              fill="url(#mountainGradient)"
              stroke="rgba(56, 189, 248, 0.5)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="mountainGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
                <stop offset="100%" stopColor="rgba(15, 23, 42, 0.8)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center z-10 px-6 max-w-4xl"
        >
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Escala
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-accent block"
            >
              Digital
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Llevamos tu negocio a nuevas alturas con estrategias digitales
            innovadoras
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(56, 189, 248, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Comenzar Ahora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Ver Servicios
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales de marketing digital diseñadas para impulsar
              tu crecimiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre Mí
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce la historia detrás de Escala Digital y mi pasión por
              transformar negocios
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
                >
                  {/* Placeholder para la foto - aquí puedes cambiar la imagen */}
                  <div className="w-full h-full bg-gradient-to-br from-primary to-slate-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">👨‍💼</div>
                      <p className="text-lg font-medium">Tu Foto Aquí</p>
                    </div>
                  </div>

                  {/* Puedes reemplazar el div anterior con una imagen real así: */}
                  {/* <img 
                    src="/path-to-your-photo.jpg" 
                    alt="Foto profesional"
                    className="w-full h-full object-cover"
                  /> */}
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full opacity-20"
                ></motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full opacity-30"
                ></motion.div>
              </div>
            </motion.div>

            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">
                  David Nahuel Alvarez
                </h3>
                <p className="text-xl text-accent font-semibold mb-6">
                  Fundador
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Con más de 10 años de experiencia en el mundo del marketing
                  digital, he tenido el privilegio de ayudar a más de 200
                  empresas a transformar su presencia online y alcanzar sus
                  objetivos de crecimiento.
                </p>

                <p>
                  Mi pasión por la tecnología y el marketing comenzó durante el
                  avance de mi carrera laboral, donde descubrí el poder de
                  combinar la creatividad con el análisis de datos para generar
                  resultados extraordinarios.
                </p>

                <p>
                  Fundé Escala Digital con la visión de democratizar el acceso a
                  estrategias de marketing de alto nivel, especialmente para
                  Autonomos, PyMEs y emprendedores que buscan competir en el
                  mercado digital actual, mi servicio incluye un asesoramiento
                  constante y estrategias de evolucion de acuerdo al rubro y al
                  mercado, con un criterio enfocado en escalar tu negocio
                </p>
              </div>

              {/* Estadísticas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">200+</div>
                  <div className="text-sm text-gray-600">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">8+</div>
                  <div className="text-sm text-gray-600">Años</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">95%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </motion.div>

              {/* Certificaciones o habilidades */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-6"
              >
                <h4 className="font-semibold text-primary mb-3">
                  Especialidades:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Google Ads',
                    'Facebook Ads',
                    'SEO',
                    'Analytics',
                    'Automation',
                    'Branding'
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              ¿Listo para Escalar?
            </h2>
            <p className="text-xl text-primary/80 mb-8">
              Comienza tu transformación digital hoy y lleva tu negocio al
              siguiente nivel
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contacta con Nosotros
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
