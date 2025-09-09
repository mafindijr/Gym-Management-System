import React, { useState } from 'react'

export default function TrainersPage() {
  const [data, setData] = useState([
    {
      trainer: "John Doe",
      specialty: "Strength Training",
      contact: "john.doe@email.com",
      status: "Active"
    }
  ]);

  return (
    <>
      <main className='flex flex-col col-span-4 gap-4 w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[32px] leading-[40px] font-bold font-montserrat'>Trainers</h1>
          </div>
        </div>

        <div className='flex flex-col gap-4 text-[14px] leading-[21px]'>
          <div className='inline-flex gap-4 border-b-1 border-[#334d66]'>
            <span className='border-b-2 pb-2'>All</span>
            <span className='border-b-2 pb-2'>Active</span>
            <span className='border-b-2 pb-2'>Inactive</span>
          </div>
          <div className="w-[928px] h-[480px] flex flex-col border-1 inset-1 border-[#334d66] rounded-[12px]">
            <div className='flex justify-around items-center bg-[#172633] p-4 border-[#e5e8eb] border-b-1'>
              <div><span>Trainer</span></div>
              <div><span>Specialty</span></div>
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
                    <span>{item.specialty}</span>
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
    </>
  )
}
