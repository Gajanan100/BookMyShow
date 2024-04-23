import React, { createContext, useReducer } from "react";
import { initialValue, reducer } from "./reducers";
export const GlobalContext = createContext();

const Provider = ({ children }) => {
  const [values, dispatch] = useReducer(reducer, initialValue);
  return (
    <GlobalContext.Provider value={{ values, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Provider;
