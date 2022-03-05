import axios from "axios";

//Endpoint sujeto a cambios por razones de despliege 
const URL = "http://localhost:3000/usuarios/";

export const registroUsuario = (first, last, email, password, repeat_password) => {
  return axios.post(URL + "registro", {
    name: {
      first,
      last,
    },
    email,
    password,
    repeat_password,
  });
};

export const loginUsuario = (email, password) => {
  return axios
    .post(URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("usuario", JSON.stringify(response.data));
      }
      return response.data;
    });
};


export const logoutUsuario=()=>{
  localStorage.removeItem("usuario");

};
