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
      Authorization: "Bearer " + localStorage.getItem("token"),
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
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.patch(
    endpoints.users.updateUser + id,
    body,
    config
  );
  return response.data;
};

// Función para actualizar información de usuario por ID
const updateImage = async (body) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await Axios.post(endpoints.users.updateImage, body, config);
  return response.data;
};

//Servicio para cambiar la contraseña
const updatePassword = async (body) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.post(
    endpoints.users.updatePassword,
    body,
    config
  );
  return response.data;
};

const getImagesDefault = async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.get(endpoints.users.getImagesDefault, config);
  return response.data;
};

const getImageProfile = async (id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.get(endpoints.users.getImageUser + id, config);
  return response.data;
};

const getQuizz = async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.get(endpoints.users.getQuizz, config);
  return response.data;
};

const getQuestions = async (id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.get(
    endpoints.users.getQuestions + "?quiz_id=" + id,
    config
  );
  return response.data;
};
const getAnswers = async (id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.get(
    endpoints.users.getAnswers + id + "/answers/",
    config
  );
  return response.data;
};

const getCorrectAnswer = async (id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.get(
    endpoints.users.getAnswers + id + "/correct-answers/",
    config
  );
  return response.data;
};
const createResult = async (body) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };
  const response = await Axios.post(
    endpoints.users.result,
    body,
    config
  );
  return response.data;
};
const getResults = async (id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.get(
    endpoints.users.getResult + "?user_id=" + id,
    config
  );
  return response.data;
};
const updateScore = async (body, id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.patch(
    endpoints.users.updateResult + id,
    body,
    config
  );
  return response.data;
};
export {
  addUser,
  loginUser,
  getUser,
  updateUser,
  getImagesDefault,
  updatePassword,
  updateImage,
  getImageProfile,
  getQuizz,
  getQuestions,
  getAnswers,
  getCorrectAnswer,
  createResult,
  getResults,
  updateScore
};