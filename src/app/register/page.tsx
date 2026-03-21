'use client'

import RegisterForm from "@/components/registerForm";
import Welcome from "@/components/Welcome";
import React from 'react'

function Register() {
  const [step,setStep] = React.useState(1);
  return (
    <div>
       {step== 1 ? <Welcome nextStep={s}/> :<RegisterForm/>}

       
      
    </div>
  )
}

export default Register


