import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import exampleData from "../../../utils/data.json";
import TabattaList from "./TabattaList";
import NuevoTabattaModal from "./NuevoTabattaModal";
import { Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
const { Search } = Input;

const SidebarContainer = styled.section`
  width: 25%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  background-color: #f5f5f5;
`;
const SearchLabel = styled.label`
  font-size: 0.8rem;
  line-height: normal;
  margin-bottom: 5px;
`;
const SidebarListTabatta = styled.div`
  margin-top: 4rem;
`;
const SidebarHead = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const Welcome = styled.span`
  font-size: 1.2rem;
  margin-bottom: 0;
  line-height: 16px;
`;
const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0;
`;

const Sidebar = () => {
  const [datosListar, setDatosListar] = useState([exampleData.routine]);
  const [showNewTabatta, setShowNewTabatta] = useState(false);

  const onSearch = (value) => {
    let filtro;
    if (value.length === 0) {
      filtro = exampleData.routine;
    } else {
      filtro = exampleData.routine.filter((r) =>
        r.nombre.toLowerCase().includes(value.toLowerCase())
      );
    }

    setDatosListar(filtro);
  };
  const handleOnClick = (value) => {
    console.log(value);
    setShowNewTabatta(true);
  };

  useEffect(() => {
    onSearch("");
  }, []);

  return (
    <SidebarContainer>
      <SidebarHead>
        <Welcome>Bienvenido, </Welcome>
        <Name>Juan Perez</Name>
      </SidebarHead>
      <Button
        type="primary"
        block
        onClick={() => handleOnClick("handleOnClickAdd")}
        icon={<PlusCircleOutlined />}
        className="button-ae"
      >
        Añadir un Tabatta
      </Button>
      <NuevoTabattaModal visible={showNewTabatta} setShowNewTabatta={setShowNewTabatta}/>

      <SidebarListTabatta>
        <SearchLabel htmlFor="search-input">Buscar un Tabatta</SearchLabel>
        <Search
          id="search-input"
          placeholder="Nombre Tabatta"
          onSearch={onSearch}
        />
        <TabattaList listaTabatta={datosListar} />
      </SidebarListTabatta>
    </SidebarContainer>
  );
};

export default Sidebar;
