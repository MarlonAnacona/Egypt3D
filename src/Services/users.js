import Axios from "axios";
import endpoints from "./services";

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

const getUser = async (id) => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.get(endpoints.users.getUser+id,  config);
  return response.data;
};

const updateUser = async (body,id) => {
  const config = {
    headers: {
      Authorization: 'Bearer '+localStorage.getItem('token'),
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await Axios.patch(endpoints.users.updateUser+id, body, config);
  return response.data;
};
export { addUser, loginUser,getUser,updateUser };