import React, { createContext, useContext, useState } from "react";


const appContext = createContext(null)


export const ContextProvider = ({ children }) => {
    const [cartItemsCount, setCartItemsCount] = React.useState(0);
    const [wishlistItemsCount, setWishlistItemsCount] = React.useState(0);
    const [userData, setUserData] = useState([])
    const [isLoad, setIsLoad] = useState(null)

    return <appContext.Provider value={{ isLoad, setIsLoad, userData, setUserData, cartItemsCount, setCartItemsCount, wishlistItemsCount, setWishlistItemsCount }}>
        {children}
    </appContext.Provider>
}


export const useAppContext = () => useContext(appContext)

