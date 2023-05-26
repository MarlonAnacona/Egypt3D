const URL = "http://localhost:8000";

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