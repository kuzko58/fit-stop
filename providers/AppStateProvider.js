import React, { createContext, useContext, useReducer } from 'react';

// Prepares the data layer
export const AppStateContext = createContext();

// Supplies data to app
export const AppStateProvider = ({ reducer, initialState, children }) => (
    <AppStateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </AppStateContext.Provider>
);

// Pull information from the data layer
export const useAppState = () => useContext(AppStateContext);