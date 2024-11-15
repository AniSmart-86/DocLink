import { createContext } from "react";
import { doctors } from "../assets/DocData";



export const DocsContext = createContext();

export const DocsContextProvider = (props)=>{

    const currencySymbol = '$'
    const value = {doctors, currencySymbol};

    return (
        <DocsContext.Provider value={value}>
            {props.children}
        </DocsContext.Provider>
    )
}