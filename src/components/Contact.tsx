import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'

export function Contact() {
  const contact = {
    email: 'davidnahuelalvarez@gmail.com',
    phone: '1166629173',
    address: 'Buenos Aires, Argentina'
  }

  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000) // Ocultar el mensaje después de 2 segundos
  }

  return (
    <section id="contact" className="py-12 bg-primary-focus">
      <div className="max-w-3xl mx-auto text-center px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-base-100 mb-6">
            Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 mt-12 text-base-100/80 text-lg md:text-xl">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <div className="flex flex-col space-y-4">
                <div
                  onClick={handleCopyEmail}
                  className="block text-base-100 hover:text-accent transition-colors duration-300 cursor-pointer relative"
                >
                  <div className="flex items-center justify-center md:justify-start">
                    <FaEnvelope className="text-primary mr-2" />{' '}
                    <span>{contact.email}</span>
                    <AnimatePresence>
                      {copied && (
                        <motion.span
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: -40 }}
                          exit={{ opacity: 0, y: -60 }}
                          transition={{ duration: 0.3 }}
                          className="absolute text-base text-white whitespace-nowrap"
                        >
                          Copiado!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="block text-base-100 hover:text-accent transition-colors duration-300"
                >
                  <div className="flex items-center justify-center md:justify-start">
                    <FaPhone className="text-primary mr-2" />{' '}
                    <span>{contact.phone}</span>
                  </div>
                </a>
                <p className="flex items-center justify-center md:justify-start">
                  <FaMapMarkerAlt className="text-primary mr-2" />{' '}
                  {contact.address}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-center">
              <h3 className="text-2xl font-semibold mb-4">Redes Sociales</h3>
              <div className="flex space-x-6 text-base-100">
                <a
                  href="#"
                  className="hover:text-accent transition-colors duration-300"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nahuel-david-alvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  <FaLinkedinIn className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-base-100/80 text-xs text-center">
            <p className="mb-2">
              Tu visión, nuestra estrategia. Resultados que escalan.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Refuerzo Digital. Todos los
              derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
