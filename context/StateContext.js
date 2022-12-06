import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setcartItems] = useState();
    const [totalPrice, settotalPrice] = useState();
    const [totalQuantity, settotalQuantity] = useState();
    const [qty, setQty] = useState(1);

    //adding items to cart, if item already in cart then add more instead of new
    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        if(checkProductInCart) {
            settotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
            
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty - 1;
     })
    }

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantity,
                qty,
                incQty,
                decQty
            }}>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context)