import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//estado inicial
const initialState = {
    transaction: [],
};

//criar context
export const GlobalContext = createContext(initialState)


//Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //ACTIONS
    function Delete(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }
    return ( <GlobalContext.Provider value = {
            {
                transaction: state.transaction,
            Delete, addTransaction
            }
        } >
        { children } </GlobalContext.Provider>
    );
}