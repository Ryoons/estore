import React from 'react';
import Link from 'next/link';

const HeroBanner = ({ heroBanner }) => {

  return (
    <div className='hero-banner-container'>
    <div>
      <p className='desktop-container'>{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <img src="" alt="desktop" className='hero-banner-image' />
      <div>
        <Link href="/product/ID">
          <button type="button"> BUTTON TEXT</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default HeroBanner