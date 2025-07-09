import React from 'react'

export default function Header() {
  return (
    <>
    <header className='flex items-center justify-between pr-20 pl-20'>
        <div className=''>
            <h1>Fitness Hub</h1>
        </div>
        <div>
            <div className='flex gap-2'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
        </div>
        <div className='bg-btnprimary w-[80px] text-center font-poppins text-text h-[40px] p-2 rounded-[20px]'>
            <button>Sign Up</button>
        </div>
    </header>
    </>
  )
}
