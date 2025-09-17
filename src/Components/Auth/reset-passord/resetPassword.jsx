import React from 'react'

export default function ResetPassword() {
  return (
    <div>
      <h2 className='font-montserrat font-[700] font-bold text-[32px] leading-[44px] text-center hover:scale-105 transition-transform duration-300'>Set New Password</h2>
        <p className='font-montserrat font-[400] text-[18px] leading-[28px] text-center mt-2'>Create a new password for your account</p>

        <form>
            <input type="text" />
            <input type="text" />
        </form>
    </div>
  )
}
