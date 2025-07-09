import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between bg-homebg'>
        <div className=''>
            <h1>Fitness Hub</h1>
        </div>
        <div>
            <div className='flex s'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
        </div>
        <div className=''>
            <button>Sign Up</button>
        </div>
    </header>
  )
}
