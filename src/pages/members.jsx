import { useState } from "react";
import SearchBar from '../Components/search-input';
import Modal from "../Components/modal";

export default function MembersDashboard() {

        const [openModal, setOpenModal] = useState(false);
        const [openReview, setOpenReview] = useState(false);
        const [formData, setFormData] = useState({
                id: id++,
                name: "",
                membership: "",
                status: "",
                lastVisit: ""
        });

        const [data, setData] = useState ([
            {
                id: 1,
                name: "Abdulrazak mafindi",
                membership: "Premium",
                status: "Active",
                lastVisit: "2 days ago",
                action: "View"
            }
        ]);

        const handleChange = (e) => {

            const { name, value } = e.target;
            setFormData(prev => ({
            ...prev, [name]: value
             }));
             
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            setData(prev => [...prev, formData]);
            setFormData({
                name: "",
                membership: "",
                status: "",
                lastVisit: ""
            });

            setOpenModal(false);

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
                                  {data.map((item, index) => ( <div key={index} className='flex justify-around items-center text-[#8fadcc] p-4 border-[#e5e8eb] border-b-1'>
                                
                                    <div className="w-[185px] text-center text-[#e5e8eb]">
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="w-[185px] text-center">
                                        <span>{item.membership}</span>
                                    </div>
                                    <div className="w-[185px] text-center">
                                        <span className="bg-[#223649] px-8 py-2 font-semibold rounded-md cursor-pointer text-[#e5e8eb]">{item.status}</span>
                                    </div>
                                    <div className="w-[185px] text-center">
                                        <span>{item.lastVisit}</span>
                                    </div>
                                    <div onClick={() => setOpenReview(true)} className="w-[185px] text-center">
                                        <span className="font-semibold cursor-pointer">View</span>
                                    </div>
                                </div>))}
                                
                            </div>
                        </div>
                        
                    </div>

            </main>

                <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label className="w-full">
                                    Name
                                
                                <input 
                                className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" 
                                type="text" 
                                placeholder="Enter Name"
                                name="name"
                                value={formData.name} 
                                onChange={handleChange}
                                />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Membership

                                <input 
                                className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" 
                                type="text" 
                                placeholder="Enter Membership Type"
                                name="membership" 
                                value={formData.membership}
                                onChange={handleChange}
                                />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Status
                                <input 
                                className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" 
                                type="text" 
                                placeholder="Enter Name" 
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Last Seen
                                <input 
                                className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" 
                                type="text" 
                                placeholder="Enter Name" 
                                name="lastVisit"
                                value={formData.lastVisit}
                                onChange={handleChange}
                                />
                                </label>
                            </div>
                            <button type="submit" className="bg-[#223649] w-[135px] h-[40px] rounded-md my-4 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer">Add Member</button>
                        </div>
                    </form>
                </Modal>

                <Modal isOpen={openReview} onClose={() => setOpenReview(false)}>
                    <h2>
                    Member Datails
                    </h2>

                    <form>
                        <div>
                            <button>Edit Member</button>
                            <button>Delete Member</button>
                        </div>
                    </form>
                </Modal>

        </div>

    
  )
}



