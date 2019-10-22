import React from "react";
import { Error } from "../../styles/form-elements";

const errorMessageContainer = {
  width: "100%",
  height: "13px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "start",
  padding: "3px 0 2px 0"
};

export default ({ children }) => (
  <span style={errorMessageContainer}>
    <Error>{children}</Error>
  </span>
);
