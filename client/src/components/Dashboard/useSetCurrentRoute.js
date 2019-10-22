import { useReducer, useState } from "react";

const initialState = {
  createMode: true,
  currentRoute: {
    _id: "",
    title: "Untitled new ride",
    waypoints: [],
    totalDistance: 0,
    totalTime: 0
  }
};

const reducer = (state, action) => {
  const { currentRoute } = state;
  const { _id, title, waypoints, totalDistance, totalTime } = currentRoute;

  switch (action.type) {
    case "CREATE_NEW_ROUTE":
      return {
        createMode: true,
        currentRoute: {
          _id: "",
          title: "Untitled new ride",
          waypoints: action.payload,
          totalDistance: 0,
          totalTime: 0
        }
      };
    case "UPDATE_ROUTE":
      return {
        createMode:
          action.payload.createMode === "off" ? false : state.createMode,
        currentRoute: {
          _id: action.payload._id || _id,
          title: action.payload.title || title,
          waypoints: action.payload.waypoints || waypoints,
          totalDistance: action.payload.totalDistance || totalDistance,
          totalTime: action.payload.totalTime || totalTime
        }
      };
    case "CREATE_MODE_OFF":
      return {
        ...state,
        createMode: false
      };
    default:
      return state;
  }
};
export default () => {
  const [routeStore, routeDispatch] = useReducer(reducer, initialState);
  //actual coords to set in the map
  const [coords, setCoords] = useState([]);

  return { routeStore, routeDispatch, coords, setCoords };
};
