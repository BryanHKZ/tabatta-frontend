import React from "react";
import LayoutApp from "./LayoutApp";
import SubMenu from "./SubMenu";
import { Layout } from "antd";
import styled from "@emotion/styled";
const {  Sider, Content } = Layout;

const Sibedar = styled(Sider)`
    height:100vh;
    background: #F5F5F5;
    display:flex;
    justify-content:center;
`

const Main = styled(Content)`
  background: #fff;
`


const LayoutCrud = ({children}) => {
  return (
    <LayoutApp>
      <Layout>
        <Layout>
          <Sibedar>
              <SubMenu />
          </Sibedar>
          <Main>{children}</Main>
        </Layout>
      </Layout>
    </LayoutApp>
  );
};

export default LayoutCrud;
