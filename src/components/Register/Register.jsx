import React, { useEffect, useState } from 'react';
import { addUser } from '../../Services/users';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

export function Register() {
  // Obtener la función setIsLogged del contexto LoginContext
  
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
    <section id={styles['pantalla-dividida']}>
      <div className={styles.izquierda}>
        <div className={styles['register-container']}>
          <form className={styles['register-form']} onSubmit={handleSubmit}>
            <h2 className={styles['register-title']}>Registro</h2>
            <h4 className={styles['register-text']}>
              Regístrate gratis y comienza tu viaje!
            </h4>
            <div className={styles['form-group']}>
              <input
                className={styles.textfield}
                type="text"
                id="username"
                placeholder="Nombre"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className={styles['form-group']}>
              <input
                className={styles.textfield}
                type="text"
                id="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles['form-group']}>
              <input
                className={styles.textfield}
                type="password"
                id="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={styles['register-button']}>
              Registrarse
            </button>
          </form>
        </div>
      </div>
      <div className={styles.derecha}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt=''/>
        </div>
        <h3 className={styles.titulo}>Egypt 3D</h3>
        <h4 className={styles.subtitulo}>REGISTRATE CON TU NOMBRE, CORREO Y CONTRASEÑA</h4>
      </div>
    </section>
  );
}
