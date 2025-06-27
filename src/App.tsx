import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Services } from './pages/Services.jsx'
import { Contact } from './pages/Contact.jsx'
import './index.css'

type PageWrapperProps = {
  children: ReactNode
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-6"
    >
      {children}
    </motion.div>
  )
}

export function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Escala Digital</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Inicio
        </Link>
        <Link to="/about" className="hover:underline">
          Nosotros
        </Link>
        <Link to="/services" className="hover:underline">
          Servicios
        </Link>
        <Link to="/contact" className="hover:underline">
          Contacto
        </Link>
      </div>
    </nav>
  )
}
