import React, { useEffect } from "react";
import "./Login.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { loginUser } from "../../Services/users";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export function Login() {
  // Efecto para limpiar el token y establecer el estado de inicio de sesión en falso al cargar el componente
  useEffect(() => {
    localStorage.removeItem("token");
    setIsLogged(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Obtener el objeto navigate para la navegación
  let navigate = useNavigate();

  // Obtener el estado setIsLogged del contexto LoginContext
  const { setIsLogged } = useContext(LoginContext);

  // Estado para almacenar los datos del formulario de inicio de sesión
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Manejar los cambios en los campos del formulario
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

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llamar a la función loginUser para autenticar al usuario
    loginUser(formData)
      .then((response) => {
        // Almacenar el token de acceso en el localStorage
        localStorage.setItem("token", response.access);

        // Mostrar un mensaje de éxito utilizando SweetAlert2
        Swal.fire({
          icon: "success",
          title: "Operación exitosa",
          text: "Te has logueado correctamente",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCancelButton: false,
        }).then((result) => {
          // Si se confirma el mensaje, establecer el estado de inicio de sesión en verdadero y redirigir al usuario
          if (result.isConfirmed) {
            setIsLogged(true);
            navigate("/modules");
          }
        });
      })
      .catch((err) => {
        // En caso de error, mostrar un mensaje de error utilizando SweetAlert2
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Opps algo salió mal",
          text: "Ocurrió un error al ingresar, intenta de nuevo",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCancelButton: false,
        });
      });
  };

  return (
    <div className="fondo">
    <section id="pantalla-dividida">
        <div className="izquierda-login">
          <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
              {/* Título del formulario */}
              <h2 className="login-title">Iniciar Sesión</h2>
              {/* Texto de bienvenida */}
              <h4 className="login-text">Un gusto tenerte de vuelta!</h4>

              {/* Campo de entrada para el correo electrónico */}
              <div className="form-group">
                <input
                  className="textfield"
                  type="text"
                  id="email"
                  placeholder="Correo electronico"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Campo de entrada para la contraseña */}
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

              {/* Botón para enviar el formulario */}
              <button type="submit" className="login-button">
                Ingresar
              </button>
            </form>
          </div>
        </div>
        <div className="derecha-login">
            <div class="logo">
               <img src="/images/logo.png" alt="No disponible" />
            </div>
            <h3 className='titulo'>Egypt 3D</h3>
            <h4 className='subtitulo'>INGRESA CON TU CORREO Y CONTRASEÑA</h4>
        </div>
    </section>
    </div>
  );
}
