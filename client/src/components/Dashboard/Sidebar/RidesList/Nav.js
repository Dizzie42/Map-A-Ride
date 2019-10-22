import React from "react";
import { SkewLoader } from "react-spinners";
import { updateRoute } from "../../../../utils/actions";
import ListButton from "../../../shared/ListButton";
import Ul from "../../../shared/Ul";

const style = {
  nav: {
    marginTop: "5px"
  },
  ListButton: {
    margin: "3px 0"
  },
  noRides: {
    textAlign: "left",
    color: "rgba(19,30,65,0.6)",
    padding: "10px"
  },
  skew: {
    height: "30vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default ({
  routeStore,
  routeDispatch,
  rides,
  setCoords,
  toggleSidebar,
  sidebarOpen,
  dataLoading
}) => {
  const { currentRoute } = routeStore;

  function handleClick(e) {
    const id = e.target.dataset.id;
    const ride = rides.find(ride => id === ride._id);
    //setting currentRoute to display on map
    setCoords(ride.waypoints);
    routeDispatch(updateRoute({ createMode: "off", ...ride }));
    toggleSidebar(!sidebarOpen);
  }

  return (
    <nav style={style.nav}>
      <Ul>
        {dataLoading && (
          <div style={style.skew}>
            <SkewLoader size={10} color={"rgba(19, 30, 65, 0.8)"} />
          </div>
        )}
        {rides.length < 1 && !dataLoading && (
          <h3 style={style.noRides}>
            Drag & drop the marker to draw your first route.
          </h3>
        )}
        {rides.length > 0 &&
          rides.map((ride, i) => (
            <li key={i}>
              <ListButton
                style={style.ListButton}
                data-id={ride._id}
                onClick={handleClick}
                selected={currentRoute._id === ride._id ? true : false}
              >
                {ride.title}
              </ListButton>
            </li>
          ))}
      </Ul>
    </nav>
  );
};
