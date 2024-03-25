import React, { createContext, useContext, useReducer } from "react";

export const Context = createContext();

const onClick = (initState, action) => {
  switch (action.type) {
    case "update":
      return { ...initState, text: action.payload };
    case "upper":
      return { ...initState, text: initState.text.toUpperCase() };
    case "lower":
      return { ...initState, text: initState.text.toLowerCase() };
    case "clear":
      return { ...initState, text: "" };
    case "copy":
      navigator.clipboard.writeText(initState.text);
      return initState;
    case "extraSpace":
      return { ...initState, text: initState.text.split(/\s+/).join(" ") };
    case "toggle":
      return { ...initState, theme: !initState.theme };
    default:
      return initState;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(onClick, {
    text: "",
    theme: false,
  });
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useReducerContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContext must be used within a ContextProvider");
  }
  return context;
};

export default ContextProvider;
