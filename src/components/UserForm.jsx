import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    propertyType: '',
    location: '',
    squareMeters: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" onChange={handleChange} />
      <input name="age" type="number" placeholder="Edad" onChange={handleChange} />
      <select name="propertyType" onChange={handleChange}>
        <option value="">Tipo de propiedad</option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
      </select>
      <input name="location" placeholder="Ubicación" onChange={handleChange} />
      <input name="squareMeters" type="number" placeholder="Metros cuadrados" onChange={handleChange} />
      <button type="submit">Calcular</button>
    </form>
  );
};

export default UserForm;
