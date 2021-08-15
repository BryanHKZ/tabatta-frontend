import {
  OBTENER_USUARIO,
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
  EMAIL_EXITO,
  EMAIL_ERROR,
  EDIT_USER_EXITO,
  EDIT_USER_ERROR
} from "../../types";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
    case REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("autenticado", "true");
      return {
        ...state,
        usuario: action.payload.user,
        autenticado: true,
        mensaje: null,
        error: null,
      };

    case OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
      };
    case EMAIL_ERROR: 
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
    case EDIT_USER_ERROR: 
      return {
        ...state,
        error: true,
        mensaje: action.payload
      };
      
    case CERRAR_SESION:
      localStorage.removeItem("token");
      localStorage.removeItem("autenticado");
      return {
        ...state,
        autenticado: null,
      };

      case EMAIL_EXITO: 
      return{
        validate:true,
        EditaUser:action.payload

      }

      case EDIT_USER_EXITO: 
      return{
        EditaUser:action.payload
      }

    default:
      return state;
  }
};
