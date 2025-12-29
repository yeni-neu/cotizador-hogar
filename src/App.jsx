import React, { useState } from 'react';
import UserForm from './components/UserForm';
import CoverageOptions from './components/CoverageOptions';

const App = () => {
  const [quote, setQuote] = useState(null);

  const calculateQuote = (data) => {
    let base = 1000;

    if (data.propertyType === 'casa') base += 500;
    if (data.squareMeters > 100) base += 300;
    if (data.age < 25) base += 200;

    setQuote({
      basico: base,
      premium: base * 1.5,
      full: base * 2
    });
  };

  return (
    <div>
      <h1>Cotizador de Seguros</h1>
      <UserForm onSubmit={calculateQuote} />
      {quote && <CoverageOptions quote={quote} />}
    </div>
  );
};

export default App;