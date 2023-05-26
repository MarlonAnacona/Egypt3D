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
export { addUser, loginUser };