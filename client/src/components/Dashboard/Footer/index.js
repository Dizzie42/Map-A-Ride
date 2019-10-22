import React from "react";
import styled from "styled-components";
import { Github } from "styled-icons/fa-brands/Github";

const Footer = styled.footer`
  height: 3em;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100vw;
  border-top: 1px solid rgba(205, 206, 228, 0.6);
`;

export default () => {
  return (
    <React.Fragment>
      <Footer>
        <a
          href="https://github.com/chingu-voyages/v11-bears-team-01/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            size={"23px"}
            color={"rgba(19, 30, 65, 0.8)"}
            style={{ margin: "17px 40px 0 0" }}
          />
        </a>
      </Footer>
    </React.Fragment>
  );
};
