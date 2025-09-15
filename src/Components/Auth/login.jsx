import { useState } from 'react'

export default function LoginPage() {

    return (
        <>
            <div className=" items-center bg-[#223649] p-6 rounded-lg shadow flex flex-col gap-4">
                <div>
                    <h2>Welcome Back</h2>
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                    <span>Forgot Password</span>
                </div>
                <div>
                    <button>Log In</button>
                    <span>Don't have an account? Sign Up</span>
                </div>
                
            </div>
        </>
    );
}