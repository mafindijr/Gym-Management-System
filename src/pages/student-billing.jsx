import { useState } from "react";
import StudentPaymentForm from "../Components/student-payment-form";
import Modal from "../Components/modal";

export default function StudentBilling() {
  const [data, setData] = useState([
    {
      name: "Yoga flow",
      amount: "#150,000",
      date: "Mon, June 15, 2024, 9:00AM",
      status: "Paid",
    }
  ]);
  const [openModal, setOpenModal] = useState(false);

  // This function will be called after payment
  const handlePayment = (payment) => {
    const newPayment = {
      name: "Manual Payment", // or get from context/class selection
      amount: `#${payment.amount}`,
      date: new Date().toLocaleString(),
      status: "Paid"
    };
    setData(prev => [newPayment, ...prev]);
    setOpenModal(false);

    // TODO: Also update the admin billing table here (e.g. via context, redux, or API)
  };

  return (
    <main className='flex flex-col col-span-4 gap-4 w-full'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-[32px] leading-[40px] font-bold font-montserrat'>Billing & Payments</h1>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-btnprimary text-white font-bold py-2 px-6 rounded"
        >
          Make Payment
        </button>
      </div>
      <div className='w-[902px] flex flex-col gap-4 mt-4 text-[14px] leading-[21px]'>
        <div className='inline-flex gap-4 border-b-1 border-[#334d66]'>
          <span className='border-b-2 pb-2'>Overview</span>
          <span className='border-b-2 pb-2'>Payments</span>
        </div>
        <div>
          <h2 className='my-[20px] font-poppins font-bold text-[22px] leading-[28px]'>Recent Payments</h2>
          <div className="w-[908px] h-[480px] flex flex-col border-1 inset-1 border-[#334d66] rounded-[12px]">
            <div className='flex justify-around items-center bg-[#172633] p-4 border-[#e5e8eb] border-b-1'>
              <div><span>Class</span></div>
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
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <StudentPaymentForm onSubmit={handlePayment} />
      </Modal>
    </main>
  );
}
