import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    claims: '0',
    propertyType: '',
    location: '',
    squareMeters: '',
    security: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
        if (type === 'checkbox') { 
            setUserData((prev) => { 
                const newSecurity = checked 
                    ? [...prev.security, value] 
                    : prev.security.filter((s) => s !== value); 
                return { ...prev, security: newSecurity }; 
            }); 
        } else { 
            setUserData({ ...userData, [name]: value }); 
        } 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.age || !userData.propertyType || !userData.location || !userData.squareMeters) { 
        alert("Por favor completa todos los campos obligatorios."); 
        return; 

    }
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container"> 
    
        <label>Nombre y apellido*</label> 
        <input name="name" required placeholder="Ej: Luciana Morales" onChange={handleChange} /> 
    
        <label>Edad*</label> <input name="age" type="number" required min="18" onChange={handleChange} /> 
    
        <label>Historial de reclamos</label>
        <select name="claims" onChange={handleChange}> 
            <option value="0">Sin reclamos</option> 
            <option value="1">1 reclamo</option> 
            <option value="2">2 o más</option> 
        </select>
    
        <label>Tipo de propiedad*</label> 
        <select name="propertyType" required onChange={handleChange}> 
            <option value="">Selecciona...</option> 
            <option value="Casa">Casa</option> 
            <option value="Departamento">Departamento</option>  
            <option value="Casa">Local comercial</option> 
            <option value="Casa">Depósito logística</option> 
        </select> 
    
        <label>Ubicación / zona*</label> 
        <select name="location" required onChange={handleChange}> 
            <option value="">Selecciona...</option> 
            <option value="Baja">Zona Baja (menor riesgo)</option> 
            <option value="Media">Zona Media</option> 
            <option value="Alta">Zona Alta (mayor riesgo)</option> 
        </select> 
    
        <label>Metros cuadrados*</label> 
        <input name="squareMeters" type="number" required placeholder="Ej: 20" onChange={handleChange} /> 
    
        <label>Medidas de seguridad</label> 
        <div className="checkbox-group"> 
            <label><input type="checkbox" name="security" value="Rejas" onChange={handleChange}/> Rejas</label> 
            <label><input type="checkbox" name="security" value="Alarma/cámaras" onChange={handleChange}/> Alarma/cámaras</label> 
            <label><input type="checkbox" name="security" value="Monitoreo diario" onChange={handleChange}/> Monitoreo diario</label> 
        </div> 
    
        <button type="submit">Calcular Cotización</button> 
    </form> 
  ); 
}
; 
    export default UserForm;