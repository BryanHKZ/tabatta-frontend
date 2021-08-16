import React from "react";
import { Alert } from "antd";

const Error = ({ message }) => {
  return (
    <div>
      <Alert type="error" description={message}></Alert>
    </div>
  );
};

export default Error;
