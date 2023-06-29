import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WhatIs from '../components/WhatIs'
import Company from '../components/Company'

const Home = () => {
  return (
    <div className='w-full mx-auto bg-white'>
      <Header />
      <Hero />
      <Company />
      <WhatIs />
    </div>
  )
}

export default Home