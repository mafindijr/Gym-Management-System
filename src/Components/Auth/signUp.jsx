import React from 'react'

export default function signUpPage() {
  return (
    <form>
            <div className="w-full bg-[#223649] p-6 rounded-lg shadow flex flex-col gap-4">
                <div>
                    <h2 className='text-[28px] leading-[35px] font-bold text-center'>Welcome Back</h2>
                </div>
                <div>
                    <input 
                    type="text"
                    name='email'
                    className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
                    placeholder='Enter Email'
                    required
                    />
                </div>
                <div>
                    <input 
                    type="password"
                    name='email'
                    className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
                    placeholder='Enter Email'
                    required
                    />
                    <span className='text-[14px] leading-[21px] text-[#91adc9]'>Forgot Password</span>
                </div>
                <div className='flex flex-col items-center'>
                    <button className='bg-btnprimary w-full pl-4 pr-4 rounded-[24px] text-[14px] font-bold font-poppins text-center cursor-pointer h-[40px]'>Log In</button>
                    <span className='text-[14px] leading-[21px] text-[#91adc9]'>Already have an account? Log In</span>
                </div>
                
            </div>
         </form>
  )
}
