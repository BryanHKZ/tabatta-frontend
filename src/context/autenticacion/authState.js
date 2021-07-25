import React, { useReducer } from "react";
import AuthContext from "./authContext";
import { AuthReducer } from "./authReducer";
// import tokenAuth from "../../config/tokenAuth";
// import clienteAxios from "../../config/axios";

// import {
//   REGISTRO_EXITOSO,
//   REGISTRO_ERROR,
//   OBTENER_USUARIO,
//   LOGIN_ERROR,
//   LOGIN_EXITOSO,
//   CERRAR_SESION,
// } from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
