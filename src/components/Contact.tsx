import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

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
    <section id="contact" className="py-12 bg-accent">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24 mt-12 text-primary/80 text-lg md:text-xl">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-accent-light transition-colors duration-300">Facebook</a>
                <a href="#" className="hover:text-accent-light transition-colors duration-300">Instagram</a>
                <a href="#" className="hover:text-accent-light transition-colors duration-300">LinkedIn</a>
              </div>
            </div>

            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div
                onClick={handleCopyEmail}
                className="mb-4 block text-primary hover:text-accent-light transition-colors duration-300 cursor-pointer relative"
              >
                <div className="flex items-center justify-center">
                  <span>📧 {contact.email}</span>
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
                className="mb-4 block text-primary hover:text-accent-light transition-colors duration-300"
              >
                <p>📱 {contact.phone}</p>
              </a>
              <p>📍 {contact.address}</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-primary/80 text-xs mb-2 text-center md:text-right">
                Tu visión, nuestra estrategia. Resultados que escalan.
              </p>
              <p className="text-primary/80 text-xs text-center md:text-right">
                &copy; {new Date().getFullYear()} Escala Digital. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
