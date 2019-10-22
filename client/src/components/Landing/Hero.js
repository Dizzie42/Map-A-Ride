import React from "react";
import styled from "styled-components";
import Background from "./Background";
import MainLabel from "./MainLabel";

const Hero = styled.div`
  position: relative;
  flex-basis: 62.5%;
  background-color: rgba(205, 206, 228, 0.4);
  padding: 1em;
  @media (max-width: 1200px) {
    flex-basis: 100%;
  }
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
const Label = styled(MainLabel)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default () => {
  return (
    <Hero>
      <Label>Map & save all your rides</Label>
      <Background />
    </Hero>
  );
};
