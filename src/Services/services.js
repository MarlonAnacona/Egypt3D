const URL = "https://egypt-backend.onrender.com";

// Definición de los endpoints de la API
const endpoints = {
  users: {
    getAll: `${URL}/users`, // URL para obtener todos los usuarios
    login: `${URL}/users/login/`, // URL para iniciar sesión de usuario
    register: `${URL}/users/create-profile/`, // URL para registrar un nuevo usuario
    getUser: `${URL}/users/profile/`, // URL para obtener información de un usuario por ID
    updateUser: `${URL}/users/profile/update/`, // URL para actualizar la información de un usuario por ID
    updatePassword: `${URL}/users/change-password/`, // URL para cambiar la contraseña de un usuario
    updateImage: `${URL}/users/custom-profile-picture/`, // URL para actualizar la imagen de perfil de un usuario
    getImagesDefault: `${URL}/users/default-pictures/`, // URL para obtener imágenes predeterminadas de usuarios
    getImageUser: `${URL}/users/profile-picture/`, // URL para obtener la imagen de perfil de un usuario por ID
    getQuizz: `${URL}/quizzes/list/`, // URL para obtener cuestionarios
    getQuestions: `${URL}/questions/for-quiz/`, // URL para obtener preguntas por ID de cuestionario
    getAnswers: `${URL}/questions/`, // URL para obtener respuestas por ID de pregunta
    getCorrectAnswer: `${URL}/questions/`, // URL para obtener la respuesta correcta por ID de pregunta
    result: `${URL}/quizzes/create-result/`, // URL para crear un resultado de cuestionario
    getResult: `${URL}/quizzes/quiz-results/`, // URL para obtener resultados de cuestionario
  },
  products: {},
  workers: {},
};

module.exports = endpoints;
