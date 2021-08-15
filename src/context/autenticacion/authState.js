import React, { useReducer } from "react";
import AuthContext from "./authContext";
import { AuthReducer } from "./authReducer";
import tokenAuth from "../../config/tokenAuth";
import clienteAxios from "../../config/axios";
import Swal from 'sweetalert2';

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  CERRAR_SESION,
  EMAIL_EXITO,
  EMAIL_ERROR,
  EDIT_USER_EXITO,
  EDIT_USER_ERROR
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true,
    error: null,
    validate:null,
    EditaUser:null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async (dates) => {
    try {
      const res = await clienteAxios.post("/api/user", dates);
      console.log(res);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: res.data,
      });

      usuarioAutenticado();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: REGISTRO_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/api/auth");

      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (dates) => {
    try {
      const res = await clienteAxios.post("/api/auth", dates);
      console.log(res);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: res.data,
      });

      usuarioAutenticado();
    } catch (error) {
      console.log(error);

      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const cerrarSesion = async () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  const ValidateEmail  = async (dato) =>{
   try {
    const res = await clienteAxios.patch("/api/user", dato);
    console.log(res.data.user);

    dispatch({
      type: EMAIL_EXITO,
      payload: res.data.user
    });
   } catch (error) {
     console.log(error);
     dispatch({
      type: EMAIL_ERROR,
      payload:error.response.data.msg
      
    });
   }
  }

  const EditPassword = async (edit) =>{
      try {
        const res = await clienteAxios.put("/api/user", edit);
        console.log(res);

        dispatch({
          type:EDIT_USER_EXITO,
          
        })

        Swal.fire(
          'Correcto',
          'La contraseña se cambio Exitosamente',
          'success'
      )
      } catch (error) {
        console.log(error);
        dispatch({
          type: EDIT_USER_ERROR,
          payload:error.response.data.msg
          
        });

        Swal.fire({
          icon: 'error',
          title: 'Hubo un error',
          text: 'Hubo un error, intenta de nuevo'
      })
      }
    
  }

  return (
    <AuthContext.Provider
      value={{
        autenticado: state.autenticado,
        error: state.error,
        usuario: state.usuario,
        mensaje: state.mensaje,
        validate: state.validate,
        EditaUser:state.EditaUser,
        registerUser,
        login,
        cerrarSesion,
        usuarioAutenticado,
        ValidateEmail,
        EditPassword
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
