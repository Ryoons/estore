import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setcartItems] = useState();
    const [totalPrice, settotalPrice] = useState();
    const [totalQuantity, settotalQuantity] = useState();
    const [qty, setqty] = useState(1);

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantity,
                qty
            }}>
            {children}
        </Context.Provider>
    )

}