import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import userReducer from "./userReducer";
import userContext from "./userContext";

import { GET_USER } from "../../types";

const UserState = (props) => {
  const initialState = {
    user: [],
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  // GET USER
  const getUser = async () => {
    try {
      const res = await clienteAxios.get("/api/user/user");
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        getUser
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState
