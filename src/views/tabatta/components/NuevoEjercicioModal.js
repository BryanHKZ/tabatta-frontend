import React, { useState } from "react";
import { Modal, Input, Slider } from "antd";
import styled from "@emotion/styled";

const SearchLabel = styled.label`
  font-size: 0.8rem;
  line-height: normal;
`;

const NuevoEjercicioModal = ({ visible, setShowNewExercise }) => {
  const [exerciseData, setExerciseData] = useState({
    name: "",
    seconds: 0,
    routine: "",
  });
  const handleOk = () => {
    console.log("Confirmar datos");
    setShowNewExercise(false);
    // To-Do CreateTabatta
    setExerciseData({ name: "", seconds: 0, routine: "" });
  };
  const handleCancel = () => {
    console.log("cancelar");
    setShowNewExercise(false);
    setExerciseData({ name: "", seconds: 0, routine: "" });
  };
  return (
    <Modal
      title="Crear Nuevo Ejercicio"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelText="Cancelar"
    >
      <SearchLabel htmlFor="new-tabatta">Nombre del Ejercicio</SearchLabel>
      <Input
        placeholder="ex: Pecho"
        id="new-tabatta"
        name="name"
        value={exerciseData.name}
        onChange={(e) =>
          setExerciseData({ ...exerciseData, [e.target.name]: e.target.value })
        }
        style={{marginBottom: "10px"}}
      />

      <SearchLabel htmlFor="new-tabatta">
        Duración del Ejercicio (En Segundos)
      </SearchLabel>
      <Slider
        defaultValue={0}
        max={60}
        value={exerciseData.seconds}
        onChange={(value) => {
          setExerciseData({ ...exerciseData, seconds: value });
        }}
      />
    </Modal>
  );
};

export default NuevoEjercicioModal;
