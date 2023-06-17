import Axios from "axios";
import endpoints from "./services";

// Función para agregar un nuevo usuario
const addUser = async (body) => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.post(endpoints.users.register, body, config);
  return response.data;
};

// Función para iniciar sesión de usuario
const loginUser = async (body) => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.post(endpoints.users.login, body, config);
  return response.data;
};

// Función para obtener información de usuario por ID
const getUser = async (id) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.get(endpoints.users.getUser + id, config);
  return response.data;
};

// Función para actualizar información de usuario por ID
const updateUser = async (body, id) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.patch(endpoints.users.updateUser + id, body, config);
  return response.data;
};



// Función para actualizar información de usuario por ID
const updateImage = async (body) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      accept: "*/*",
      'Content-Type': 'multipart/form-data'
    },
  };

  const response = await Axios.post(endpoints.users.updateImage , body, config);
  return response.data;
};


//Servicio para cambiar la contraseña
const updatePassword = async (body) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.post(endpoints.users.updatePassword, body, config);
  return response.data;
};

const getImagesDefault = async () => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.get(endpoints.users.getImagesDefault , config);
  return response.data;
};



export { addUser, loginUser, getUser, updateUser ,getImagesDefault,updatePassword,updateImage};
