import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type WhatsappWidgetProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function WhatsAppWidget({ size = 'md' }: WhatsappWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const phoneNumber = '5491166629173' // Tu número con código de país Argentina

  // Configuración de tamaños
  const sizeConfig = {
    sm: {
      button: 'w-12 h-12',
      icon: 'w-5 h-5',
      closeIcon: 'w-4 h-4',
      pulseIcon: 'w-6 h-6'
    },
    md: {
      button: 'w-14 h-14',
      icon: 'w-7 h-7',
      closeIcon: 'w-5 h-5',
      pulseIcon: 'w-6 h-6'
    },
    lg: {
      button: 'w-16 h-16',
      icon: 'w-8 h-8',
      closeIcon: 'w-6 h-6',
      pulseIcon: 'w-7 h-7'
    },
    xl: {
      button: 'w-20 h-20',
      icon: 'w-10 h-10',
      closeIcon: 'w-7 h-7',
      pulseIcon: 'w-8 h-8'
    }
  }

  const currentSize = sizeConfig[size]

  // Asegurar que el componente esté montado correctamente
  useEffect(() => {
    setIsMounted(true)

    // Mostrar el widget después de unos segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const openWhatsApp = (message = '') => {
    const defaultMessage =
      message ||
      '¡Hola! Me interesa conocer más sobre los servicios de Escala Digital. ¿Podrían ayudarme?'
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const quickMessages = [
    {
      text: 'Quiero información sobre marketing digital',
      message:
        '¡Hola! Me interesa conocer más sobre sus servicios de marketing digital. ¿Podrían brindarme más información?'
    },
    {
      text: 'Necesito una página web',
      message:
        '¡Hola! Estoy buscando desarrollar una página web para mi negocio. ¿Me pueden ayudar?'
    },
    {
      text: 'Consulta sobre SEO',
      message:
        '¡Hola! Me gustaría saber más sobre sus servicios de SEO y cómo pueden ayudar a posicionar mi negocio.'
    },
    {
      text: 'Solicitar presupuesto',
      message:
        '¡Hola! Me gustaría solicitar un presupuesto para sus servicios. ¿Podríamos coordinar una reunión?'
    }
  ]

  // No renderizar hasta que esté montado y visible
  if (!isMounted || !isVisible) return null

  return (
    <>
      {/* Contenedor principal con posicionamiento fijo mejorado */}
      <div className="fixed bottom-0 right-0 p-6 z-[9999] pointer-events-none">
        <div className="relative pointer-events-auto">
          {/* Chat popup - posicionado relativo al contenedor */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
                style={{
                  maxWidth: 'calc(100vw - 3rem)', // Evita desbordamiento en móviles
                  right: 0
                }}
              >
                {/* Header del chat */}
                <div className="bg-green-500 text-white p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">Escala Digital</h3>
                    <p className="text-xs opacity-90 truncate">
                      Responde rápidamente
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors flex-shrink-0"
                  >
                    <svg
                      className={currentSize.closeIcon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Contenido del chat */}
                <div className="p-4 max-h-96 overflow-y-auto">
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-700">
                      ¡Hola! 👋 Soy David de Escala Digital. ¿En qué puedo
                      ayudarte hoy?
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 font-medium">
                      Mensajes rápidos:
                    </p>
                    {quickMessages.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => openWhatsApp(item.message)}
                        className="w-full text-left p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm text-gray-700 border border-gray-200 hover:border-green-300"
                      >
                        {item.text}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => openWhatsApp()}
                    className="w-full mt-4 bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    <span>Abrir WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón principal */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 200,
              delay: 0.2 // Pequeño delay para asegurar renderizado correcto
            }}
            className="relative"
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${currentSize.button} bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden`}
            >
              {/* Indicador de pulse */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-green-400 rounded-full opacity-30"
              />

              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${currentSize.closeIcon} relative z-10`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="whatsapp"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${currentSize.icon} relative z-10`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Tooltip - solo en desktop */}
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap pointer-events-none hidden md:block"
              >
                ¿Necesitas ayuda?
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45" />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  )
}
