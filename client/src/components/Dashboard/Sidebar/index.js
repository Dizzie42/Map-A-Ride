import React, { useContext } from "react";
import styled from "styled-components";
import { RidesContext } from "../../../context/RidesContext";
import RidesList from "./RidesList/index";
import CreateButton from "./CreateButton";

const Sidebar = styled.aside`
  height: 100vh;
  flex: 0 1 20%;
  padding: 25px 30px;
  transition: transform 200ms;
  background: #fff;
  max-width: 370px;
  @media (max-width: 1000px) {
    position: absolute;
    height: 95%;
    top: 0;
    bottom: 0;
    z-index: 2000;
    width: 70vw;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.03);
    transform: ${props => (props.open ? "" : "translateX(-100%)")};
    padding: 25px 20px;
  }
`;

export default props => {
  const { rides } = useContext(RidesContext);
  const { routeDispatch, setCoords, toggleSidebar, sidebarOpen } = props;

  return (
    <Sidebar open={sidebarOpen}>
      <CreateButton
        {...{ routeDispatch, setCoords, toggleSidebar, sidebarOpen }}
      />
      <RidesList {...{ ...props, rides }} />
    </Sidebar>
  );
};
