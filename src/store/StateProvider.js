import React, { createContext, useContext, useReducer } from "react";

// Prepare for dataLayer
export const StateContext = createContext();

// Wrap app and provider the dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);