import React, { createContext, useContext, useReducer } from 'react';

// Prepares the data layer
export const AuthStateContext = createContext();

// Supplies data to app
export const AuthStateProvider = ({ reducer, initialState, children }) => (
    <AuthStateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </AuthStateContext.Provider>
);

// Pull information from the data layer
export const useAuthState = () => useContext(AuthStateContext);