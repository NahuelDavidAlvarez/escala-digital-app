import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Contact } from '../components/Contact'
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaRobot
} from 'react-icons/fa'

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
      icon: <FaLaptopCode className="text-4xl text-primary" />
    },

    {
      title: 'Aplicaciones',
      description:
        'Apps móviles intuitivas y potentes que conectan con tus usuarios en cualquier momento y lugar.',
      icon: <FaMobileAlt className="text-4xl text-primary" />
    },
    {
      title: 'Automatizaciones',
      description:
        'Optimizamos tus procesos operativos mediante flujos inteligentes para ahorrar tiempo y recursos.',
      icon: <FaRobot className="text-4xl text-primary" />
    },
    {
      title: 'Diseño',
      description:
        'Construimos identidades de marca sólidas que conectan emocionalmente con tu audiencia objetivo.',
      icon: <FaPaintBrush className="text-4xl text-primary" />
    }
  ]

  const servicesRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-base-200 to-primary scroll-mt-48"
      >
        {/* Overlay for intermediate darkness */}
        <div className="absolute inset-0 bg-primary opacity-30"></div>
        {/* Animated Background */}

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
            className="text-6xl md:text-8xl font-bold text-base-100 mb-6"
          >
            Servicios
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-base-100 block"
            >
              Digitales
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-primary mb-8 leading-relaxed"
          >
            Refuerzamos tu presencia digital con soluciones innovadoras, creativas y profesionales.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() =>
                window.open('https://wa.me/5491166629173', '_blank')
              }
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-base-100 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-[0_10px_25px_rgba(54,69,79,0.3)] transition-all duration-300"
            >
              Hablemos
            </motion.button>
            <motion.button
              onClick={() =>
                servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-base-100 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-[0_10px_25px_rgba(54,69,79,0.3)] transition-all duration-300"
            >
              Servicios
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="py-20 bg-base-100 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Servicios
            </h2>
            <p className="text-xl text-neutral max-w-3xl mx-auto">
              Soluciones integrales de marketing digital diseñadas para impulsar
              tu crecimiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-200 hover:border-accent/20 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* New About Section - Alva Soluciones */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-base-200 to-base-100 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Header - Alva Soluciones */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-xl text-neutral max-w-4xl mx-auto leading-relaxed">
              En <span className="font-bold text-primary">Alva Soluciones</span>,
              somos una startup de servicios digitales enfocada en transformar ideas en activos digitales rentables.
              Combinamos tecnología de vanguardia con visión estratégica para impulsar el crecimiento de negocios, emprendedores y empresas.
            </p>
          </motion.div>
          {/* Pillars / Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg border-t-4 border-primary text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Innovación</h3>
              <p className="text-neutral">Aplicamos las últimas tecnologías y tendencias para mantener a nuestros clientes por delante de la competencia.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg border-t-4 border-primary text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Estrategia</h3>
              <p className="text-neutral">No solo desarrollamos software; creamos soluciones alineadas con objetivos comerciales claros y medibles.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-base-100 p-8 rounded-2xl shadow-lg border-t-4 border-primary text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Calidad</h3>
              <p className="text-neutral">Código limpio, diseño premium y una experiencia de usuario optimizada son nuestros estándares no negociables.</p>
            </motion.div>
          </div>

          {/* Founder Section */}
          <div className="bg-base-100 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="h-full min-h-[300px] p-0 md:p-8 flex items-center justify-center"
              >
                <img
                  src="/NahuelDavidAlvarez.jpg"
                  alt="David Nahuel Alvarez - Fundador"
                  className="w-full max-w-sm h-auto object-cover object-center rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Text Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 lg:p-16 space-y-6"
              >
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    Nahuel David Alvarez
                  </h3>
                  <p className="text-xl text-accent font-medium">Desarrollador Web y Fundador</p>
                </div>

                <div className="space-y-4 text-primary opacity-80 leading-relaxed font-sans">
                  <p>
                    Con más de diez años de trayectoria en el sector digital y corporativo, incluyendo colaboraciones estratégicas en la industria bancaria y grandes empresas, David fundó Alva Soluciones para cerrar la brecha entre la complejidad tecnológica y el éxito empresarial.
                  </p>
                  <p>
                    "Entendemos que detrás de cada desarrollo hay un negocio que necesita resultados. Nuestra misión es ser el socio tecnológico que traduce esa necesidad en sistemas robustos y experiencias digitales memorables."
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">Full Stack Development</span>
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">Tech Leadership</span>
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">Digital Strategy</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

<section
  id="about"
  className="py-20 bg-gradient-to-br from-base-200 to-base-100 scroll-mt-20"
>
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    {/* Header - Alva Soluciones */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        Sobre Nosotros
      </h2>
      <p className="text-xl text-neutral max-w-4xl mx-auto leading-relaxed">
        En <span className="font-bold text-primary">Alva Soluciones</span>,
        somos una startup de servicios digitales enfocada en transformar ideas en activos digitales rentables.
        Combinamos tecnología de vanguardia con visión estratégica para impulsar el crecimiento de negocios, emprendedores y empresas.
      </p>
    </motion.div>

    {/* Pillars / Values Section */}
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-base-100 p-8 rounded-2xl shadow-lg border-t-4 border-primary text-center"
      >
        <h3 className="text-2xl font-bold text-primary mb-4">Innovación</h3>
        <p className="text-neutral">Aplicamos las últimas tecnologías y tendencias para mantener a nuestros clientes por delante de la competencia.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-base-100 p-8 rounded-2xl shadow-lg border-t-4 border-primary text-center"
      >
        <h3 className="text-2xl font-bold text-primary mb-4">Estrategia</h3>
        <p className="text-neutral">No solo desarrollamos software; creamos soluciones alineadas con objetivos comerciales claros y medibles.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-base-100 p-8 rounded-2xl shadow-lg border-t-4 border-primary text-center"
      >
        <h3 className="text-2xl font-bold text-primary mb-4">Calidad</h3>
        <p className="text-neutral">Código limpio, diseño premium y una experiencia de usuario optimizada son nuestros estándares no negociables.</p>
      </motion.div>
    </div>

    {/* Founder Section */}
    <div className="bg-base-100 rounded-3xl shadow-xl overflow-hidden">
      <div className="grid lg:grid-cols-2 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-full min-h-[300px] p-0 md:p-8 flex items-center justify-center"
        >
          <img
            src="/NahuelDavidAlvarez.jpg"
            alt="David Nahuel Alvarez - Fundador"
            className="w-full max-w-sm h-auto object-cover object-center rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 lg:p-16 space-y-6"
        >
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              Nahuel David Alvarez
            </h3>
            <p className="text-xl text-accent font-medium">Desarrollador Web y Fundador</p>
          </div>

          <div className="space-y-4 text-primary opacity-80 leading-relaxed font-sans">
            <p>
              Con más de diez años de trayectoria en el sector digital y corporativo, incluyendo colaboraciones estratégicas en la industria bancaria y grandes empresas, David fundó Alva Soluciones para cerrar la brecha entre la complejidad tecnológica y el éxito empresarial.
            </p>
            <p>
              "Entendemos que detrás de cada desarrollo hay un negocio que necesita resultados. Nuestra misión es ser el socio tecnológico que traduce esa necesidad en sistemas robustos y experiencias digitales memorables."
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-2">
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">Full Stack Development</span>
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">Tech Leadership</span>
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">Digital Strategy</span>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

{/* Contact Section */ }
<Contact />
