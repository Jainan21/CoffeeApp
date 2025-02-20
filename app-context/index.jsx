import React, { createContext, useState } from "react";



export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const [cart, setCart] = useState([]);

    const [item, setItemId] = useState("");

    const [userData, setUserData] = useState([]);

    return (
        <AppContext.Provider value={{ isAuth, setIsAuth, cart, setCart, item, setItemId, userData, setUserData }}>
            {children}
        </AppContext.Provider>
    );
};