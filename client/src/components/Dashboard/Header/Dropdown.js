import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import ListButton from "../../shared/ListButton";
import { DropdownMenu, LogOutIcon } from "./styles";
import { setRidesData } from "../../../utils/actions";

const DropdownButton = styled(ListButton)`
  font-size: 1rem;
  padding: 20px;
`;

const Menu = ({ history, ridesDispatch }) => {
  function handleLogOut() {
    ridesDispatch({ type: "CLEAN_RIDES" });
    window.localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownButton onClick={handleLogOut}>
          <LogOutIcon size={"20px"} />
          Log out
        </DropdownButton>
      </DropdownMenu>
    </React.Fragment>
  );
};

export default withRouter(Menu);
