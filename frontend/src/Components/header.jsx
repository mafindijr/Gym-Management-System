import { useState } from 'react'
import Modal from './modal'
import SignUpPage from './Auth/signUp'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [openSignUp, setOpenSignUp] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <header className='fixed w-full bg-homebg flex items-center justify-between py-2 px-4 sm:px-6 md:px-10 lg:px-20 border-b border-solid border-bColor z-50'>
        <div className=''>
            <h1 className='font-poppins text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]'>Nyame Fitness Hub</h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex'>
            <div className='flex gap-4 sm:gap-6 md:gap-8 font-montserrat text-xs sm:text-sm font-medium leading-normal'>
                <a href="#" className='hover:text-btnprimary transition'>Home</a>
                <a href="#" className='hover:text-btnprimary transition'>About</a>
                <a href="#" className='hover:text-btnprimary transition'>Services</a>
                <a href="#" className='hover:text-btnprimary transition'>Contact</a>
            </div>
        </div>

        {/* Desktop Sign Up Button */}
        <div className='hidden md:block'>
            <div className='bg-btnprimary w-20 text-center font-poppins text-text h-10 p-2 rounded-[20px]'>
                <button 
                    className='cursor-pointer font-poppins text-[14px] leading-[21px] font-semibold'
                    onClick={() => setOpenSignUp(true)}
                >Sign Up</button>
            </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden flex items-center gap-2'>
            <button
                onClick={() => setOpenSignUp(true)}
                className='bg-btnprimary text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full'
            >
                Sign Up
            </button>
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='p-2 hover:bg-[#223649] rounded-md transition'
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
    </header>

    {/* Mobile Navigation Menu */}
    {mobileMenuOpen && (
        <nav className='md:hidden bg-bgtable border-b border-[#334d66] px-4 py-4 z-40'>
            <div className='flex flex-col gap-4 font-montserrat text-sm font-medium'>
                <a href="#" className='hover:text-btnprimary transition py-2'>Home</a>
                <a href="#" className='hover:text-btnprimary transition py-2'>About</a>
                <a href="#" className='hover:text-btnprimary transition py-2'>Services</a>
                <a href="#" className='hover:text-btnprimary transition py-2'>Contact</a>
            </div>
        </nav>
    )}

    <Modal isOpen={openSignUp} onClose={() => setOpenSignUp(false)}>
            <SignUpPage />
    </Modal>
    </>
  )
}
