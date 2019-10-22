import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import MainLabel from "./MainLabel";

const LandingLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    justify-content: center;
    width: auto;
    height: auto;
  }
`;
const AuthWrapper = styled.div`
  flex-basis: 37.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-basis: 50%;
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
const AppName = styled(MainLabel)`
  font-size: 23px;
  padding: 15px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default ({ children }) => {
  return (
    <LandingLayout>
      <Hero />
      <AuthWrapper>
        <AppName>Map & save all your rides</AppName>
        {children}
      </AuthWrapper>
    </LandingLayout>
  );
};
