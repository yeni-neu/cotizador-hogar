import React, { useState } from 'react';
import UserForm from './components/UserForm';
import CoverageOptions from './components/CoverageOptions';

const App = () => {
  const [quote, setQuote] = useState(null);

  const calculateQuote = (data) => {
    let base = 2500;
    const planes = [
      { nombre: "Básico", precio: base, promoAnual: base*12*0.9, coberturas: ["Incendio", "Responsabilidad civil"] },
      { nombre: "Estándar", precio: base*1.25, promoAnual: base*1.25*12*0.9, coberturas: ["Incendio", "Robo", "Responsabilidad civil"] },
      { nombre: "Premium", precio: base*1.5, promoAnual: base*1.5*12*0.9, coberturas: ["Todo lo anterior", "Valor de reposición", "Cobertura de objetos de valor"] }
    ];
    setQuote({ estimado: base, planes });
  };

  return (
    <div className="app-container">
      <h1>Cotizador de Seguros de Hogar</h1>
      <UserForm onSubmit={calculateQuote} />
      {quote && <CoverageOptions quote={quote} />}
    </div>
  );
};

export default App;