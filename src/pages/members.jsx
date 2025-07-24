import { useState } from "react";
import SearchBar from '../Components/search-input';

export default function MembersDashboard() {

        const [addNewMember, setAddNewMember] = useState(false);


  return (
    <div>

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

    
  )
}
