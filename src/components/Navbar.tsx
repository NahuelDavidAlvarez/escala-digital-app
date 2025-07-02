import { useRef, useEffect, useState } from 'react'

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element && navRef.current) {
      const navbarHeight = navRef.current.offsetHeight
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false) // Close mobile menu after clicking a link
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav ref={navRef} className="bg-primary text-white py-4 px-4 sm:px-6 lg:px-8 shadow-md sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        {/* Logo/Título a la izquierda */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-3 hover:text-accent transition-colors cursor-pointer"
        >
          <img
            src="/EscalaDigital.png"
            alt="Escala Digital Logo"
            className="w-16 h-16 object-contain"
          />
          <span className="text-xl font-bold">Escala Digital</span>
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
          <button onClick={toggleMobileMenu} className="text-white hover:text-accent transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
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
