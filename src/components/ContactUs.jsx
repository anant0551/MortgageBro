import React, { useState } from 'react';
import { motion } from "framer-motion"

const ContactUs = () => {
    return(
    <motion.div 
      initial={{opacity:0, x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
      
      className='text-center p-6 py-20 1g:px-32 w-full overflow-hidden' id='ContactUs'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light text-gold'>With Us</span></h1>
        <p className='text-center mb-12  max-w-80 mx-auto text-gray-200'>Ready to Make a Move? Let's Build Your Future Together</p>
    
    <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
      <div className='flex  flex-wrap'>
        <div className='w-full md:w-1/2 text-left text-harvestgold'>
          Your Name
          <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4 text-harvestgold'>
          Your Email
          <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
          </div>
      </div>
      <div className='my-6 text-left text-harvestgold '>
        Message
        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
        name='Message' placeholder='Message' required></textarea>
      </div>
      <button className=' bg-blue-600 text-white py-2 px-12 mb-10 rounded'>Send Message</button>
    </form>
      
      </motion.div>
    )
  }
export default ContactUs;