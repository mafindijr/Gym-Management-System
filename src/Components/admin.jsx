import React from 'react'

export default function Admin() {

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
        <div className='grid grid-cols-5 col-2-span-2 m-4 w-full'>
            <nav className='flex flex-col gap-2 pl-4'>
                <div>
                    <h2 className='font-poppins text-lg leading-tight tracking-[-0.015em]'>Nyame GymHall</h2>
                    <p className='text-[14px] text-adminsmtext'>Admin</p>
                </div>
                <div>
                    <ul className='flex'>
                      {
                        navs.map((nav, index ) => {
                            return (
                                <li key={index}>
                                    <span>{ nav.icon }</span>
                                    <a href="#">{ nav.name }</a>
                                </li>
                            );
                        })
                      }  
                    </ul>
                </div>
            </nav>

            <main className='flex flex-col col-span-4 gap-8 w-full'>
                <div>
                    <h1 className='text-[36px] leading-[40px] font-bold font-montserrat'>Dashboard</h1>
                </div>

                <div className='flex gap-4 w-full'>
                    <div className='w-[300px] h-[120] rounded-[12px] p-4 text-left bg-[#223649]'>
                        <p className='font-semibold text-[16px] leading-[24px]'>Total Members</p>
                        <p className='font-bold text-[24px] leading-[30px]'>250</p>
                    </div>
                    <div className='w-[300px] h-[120] rounded-[12px] p-4 text-left bg-[#223649]'>
                        <p className='font-semibold text-[16px] leading-[24px]'>Active Classes</p>
                        <p className='font-bold text-[24px] leading-[30px]'>15</p>
                    </div>
                    <div className='w-[300px] h-[120] rounded-[12px] p-4 text-left bg-[#223649]'>
                        <p className='font-semibold text-[16px] leading-[24px]'>Trainers</p>
                        <p className='font-bold text-[24px] leading-[30px]'>8</p>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='text-[22px] leading-[28px] font-bold pb-4'>Quick Actions</h2>
                    </div>
                    <div className='flex gap-2 py-2'>
                        <button className='bg-btnprimary w-[135px] h-[40px] rounded-full pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer'>Add Member</button>
                        <button className='bg-[#223649] w-[135px] h-[40px] rounded-full pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer'>Schedule Class</button>
                    </div>
                    <div>
                        <h2 className='text-[22px] leading-[28px] font-bold py-4'>Gym Overview</h2>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <div className="w-[430px] h-[394px] border-1 inset-1 border-[#334d66] rounded-[12px]">
                            <div>
                                <h2>Member Growth</h2>
                                <h2>+15%</h2>
                                <p>Last Month <span>+15%</span></p>
                            </div>

                            <div>

                            </div>
                        </div>
                        <div className="w-[430px] h-[394px] border-1 inset-1 border-[#334d66] rounded-[12px]">
                            <div>
                                <h2>Class Attendance</h2>
                                <h2>+10%</h2>
                                <p>Last Week <span>+10%</span></p>
                            </div>

                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}
