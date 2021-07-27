import React, { useState, useContext } from "react";
import { Modal, Input } from "antd";
import styled from "@emotion/styled";

import TabattaContext from "../../context/tabatta/tabattaContext";

const SearchLabel = styled.label`
  font-size: 0.8rem;
  line-height: normal;
`;

const NuevoTabattaModal = ({ visible, setShowNewTabatta }) => {
  const [tabattaData, setTabattaData] = useState({
    name: "",
  });

  const { name } = tabattaData;

  const tabattaContext = useContext(TabattaContext);
  const { crearTabatta, obtenerTabattas } = tabattaContext;

  const handleOk = () => {
    setShowNewTabatta(false);
    crearTabatta({ name });
    obtenerTabattas();
    setTabattaData({
      name: "",
    });
  };
  const handleCancel = () => {
    setShowNewTabatta(false);
    setTabattaData({
      name: "",
    });
  };

  const handleOnChange = (e) => {
    setTabattaData({ ...tabattaData, [e.target.name]: e.target.value })
  }
  return (
    <Modal
      title="Crear Nuevo Tabatta"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelText="Cancelar"
    >
      <SearchLabel htmlFor="new-tabatta">Nombre del Tabatta</SearchLabel>
      <Input
        placeholder="ex: Pecho"
        id="new-tabatta"
        name="name"
        value={name}
        onChange={handleOnChange}
      />
    </Modal>
  );
};

export default NuevoTabattaModal;
