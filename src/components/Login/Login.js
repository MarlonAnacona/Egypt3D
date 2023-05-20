import React from 'react';

import './Login.css'

export function Login(){
    return( <div className="login-container">
    <form className="login-form">
    <h2 className="login-title">Iniciar Sesión</h2>

      <div className="form-group ">
        <input className='textfield'type="text" id="email" placeholder='Correo Electronico'/>
      </div>
      <div className="form-group letter">
        <input className='textfield' type="password" id="password" placeholder='Contraseña' />
      </div>
      <button type="submit" className="login-button">Ingresar</button>
    </form>
  </div>
    )
}