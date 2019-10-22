import styled from "styled-components";
import { label } from "./mixins";
import { Link } from "react-router-dom";

export const Form = styled.form`
  padding: 45px 36px;
  background: white;
  border-radius: 2px;
  max-width: 384px;
  box-shadow: 0 15px 75px rgba(139, 140, 185, 0.118178);
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    max-width: 75vw;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  line-height: 40px;
  font-weight: 500;
  color: #131e41;
  @media (max-width: 768px) {
    ${label}
    padding: 5px 10px;
    margin: 10px;
    font-size: 25px;
  }
`;

export const StyledLink = styled(Link)`
  &:active {
    color: #1c01ff;
  }
`;

export const Input = styled.input`
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
  width: 90%;
  padding: 0 15px;
  transition: 0.2s all cubic-bezier(0.4, 0, 0.2, 1);
  color: #131e41;
  font-family: "Archivo", sans-serif;
  margin: 0;
  height: 44px;
  border-radius: 2px;
  background: #fcfcff;
  border: 1px solid;
  border-color: ${props => (props.error ? "#FD1941" : "#cdcee4")};
  caret-color: #1c01ff;
  margin: 0px 0px 0px 0px;

  &:focus {
    border-color: #1c01ff;
    outline: none;
  }
  @media (max-width: 768px) {
    /* max-width: 90vw; */
  }
`;

export const Error = styled.span`
  color: #fd1941;
  font-size: 10.5px;
  font-weight: 400;
  text-align: left;
  font-family: "Archivo", sans-serif;
  letter-spacing: 0.1px;
`;
