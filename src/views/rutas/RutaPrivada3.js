import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/autenticacion/authContext";

const RutaPrivada3 = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { autenticado, usuarioAutenticado, usuario } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    //eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado && !usuario ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default RutaPrivada3;