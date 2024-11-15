import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const About=() => {
    return (
        <motion.div
        initial={{opacity:0, x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 1g:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-xl sm:text-4xl font-bold mb-6'>About
                 <span className='text-harvestgold underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
            <p className='text-gray-200 mb-4'>Helping You Secure the Perfect Mortgage, Focused on Your Goals</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'> 
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
                <div className='flex flex-col items-center md:items-start mt-10 text-white'>
                    <div className=' grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-2xl font-medium text-gold'>10+</p>
                            <p >Years of Excellence</p>                        
                        </div>
                        <div>
                            <p className='text-2xl font-medium text-gold'>10K+</p>
                            <p >Satisfied Customers</p>
                        </div>
                        <div>
                            <p className='text-3xl font-medium text-gold'>50+</p>
                            <p >Office Hubs</p>
                        </div>
                        <div>
                            <p className='text-2xl font-medium text-gold'>55+</p>
                            <p >Banking Alliance</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg text-2xl'>
                    "As a trusted mortgage broker, we specialize in helping clients navigate the complex world of home financing. With access to a wide range of lenders and mortgage products, we work closely with you to find the best loan options tailored to your unique needs and goals. Whether you're buying your first home, refinancing, or seeking an investment property, our expert guidance and personalized service ensure that you secure the best terms and rates. We are dedicated to making your homeownership dreams a reality, providing you with the knowledge and support every step of the way."
                    </p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
                </div>
            </div>
        </motion.div> 
    )
}
export default About