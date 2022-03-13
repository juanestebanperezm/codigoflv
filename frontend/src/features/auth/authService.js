import axios from "axios";

const URL = "http://localhost:3000/usuarios/";

//REGISTRO
const register = async (userData) => {
  const response = await axios.post(URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//LOGIN
const login = async (userData) => {
  const response = await axios.post(URL + "login", userData);
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data));
  }
  return response.data;
};

//LOGUT
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
