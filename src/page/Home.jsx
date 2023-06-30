import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

import Company from '../components/Company'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <div className='w-full mx-auto bg-white overflow-hidden'>
      <Header />
      <Hero />
      <Company />
      <Pricing />
      <Faq/>
      
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home