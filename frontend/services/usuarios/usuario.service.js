import axios from "axios";
import { authHeader } from "../../helpers/auth-header";
const URL = "http://localhost:3000/usuarios/";

const getContenidoPublico = () => {
  return axios.get(URL + "todo");
};

const getUsuarioBoard = () => {
  return axios.get(URL + "usuario", { headers: authHeader() });
};

//Proximamente gets basados en Roles :)

export default {
  getUsuarioBoard,
  getContenidoPublico,
};
