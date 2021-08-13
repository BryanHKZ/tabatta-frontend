import React from "react";
import { Alert } from "antd";

const Error = ({ message }) => {
  return (
    <div>
      <br />
      <Alert type="error" description={message}></Alert>
    </div>
  );
};

export default Error;
