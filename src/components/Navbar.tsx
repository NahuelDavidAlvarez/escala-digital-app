import { useRef, useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element && navRef.current) {
      const navbarHeight = navRef.current.offsetHeight
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false) // cierra el menu hamburguesa despues de hacer click
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav
      ref={navRef}
      className="bg-primary text-base-100 py-4 px-4 sm:px-6 lg:px-8 shadow-md sticky top-0 z-50"
    >
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        {/* Logo/Título a la izquierda */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-3 hover:text-accent transition-colors cursor-pointer"
        >
          <img
            src="/RefuerzoDigital.png"
            alt="Refuerzo Digital Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold">Refuerzo Digital</span>
        </button>

        {/* Menú de navegación a la derecha */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
          >
            Contacto
          </button>
        </div>

        {/* Menú móvil (hamburguesa) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-base-100 hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 text-primary" />
            ) : (
              <FaBars className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[96px] left-0 w-full bg-primary shadow-lg py-4 flex flex-col items-center space-y-4 z-40">
          <button
            onClick={() => scrollToSection('hero')}
            className="block w-full text-center py-2 hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-center py-2 hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-center py-2 hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-center py-2 hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
          >
            Contacto
          </button>
        </div>
      )}
    </nav>
  )
}
