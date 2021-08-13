import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "./Login.css";
import gym from "../../assets/gym.svg";
import AuthContext from "../../context/autenticacion/authContext";
import AlertaContext from "../../context/alertas/alertaContext"
import Error from "../register/Error.js";

const Login = (props) => {

  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta} = alertaContext;

  const authContext = useContext(AuthContext);
  const { error, autenticado, login,mensaje } = authContext;

  useEffect(() => {
    if (autenticado) {
      props.history.push("/home");
    }

    if(mensaje){
      mostrarAlerta(mensaje)
      console.log(mensaje)
    }
    // eslint-disable-next-line
  }, [mensaje,autenticado]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }

    if (error) {
      mostrarAlerta("Usuario no existe");
      return;
    }
    login({ email, password });
  };

  const responseGoogleSuccess = (response) => {
    const obj = response.profileObj;
    if(error){
      mostrarAlerta(alerta);
      return;
    }

    let toSend = {
      email: obj.email,
      password: response.tokenObj.login_hint
    }
    login(toSend);
  };
  const responseGoogleFailure = (response) => {
    console.log(response.error);
  };

  return (
    <div>
      <Row>
        <Col span={12} className="left login_col">
          <img src={gym} alt="gym" className="image" />
        </Col>

        <Col span={12}>
          <form className="login_col login_pre">
            <p className="label">Login</p>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            ></Input>
            <br />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            ></Input>
           {alerta ? (<Error message={alerta} />) :null}
            <Button className="button" type="primary" onClick={onSubmit}>
              Iniciar Sesión
            </Button>
            <GoogleLogin
              clientId="275579725547-svpsm1vug72l2imh3a2b2fgfjfevmsks.apps.googleusercontent.com"
              buttonText="Iniciar Sesión con Google"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              cookiePolicy={"single_host_origin"}
              className="google-button"
            />
            <br /> <br />
            <Link to={"/register"} className="link">
              ¿No tienes cuenta? Registrate aquí
            </Link>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
