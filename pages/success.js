import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Success = () => {
  // grabing all the stuff
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();

  // using this to empty the customer cart after transaction
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
  }, []);
  
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h3>Thanks for odering from Juiced Desktops.</h3>
        <p className='email-msg'>Confirmation has been sent to email.</p>
        <p>
          <Link href='/'>
            <button type='button' className='btn-succ' >
              Home
            </button>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Success