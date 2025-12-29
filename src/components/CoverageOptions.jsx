import React from 'react';

const CoverageOptions = ({ quote }) => {
  return (
    <div>
      <h2>Opciones de cobertura</h2>
      <ul>
        <li>Básico: ${quote.basico}</li>
        <li>Premium: ${quote.premium}</li>
        <li>Full: ${quote.full}</li>
      </ul>
    </div>
  );
};

export default CoverageOptions;
