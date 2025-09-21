import React, { useState } from 'react'
import Modal from "../Components/modal"

export default function TrainersPage() {

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
      trainer: "",
      speciality: "",
      contact: "",
      status: ""
  });

  const [data, setData] = useState([
    {
      trainer: "John Doe",
      speciality: "Strength Training",
      contact: "john.doe@email.com",
      status: "Active"
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
                trainer: "",
                speciality: "",
                contact: "",
                status: ""
            });

            setOpenModal(false);

        }

  return (
    <>
      <main className='flex flex-col col-span-4 gap-4 w-[902px]'>
        <div className='inline-flex justify-between'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[32px] leading-[40px] font-bold font-montserrat'>Trainers</h1>
          </div>
          <div>
            <button onClick={() => setOpenModal(true)} className='bg-btnprimary w-[135px] h-[40px] rounded-md pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer'>Add Trainer</button>
          </div>
        </div>

        <div className='flex flex-col gap-4 text-[14px] leading-[21px] w-full'>
          <div className='inline-flex gap-4 border-b-1 border-[#334d66]'>
            <span className='border-b-2 pb-2'>All</span>
            <span className='border-b-2 pb-2'>Active</span>
            <span className='border-b-2 pb-2'>Inactive</span>
          </div>
          <div className="w-[902px] h-[480px] flex flex-col border-1 inset-1 border-[#334d66] rounded-[12px]">
            <div className='flex justify-around items-center bg-[#172633] p-4 border-[#e5e8eb] border-b-1'>
              <div><span>Trainer</span></div>
              <div><span>Speciality</span></div>
              <div><span>Contact</span></div>
              <div><span>Status</span></div>
            </div>
            <div id="tableBody" className="">
              {data.map((item, index) => (
                <div key={index} className='flex justify-around items-center text-[#8fadcc] p-4 border-[#e5e8eb] border-b-1'>
                  <div className="w-[185px] text-center text-[#e5e8eb]">
                    <span>{item.trainer}</span>
                  </div>
                  <div className="w-[185px] text-center">
                    <span>{item.speciality}</span>
                  </div>
                  <div className="w-[185px] text-center">
                    <span>{item.contact}</span>
                  </div>
                  <div className="w-[185px] text-center">
                    <span className="bg-[#223649] px-8 py-2 font-semibold rounded-md cursor-pointer text-[#e5e8eb]">{item.status}</span>
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
                      name="trainer"
                      value={formData.trainer} 
                      onChange={handleChange}
                      />
                      </label>
                  </div>
                  <div>
                      <label>
                          Specialty

                      <input 
                      className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" 
                      type="text" 
                      placeholder="Enter Membership Type"
                      name="speciality" 
                      value={formData.speciality}
                      onChange={handleChange}
                      />
                      </label>
                  </div>
                  <div>
                      <label>
                          Contact
                      <input 
                      className="p-2 my-1 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]" 
                      type="text" 
                      placeholder="Enter Name" 
                      name="contact"
                      value={formData.contact}
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
                  <button type="submit" className="bg-btnprimary w-[135px] h-[40px] rounded-md my-4 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer">Add Trainer</button>
              </div>
          </form>
      </Modal>
    </>
  )
}
