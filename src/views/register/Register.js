import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "../login/Login.css";
import gym2 from "../../assets/gym2.svg";
import Error from "./Error";
import AuthContext from "../../context/autenticacion/authContext";
import AlertaContext from "../../context/alertas/alertaContext";

const Register = (props) => {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { autenticado, registerUser, error, mensaje } = authContext;

  useEffect(() => {
    if (autenticado) {
      props.history.push("/home");
    }

    if (mensaje) {
      mostrarAlerta(mensaje);
      console.log(mensaje);
    }

    // eslint-disable-next-line
  }, [mensaje, autenticado]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    sexo: "M",
  });

  const { name, email, password, confirm, sexo } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 8) {
      mostrarAlerta("la contraseña debe contar por lo menos con 8 caracteres");
      return;
    }

    if (password !== confirm) {
      mostrarAlerta("las contraseñas no coinciden");
      return;
    }

    registerUser({
      name,
      email,
      sexo,
      password,
    });
  };

  const responseGoogleSuccess = (response) => {
    const obj = response.profileObj;
    if (error) {
      mostrarAlerta(alerta);
      return;
    }

    let toSend = {
      name: obj.name,
      email: obj.email,
      sexo: "M",
      password: response.tokenObj.login_hint,
    };

    registerUser(toSend);
  };

  const responseGoogleFailure = (response) => {
    console.log(response.error);
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <form className="login_col login_pre">
            <p className="label">Register</p>
            <Input
              placeholder="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            ></Input>
            <br />
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
            <br />
            <Input
              placeholder="Repeat Password"
              type="password"
              name="confirm"
              value={confirm}
              onChange={handleChange}
            ></Input>
            {alerta ? <Error message={alerta} /> : null}
            <Button className="button2" type="primary" onClick={onSubmit}>
              Register
            </Button>
            <GoogleLogin
              clientId="275579725547-svpsm1vug72l2imh3a2b2fgfjfevmsks.apps.googleusercontent.com"
              buttonText="Registrarse con Google"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              cookiePolicy={"single_host_origin"}
              className="google-button"
            />
            <br />
            <br />
            <Link to={"/"} className="link">
              ¿Ya tienes cuenta?, Inicia Sesión aquí
            </Link>
          </form>
        </Col>

        <Col span={12} className="left login_col">
          <img src={gym2} alt="gym2" className="image" />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
