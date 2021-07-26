import React from "react";
import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons";

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
  border-radius: 10px;
`;

const ItemText = styled.span`
  font-weight: 500;
  padding: 5px;
`;

const TabattaList = ({ listaTabatta }) => {
  const handleSearchTabatta = (idTabatta) => {
    console.log(idTabatta);
  };
  return (
    <ListContainer>
      {listaTabatta.map((r) => (
        <ItemList key={r.id} onClick={() => handleSearchTabatta(r.id)}>
          <ItemText>{r.nombre}</ItemText>
          <RightOutlined />
        </ItemList>
      ))}
    </ListContainer>
  );
};

export default TabattaList;
