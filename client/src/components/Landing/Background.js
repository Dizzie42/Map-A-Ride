import React, { useEffect, useRef, Fragment, useState } from "react";
import styled from "styled-components";
import { Bicycle } from "styled-icons/fa-solid/Bicycle";
import { Motorcycle } from "styled-icons/fa-solid/Motorcycle";
import { CarSide } from "styled-icons/fa-solid/CarSide";
import times from "lodash/times";

const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
const style = {
  color: "rgba(19, 30, 65, 0.9)",
  padding: "30px"
};
const icons = [
  <Bicycle size={"35px"} style={style} />,
  <Motorcycle size={"35px"} style={style} />,
  <CarSide size={"35px"} style={style} />
];

export default () => {
  let icon;
  const backgroundRef = useRef(),
    [n, setN] = useState(0);

  useEffect(() => {
    let rows, cols, bck;
    bck = backgroundRef.current;
    function setNumberOfIcons() {
      const { height, width } = bck.getBoundingClientRect();
      rows = Math.floor(width / 95);
      cols = Math.floor(height / 95);
      setN(rows * cols);
    }
    setNumberOfIcons();
    window.addEventListener("resize", setNumberOfIcons);
    return () => {
      window.removeEventListener("resize", setNumberOfIcons);
    };
  }, []);

  return (
    <Background ref={backgroundRef}>
      {times(n, i => {
        icon = icons[Math.floor(Math.random() * icons.length)];
        return <Fragment key={i}>{icon}</Fragment>;
      })}
    </Background>
  );
};
