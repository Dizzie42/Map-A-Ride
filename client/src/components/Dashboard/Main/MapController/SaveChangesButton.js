import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import pick from "lodash/pick";
import { PulseLoader } from "react-spinners";
import { Check } from "styled-icons/boxicons-regular/Check";
import MainActionButton from "../../../shared/MainActionButton";
import {
  setRidesData,
  updateRide,
  updateRoute
} from "../../../../utils/actions";

const SaveChangesButton = styled(MainActionButton)`
  min-width: 170px;
  overflow: hidden;
  width: 190px;
  margin: 0;
  background: ${props => (props.saved ? "#1BDC77" : "")};
  border-color: ${props => (props.saved ? "#1BDC77" : "")};
  transition: all 0.17s ease-out;
`;

export default ({ dispatch, routeStore, routeDispatch }) => {
  const { createMode, currentRoute: r } = routeStore;
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleClick() {
    let ride = pick(r, ["title", "waypoints", "totalDistance", "totalTime"]);

    function handleCall(data) {
      routeDispatch(updateRoute({ createMode: "off", ...data }));
      setLoading(false);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
      }, 700);
    }
    if (!createMode) {
      setLoading(true);
      axios
        .put(`/api/ride/${r._id}`, ride)
        .then(res => {
          dispatch(updateRide(res.data));
          handleCall(res.data.ride);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(true);
      axios
        .post("/api/ride/create", ride)
        .then(res => {
          dispatch(setRidesData([res.data.ride]));
          handleCall(res.data.ride);
        })
        .catch(() => setLoading(false));
    }
  }

  return (
    <SaveChangesButton onClick={handleClick} saved={saved ? true : false}>
      {!loading && !saved && <span>Save changes</span>}
      {loading && <PulseLoader size={8} color={"#ffffff"} loading={loading} />}
      {saved && <Check size={"32px"} />}
    </SaveChangesButton>
  );
};
