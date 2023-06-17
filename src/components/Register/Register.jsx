import React, { useEffect, useState, useContext } from 'react';
import { addUser } from '../../Services/users';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { LoginContext } from '../context/LoginContext';

export function Register() {
  // Obtener la función setIsLogged del contexto LoginContext
  const { setIsLogged } = useContext(LoginContext);
  
  // Navegador utilizado para redireccionar después del registro exitoso
  let navigate = useNavigate();

  // Estado inicial del formulario de registro
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Función para manejar el envío del formulario de registro
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llamar a la función addUser para crear un nuevo usuario en el servidor
    addUser(formData)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Operación exitosa",
          text: "Te has registrado correctamente",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            // Redireccionar al usuario a la página de inicio de sesión después del registro exitoso
            navigate("/login");
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Opps algo salió mal",
          text: "Ocurrió un error al crear el usuario, intenta de nuevo",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCancelButton: false,
        });
      });
  };

  return (
    <section id="pantalla-dividida">
        <div className="izquierda">
          <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
              <h2 className="register-title">Registro</h2>
              <h4 className="register-text">
                Registrate gratis y comienza tu viaje!
              </h4>
              <div className="form-group">
                <input
                  className="textfield"
                  type="text"
                  id="username"
                  placeholder="Nombre"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="textfield"
                  type="text"
                  id="email"
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="textfield"
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="register-button">
                Registrarse
              </button>
            </form>
          </div>
        </div>
        <div className="derecha">
        <div class="logo">
                <img src="/images/logo.png" alt=''/>
            </div>
            <h3 className='titulo'>Egypt 3D</h3>
            <h4 className='subtitulo'>REGISTRATE CON TU NOMBRE, CORREO Y CONTRASEÑA</h4>
        </div>
    </section>
  );
}
