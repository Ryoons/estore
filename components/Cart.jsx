import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlineLeft, AiOutlineShopping, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast, Toast } from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';


const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantity, cartItems, setShowCart, toggleCartItemQuant, onRemove } = useStateContext();

  const handleCheckout = async () => { 
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      // making the cart items readable
      body: JSON.stringify(cartItems),
    });
    if(response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Putting items in your bag.');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
      <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
        <AiOutlineLeft />
        <span className='heading'> Your Cart </span>
        <span className='cart-num-items'>({totalQuantity})</span>
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
            <div className='item-desc'>
              <div className='flex top'>
                <h5>{item.name}</h5>
                <h4>${item.price}</h4>
              </div>
              <div className='flex bottom'>
                <div>
                <p className='quantity-desc'>
                        <span className='minus' onClick={() => toggleCartItemQuant(item._id, 'dec')}>
                            <AiOutlineMinus />
                        </span>
                        <span className='num' onClick="">
                            {item.quantity}
                        </span>
                        <span className='plus' onClick={() => toggleCartItemQuant(item._id, 'inc')} >
                            <AiOutlinePlus />
                        </span>
                    </p>
                </div>
                <button
                type='button'
                className='remove-item'
                onClick={() => onRemove(item)}>
                  <TiDeleteOutline size={40}/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length >= 1 && (
        <div cart-bottom>
          <div className='total'>
            <h3>Subtotal:</h3>
            <h3>${totalPrice}</h3>
          </div>
          <div className='btn-container'>
            <button type='button' className='btn' onClick={handleCheckout}>
              Pay Now
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Cart