import React from 'react'
import { useState } from "react";
import Modal from "../Components/modal";


export default function StudentClasses() {

    const [openModal, setOpenModal] = useState(false);
    const [openReview, setOpenReview] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        instructor: "",
        capacity: "",
        dateTime: ""
    });
    const [isEditing, setIsEditing] = useState(false);

    const [data, setData] = useState ([
        {
            name: "Yoga flow",
            instructor: "Sarah Miller",
            dateTime: "Mon, June 15, 2024, 9:00AM",
            capacity: "20/25",
            action: "Enroll"
        }
    ]);

  return (
    <div>
        <main className='flex flex-col col-span-4 gap-4 w-full'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-4'>
                <h1 className='text-[32px] leading-[40px] font-bold font-montserrat'>Class Schedule</h1>
                <span className='text-[14px] leading-[21px] text-adminsmtext'>Find the perfect class to meet your fitness goals. Explore our diverse range of classes led by expert instructors.</span>
                </div>
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
                            <div><span>Date & Time</span></div>
                            <div><span>Capacity</span></div>
                            <div><span>Action</span></div>
                        </div>
                        <div id="tableBody" className="">
                            {data.map((item, index) => ( 
                            <div key={index} className='flex justify-around items-center text-[#8fadcc] p-4 border-[#e5e8eb] border-b-1'>
                                <div className="w-[185px] text-center text-[#e5e8eb]">
                                    <span>{item.name}</span>
                                </div>
                                <div className="w-[185px] text-center">
                                    <span>{item.instructor}</span>
                                </div>
                                <div className="w-[185px] text-center">
                                    <span>{item.dateTime}</span>
                                </div>
                                <div className="w-[185px] text-center">
                                    <span className="bg-[#223649] px-8 py-2 font-semibold rounded-md cursor-pointer text-[#e5e8eb]">{item.capacity} </span>
                                </div>
                                <div className="w-[185px] text-center">
                                    <span className="font-semibold">Enroll</span>
                                </div>
                            </div>
                            ))}
                        
                    </div>
                </div>
                
            </div>

    </main>
    </div>
  )
}

