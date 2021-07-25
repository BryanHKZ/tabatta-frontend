import React from "react";
import styled from "@emotion/styled";
import { ArrowRightOutlined } from "@ant-design/icons";

const ListContainer = styled.div`
  padding: 1rem 0;
`;

const ItemList = styled.div`
  background: #ddd;
  color: black;
  margin: 5px;
  padding: 0 10px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;

const TabattaList = ({listaTabatta}) => {
  return (
    <ListContainer>
      {listaTabatta.map((r) => (
        <ItemList key={r.id}>
          <h3>{r.nombre}</h3>
          <ArrowRightOutlined />
        </ItemList>
      ))}
    </ListContainer>
  );
};

export default TabattaList;
