import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'react-router';

import { useStateContext } from '../context/StateContext';

const Success = () => {
  return (
    <div>Success</div>
  )
}

export default Success