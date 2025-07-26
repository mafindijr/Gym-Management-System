import { useState } from "react";
import SearchBar from '../Components/search-input';
import Modal from "../Components/modal";

export default function MembersDashboard() {

        const [openModal, setOpenModal] = useState(false);
        const [formData, setFormData] = useState("");

        const data = [
            {
                name: "Abdulrazak mafindi",
                membership: "Premium",
                status: "Active",
                lastVisit: "2 days ago",
                action: "View"
            }
        ];

        const handleSubmit = (e) => {
            e.preventDefault();
            const { name, value } = e.target;
            setFormData(prev => ({
            ...prev, [name]: value
        }));
        }


  return (
    <div>

            <main className='flex flex-col col-span-4 gap-8 w-full'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[36px] leading-[40px] font-bold font-montserrat'>Members</h1>
                    <button onClick={() => setOpenModal(true)} className='bg-[#223649] w-[135px] h-[40px] rounded-md pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer'>Add Member</button>
                </div>

                <div className='flex gap-4 w-full'>
                   <SearchBar />
                </div>

                    <div className='flex gap-4 mt-4'>
                        <div className="w-[928px] h-[480px] flex flex-col border-1 inset-1 border-[#334d66] rounded-[12px]">
                                <div className='flex justify-around items-center bg-[#172633] p-4 border-[#e5e8eb] border-b-1'>
                                    <div><span>Name</span></div>
                                    <div><span>Membership</span></div>
                                    <div><span>Status</span></div>
                                    <div><span>Last Visit</span></div>
                                    <div><span>Action</span></div>
                                </div>
                                <div id="tableBody" className="">
                                <div className='flex justify-around items-center text-[#8fadcc] p-4 border-[#e5e8eb] border-b-1'>
                                    
                                    <div className="w-[185px] text-center text-[#e5e8eb]">
                                        <span>Abdulrazak mafindi</span>
                                    </div>
                                    <div className="w-[185px] text-center">
                                        <span>Premium</span>
                                    </div>
                                    <div className="w-[185px] text-center">
                                        <span className="bg-[#223649] px-8 py-2 font-semibold rounded-md cursor-pointer text-[#e5e8eb]">Active</span>
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

                <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                {<label>Name</label>}
                                <input 
                                className="p-2" type="text" 
                                placeholder="Enter Name"
                                value={value} 
                                onChange={(event) => setValue(event.target.value)}
                                />
                                <p>{value}</p>
                            </div>
                            <div>
                                {<label>Membership</label>}
                                <input 
                                className="p-2" type="text" 
                                placeholder="Enter Membership Type" 
                                value={value}
                                onChange={(event) => setValue(event.target.value)}
                                />
                            </div>
                            <div>
                                {<label>Status</label>}
                                <input className="p-2" type="text" placeholder="Enter Name" />
                            </div>
                            <div>
                                {<label>Last Seen</label>}
                                <input className="p-2" type="text" placeholder="Enter Name" />
                            </div>
                            <button type="submit">Add Member</button>
                        </div>
                    </form>
                </Modal>

        </div>

    
  )
}




 
