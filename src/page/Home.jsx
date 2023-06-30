import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WhatIs from '../components/WhatIs'
import Company from '../components/Company'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <div className='w-full mx-auto bg-white overflow-hidden'>
      <Header />
      <Hero />
      <Company />
      <WhatIs />
      <Pricing />

      
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home