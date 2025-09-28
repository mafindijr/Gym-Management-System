import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function SignUpPage() {

    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        createPassword: "",
        confirmPassword: ""
      });
    
      const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        // Here you would handle updating payment/card details
        alert("Sign Up Successfully");
    
      };

  return (
    <form onSubmit={handleSubmit}>
            <div className="w-full bg-[#223649] p-6 rounded-lg shadow flex flex-col gap-4">
                <div>
                    <h2 className='text-[28px] leading-[35px] font-bold text-center'>Welcome! Sign Up</h2>
                </div>
                <div>
                    <input 
                    type="text"
                    name='fullName'
                    value={form.fullName}
                    onChange={handleChange}
                    className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
                    placeholder='Full Name'
                    required
                    />
                </div>
                <div>
                    <input 
                    type="email"
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
                    placeholder='Enter Email'
                    required
                    />
                </div>
                <div>
                    <input 
                    type="password"
                    name='createPassword'
                    value={form.createPassword}
                    onChange={handleChange}
                    className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
                    placeholder='Create Password'
                    required
                    />
                </div>
                <div>
                    <input 
                    type="password"
                    name='confirmPassword'
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
                    placeholder='Confirm Password'
                    required
                    />
                </div>
                <div className='flex flex-col items-center'>
                    <button 
                     type='submit'
                     className='bg-btnprimary w-full pl-4 pr-4 rounded-[24px] text-[14px] font-bold font-poppins text-center cursor-pointer h-[40px]'
                     >Sign Up</button>
                    <span className='text-[14px] leading-[21px] text-[#91adc9]'>Already have an account? Log In</span>
                </div>
                
            </div>
         </form>
  )
}
