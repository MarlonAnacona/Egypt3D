import React, { useEffect } from "react";
import "./Login.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { loginUser } from "../../Services/users";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export function Login() {
  useEffect(()=>{
    localStorage.removeItem("token")
    setIsLogged(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  let navigate = useNavigate();

  const { setIsLogged } = useContext(LoginContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    loginUser(formData)
      .then((response) => {
        localStorage.setItem("token",response.access)

        Swal.fire({
          icon: "success",
          title: "Operación exitosa",
          text: "Te has logueado correctamente",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            setIsLogged(true)
            navigate("/modules")
          }
        });
      })
      .catch((err) => {
        console.log(err)
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
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Iniciar Sesión</h2>
        <h4 className="login-text">Un gusto tenerte de vuelta!</h4>

      <div className="form-group ">
        <input className='textfield'type="text" id="email" placeholder='Correo electronico '
        value={formData.email}
        onChange={handleChange}
        />
      </div>
      <div className="form-group letter">
        <input className='textfield' type="password" id="password" placeholder='Contraseña' 
        value={formData.password}
        onChange={handleChange}
        />
      </div>
      <button type="submit" className="login-button">Ingresar</button>
    </form>
  </div>
    )
}
