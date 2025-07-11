import React from 'react'

export default function Header() {
  return (
    <>
    <header className='flex items-center justify-between whitespace-nowrap py-2 pr-20 pl-20 border-b-bColor border-solid z-12'>
        <div className=''>
            <h1 className='font-poppins text-lg font-bold leading-tight tracking-[-0.015em]'>Fitness Hub</h1>
        </div>
        <div>
            <div className='flex gap-8 flex-1 ml-170 font-montserrat text-sm font-medium leading-normal'>
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
