import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WhatIs from '../components/WhatIs'
import Company from '../components/Company'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className='w-full mx-auto bg-white'>
      <Header />
      <Hero />
      <Company />
      <Slider />
      <WhatIs />
    </div>
  )
}

export default Home