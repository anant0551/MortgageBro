import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {

    const [showMobileMenu,setShowMobileMenu] = useState(false)
useEffect(()=>{
    if(showMobileMenu){
        document.body.style.overflow='hidden'
    }else{
        document.body.style.overflow='auto'
    }
    return()=>{
         document.body.style.overflow='auto'
    }
},[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img className="rounded-lg w-40 h-28" src={assets.logo} alt="" />

            <ul className='hidden md:flex gap-7 text-gold '>
                <a href ="#Header" className='cursor-pointer hover:text-black' >Home</a>
                <a href ="#About" className='cursor-pointer hover:text-black' >About</a>
                <a href ="#Lending" className='cursor-pointer hover:text-black' >Lending solutions</a>
                <a href ="#Testimonials" className='cursor-pointer hover:text-black' >Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
            <img onClick ={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt=''/>
        </div> 
        {/*--------mobile view--------*/} 
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-gray-800 transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center text-gold gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={()=>setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={()=>setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={()=>setShowMobileMenu(false)} href="#Lending" className='px-4 py-2 rounded-full inline-block'>Leanding Solution</a>
                <a onClick={()=>setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>    
            </ul>    
        </div>  
    </div>
  )
}

export default Navbar