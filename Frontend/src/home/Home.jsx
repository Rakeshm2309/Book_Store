import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

import App from './App'
import './index.css'

function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    {/* <Freebook />  */}
    <App />
    <Footer />
    
    </>
  )
}

export default Home


