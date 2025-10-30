import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function LoginPage() {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (submitting) return;
        try {
            setSubmitting(true);
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: form.email, password: form.password })
            });
            const data = await res.json();
            if (!res.ok) {
                alert(data?.message || 'Login failed');
                return;
            }

            // Persist auth
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('auth_user', JSON.stringify(data.user));

            // Redirect by role
            const role = data.user?.role || 'member';
            if (role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/member');
            }
        } catch (err) {
            alert('Unable to login. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full bg-[#223649] p-6 rounded-lg shadow flex flex-col gap-4">
                <div>
                    <h2 className='text-[28px] leading-[35px] font-bold text-center'>Welcome Back! Log In</h2>
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
                    name='password'
                    value={form.password}
                    onChange={handleChange}
                    className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px] text-[#91adc9]"
                    placeholder='Enter Password'
                    required
                    />
                    <span className='text-[14px] leading-[21px] text-[#91adc9]'>Forgot Password</span>
                </div>
                <div className='flex flex-col items-center'>
                    <button disabled={submitting} className='bg-btnprimary w-full pl-4 pr-4 rounded-[24px] text-[14px] font-bold font-poppins text-center cursor-pointer h-[40px]'>
                        {submitting ? 'Logging In...' : 'Log In'}
                    </button>
                    <span className='text-[14px] leading-[21px] text-[#91adc9]'>Don't have an account? Sign Up</span>
                </div>
                
            </div>
         </form>    
    );
}