import {
  REGISTRO_EXITOSO,
  REGISTRO_FAIL,
  LOGIN_EXITOSO,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import authServices from "../services/autenticacion/autenticacion.service";

export const registro =
  (first, last, email, password, repeat_password) => (dispatch) => {
    return authServices
      .registro(first, last, email, password, repeat_password)
      .then(
        (response) => {
          dispatch({
            type: REGISTRO_EXITOSO,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          });
          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          dispatch({
            type: REGISTRO_FAIL,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
          return Promise.reject();
        }
      );
  };
