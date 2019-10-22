import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import StyledH4 from "../../../shared/StyledH4";

const Container = styled.div`
  height: 75%;
  margin-top: 25px;
  padding: 0px;
`;
const Title = styled(StyledH4)`
  font-size: 17px;
  text-align: left;
  color: #9898a9;
  padding: 10px;
`;

export default props => {
  return (
    <Container>
      <Title noLabel>All rides</Title>
      <Nav {...props} />
    </Container>
  );
};
