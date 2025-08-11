import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Navbar } from './components/Navbar';
import NavbarEjemplo from './components/NavbarEjemplo';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import './index.css';
import EjemploEcommerce from './pages/ejemploecommerce';
import EjemploProfesionales from './pages/ejemploprofesionales';
import EjemploInstitucional from './pages/ejemploinstitucional';

// Define color themes for examples
const themes = {
  ecommerce: {
    bgColor: 'bg-blue-800',
    textColor: 'text-white',
    pageBg: 'bg-blue-50',
    pageText: 'text-blue-900',
  },
  profesionales: {
    bgColor: 'bg-amber-800',
    textColor: 'text-white',
    pageBg: 'bg-amber-50',
    pageText: 'text-amber-900',
    logoText: 'Dr. Cesar Justiniano',
  },
  institucional: {
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    pageBg: 'bg-gray-50',
    pageText: 'text-gray-900',
  },
};

type PageWrapperProps = {
  children: ReactNode;
};

// A new component to handle the layout switching
function AppLayout() {
  const location = useLocation();
  const isExamplePage = location.pathname.startsWith('/ejemplo-');
  
  let theme = null;
  if (location.pathname.includes('ecommerce')) theme = themes.ecommerce;
  else if (location.pathname.includes('profesionales')) theme = themes.profesionales;
  else if (location.pathname.includes('institucional')) theme = themes.institucional;

  return (
    <div className={`min-h-screen ${isExamplePage && theme ? `${theme.pageBg} ${theme.pageText}` : 'bg-white text-gray-900 dark:bg-gray-900 dark:text-white'}`}>
      {isExamplePage && theme ? (
        <NavbarEjemplo bgColor={theme.bgColor} textColor={theme.textColor} logoText={theme.logoText} />
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/ejemplo-ecommerce" element={<PageWrapper><EjemploEcommerce theme={themes.ecommerce} /></PageWrapper>} />
        <Route path="/ejemplo-profesionales" element={<PageWrapper><EjemploProfesionales theme={themes.profesionales} /></PageWrapper>} />
        <Route path="/ejemplo-institucional" element={<PageWrapper><EjemploInstitucional theme={themes.institucional} /></PageWrapper>} />
      </Routes>
      <WhatsAppWidget size="xl" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className=""
    >
      {children}
    </motion.div>
  );
}
