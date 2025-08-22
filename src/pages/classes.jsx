import React from 'react'
import { useState } from "react";
import SearchBar from '../Components/search-input';
import Modal from "../Components/modal";


export default function Classes() {

            
                    const [openModal, setOpenModal] = useState(false);
                    const [openReview, setOpenReview] = useState(false);
                    const [selectedMember, setSelectedMember] = useState(null);
                    const [formData, setFormData] = useState({
                        name: "",
                        membership: "",
                        status: "",
                        lastVisit: ""
                    });
                    const [isEditing, setIsEditing] = useState(false);
            
                    const [data, setData] = useState ([
                        {
                            name: "Abdulrazak mafindi",
                            membership: "Premium",
                            status: "Active",
                            lastVisit: "2 days ago",
                            action: "View Details"
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
        <main className='flex flex-col col-span-4 gap-4 w-full'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-4'>
                <h1 className='text-[32px] leading-[40px] font-bold font-montserrat'>Class Schedule</h1>
                <span className='text-[14px] leading-[21px] text-adminsmtext'>Manage and schedule your fitness classes and instructor assigments.</span>
                </div>
                <button onClick={() => setOpenModal(true)} className='bg-[#223649] w-[135px] h-[40px] rounded-md pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer'>Add Member</button>
            </div>

            <div className='flex flex-col gap-4 text-[14px] leading-[21px]'>
                <div className='inline-flex gap-4 border-b-1 border-[#334d66]'>
                    <span className='border-b-2 pb-2'>Upcoming</span>
                    <span className='border-b-2 pb-2'>Past</span>
                    <span className='border-b-2 pb-2'>All</span>
                </div>
                <div className="w-[928px] h-[480px] flex flex-col border-1 inset-1 border-[#334d66] rounded-[12px]">
                        <div className='flex justify-around items-center bg-[#172633] p-4 border-[#e5e8eb] border-b-1'>
                            <div><span>Class Name</span></div>
                            <div><span>Instructor</span></div>
                            <div><span>Status</span></div>
                            <div><span>Date & Time</span></div>
                            <div><span>Action</span></div>
                        </div>
                        <div id="tableBody" className="">
                            {data.map((item, index) => ( 
                            <div key={index} className='flex justify-around items-center text-[#8fadcc] p-4 border-[#e5e8eb] border-b-1'>
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
                                <div onClick={() => { setSelectedMember(item); setOpenReview(true); }} className="w-[185px] text-center">
                                    <span className="font-semibold cursor-pointer">View</span>
                                </div>
                            </div>
                            ))}
                        
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

        <Modal isOpen={openReview} onClose={() => { setOpenReview(false); setSelectedMember(null); setIsEditing(false); }}>
            <h2 className="text-center font-montserrat font-[700] text-[32px]">Member Details</h2>
            {selectedMember && !isEditing && (
                <div className="p-4 divide-y-2 divide-adminsmtext text-[18px] font-[400]">
                    <div className="mb-2"><strong>Name:</strong> {selectedMember.name}</div>
                    <div className="mb-2"><strong>Membership:</strong> {selectedMember.membership}</div>
                    <div className="mb-2"><strong>Status:</strong> {selectedMember.status}</div>
                    <div className="mb-2"><strong>Last Visit:</strong> {selectedMember.lastVisit}</div>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-[#223649] w-[135px] h-[40px] rounded-md my-4 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer" onClick={() => {
                            setFormData({
                                name: selectedMember.name,
                                membership: selectedMember.membership,
                                status: selectedMember.status,
                                lastVisit: selectedMember.lastVisit
                            });
                            setIsEditing(true);
                        }}>Edit Member</button>
                        <button className="bg-[#223649] w-[135px] h-[40px] rounded-md my-4 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer" onClick={() => {
                            setData(prev => prev.filter(m => m !== selectedMember));
                            setOpenReview(false);
                            setSelectedMember(null);
                        }}>Delete Member</button>
                    </div>
                </div>
            )}
            {selectedMember && isEditing && (
                <form className="p-4" onSubmit={e => {
                    e.preventDefault();
                    setData(prev => prev.map(m => m === selectedMember ? { ...selectedMember, ...formData } : m));
                    setSelectedMember(prev => ({ ...prev, ...formData }));
                    setIsEditing(false);
                }}>
                    <div className="mb-2">
                        <label><strong>Name:</strong></label>
                        <input className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label><strong>Membership:</strong></label>
                        <input className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" type="text" name="membership" value={formData.membership} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label><strong>Status:</strong></label>
                        <input className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" type="text" name="status" value={formData.status} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label><strong>Last Visit:</strong></label>
                        <input className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" type="text" name="lastVisit" value={formData.lastVisit} onChange={handleChange} />
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button type="submit" className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded">Save</button>
                        <button type="button" className="bg-gray-600 cursor-pointer text-white px-4 py-2 rounded" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </Modal>

    </div>
  )
}
