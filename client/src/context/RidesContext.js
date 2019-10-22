import React, { createContext, useReducer, useMemo } from "react";

export const RidesContext = createContext();
const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_RIDES_DATA":
      return [...state, ...action.payload];
    case "UPDATE_RIDE": {
      const i = state.findIndex(ride => ride._id === action.payload._id);
      state.splice(i, 1, action.payload);
      return state;
    }
    case "DELETE_RIDE": {
      return state.filter(ride => ride._id !== action.payload._id);
    }
    case "CLEAN_RIDES": {
      return [];
    }
    default:
      return state;
  }
};

export const RidesProvider = props => {
  const [rides, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return { rides, dispatch };
  }, [rides]);

  return (
    <RidesContext.Provider value={value}>
      {props.children}
    </RidesContext.Provider>
  );
};
