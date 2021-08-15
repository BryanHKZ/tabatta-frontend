import React, { useState, useEffect, useContext } from "react";
import LayoutCrud from "../../components/LayoutCrud";
import Searchs from "./components/Search";
import { Row, Col, Table, Button } from "antd";
import styled from "@emotion/styled";
import "./User.css";
import UserContext from "../../context/user/userContext";
import { DeleteOutlined } from "@ant-design/icons";

const ColTitle = styled(Col)`
  height: 70px;
  align-items: end;
  display: grid;
`;

const ColSearch = styled(Col)`
  display: grid;
  justify-content: center;
`;

const RowUser = styled(Row)`
  height: 40px;
  display: grid;
  align-items: center;
  margin-bottom: 21px;
`;

const ButtonDelete = styled(Button)`
  border: none;
  color: rgb(143, 138, 138);
  :hover {
    color: red;
    background: #fafafa;
  }
  :focus {
    color: red;
    background: #fafafa;
  }
`;

const DeleteIcon = styled(DeleteOutlined)`
  font-size: 18px;
`;

const columns = [
  {
    title: "Id",
    dataIndex: "_id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email;",
    dataIndex: "email",
    key: "email;",
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Sex",
    dataIndex: "sexo",
    key: "sexo",
  },
  {
    title: "Register",
    dataIndex: "registro",
    key: "registro",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "action",
    render: (text, record) => (
      <div>
        <ButtonDelete>
          <DeleteIcon />
        </ButtonDelete>
      </div>
    ),
  },
];

const User = () => {
  const [dataSource, setDataSource] = useState([]);

  const userContext = useContext(UserContext);

  const { getUser, user } = userContext;

  console.log(getUser);

  useEffect(() => {
    setDataSource(user);
  }, [user]);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const onSerach = (value) => {
    const filter = user.filter(
      (u) =>
        u.id === value ||
        u.name.toLowerCase().includes(value.toLowerCase()) ||
        u.email.toLowerCase().includes(value.toLowerCase()) ||
        u.number.toLowerCase().includes(value.toLowerCase()) ||
        u.sexo.toLowerCase().includes(value.toLowerCase()) 
    );
    setDataSource(filter);
  };

  return (
    <LayoutCrud>
      <Row>
        <Col span={1}></Col>
        <ColTitle span={23}>
          <h3>Usuarios:</h3>
        </ColTitle>
      </Row>
      <RowUser>
        <Col span={1}></Col>
        <ColSearch span={22}>
          <Searchs onSerach={onSerach} />
        </ColSearch>
        <Col span={1}></Col>
      </RowUser>

      <Row>
        <Col span={1}></Col>
        <Col span={22}>
          <Table columns={columns} dataSource={dataSource} />
        </Col>
        <Col span={1}></Col>
      </Row>
    </LayoutCrud>
  );
};

export default User;
