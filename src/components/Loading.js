import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 48, color:"#f5f5f5" }} spin />;

const Loading = () => {
  return (
    <>
      <Spin indicator={antIcon} />
    </>
  );
};

export default Loading;
