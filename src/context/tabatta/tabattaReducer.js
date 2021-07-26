import {
  CREAR_TABATTA,
  CREAR_TABATTA_ERROR,
  CREAR_TABATTA_EXITO,
  OBTENER_TABATTAS,
  OBTENER_TABATTAS_ERROR,
  OBTENER_TABATTAS_EXITO,
  OBTENER_TABATTA_XID,
  ELIMINAR_TABATTA,
  EDITAR_TABATTA,
  ELIMINAR_TABATTA_SELECCIONADO
} from "../../types";

export const TabattaReducer = (state, action) => {
  switch(action.type) {
    case OBTENER_TABATTAS:
      return {
        ...state,
        tabattaList: action.payload
      }
    case OBTENER_TABATTA_XID:
      return {
        ...state,
        selectedTabatta: action.payload.lista.find(t => t._id === action.payload.searchId)
      }
    case ELIMINAR_TABATTA:
      return {
        ...state,
        selectedTabatta: null
      }
    case EDITAR_TABATTA:
      return {
        ...state,
        selectedTabatta: action.payload
      }
    case ELIMINAR_TABATTA_SELECCIONADO: 
    return {
      ...state,
      selectedTabatta: null
    }
    default:
      return state;
  }
}