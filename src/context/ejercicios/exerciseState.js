import React, { useReducer } from "react";
import ExerciseContext from "./exerciseContext";
import { ExerciseReducer } from "./exerciseReducer";
import clienteAxios from "../../config/axios";

import {
  AGREGAR_EJERCICIO,
  AGREGAR_EJERCICIO_ERROR,
  AGREGAR_EJERCICIO_EXITO,
  OBTENER_EJERCICIOS_TABATTA,
  OBTENER_EJERCICIOS_TABATTA_ERROR,
  OBTENER_EJERCICIOS_TABATTA_EXITO,
} from "../../types";

const ExerciseState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    exerciseList: null,
  };

  const [state, dispatch] = useReducer(ExerciseReducer, initialState);

  const obtenerEjerciciosTabatta = async (tabattaId) => {
    console.log(tabattaId);
    try {
      const res = await clienteAxios.get(`/api/exercise/${tabattaId}`);
      console.log(res.data)
      dispatch({
        type: OBTENER_EJERCICIOS_TABATTA,
        payload: res.data
      })
    } catch (error) {
      console.log(error);
    }
  };

  const createExercise = async (datos) => {
    try {
      await clienteAxios.post("/api/exercise", datos)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ExerciseContext.Provider
      value={{
        exerciseList: state.exerciseList,
        obtenerEjerciciosTabatta,
        createExercise
      }}
    >
      {props.children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseState;
