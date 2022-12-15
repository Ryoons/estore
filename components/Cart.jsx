import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { Toast } from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';


const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantity, cartItems, setShowCart } = useStateContext();

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
      <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
        <AiOutlineLeft />
        <span className='heading'> Your Cart </span>
        <span className='cart-num-items'>({totalQuantity} Items)</span>
      </button>

      {cartItems.length < 1 && (
        <div className='empty-cart'>
          <AiOutlineShopping size={150} />
          <h3>Cart is empty</h3>
          <Link href='/'>
            <button
            type='button'
            onClick={() => setShowCart(false)}
            className='btn'>
              Continue Shoppping
            </button>
          </Link>
        </div>
      )}
      <div className='product-container'>
        {cartItems.length >= 1 && cartItems.map((item) => (
          <div className='product' key={item._id}>
            <img src={urlFor(item?.image[0])} className='cart-product-image' />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Cart