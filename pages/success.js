import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();
  
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
            <button type='button'>
              Home
            </button>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Success