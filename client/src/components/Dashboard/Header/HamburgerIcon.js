import React from "react";
import styled from "styled-components";

export const TogglerContainer = styled.div`
  display: none;
  width: 21px;
  margin-right: 15px;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 1000px) {
    display: flex;
  }
`;
export const Bar = styled.div`
  background: rgba(19, 30, 65, 0.8);
  height: 3.5px;
  margin: 1.5px 0;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:nth-child(2) {
    transform: ${props => (props.toggle ? "translateX(-50px)" : "")};
    opacity: ${props => (props.toggle ? "0" : "1")};
  }
  &:first-child {
    transform: ${props => (props.toggle ? "rotate(45deg) scaleX(0.895)" : "")};
    transform-origin: left;
  }
  &:last-child {
    transform: ${props => (props.toggle ? "rotate(-45deg) scaleX(0.895)" : "")};
    transform-origin: left;
  }
`;

export default ({ open, toggleSidebar }) => {
  return (
    <React.Fragment>
      <TogglerContainer onClick={() => toggleSidebar(!open)}>
        <Bar toggle={open} />
        <Bar toggle={open} />
        <Bar toggle={open} />
      </TogglerContainer>
    </React.Fragment>
  );
};
