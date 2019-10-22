import React from "react";
import styled from "styled-components";
import useSetMap from "./useSetMap";
import useHandleRoute from "./useHandleRoute";
import "./control.css";

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export default ({ routeStore, routeDispatch, coords }) => {
  const { mapRef, routeControl } = useSetMap();
  useHandleRoute(routeControl, routeStore, routeDispatch, coords);

  return <Map ref={mapRef} />;
};
