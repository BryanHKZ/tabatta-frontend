import React, { useState } from "react";
import { Modal, Input } from "antd";
import styled from "@emotion/styled";

const SearchLabel = styled.label`
  font-size: 0.8rem;
  line-height: normal;
`;

const NuevoTabattaModal = ({ visible, setShowNewTabatta }) => {
  const [tabattaData, setTabattaData] = useState({
    name: "",
  });
  const handleOk = () => {
    console.log("Confirmar datos");
    setShowNewTabatta(false);
    // To-Do CreateTabatta
    setTabattaData({ name: "" });
  };
  const handleCancel = () => {
    console.log("cancelar");
    setShowNewTabatta(false);
    setTabattaData({ name: "" });
  };
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
        value={tabattaData.name}
        onChange={(e) =>
          setTabattaData({ ...tabattaData, [e.target.name]: e.target.value })
        }
      />
    </Modal>
  );
};

export default NuevoTabattaModal;
