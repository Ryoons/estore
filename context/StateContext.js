import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantity, setTotalQuantity] = useState();
    const [qty, setQty] = useState(1);

    //adding items to cart, if item already in cart then add more instead of new
    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + product.quantity);

        if(checkProductInCart) {

            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    // spread into cart
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems);
            
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}])
        }
        toast.success(`${qty} ${product.name} added to cart.`);
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