import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function BillingPayment() {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    outstandingBalance: 0,
    averagePayment: 0
  });
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('auth_token');
      if(!token) {
        setError("You must be logged in as an admin to view payments.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const [statsRes, paymentsRes] = await Promise.all([
          fetch(`${API_BASE}/payments/stats`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`${API_BASE}/payments`, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        const statsData = await statsRes.json();
        const paymentsData = await paymentsRes.json();

        if(!statsRes.ok) {
          throw new Error(statsData?.message || "Failed to load payment stats");
        }

        if(!paymentsRes.ok) {
          throw new Error(paymentsData?.message || "Failed to load payment records");
        }

        setStats(statsData);
        setPayments(paymentsData.payments || []);
      } catch (err) {
        setError(err.message || "Failed to load billing data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      <main className='flex flex-col col-span-4 gap-4'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl md:text-[32px] leading-[40px] font-bold font-montserrat'>Billing & Payments</h1>
          </div>
        </div>

        <div className='w-full max-w-4xl flex flex-col gap-4 mt-4 text-sm md:text-[14px] leading-[21px]'>
          <div className='inline-flex gap-4 border-b-1 border-[#334d66] overflow-auto'>
            <span className='border-b-2 pb-2'>Overview</span>
            <span className='border-b-2 pb-2'>Invoices</span>
            <span className='border-b-2 pb-2'>Payments</span>
          </div>
          {error && (
            <div className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-2 rounded-md">
              {error}
            </div>
          )}
          <div>
            <div>
              <h2 className='my-[20px] font-poppins font-bold text-lg md:text-[22px] leading-[28px]'>Summary</h2>
            </div>
            <div className='w-full'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <div className='flex-1 rounded-[12px] p-4 bg-[#223649]'>
                  <p className='font-semibold text-[16px]'>Total Revenue</p>
                  <p className='font-bold text-[20px] md:text-[24px]'>{formatCurrency(stats.totalRevenue)}</p>
                </div>
                <div className='flex-1 rounded-[12px] p-4 bg-[#223649]'>
                  <p className='font-semibold text-[16px]'>Outstanding Balance</p>
                  <p className='font-bold text-[20px] md:text-[24px]'>{formatCurrency(stats.outstandingBalance)}</p>
                </div>
                <div className='flex-1 rounded-[12px] p-4 bg-[#223649]'>
                  <p className='font-semibold text-[16px]'>Average Payment</p>
                  <p className='font-bold text-[20px] md:text-[24px]'>{formatCurrency(stats.averagePayment)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <h2 className='my-[20px] font-poppins font-bold text-[22px] leading-[28px]'>Recent Payments</h2>
            </div>
            <div className="w-full max-w-4xl min-h-[320px] flex flex-col border-1 inset-1 border-[#334d66] rounded-[12px]">
              <div className='grid grid-cols-4 justify-around items-center bg-[#172633] p-4 border-[#e5e8eb] border-b-1 text-center font-semibold'>
                <div><span>Member</span></div>
                <div><span>Amount</span></div>
                <div><span>Date</span></div>
                <div><span>Status</span></div>
              </div>
              <div id="tableBody" className="">
                {loading && (
                  <div className="p-6 text-center text-[#8fadcc]">Loading payment records...</div>
                )}
                {!loading && payments.length === 0 && (
                  <div className="p-6 text-center text-[#8fadcc]">No payments recorded yet.</div>
                )}
                {!loading && payments.map((item) => (
                  <div key={item._id} className='grid grid-cols-4 justify-around items-center text-[#8fadcc] p-4 border-[#e5e8eb] border-b-1 text-center'>
                    <div className="text-[#e5e8eb] font-semibold">
                      <span>{item.memberId?.fullName || item.memberName}</span>
                    </div>
                    <div>
                      <span>{formatCurrency(item.amount)}</span>
                    </div>
                    <div>
                      <span>{formatDate(item.createdAt)}</span>
                    </div>
                    <div>
                      <span className="bg-[#223649] px-4 py-2 font-semibold rounded-md cursor-default text-[#e5e8eb] inline-block">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>

    </>
  );
}
