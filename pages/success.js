import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'react-router';

import { useStateContext } from '../context/StateContext';

const Success = () => {

  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();

  const [order, setOrder] = useState(null);
  
  return (
    <div>Success</div>
  )
}

export default Success