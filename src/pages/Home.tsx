import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Contact } from '../components/Contact'

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
      title: 'Desarrollo Web',
      description:
        'Sitios web modernos y responsivos que reflejan la esencia de tu marca con tecnología de vanguardia.',
      icon: '💻'
    },
    {
      title: 'Marketing Digital',
      description:
        'Estrategias personalizadas para hacer crecer tu presencia digital y alcanzar nuevas alturas en el mercado.',
      icon: '📈'
    },
    {
      title: 'SEO & Analiticas',
      description:
        'Optimización para motores de búsqueda y análisis de datos para escalar tu negocio de manera inteligente.',
      icon: '🔍'
    },
    {
      title: 'Diseño',
      description:
        'Construimos identidades de marca sólidas que conectan emocionalmente con tu audiencia objetivo.',
      icon: '🎨'
    }
  ]

  const servicesRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 scroll-mt-64"
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
              onClick={() => window.open('https://wa.me/5491166629173', '_blank')}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(56, 189, 248, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Comenzar Ahora
            </motion.button>
            <motion.button
              onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-accent text-accent px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
            >
              Ver Servicios
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 bg-white scroll-mt-20">
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-accent/20 backdrop-blur-sm"
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
        className="py-20 bg-gradient-to-br from-gray-50 to-white scroll-mt-20"
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
              Te cuento mi historia y mis experiencias
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/davidfundador.jpg"
                  alt="David Nahuel Alvarez - Fundador de Escala Digital"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
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
                  Durante más de diez años trabajé en empresas del mundo
                  digital, financiero y del marketing, especialmente en bancos
                  como BBVA y Supervielle. Esa experiencia me permitió
                  comprender en profundidad los flujos de trabajo y la
                  organización interna de grandes equipos. Con ese conocimiento,
                  decidí emprender para aplicar todo lo aprendido en ofrecer
                  soluciones prácticas y efectivas al mercado actual. Mi
                  filosofía se basa en aumentar la presencia online de mis
                  clientes y ayudarlos a alcanzar objetivos reales de
                  crecimiento.
                </p>
                <p>
                  Hoy en día existen muchas herramientas y tecnologías para
                  tener presencia en internet. Si bien soy desarrollador y tengo
                  un perfil técnico, evito entrar en tecnicismos innecesarios.
                  Lo importante es elegir la herramienta adecuada para cada
                  objetivo. Cuento con un abanico de soluciones amplio y
                  flexible, encontraremos la opción más conveniente para tu
                  caso.
                </p>
                <p>
                  Mis servicios están pensados para profesionales, autónomos,
                  comercios, empresas y emprendedores que quieren competir en el
                  mercado digital actual. Ofrezco un acompañamiento constante,
                  con estrategias adaptadas a cada rubro y a cada etapa del
                  negocio, siempre con una mirada puesta en escalar y
                  evolucionar.
                </p>
              </div>

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
                    'Creacion de Webs',
                    'Diseño',
                    'Wordpress',
                    'WooCommerce',
                    'Shopify',
                    'SEO',
                    'Google Ads',
                    'Creacion de Apps',
                    'Redes Sociales',
                    'Facebook Ads',
                    'Campañas Estrategicas'
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

      {/* Contact Section */}
      <Contact />
    </div>
  )
}
