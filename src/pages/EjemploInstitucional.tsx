import React from 'react';

interface EjemploInstitucionalProps {
  theme: {
    pageBg: string;
    pageText: string;
  };
}

const EjemploInstitucional: React.FC<EjemploInstitucionalProps> = ({ theme }) => {
  return (
    <div className={`p-8 ${theme.pageBg} ${theme.pageText}`}>
      <h1 className="text-3xl font-bold mb-4">Ejemplo de Página Institucional</h1>
      <p>Esta es una página de ejemplo para una institución.</p>
    </div>
  );
};

export default EjemploInstitucional;