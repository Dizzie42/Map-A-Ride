import React from "react";
import { Wrapper } from "./styles";
import { Bicycle } from "styled-icons/fa-solid/Bicycle";

export default () => (
  <Wrapper>
    <Bicycle
      size={"35px"}
      title="bicycle-icon"
      color={"rgba(19, 30, 65, 0.8)"}
      style={{ marginLeft: "5px" }}
    />
  </Wrapper>
);

//Here should go the name of the app, though display: none with small screens
