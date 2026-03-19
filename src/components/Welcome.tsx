'use client'
import React from 'react'
import { motion } from "motion/react"
function Welcome() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-4xl font-bold text-green-600 mb-4'
      >
        hello</motion.div>
    </div>
  )
}

export default Welcome
