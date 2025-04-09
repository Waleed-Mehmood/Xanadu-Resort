import React from 'react'
import Navbar from '../components/Common/navbar'
import Hero from '../components/Home/Hero'
import Intro from '../components/Home/Intro'
import Services from '../components/Home/Services'
import SpecialActivies from '../components/Home/SpecialActivies'
import OurRooms from '../components/Home/ourRooms'
import Customers from '../components/Home/Customers'
import Location from '../components/Home/Location'
import Footer from '../components/Footer'

function Home() {
  return (
    
    <div className='relative'>
        <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

        <Hero/>
        <Intro/>
        <Services/>
        <SpecialActivies/>
        <OurRooms/>
        <Customers/>
        <Location/>
        <Footer/>
    </div>
    
  )
}

export default Home