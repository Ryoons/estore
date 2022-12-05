import React from 'react'

import { Layout } from '../components';
import '../styles/globals.css'
import { StateContext } from '../context/';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )   
}

export default MyApp
