import React, { createContext, useState } from "react";



export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const [cart, setCart] = useState([]);

    return (
        <AppContext.Provider value={{ isAuth, setIsAuth, cart, setCart }}>
            {children}
        </AppContext.Provider>
    );
};