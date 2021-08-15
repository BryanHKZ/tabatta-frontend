import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const Views = styled(Link)`
  display: flex;
  margin-top: 30px;
`;

const Span = styled.span`
  color: #65737e;
  font-size: 22px
`;

const IconUser = styled(UserOutlined)`
  color: #65737e;
  margin-right:5px;
  font-size: 22px;
  margin-top:4px;
`;

const SubMenu = () => {
  return (
    <>
      <Views to={"/tabatta/user"}>
        <div className="icon-div">
          <IconUser />
        </div>
        <Span className="span-menu">Usuarios</Span>
      </Views>
    </>
  );
};

export default SubMenu;
