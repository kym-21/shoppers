import { ArrowLeft, Leaf } from 'lucide-react'
import React from 'react'
import { motion } from "motion/react"
type propType = {
previousStep:(s:number)=> void
}
function RegisterForm({previousStep}:propType) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>
      <div
        className='absolute top-6 left-6 flex items-center gap-2 text-green-600 hover:text-green-800
        transition-colors cursor-pointer' onClick={()=>previousStep(1)}>
        <ArrowLeft className='w-5 h-5' />
        <span className='font-medium'>Back</span>
      </div>    
      <motion.h1 
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
      className='text-4xl font-extrabold text-green-700 mb-2'> 
        Create Account
         </motion.h1> 
      <p className='text-gray-600 mb-8 flex items-center'>Join Shoppers today <Leaf
      className='w-5 h-5 text-green-600'/></p>
      <motion.form className='flex flex-col gap-5 w-full max-w-sm'
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 0.6 }}>
        <div className='relative'>
          <input type="text" placeholder='Name' className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600' />
        </div>
        <div className='relative'>
          <input type="email" placeholder='Email' className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600' />
        </div>
        <div className='relative'>
          <input type="password" placeholder='Password' className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600' />
        </div>
        <button type='submit' className='bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors'>Register</button>

      </motion.form>
    </div>
  )

}

export default RegisterForm
