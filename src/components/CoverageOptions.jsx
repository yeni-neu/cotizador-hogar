import React from 'react';

const CoverageOptions = ({ quote }) => {
  return (
    <div className="coverage-container">
      <h2>Opciones de Cobertura</h2>
      {quote.planes.map((plan, index) => (
        <div key={index} className={`coverage-card plan-${index}`}>
          <h3>{plan.nombre}</h3>
          <p><strong>Precio mensual:</strong> ${plan.precio}</p>
          <p><strong>Promo anual:</strong> ${plan.promoAnual}</p>
          <p><strong>Coberturas:</strong></p>
          <ul>
            {plan.coberturas.map((c, i) => <li key={i}>✔ {c}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CoverageOptions;
