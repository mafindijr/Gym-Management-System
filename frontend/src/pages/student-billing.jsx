import { useEffect, useState } from "react";
import StudentPaymentForm from "../Components/student-payment-form";
import Modal from "../Components/modal";

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function StudentBilling() {
  const [payments, setPayments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      const token = localStorage.getItem('auth_token');
      if(!token) {
        setError("You must be logged in to view your payments.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/student/payments`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if(!res.ok) {
          throw new Error(data?.message || "Failed to load payments");
        }
        setPayments(data.payments || []);
      } catch (err) {
        setError(err.message || "Failed to load payments");
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const handlePaymentSuccess = (payment) => {
    setPayments(prev => [payment, ...prev]);
    setOpenModal(false);
    setError("");
  };

  const formatCurrency = (amount = 0) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (value) => {
    if(!value) return "N/A";
    return new Date(value).toLocaleString();
  };

  return (
    <> 
      <main className='flex flex-col col-span-4 gap-4 w-full items-center'>
        <div className='flex justify-between items-center w-[902px]'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[32px] leading-10 font-bold font-montserrat'>Billing & Payments</h1>
          </div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-btnprimary text-white h-10 rounded-md py-2 px-6 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer"
          >
            Make Payment
          </button>
        </div>
        <div className='w-[902px] flex flex-col gap-4 mt-4 text-[14px] leading-[21px]'>
          <div className='inline-flex gap-4 border-b border-[#334d66]'>
            <span className='border-b-2 pb-2'>Overview</span>
            <span className='border-b-2 pb-2'>Payments</span>
          </div>
          {error && (
            <div className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-2 rounded-md">
              {error}
            </div>
          )}
          <div>
            <h2 className='my-5 font-poppins font-bold text-[22px] leading-7'>Recent Payments</h2>
            <div className="w-[908px] min-h-80 flex flex-col border inset-1 border-[#334d66] rounded-xl">
              <div className='grid grid-cols-4 justify-around items-center bg-bgtable p-4 border-bColor border-b text-center font-semibold'>
                <div><span>Class</span></div>
                <div><span>Amount</span></div>
                <div><span>Date</span></div>
                <div><span>Status</span></div>
              </div>
              <div id="tableBody" className="">
                {loading && (
                  <div className="p-6 text-center text-footertext">Loading payments...</div>
                )}
                {!loading && payments.length === 0 && (
                  <div className="p-6 text-center text-footertext">You have not made any payments yet.</div>
                )}
                {!loading && payments.map((item) => (
                  <div key={item._id} className='grid grid-cols-4 justify-around items-center text-footertext p-4 border-bColor border-b text-center'>
                    <div className="text-bColor font-semibold">
                      <span>{item.className || "Manual Payment"}</span>
                    </div>
                    <div>
                      <span>{formatCurrency(item.amount)}</span>
                    </div>
                    <div>
                      <span>{formatDate(item.createdAt)}</span>
                    </div>
                    <div>
                      <span className="bg-[#223649] px-4 py-2 font-semibold rounded-md cursor-default text-bColor inline-block">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <StudentPaymentForm onSuccess={handlePaymentSuccess} />
        </Modal>
     </main>
    </>
  );
}
