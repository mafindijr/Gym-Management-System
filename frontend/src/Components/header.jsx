import { useState } from 'react'
import Modal from './modal'
import SignUpPage from './Auth/signUp'


export default function Header() {

    const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <>
    <header className='flex items-center justify-between whitespace-nowrap py-2 pr-20 pl-20 border-b border-solid border-bColor z-12'>
        <div className=''>
            <h1 className='font-poppins text-lg font-bold leading-tight tracking-[-0.015em]'>Nyame Fitness Hub</h1>
        </div>
        <div>
            <div className='flex gap-8 flex-1 ml-170 font-montserrat text-sm font-medium leading-normal'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
        </div>
        <div className='bg-btnprimary w-[80px] ml-4 text-center font-poppins text-text h-[40px] p-2 rounded-[20px]'>
            <button 
            className='cursor-pointer font-poppins text-[14px] leading-[21px] font-semibold'
            onClick={() => setOpenSignUp(true)}
            >Sign Up</button>
        </div>
    </header>

    <Modal isOpen={openSignUp} onClose={() => setOpenSignUp(false)}>
            <SignUpPage />
    </Modal>
    </>
  )
}
