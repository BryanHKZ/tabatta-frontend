import React, { useState, useContext, useEffect } from "react";
import { Input, Button } from "antd";
import "./styles.css";
import Error from "../register/Error";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";
const EditPassword = (props) => {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, EditaUser, EditPassword } = authContext;

  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje);
    }

    // eslint-disable-next-line
  }, [mensaje]);

  const [user, setUser] = useState({
    password: "",
    confirm: "",
  });

  const { password, confirm } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (password.trim() === "" || confirm.trim() === "") {
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

    EditaUser.password = password;

    EditPassword(EditaUser);
    setTimeout(() => {
      props.history.push("/");
    }, 2000);
  };
  return (
    <div className="container">
      <div className="content">
        <p className="text">Cambiar contraseña</p>
        <Input
          placeholder="Nueva Contraseña"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></Input>
        <Input
          placeholder="Repetir Nueva Contraseña"
          type="password"
          name="confirm"
          value={confirm}
          onChange={handleChange}
        ></Input>
        {alerta ? <Error message={alerta} /> : null}
        <Button className="button" type="primary" onClick={handleClick}>
          Recuperar
        </Button>
      </div>
    </div>
  );
};

export default EditPassword;
