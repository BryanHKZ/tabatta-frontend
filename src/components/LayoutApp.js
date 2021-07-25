import React from "react";
import { Layout } from "antd";
import styled from "@emotion/styled";

import Navbar from "./Navbar";
import FooterB from "./Footer";

const { Header, Footer, Content } = Layout;

const Monda = styled(Content)`
  min-height: 100vh;
  background: white;
  padding: 0 8rem;
`;
const Monda2 = styled(Header)`
  background: #f5f5f5;
`;

const LayoutApp = ({ children }) => {
  return (
    <Layout>
      <Monda2>
        <Navbar />
      </Monda2>
      <Monda>{children}</Monda>
      <Footer>
        <FooterB />
      </Footer>
    </Layout>
  );
};

export default LayoutApp;
