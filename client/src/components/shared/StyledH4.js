import styled from "styled-components";
import { label } from "../../styles/mixins";

export default styled.h4`
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: #131e41;
  @media (max-width: 768px) {
    ${props => (props.noLabel ? "" : label)}
    padding: 5px 5px;
  }
`;
