import React, { createContext, useReducer, useMemo } from "react";

export const UserContext = createContext();

const initialState = {
  user: { id: "", name: "" }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_DATA":
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          name: action.payload.name
        }
      };
    default:
      return state;
  }
};
export const UserProvider = props => {
  const [userStore, userDispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return { userStore, userDispatch };
  }, [userStore]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
