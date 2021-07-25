import React from "react";
import { Layout } from "antd";
import styled from "@emotion/styled";

const { Header, Sider, Content } = Layout;

const Monda = styled(Content)`
  height: 100vh;
`;
const Monda2 = styled(Header)`
  background: #f5f5f5;
`;

const LayoutApp = ({ children }) => {
  return (
    <Layout>
      <Sider style={{ minHeight: "100vh" }}>Sider</Sider>
      <Layout>
        <Monda2>Header</Monda2>
        <Monda>{children}</Monda>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
