import styled from "styled-components";

export default styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  border: none;
  box-shadow: ${props => (props.selected ? "inset 0 -2px 0 0 #1c01ff" : "")};
  background-color: ${props =>
    props.selected ? "rgba(205, 206, 228, 0.4)" : "#fff"};
  width: 100%;
  font-family: "Archivo", sans-serif;
  padding: 15px 10px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  color: ${props => (props.selected ? "#1C01FF" : "rgba(19, 30, 65, 0.6)")};
  &:hover {
    background: rgba(205, 206, 228, 0.4);
    color: ${props => (props.selected ? "" : "rgba(19, 30, 65, 0.8)")};
  }
  &:focus {
    outline: none;
  }
`;
