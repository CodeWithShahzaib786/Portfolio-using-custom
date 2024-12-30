/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/bg-profile.jpg)] bg-cover'
    style={{backgroundSize:"32%" , backgroundPosition:"left 100px top 100px"}}
    >
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(90vh-50px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[70px] sm:text-[90px] font-bold leading-tight flex justify-center items-center'>
        <div>
          <p  data-aos="zoom-in-up">I'm</p>
          <p  data-aos="zoom-in-up">Shahzaib</p>
          <p data-aos="zoom-in-up">Khan</p>
        </div>
      </div>  
    </div>
  </div>
  )
}

export default Hero
 