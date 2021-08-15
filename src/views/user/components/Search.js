import React from "react";
import { Input, Space } from "antd";
import styled from "@emotion/styled";
const { Search } = Input;

const InputSearch = styled(Search)`
  width: 300px;
  border: none;
`;

const Searchs = ({ onSerach }) => {
  return (
    <>
      <InputSearch onSearch={onSerach} placeholder="Usuarios" />
    </>
  );
};

export default Searchs;
