import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import NewProducts from './NewProducts'
import DiscountSection from './DiscountSection'
import FreeShipping from './FreeShipping'
import UpparFooter from './UpparFooter'
import Footer from './Footer'

const Home = () => {
  return (
    <>
     <Navigation/>
      <Hero/>
      <NewProducts />
      <DiscountSection />
      <FreeShipping />
      <UpparFooter />
      <Footer /> 
      </>
  )
}

export default Home
