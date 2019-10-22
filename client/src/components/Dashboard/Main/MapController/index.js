import React, { useState } from "react";
import styled from "styled-components";
import SaveChangesButton from "./SaveChangesButton";
import PopUpMenu from "./PopUpMenu";
import Title from "./Title";
import Stats from "./Stats";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  max-height: 40%;
  padding: 1.5em 0;
  margin: 0 10px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  /* flex: 0 1; */
  justify-content: flex-end;
  position: relative;
  margin: 0px 10px 20px 20px;
  @media (max-width: 1002px) {
    justify-content: flex-start;
  }
`;
const RouteCard = styled.div`
  /* flex: 0 1 2; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 23px 17px;
  height: auto;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.03);
  @media (max-width: 1000px) {
    margin: 5px 12px;
  }
`;

export default props => {
  const { routeStore, routeDispatch } = props;
  const [title, setTitle] = useState(routeStore.currentRoute.title);

  return (
    <Container>
      <RouteCard>
        <Title {...{ routeDispatch, routeStore, title, setTitle }} />
        <Stats {...routeStore.currentRoute} />
      </RouteCard>
      <ButtonsWrapper>
        <SaveChangesButton {...props} {...{ routeDispatch }} />
        <PopUpMenu {...props} />
      </ButtonsWrapper>
    </Container>
  );
};
