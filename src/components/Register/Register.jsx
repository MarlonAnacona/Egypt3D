import React from 'react';
import './Register.css';

export function Register() {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2 className="register-title">Registro</h2>
        <h4 className="register-text">Registrate gratis y comienza tu viaje!</h4>
        <div className="form-group">
          <input className="textfield" type="text" id="name" placeholder="Nombre" />
        </div>
        <div className="form-group">
          <input className="textfield" type="text" id="email" placeholder="Correo Electrónico" />
        </div>
        <div className="form-group">
          <input className="textfield" type="password" id="password" placeholder="Contraseña" />
        </div>
        <button type="submit" className="register-button">Registrarse</button>
      </form>
    </div>
  );
}
