'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBasket, Bike, } from 'lucide-react'
type propType = {
  nextStep :(s:number)=> void
}
function Welcome({nextStep}:propType) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6 bg-linear-to-b from-green-100 to-white'>
      <motion.div
        initial={{ opacity: 0, translateY:-20 }}
        animate={{ opacity: 1, translateY:0 }}
        transition={{ duration: 0.6 }}
        className='flex  items-center gap-3'
            >
         <ShoppingBasket className='w-10 h-10 text-green-600' />
        <h1 className='text-4xl md:text-5xl font-extrabold text-green-700'>Shoppers</h1>
        
        
        </motion.div>
        
      <motion.p
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='text-lg text-gray-700 mt-4 md:text-xl max-w-lg'
      >
       Your one-stop destination for fresh groceries, organic produce, and 
        daily essentials delivered right to your doorstep.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='flex items-center gap-9.5 mt-10'>
          <ShoppingBasket className='w-24 h-21 md:w-32 md:h-32 text-green-600 drop-shadow-md'/>
          <Bike className='w-24 h-21 md:w-32 md:h-32 text-orange-600 drop-shadow-md'/>

      </motion.div>

      <motion.button
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='inline-flex items-center gap-2 bg-green-600 text-white py-3 px-8 rounded-2xl font-semibold
        shadow-md hover:bg-green-700 transition-all duration-200 mt-10'
        onClick={()=>nextStep(2)}
      >
        <ArrowRight className='w-5 h-5 inline-block mr-2' />
        Get Started
      </motion.button>
    </div>
  )
}

export default Welcome
