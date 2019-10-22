import React from "react";
import styled from "styled-components";

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 200px;
  min-width: 100px;
  text-align: left;
  height: auto;
`;
const Category = styled.p`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #9898a9;
  margin: 0;
`;
const Value = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #131e41;
  margin: 0;
`;

export default ({ totalTime, totalDistance }) => {
  function timeConverter(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes}:${seconds}`;
  }
  function distanceConverter(distance) {
    return (distance / 1000).toFixed(2).concat(" km.");
  }

  return (
    <React.Fragment>
      <Stats>
        <Category>Total time</Category>
        <Value>{timeConverter(totalTime)}</Value>
        <Category>Total distance</Category>
        <Value>{distanceConverter(totalDistance)}</Value>
      </Stats>
    </React.Fragment>
  );
};
