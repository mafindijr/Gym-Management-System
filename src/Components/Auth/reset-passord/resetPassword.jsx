import React from 'react'

export default function ResetPassword() {
  return (
    <div className="w-full bg-[#223649] p-6 rounded-lg shadow flex flex-col gap-4">
      <h2 className='font-montserrat font-bold text-[32px] leading-[44px] text-center hover:scale-105 transition-transform duration-300'>Set New Password</h2>
        <p className='font-montserrat font-[400] text-[18px] leading-[28px] text-center mt-2'>Create a new password for your account</p>

        <form className='flex flex-col gap-4 p-4'>
            <input 
              type="password"
              name='newPassword'
              className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
              placeholder='Enter New Password'
              required
              />
            <input 
              type="password"
              name='confirmPassword'
              className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
              placeholder='Confirm New Password'
              required
              />
            <button className='bg-btnprimary w-full pl-4 pr-4 rounded-[24px] text-[14px] font-bold font-poppins text-center cursor-pointer h-[40px]'>Create new password</button>
        </form>
    </div>
  )
}
