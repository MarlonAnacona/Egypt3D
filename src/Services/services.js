const URL = "https://egypt-backend.onrender.com";
const endpoints = {
  users: {
    getAll: `${URL}/users`,
    login: `${URL}/users/login/`,
    register: `${URL}/users/create-profile/`,
    getUser: `${URL}/users/profile/`,
    updateUser: `${URL}/users/profile/update/`,
    updatePassword: `${URL}/users/change-password/`,
    updateImage: `${URL}/users/custom-profile-picture/`,
    getImagesDefault: `${URL}/users/default-pictures/`,
    getImageUser: `${URL}/users/profile-picture/`,
    getQuizz: `${URL}/quizzes/list/`,
    getQuestions: `${URL}/questions/for-quiz/`,
    getAnswers: `${URL}/questions/`,
    getCorrectAnswer: `${URL}/questions/`,
  },
  products: {},
  workers: {},
};

module.exports = endpoints;