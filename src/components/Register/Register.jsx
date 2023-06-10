import React, { useEffect, useState } from 'react';
import { addUser } from '../../Services/users';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

export function Register() {
  // Configurar el estado inicial para el inicio de sesión
  useEffect(() => {
    setIsLogged(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { setIsLogged } = useContext(LoginContext); // Obtener el contexto de inicio de sesión
  let navigate = useNavigate(); // Obtener la función de navegación proporcionada por react-router-dom

  // Configurar el estado y los cambios de formulario
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    addUser(formData)
      .then((response) => {
        // Mostrar una alerta de éxito cuando el usuario se registre correctamente
        Swal.fire({
          icon: "success",
          title: "Operación exitosa",
          text: "Te has registrado correctamente",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login"); // Navegar a la página de inicio de sesión después del registro exitoso
          }
        });
      })
      .catch((err) => {
        // Mostrar una alerta de error si ocurre algún problema durante el registro
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
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Registro</h2>
        <h4 className="register-text">
        ¡Registrate gratis y comienza tu viaje!
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
  );
}