import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import userReducer from "./userReducer";
import userContext from "./userContext";
import moment from "moment";
import Swal from "sweetalert2";

import { GET_USER } from "../../types";

const UserState = (props) => {
  const initialState = {
    user: [],
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  // GET USER
  const getUser = async () => {
    try {
      const res = await clienteAxios.get("/api/user/users");
      let payload = [];
      res.data.forEach(u => {
        payload.push({...u, registro: moment(u.registro).format("LLL")})
      })
      dispatch({
        type: GET_USER,
        payload: payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async (idUser) => {
    try {
      const res = await clienteAxios.delete(`/api/user/${idUser}`);
      console.log(res);
      Swal.fire("Correcto", "Usuario eliminado correctamente", "success");
      getUser();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <userContext.Provider
      value={{
        user: state.user,
        getUser,
        removeUser
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState
