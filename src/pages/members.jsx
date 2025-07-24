import { useState } from "react";
import SearchBar from '../Components/search-input';

export default function MembersDashboard() {

        const [addNewMember, setAddNewMember] = useState(false);
        const data = [];


  return (
    <div>

            <main className='flex flex-col col-span-4 gap-8 w-full'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[36px] leading-[40px] font-bold font-montserrat'>Members</h1>
                    <button className='bg-[#223649] w-[135px] h-[40px] rounded-md pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer'>Add Member</button>
                </div>

                <div className='flex gap-4 w-full'>
                   <SearchBar />
                </div>

                    <div className='flex gap-4 mt-4'>
                        <div className="w-[928px] h-[480px] flex flex-col border-1 inset-1 border-[#334d66] rounded-[12px]">
                                <div className='flex justify-around items-center p-4 border-b-2'>
                                    <div><span>Name</span></div>
                                    <div><span>Membership</span></div>
                                    <div><span>Status</span></div>
                                    <div><span>Last Visit</span></div>
                                    <div><span>Action</span></div>
                                </div>
                                <div id="tableBody" className="">
                                <div className='flex justify-around items-center p-4 border-b-1'>
                                    
                                    <div className="w-[185px] text-center">
                                        <span>Abdulrazak mafindi</span>
                                    </div>
                                    <div className="w-[185px] text-center">
                                        <span>Premium</span>
                                    </div>
                                    <div className="w-[185px] text-center">
                                        <span className="bg-[#223649] px-8 py-2 font-semibold rounded-md cursor-pointer">Active</span>
                                    </div>
                                    <div className="w-[185px] text-center">
                                        <span>2 days ago</span>
                                    </div>
                                    <div className="w-[185px] text-center">
                                        <span className="font-semibold cursor-pointer">View</span>
                                    </div>
                                </div>
                                <div className='flex justify-around items-center p-4 border-b-1'>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                </div>
                                <div className='flex justify-around items-center p-4 border-b-1'>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                </div>
                                <div className='flex justify-around items-center p-4 border-b-1'>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                </div>
                                <div className='flex justify-around items-center p-4 border-b-1'>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                    <div>rows</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

            </main>
        </div>

    
  )
}
