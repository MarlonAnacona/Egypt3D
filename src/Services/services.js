const URL = "https://marlonanacona.pythonanywhere.com";

const endpoints = {
  users: {
    getAll: `${URL}/users`,
    login: `${URL}/users/login`,
    register: `${URL}/users/create-profile/`,
  },
  products: {},
  workers: {},
};

module.exports = endpoints;