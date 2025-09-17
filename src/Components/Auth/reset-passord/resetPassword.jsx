import React from 'react'

export default function ResetPassword() {
  return (
    <div>
      <h2 className='font-montserrat font-bold text-[32px] leading-[44px] text-center hover:scale-105 transition-transform duration-300'>Set New Password</h2>
        <p className='font-montserrat font-[400] text-[18px] leading-[28px] text-center mt-2'>Create a new password for your account</p>

        <form>
            <input 
              type="password"
              name='newPassword'
              className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
              placeholder='Enter Email'
              required
              />
            <input 
              type="password"
              name='confirmPassword'
              className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
              placeholder='Enter Email'
              required
              />
            <button>Create new password</button>
        </form>
    </div>
  )
}
