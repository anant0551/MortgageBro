import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style= {{backgroundImage: "url('/header_img.png')"}} id='Header'>
      <Navbar />
      <motion.div 
      initial={{opacity:0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='container text-center mx-auto py-4 px-6 md:px-20 md:-32 text-gold'>
        <h2 className='text-2xl sm:text-4xl md:text-[50px] inline-block max-w-3xl font-semibold pt-20'>"Explore the right mortgage simple and stress-free."</h2>
        <div className='mt-16'> 
            <a href="#ContactUs" className='border border-white px-8 py-3 rounded'>Contact Us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header