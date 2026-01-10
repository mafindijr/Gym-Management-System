import React from 'react'
import { useState } from "react";
import Modal from "../Components/modal";


export default function Classes() {

    const [openModal, setOpenModal] = useState(false);
    const [openReview, setOpenReview] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    
    const [formData, setFormData] = useState({
        name: "",
        instructor: "",
        status: "",
        dateTime: ""
    });
    const [isEditing, setIsEditing] = useState(false);

    const [data, setData] = useState ([
        {
            name: "Yoga flow",
            instructor: "Sarah Miller",
            dateTime: "Mon, June 15, 2024, 9:00AM",
            status: "Scheduled",
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
            instructor: "",
            status: "",
            dateTime: "",
        });

        setOpenModal(false);

    }

  return (
    <div>
        <main className='flex flex-col col-span-4 gap-4 w-full'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
          <div className='flex flex-col gap-4 w-full sm:w-auto'>
            <h1 className='text-xl md:text-[32px] leading-10 font-bold font-montserrat'>Class Schedule</h1>
            <span className='text-xs sm:text-[14px] leading-[21px] text-adminsmtext'>Manage and schedule your fitness classes and instructor assignments.</span>
          </div>
          <button 
            onClick={() => setOpenModal(true)} 
            className='bg-btnprimary w-full sm:w-auto h-10 rounded-md px-6 text-xs sm:text-sm font-bold cursor-pointer hover:bg-blue-700 transition'
          >
            Schedule Class
          </button>
        </div>

        <div className='flex flex-col gap-4 text-[14px] leading-[21px]'>
          <div className='inline-flex gap-4 border-b border-[#334d66] overflow-auto'>
            <span className='border-b-2 pb-2 whitespace-nowrap'>Upcoming</span>
            <span className='border-b-2 pb-2 whitespace-nowrap'>Past</span>
            <span className='border-b-2 pb-2 whitespace-nowrap'>All</span>
          </div>
          <div className="w-full max-w-4xl h-auto md:h-[480px] flex flex-col border inset-1 border-[#334d66] rounded-xl overflow-auto">
                        <div className='flex flex-nowrap md:justify-around items-center bg-bgtable p-4 border-bColor border-b'>
                            <div className="min-w-[140px] text-center"><span>Class Name</span></div>
                            <div className="min-w-[120px] text-center"><span>Instructor</span></div>
                            <div className="min-w-40 text-center"><span>Date & Time</span></div>
                            <div className="min-w-[120px] text-center"><span>Status</span></div>
                            <div className="min-w-[120px] text-center"><span>Action</span></div>
                        </div>
                        <div id="tableBody" className="">
                            {data.map((item, index) => ( 
                            <div key={index} className='flex flex-nowrap md:justify-around items-center text-footertext p-4 border-bColo border-b'>
                                <div className="min-w-[140px] text-center text-bColor font-semibold">
                                    <span>{item.name}</span>
                                </div>
                                <div className="min-w-[120px] text-center">
                                    <span>{item.instructor}</span>
                                </div>
                                <div className="min-w-40 text-center">
                                    <span>{item.dateTime}</span>
                                </div>
                                <div className="min-w-[120px] text-center">
                                    <span className="bg-[#223649] px-4 py-2 font-semibold rounded-md cursor-pointer text-bColor">{item.status} </span>
                                </div>
                                <div onClick={() => { setSelectedMember(item); setOpenReview(true); }} className="min-w-[120px] text-center">
                                    <span className="font-semibold cursor-pointer">View Details</span>
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
                            Class Name
                        
                        <input 
                        className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" 
                        type="text" 
                        placeholder="Enter Class Name"
                        name="name"
                        value={formData.name} 
                        onChange={handleChange}
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Instructor

                        <input 
                        className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" 
                        type="text" 
                        placeholder="Enter Instructor's name"
                        name="instructor" 
                        value={formData.instructor}
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
                            Date & Time
                        <input 
                        className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" 
                        type="text" 
                        placeholder="Enter Name" 
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        />
                        </label>
                    </div>
                    <button type="submit" className="bg-btnprimary w-[135px] h-10 rounded-md my-4 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer">Schedule Class</button>
                </div>
            </form>
        </Modal>

        <Modal isOpen={openReview} onClose={() => { setOpenReview(false); setSelectedMember(null); setIsEditing(false); }}>
            <h2 className="text-center font-montserrat font-bold text-[32px]">Class Details</h2>
            {selectedMember && !isEditing && (
                <div className="p-4 divide-y-2 divide-adminsmtext text-[18px] font-normal ">
                    <div className="mb-2"><strong>Class Name:</strong> {selectedMember.name}</div>
                    <div className="mb-2"><strong>Instructor:</strong> {selectedMember.instructor}</div>
                    <div className="mb-2"><strong>Status:</strong> {selectedMember.status}</div>
                    <div className="mb-2"><strong>Date & Time:</strong> {selectedMember.dateTime}</div>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-[#223649] w-[135px] h-10 rounded-md my-4 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer" onClick={() => {
                            setFormData({
                                name: selectedMember.name,
                                instructor: selectedMember.instructor,
                                status: selectedMember.status,
                                dateTime: selectedMember.dateTime
                            });
                            setIsEditing(true);
                        }}>Edit Class</button>
                        <button className="bg-[#223649] w-[135px] h-10 rounded-md my-4 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer" onClick={() => {
                            setData(prev => prev.filter(m => m !== selectedMember));
                            setOpenReview(false);
                            setSelectedMember(null);
                        }}>Delete Class</button>
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
                        <label><strong>Class Name:</strong></label>
                        <input className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label><strong>Instructor:</strong></label>
                        <input className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" type="text" name="instructor" value={formData.instructor} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label><strong>Status:</strong></label>
                        <input className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" type="text" name="status" value={formData.status} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label><strong>Date & Time:</strong></label>
                        <input className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" type="text" name="dateTime" value={formData.dateTime} onChange={handleChange} />
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

