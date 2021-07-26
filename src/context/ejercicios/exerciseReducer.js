import {
  AGREGAR_EJERCICIO,
  AGREGAR_EJERCICIO_ERROR,
  AGREGAR_EJERCICIO_EXITO,
  OBTENER_EJERCICIOS_TABATTA,
  OBTENER_EJERCICIOS_TABATTA_ERROR,
  OBTENER_EJERCICIOS_TABATTA_EXITO,
} from "../../types";

export const ExerciseReducer = (state, action) => {
  switch(action.type) {
    case OBTENER_EJERCICIOS_TABATTA:
      return {
        ...state,
        exerciseList: action.payload
      }
    default:
      return state;
  }
}