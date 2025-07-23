import React from 'react'

export default function SideBar() {


  return (
    <div>
        <nav className='flex flex-col gap-4 pl-4'>
                <div>
                    <h2 className='font-poppins text-lg leading-tight tracking-[-0.015em]'>Nyame GymHall</h2>
                    <p className='text-[14px] leading-6 text-adminsmtext'>Admin</p>
                </div>
                <div>
                    <ul className='flex flex-col gap-4'>
                      {
                        navs.map((nav, index ) => {
                            return (
                                <li className='flex gap-2 w-full leading-5.4 text-[14px]  font-montserrat bg-[#223649] p-2 rounded-full cursor-pointer' key={index}>
                                    <span>{ nav.icon }</span>
                                    <a href="#">{ nav.name }</a>
                                </li>
                            );
                        })
                      }  
                    </ul>
                </div>
            </nav>
    </div>
  )
}
