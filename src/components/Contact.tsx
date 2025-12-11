import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt
} from 'react-icons/fa'

export function Contact() {
  const contact = {
    email: 'contacto@alvasoluciones.cloud',
    address: 'Buenos Aires, Argentina',
    phone: '5491166629173'
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
    <section id="contact" className="py-24 bg-primary-focus">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-base-100 mb-6">
            Contacto
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center mt-12 text-base-100/80 text-lg md:text-xl gap-6 md:gap-12 flex-wrap">
            <div
              onClick={handleCopyEmail}
              className="block text-base-100 hover:text-secondary transition-colors duration-300 cursor-pointer relative"
            >
              <div className="flex items-center justify-center">
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
              href={`https://wa.me/${contact.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base-100 hover:text-secondary transition-colors duration-300"
            >
              <div className="flex items-center justify-center">
                <FaWhatsapp className="text-primary mr-2" />{' '}
                <span className="capitalize">Telefono</span>
              </div>
            </a>
            <p className="flex items-center justify-center text-base-100 hover:text-secondary transition-colors duration-300">
              <FaMapMarkerAlt className="text-primary mr-2" />{' '}
              {contact.address}
            </p>
          </div>
          <div className="mt-12 text-base-100/80 text-xs text-center">
            <p className="mb-2">
              Tu visión, nuestra estrategia. Resultados que escalan.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Alva Soluciones. Todos los
              derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

