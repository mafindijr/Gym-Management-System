import { useState } from 'react'

export default function LoginPage() {

    return (
        <form>
            <div className="w-full bg-[#223649] p-6 rounded-lg shadow flex flex-col gap-4">
                <div>
                    <h2>Welcome Back</h2>
                </div>
                <div>
                    <input 
                    type="email"
                    name='email'
                    className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                    placeholder='Enter Email'
                    required
                    />
                </div>
                <div>
                    <input 
                    type="password"
                    name='email'
                    className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                    placeholder='Enter Email'
                    required
                    />
                    <span>Forgot Password</span>
                </div>
                <div>
                    <button>Log In</button>
                    <span>Don't have an account? Sign Up</span>
                </div>
                
            </div>
         </form>    
    );
}