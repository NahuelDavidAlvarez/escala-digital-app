import React from 'react';

interface EjemploEcommerceProps {
  theme: {
    pageBg: string;
    pageText: string;
  };
}

const EjemploEcommerce: React.FC<EjemploEcommerceProps> = ({ theme }) => {
  return (
    <div className={`p-8 ${theme.pageBg} ${theme.pageText}`}>
      <h1 className="text-3xl font-bold mb-4">Ejemplo de E-commerce</h1>
      <p>Esta es una página de ejemplo para un e-commerce.</p>
    </div>
  );
};

export default EjemploEcommerce;