import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Input, Button, Select } from "antd";
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
  const { Option } = Select;

  const authContext = useContext(AuthContext);
  const { autenticado, registerUser, mensaje } = authContext;

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
    sexo: "",
    number: "",
  });

  const { name, email, password, confirm, sexo, number } = user;

  const handleChange = (e) => {
    if (e.target) {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    } else {
      setUser({
        ...user,
        sexo: e,
      });
    }
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
      number,
    });
  };

  const responseGoogleSuccess = (response) => {
    const obj = response.profileObj;
    if (alerta) {
      mostrarAlerta(alerta);
      return;
    }

    console.log(response);

    let toSend = {
      name: obj.name,
      email: obj.email,
      sexo: "Google_Sex",
      number: "Google_Num",
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
            <p className="label">Registrar Usuario</p>
            <Input
              placeholder="Nombre"
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
            <div className="pinga">
              <Input
                className="input"
                placeholder="Número de Celular"
                type="number"
                name="number"
                value={number}
                onChange={handleChange}
              ></Input>
              <Select
                defaultValue="- Género -"
                onChange={handleChange}
              >
                <Option value="M">Masculino</Option>
                <Option value="F">Femenino</Option>
                <Option value="NB">No Binario</Option>
              </Select>
            </div>
            <br />
            <Input
              placeholder="Contraseña"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            ></Input>
            <br />
            <Input
              placeholder="Repetir Contraseña"
              type="password"
              name="confirm"
              value={confirm}
              onChange={handleChange}
            ></Input>
            {alerta ? <Error message={alerta} /> : null}
            <Button className="button2" type="primary" onClick={onSubmit}>
              Registrarse
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
