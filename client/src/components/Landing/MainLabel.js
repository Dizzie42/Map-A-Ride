import styled, { css } from "styled-components";
import { label } from "../../styles/mixins";

const bigScreens = css`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -195px;
  margin-top: -50px;
`;

export default styled.h1`
  ${label}
  padding: 25px;
  font-weight: 600;
  font-size: 30px;
  position: relative;
  @media (min-width: 768px) {
    ${bigScreens}
  }
`;
