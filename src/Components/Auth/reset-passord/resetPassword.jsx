import { useState } from 'react'

export default function ResetPassword() {

      const [openResetPassword, setOpenResetPassword] = useState(false);
      const [isSubmitting, setIsSubmitting] = useState(false);


  return (
        <div>
            <h4 className='font-montserrat font-[700] text-[20px] leading-[30px] text-center mb-2 mt-2'>Reset Your Password</h4>
          <p className='font-montserrat font-[400] text-[18px] leading-[28px] text-center mb-4'>Enter your email to receive a reset link</p>
          {emailSent && (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                <h5 className="font-bold mb-2">Reset Link Sent!</h5>
                <p>We've sent a password reset link to your email address. Please check your inbox.</p>
            </div>
          )}
        </div>
      )
}
