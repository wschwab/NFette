import React, { createContext, useReducer} from "react";
import {useActions} from "./actions";
import reducer from "./reducer";

export const Store = createContext();

const initialState = {
    newNFTDetails: {},
    nftDetails: {},
    curveShape: "",
    riskProfile: "",
};

export function StoreProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);
    const value = {state, actions};
    return <Store.Provider value={value}>
        {children}
    </Store.Provider>
}