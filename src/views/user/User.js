import React, { useState, useEffect, useContext } from "react";
import LayoutCrud from "../../components/LayoutCrud";
import { Row, Col, Table, Button, Input } from "antd";
import styled from "@emotion/styled";
import "./User.css";
import UserContext from "../../context/user/userContext";
import Swal from "sweetalert2";
import { DeleteOutlined } from "@ant-design/icons";

const { Search } = Input;

const ButtonDelete = styled(Button)`
  border: none;
  color: rgb(143, 138, 138);
  :hover {
    color: red;
    background: #fafafa;
  }
  :focus {
    color: rgb(143, 138, 138);
    background: #fff;
  }
`;

const InputSearch = styled(Search)`
  width: 300px;
  border: none;
`;

const DeleteIcon = styled(DeleteOutlined)`
  font-size: 18px;
`;

const User = () => {
  const [dataSource, setDataSource] = useState([]);
  const [dataFilter, setDataFilter] = useState("");

  const userContext = useContext(UserContext);

  const { getUser, user, removeUser } = userContext;

  const showAlert = (idUser) => {
    Swal.fire({
      title: "Advertencia",
      text: "Esta acción es irreversible, ¿Desea continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((e) => {
      if (e.isConfirmed) {
        removeUser(idUser);
      }
    });
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "_id",
    },
    {
      title: "Correo Electrónico",
      dataIndex: "email",
      key: "_id",
    },
    {
      title: "Número",
      dataIndex: "number",
      key: "_id",
    },
    {
      title: "Género",
      dataIndex: "sexo",
      key: "_id",
    },
    {
      title: "Fecha de Registro",
      dataIndex: "registro",
      key: "_id",
    },
    {
      title: "Acciones",
      dataIndex: "",
      key: "_id",
      render: (text, record) => (
        <div>
          <ButtonDelete
            onClick={() => {
              showAlert(text._id);
            }}
          >
            <DeleteIcon />
          </ButtonDelete>
        </div>
      ),
    },
  ];

  useEffect(() => {
    setDataSource(user);
  }, [user]);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    onSearch(dataFilter);
    // eslint-disable-next-line
  }, [dataFilter]);

  const onSearch = (value) => {
    const filter = user.filter(
      (u) =>
        u._id === value ||
        u.name.toLowerCase().includes(value.toLowerCase()) ||
        u.email.toLowerCase().includes(value.toLowerCase()) ||
        u.number.toLowerCase().includes(value.toLowerCase()) ||
        u.sexo.toLowerCase().includes(value.toLowerCase())
    );
    setDataSource(filter);
  };
  return (
    <LayoutCrud>
      <Row className="title-search">
        <h3>Usuarios:</h3>
        <InputSearch value={dataFilter} onChange={(e) => setDataFilter(e.target.value)} onSearch={onSearch} placeholder="Término de Busqueda" />
      </Row>

      <Row>
        <Col span={24}>
          <Table columns={columns} dataSource={dataSource} />
        </Col>
      </Row>
    </LayoutCrud>
  );
};

export default User;
