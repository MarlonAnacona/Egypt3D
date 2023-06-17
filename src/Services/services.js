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
  },
  products: {},
  workers: {},
};

module.exports = endpoints;