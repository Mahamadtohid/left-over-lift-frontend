import { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext()

export default function AppContextProvider({children}){

    const [isLoggeIn , setIsLoggedIn] = useState(false);

    const value = {
        setIsLoggedIn,
        isLoggeIn,

    }



    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>

}