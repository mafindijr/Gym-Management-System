import React from 'react'
import { useState } from "react";

export default function BillingPayment() {

      const [formData, setFormData] = useState({
          name: "",
          amount: "",
          date: "",
          status: ""
      });
  
      const [data, setData] = useState ([
          {
              name: "Yoga flow",
              amount: "$33",
              date: "Mon, June 15, 2024, 9:00AM",
              status: "Paid",
          }
      ]);

  return (
    <>
         <main className='flex flex-col col-span-4 gap-4'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-4'>
                        <h1 className='text-[32px] leading-[40px] font-bold font-montserrat'>Billing & Payments</h1>
                        </div>
                    </div>
        
                    <div className='w-[902px] flex flex-col gap-4 text-[14px] leading-[21px]'>
                        <div className='inline-flex gap-4 border-b-1 border-[#334d66]'>
                            <span className='border-b-2 pb-2'>Overview</span>
                            <span className='border-b-2 pb-2'>Invoices</span>
                            <span className='border-b-2 pb-2'>Payments</span>
                        </div>
                        <div>
                            <div>
                                <h4>Summary</h4>
                            </div>
                            <div className='w-[908px]'>
                                <div className='flex gap-4'>
                                    <div className='w-[280px] h-[120] rounded-[12px] p-4 text-left bg-[#223649]'>
                                        <p className='font-semibold text-[16px] leading-[24px]'>Total Revenue</p>
                                        <p className='font-bold text-[24px] leading-[30px]'>#15,500,000</p>
                                    </div>
                                    <div className='w-[280px] h-[120] rounded-[12px] p-4 text-left bg-[#223649]'>
                                        <p className='font-semibold text-[16px] leading-[24px]'>Outstanding Balance</p>
                                        <p className='font-bold text-[24px] leading-[30px]'>#2,300,00</p>
                                    </div>
                                    <div className='w-[280px] h-[120] rounded-[12px] p-4 text-left bg-[#223649]'>
                                        <p className='font-semibold text-[16px] leading-[24px]'>Average Payment</p>
                                        <p className='font-bold text-[24px] leading-[30px]'>#200,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <h2>Recent Payments</h2>
                            </div>
                        <div className="w-[908px] h-[480px] flex flex-col border-1 inset-1 border-[#334d66] rounded-[12px]">
                                <div className='flex justify-around items-center bg-[#172633] p-4 border-[#e5e8eb] border-b-1'>
                                    <div><span>Member</span></div>
                                    <div><span>Amount</span></div>
                                    <div><span>Date</span></div>
                                    <div><span>Status</span></div>
                                </div>
                                <div id="tableBody" className="">
                                    {data.map((item, index) => ( 
                                        <div key={index} className='flex justify-around items-center text-[#8fadcc] p-4 border-[#e5e8eb] border-b-1'>
                                            <div className="w-[185px] text-center text-[#e5e8eb]">
                                                <span>{item.name}</span>
                                            </div>
                                            <div className="w-[185px] text-center">
                                                <span>{item.amount}</span>
                                            </div>
                                            <div className="w-[185px] text-center">
                                                <span>{item.date}</span>
                                            </div>
                                            <div className="w-[185px] text-center">
                                                <span className="bg-[#223649] px-8 py-2 font-semibold rounded-md cursor-pointer text-[#e5e8eb]">{item.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                    </div>
        
            </main>
        
    </>
  )
}
