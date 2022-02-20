import { createContext, useState, useContext, useEffect } from "react";



const appContext = createContext();

export const useAppContext = () => useContext(appContext);

export function ContextProvider ({children}) {

    const [loggedIn, setLoggedIn] = useState(false);
    
    return (
        <>
            <appContext.Provider value={{
                loggedIn,
                setLoggedIn,
            }}>
                {children}
            </appContext.Provider>
        </>
    )
}