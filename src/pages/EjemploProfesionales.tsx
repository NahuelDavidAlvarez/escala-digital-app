import React from 'react'
import { FaBalanceScale, FaGavel, FaUsers } from 'react-icons/fa'

interface EjemploProfesionalesProps {
  theme: {
    pageBg: string
    pageText: string
  }
}

const EjemploProfesionales: React.FC<EjemploProfesionalesProps> = ({
  theme
}) => {
  const areasDePractica = [
    {
      title: 'Derecho Penal',
      description: 'Defensa en casos de delitos y acusaciones.',
      icon: <FaGavel />
    },
    {
      title: 'Derecho Civil',
      description: 'Resolución de disputas entre particulares.',
      icon: <FaBalanceScale />
    },
    {
      title: 'Derecho de Familia',
      description: 'Asesoramiento en casos de divorcio, custodia, etc.',
      icon: <FaUsers />
    }
  ]

  const testimonios = [
    {
      nombre: 'Carlos González',
      testimonio:
        'El Dr. Cesar Justiniano manejó mi caso con una profesionalidad impecable. Su conocimiento y dedicación fueron clave para un resultado favorable.'
    },
    {
      nombre: 'Ana Rodríguez',
      testimonio:
        'Desde la primera consulta sentí que estaba en buenas manos. El Dr. Cesar Justiniano es un abogado honesto, claro y sumamente eficaz.'
    },
    {
      nombre: 'Martín Herrera',
      testimonio:
        'En un momento muy difícil, el Dr. Cesar Justiniano me brindó la tranquilidad y el respaldo que necesitaba. Su estrategia fue brillante y su trato, muy humano.'
    },
    {
      nombre: 'Laura Fernández',
      testimonio:
        'Resolvió mi conflicto con una rapidez y eficiencia que no esperaba. Un abogado que realmente se preocupa por sus clientes.'
    },
    {
      nombre: 'Jorge Sánchez',
      testimonio:
        'Su capacidad para explicar temas legales complejos de forma sencilla es admirable. Me sentí seguro y bien representado.'
    },
    {
      nombre: 'Sofía Torres',
      testimonio:
        'Contratar al Dr. Cesar Justiniano fue la mejor decisión. Logró un acuerdo favorable para mi empresa, protegiendo nuestros intereses.'
    }
  ]

  return (
    <div className={`${theme.pageBg} ${theme.pageText}`}>
      {/* Hero Section */}
      <section
        className="relative text-center py-40 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/abogado-ejemplo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-white font-serif">
            Dr. Cesar Justiniano
          </h1>
          <p className="text-xl mb-8 text-white font-body">
            Asesoramiento Legal con Integridad y Experiencia
          </p>
          <button className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-600">
            Consulta sin cargo
          </button>
        </div>
      </section>

      {/* Áreas de Práctica */}
      <section id="areas-de-practica" className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif">
          Áreas de Práctica
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {areasDePractica.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl text-amber-700 mb-4 mx-auto">
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 font-serif">
                {area.title}
              </h3>
              <p className="text-gray-600 font-body">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif">
            Contacto
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulario */}
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-bold mb-2 font-body"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-bold mb-2 font-body"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-bold mb-2 font-body"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-lg"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-600 font-body"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>

            {/* Mapa e Info */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-serif">
                Ubicación y Contacto
              </h3>
              <div className="space-y-4 text-gray-600 font-body">
                <p>
                  <strong>Dirección:</strong> Av. Corrientes 1234, Piso 5, CABA
                </p>
                <p>
                  <strong>Teléfono:</strong> (011) 5555-1234
                </p>
                <p>
                  <strong>Email:</strong> contacto@drcesarjustiniano.com
                </p>
              </div>
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.01688818641!2d-58.3837595847703!3d-34.60373888045948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x5338697b6e86164f!2sObelisco!5e0!3m2!1ses-419!2sar!4v1678886 Obelisco Buenos Aires!5e0!3m2!1ses-419!2sar!4v1678886938998!5m2!1ses-419!2sar"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EjemploProfesionales