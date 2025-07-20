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
        <div className='grid grid-cols-5 col-2-span-2 gap-8 m-4 w-full'>
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
                        <div className="w-[430px] h-[394px] border-1 inset-1 border-[#334d66] rounded-[12px] p-4">
                            <div>
                                <h2 className=''>Member Growth</h2>
                                <h2 className='text-[36px] leading-[40px] font-bold py-2 font-montserrat'>+15%</h2>
                                <p className='text-[14px] leading-6 text-adminsmtext font-montserrat'>Last Month <span className='text-percentage font-bold'>+15%</span></p>
                            </div>

                            <div>
                             <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#92aec9"
                      strokeWidth="3"
                      strokeLinecap="round"
                    ></path>
                    <defs>
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#233648"></stop>
                        <stop offset="1" stopColor="#233648" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                  </div>
                </div>
                            </div>
                        </div>
                        <div className="w-[430px] h-[394px] border-1 inset-1 border-[#334d66] rounded-[12px] p-4">
                            <div>
                                <h2>Class Attendance</h2>
                                <h2 className='text-[36px] leading-[40px] font-bold py-2 font-montserrat'>+10%</h2>
                                <p className='text-[14px] leading-6 text-adminsmtext font-montserrat'>Last Week <span className='text-percentage font-bold'>+10%</span></p>
                            </div>

                            <div>
                
                                    <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div className="border-[#92aec9] bg-[#233648] border-t-2 w-full h-[60%]"></div>
                  <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Mon</p>
                  <div className="border-[#92aec9] bg-[#233648] border-t-2 w-full" style="height: 80%;"></div>
                  <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Tue</p>
                  <div className="border-[#92aec9] bg-[#233648] border-t-2 w-full h-[40%]"></div>
                  <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Wed</p>
                  <div className="border-[#92aec9] bg-[#233648] border-t-2 w-full" style="height: 30%;"></div>
                  <p class="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Thu</p>
                  <div className="border-[#92aec9] bg-[#233648] border-t-2 w-full" style="height: 30%;"></div>
                  <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Fri</p>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}
