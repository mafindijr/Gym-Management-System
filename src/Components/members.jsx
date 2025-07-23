import React from 'react'
import SearchBar from './search-input';

export default function MembersDashboard() {

    
        const navs = [
            { name: "Dashboard", icon: "X"},
            { name: "Members", icon: "X"},
            { name: "Classes", icon: "X"},
            { name: "Trainers", icon: "X"},
            { name: "Billing", icon: "X"},
            { name: "Settings", icon: "X"}
        ];

  return (
    <div>
        {/* <div className='grid grid-cols-5 col-2-span-2 gap-8 m-4 w-full'>
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
            </nav> */}

            <main className='flex flex-col col-span-4 gap-8 w-full'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[36px] leading-[40px] font-bold font-montserrat'>Members</h1>
                    <button className='bg-[#223649] w-[135px] h-[40px] rounded-md pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer mr-36'>Add Member</button>
                </div>

                <div className='flex gap-4 w-full'>
                   <SearchBar />
                </div>

                    <div className='flex gap-4 mt-4'>
                        <div className="w-[928px] h-[480px] flex flex-col border-1 inset-1 border-[#334d66] rounded-[12px] p-4 divide-y">
                                <div className='flex justify-around items-center p-4'>
                                    <div><span>Name</span></div>
                                    <div><span>Membership</span></div>
                                    <div><span>Status</span></div>
                                    <div>Last Visit</div>
                                    <div>Action</div>
                                </div>
                                <div className='flex justify-around items-center p-4'>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                </div>
                                <div className='flex justify-around items-center p-4'>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                </div>
                                <div className='flex justify-around items-center p-4'>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                </div>
                                <div className='flex justify-around items-center p-4'>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                </div>
                                <div className='flex justify-around items-center p-4'>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                </div>
                        </div>
                        
                    </div>

            </main>
        </div>

    // </div>
  )
}
