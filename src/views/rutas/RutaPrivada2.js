import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/autenticacion/authContext";

const RutaPrivada2 = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { validate } = authContext;


  return (
    <Route
      {...props}
      render={(props) =>
        !validate ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default RutaPrivada2;