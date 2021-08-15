import { GET_USER } from "../../types";

// eslint-disable-next-line
export default function (state, action) {
  switch (action.type) {
    case GET_USER:
      return{
        ...state,
        user:action.payload
      }
    default:
      return state;
  }
};
