import { MOSTRAR_ALERTA } from "../../types";

const Reducer = (state, action) => {
  switch (action.type) {
    case MOSTRAR_ALERTA:
      return {
        alerta: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
