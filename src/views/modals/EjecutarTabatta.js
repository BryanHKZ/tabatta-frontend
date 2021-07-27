import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import styled from "@emotion/styled";

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExerciseTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExerciseTimes = styled.div`
  text-align: center;
`;

const ExerciseTime = styled.h4``;

const TabattaTime = styled.h2`
  line-height: 20px;
`;

const EjecutarTabatta = ({
  visible,
  datosTabatta,
  listaEjercicios,
  tiempoEjercicios,
  setShowStartTabatta,
}) => {
  let intervalEjercicio = null,
    intervalTotal = null;
  const [datosMostrar, setDatosMostrar] = useState({
    ejercicioNombre: "",
    tiempoEjercicio: "0:00",
    tiempoRonda: "0:00",
  });
  const [startTabatta, setStartTabatta] = useState(false);
  const [pauseTabatta, setPauseTabatta] = useState(false);
  const [stopTabatta, setStopTabatta] = useState(false);
  const [btnText, setBtnText] = useState("Iniciar");

  const { ejercicioNombre, tiempoEjercicio, tiempoRonda } = datosMostrar;

  const series = 3,
    rondas = 1;
  const preparationTime = {
    name: "Preparación",
    seconds: 20,
  };
  const restTime = {
    name: "Descansando",
    seconds: 15,
  };

  const formatTime = (ms) => {
    let toTimeFormat = new Date(ms);
    console.log(toTimeFormat.getMinutes() + ":" + toTimeFormat.getSeconds());
    return toTimeFormat.getMinutes() + ":" + toTimeFormat.getSeconds();
  };

  const calcularTiempoTotal = () => {
    let totalTime =
      ((restTime.seconds + tiempoEjercicios) * series +
        preparationTime.seconds) *
      rondas;

    return totalTime * 1000;
  };

  const handleInit = () => {
    listaEjercicios.unshift(preparationTime);
    listaEjercicios.push(restTime);
    if (!intervalEjercicio && !intervalTotal) {
      setBtnText("Pausar");
    } else {
      setBtnText("Iniciar")
    }
  };

  const handleResume = () => {
    setPauseTabatta(false);
  };

  const handlePause = () => {
    setPauseTabatta(true);
    clearInterval(intervalEjercicio);
    clearInterval(intervalTotal);
  };

  const handleStop = () => {
    setStopTabatta(true);
    clearInterval(intervalEjercicio);
    clearInterval(intervalTotal);
  };

  const handleClose = () => {
    handleStop();
    setShowStartTabatta(false);
  };

  return (
    <Modal
      onCancel={handleClose}
      title={datosTabatta.name}
      visible={visible}
      footer={[
        <Button onClick={handleInit}>{btnText}</Button>,
        <Button className="resume" onClick={handleResume}>
          Continuar
        </Button>,
        <Button danger type="primary" onClick={handleStop}>
          Detener
        </Button>,
      ]}
    >
      <Container>
        <ExerciseTitle>
          <h1>{ejercicioNombre}</h1>
        </ExerciseTitle>
        <ExerciseTimes>
          <ExerciseTime>Tiempo Ejercicio: {tiempoEjercicio}</ExerciseTime>
          <TabattaTime>Tiempo Ronda: {tiempoRonda}</TabattaTime>
        </ExerciseTimes>
      </Container>
    </Modal>
  );
};

export default EjecutarTabatta;
