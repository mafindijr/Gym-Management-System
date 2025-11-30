

import { useEffect, useState } from 'react';
import Modal from '../Components/modal';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const INITIAL_MEMBER_FORM = {
  fullName: "",
  email: "",
  password: "",
  membership: "Basic",
  status: "Active"
};

const INITIAL_CLASS_FORM = {
  name: "",
  instructor: "",
  dateTime: "",
  status: "Scheduled",
  capacity: 25,
  description: ""
};

export default function Admin() {

  const [stats, setStats] = useState({
    totalMembers: 0,
    activeClasses: 0,
    totalTrainers: 0,
    memberGrowth: 0,
    classAttendance: 0
  });

  const [openMemberModal, setOpenMemberModal] = useState(false);
  const [openClassModal, setOpenClassModal] = useState(false);
  const [memberForm, setMemberForm] = useState(INITIAL_MEMBER_FORM);
  const [classForm, setClassForm] = useState(INITIAL_CLASS_FORM);
  const [memberSubmitting, setMemberSubmitting] = useState(false);
  const [classSubmitting, setClassSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (!token) {
          console.error('No auth token found');
          return;
        }
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/dashboard/`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setStats(data);
        } else {
          console.error('Failed to fetch dashboard stats:', data.message || 'Unknown error');
        }
      } catch (error) {
        console.error('Failed to fetch dashboard stats', error);
      }
    };

    fetchStats();
  }, []);

  const handleMemberFormChange = (e) => {
    const { name, value } = e.target;
    setMemberForm(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleClassFormChange = (e) => {
    const { name, value } = e.target;
    setClassForm(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleCreateMember = async (e) => {
    e.preventDefault();
    if (memberSubmitting) return;

    setMemberSubmitting(true);
    setError("");

    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        throw new Error("You must be logged in to create members");
      }

      const payload = {
        fullName: memberForm.fullName,
        email: memberForm.email,
        password: memberForm.password,
        membership: memberForm.membership,
        status: memberForm.status
      };

      const res = await fetch(`${API_BASE}/members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to create member");
      }

      setMemberForm(INITIAL_MEMBER_FORM);
      setOpenMemberModal(false);
      setStats(prev => ({ ...prev, totalMembers: prev.totalMembers + 1 }));
      alert("Member created successfully");
    } catch (err) {
      setError(err.message || "Failed to create member");
    } finally {
      setMemberSubmitting(false);
    }
  };

  const handleCreateClass = async (e) => {
    e.preventDefault();
    if (classSubmitting) return;

    setClassSubmitting(true);
    setError("");

    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        throw new Error("You must be logged in to schedule classes");
      }

      if (!classForm.name || !classForm.instructor || !classForm.dateTime) {
        throw new Error("Class name, instructor, and date/time are required");
      }

      const payload = {
        name: classForm.name,
        instructor: classForm.instructor,
        dateTime: classForm.dateTime,
        status: classForm.status || 'Scheduled',
        capacity: classForm.capacity || 25,
        description: classForm.description || ""
      };

      const res = await fetch(`${API_BASE}/classes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to schedule class");
      }

      setClassForm(INITIAL_CLASS_FORM);
      setOpenClassModal(false);
      setStats(prev => ({ ...prev, activeClasses: prev.activeClasses + 1 }));
      alert("Class scheduled successfully");
    } catch (err) {
      setError(err.message || "Failed to schedule class");
    } finally {
      setClassSubmitting(false);
    }
  };

  return (
    <div>

            <main className='flex flex-col col-span-4 justify-center  gap-8 w-full'>
                <div>
                    <h1 className='text-[36px] leading-10 font-bold font-montserrat'>Dashboard</h1>
                </div>

                <div className='flex gap-4'>
                    <div className='w-[280px] h-[120] rounded-xl p-4 text-left bg-[#223649]'>
                        <p className='font-semibold text-[16px] leading-6'>Total Members</p>
                        <p className='font-bold text-[24px] leading-[30px]'>{stats.totalMembers}</p>
                    </div>
                    <div className='w-[280px] h-[120] rounded-xl p-4 text-left bg-[#223649]'>
                        <p className='font-semibold text-[16px] leading-6'>Active Classes</p>
                        <p className='font-bold text-[24px] leading-[30px]'>{stats.activeClasses}</p>
                    </div>
                    <div className='w-[280px] h-[120] rounded-xl p-4 text-left bg-[#223649]'>
                        <p className='font-semibold text-[16px] leading-6'>Trainers</p>
                        <p className='font-bold text-[24px] leading-[30px]'>{stats.totalTrainers}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='text-[22px] leading-7 font-bold pb-4'>Quick Actions</h2>
                    </div>
                    <div className='flex gap-2 py-2'>
                        <button 
                          onClick={() => {
                            setMemberForm(INITIAL_MEMBER_FORM);
                            setError("");
                            setOpenMemberModal(true);
                          }}
                          className='bg-btnprimary w-[135px] h-10 rounded-full pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer'
                        >
                          Add Member
                        </button>
                        <button 
                          onClick={() => {
                            setClassForm(INITIAL_CLASS_FORM);
                            setError("");
                            setOpenClassModal(true);
                          }}
                          className='bg-[#223649] w-[135px] h-10 rounded-full pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer'
                        >
                          Schedule Class
                        </button>
                    </div>
                    <div>
                        <h2 className='text-[22px] leading-7 font-bold py-4'>Gym Overview</h2>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <div className="w-[430px] h-[394px] border inset-1 border-[#334d66] rounded-xl p-4">
                            <div>
                                <h2 className=''>Member Growth</h2>
                                <h2 className='text-[36px] leading-10 font-bold py-2 font-montserrat'>{stats.memberGrowth}%</h2>
                                <p className='text-[14px] leading-6 text-adminsmtext font-montserrat'>Last Month <span className='text-percentage font-bold'>{stats.memberGrowth}%</span></p>
                            </div>

                            <div>
                                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                                <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <path
                                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                                    fill="url(#paint0_linear_1131_5935)"
                                    ></path>
                                    <path
                                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                                    stroke="#92aec9"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    ></path>
                                    <defs>
                                    <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#233648"></stop>
                                        <stop offset="1" stopColor="#233648" stopOpacity="0"></stop>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <div className="flex justify-around">
                                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[430px] h-[394px] border inset-1 border-[#334d66] rounded-xl p-4">
                            <div>
                                <h2>Class Attendance</h2>
                                <h2 className='text-[36px] leading-10 font-bold py-2 font-montserrat'>{stats.classAttendance}%</h2>
                                <p className='text-[14px] leading-6 text-adminsmtext font-montserrat'>Last Week <span className='text-percentage font-bold'>{stats.classAttendance}%</span></p>
                            </div>

                            <div>
                                
                                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                                <div className="border-[#92aec9] bg-[#233648] border-t-2 w-full h-[60%]"></div>
                                <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Mon</p>
                                <div className="border-[#92aec9] bg-[#233648] border-t-2 w-full h-[80%]"></div>
                                <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Tue</p>
                                <div className="border-[#92aec9] bg-[#233648] border-t-2 w-full h-[40%]"></div>
                                <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Wed</p>
                                <div className="border-[#92aec9] bg-[#233648] border-t-2 w-full h-[30%]"></div>
                                <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Thu</p>
                                <div className="border-[#92aec9] bg-[#233648] border-t-2 w-full h-[30%]"></div>
                                <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">Fri</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Add Member Modal */}
            <Modal isOpen={openMemberModal} onClose={() => { setOpenMemberModal(false); setError(""); }}>
              <form onSubmit={handleCreateMember} className="space-y-4">
                <h2 className="text-[24px] font-bold text-center">Add Member</h2>
                {error && (
                  <div className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-2 rounded-md text-sm">
                    {error}
                  </div>
                )}
                <label className="w-full flex flex-col gap-1">
                  Full Name
                  <input
                    className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                    type="text"
                    placeholder="Enter full name"
                    name="fullName"
                    value={memberForm.fullName}
                    onChange={handleMemberFormChange}
                    required
                  />
                </label>
                <label className="w-full flex flex-col gap-1">
                  Email
                  <input
                    className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={memberForm.email}
                    onChange={handleMemberFormChange}
                    required
                  />
                </label>
                <label className="w-full flex flex-col gap-1">
                  Temporary Password
                  <input
                    className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={memberForm.password}
                    onChange={handleMemberFormChange}
                    required
                    minLength={6}
                  />
                </label>
                <label className="w-full flex flex-col gap-1">
                  Membership Type
                  <select
                    name="membership"
                    value={memberForm.membership}
                    onChange={handleMemberFormChange}
                    className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                  >
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    <option value="VIP">VIP</option>
                  </select>
                </label>
                <label className="w-full flex flex-col gap-1">
                  Status
                  <select
                    name="status"
                    value={memberForm.status}
                    onChange={handleMemberFormChange}
                    className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </label>
                <button
                  type="submit"
                  disabled={memberSubmitting}
                  className="bg-btnprimary w-full h-10 rounded-md my-4 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer disabled:opacity-60"
                >
                  {memberSubmitting ? "Saving..." : "Add Member"}
                </button>
              </form>
            </Modal>

            {/* Schedule Class Modal */}
            <Modal isOpen={openClassModal} onClose={() => { setOpenClassModal(false); setError(""); }}>
              <div className="flex flex-col h-full max-h-[80vh]">
                <h2 className="text-[24px] font-bold text-center mb-4 shrink-0">Schedule Class</h2>
                <form onSubmit={handleCreateClass} className="flex flex-col h-full overflow-hidden">
                  <div className="overflow-y-auto flex-1 pr-2 space-y-4">
                    {error && (
                      <div className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-2 rounded-md text-sm shrink-0">
                        {error}
                      </div>
                    )}
                    <label className="w-full flex flex-col gap-1">
                      Class Name
                      <input
                        className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                        type="text"
                        placeholder="Enter class name"
                        name="name"
                        value={classForm.name}
                        onChange={handleClassFormChange}
                        required
                      />
                    </label>
                    <label className="w-full flex flex-col gap-1">
                      Instructor
                      <input
                        className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                        type="text"
                        placeholder="Enter instructor's name"
                        name="instructor"
                        value={classForm.instructor}
                        onChange={handleClassFormChange}
                        required
                      />
                    </label>
                    <label className="w-full flex flex-col gap-1">
                      Date & Time
                      <input
                        className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                        type="datetime-local"
                        name="dateTime"
                        value={classForm.dateTime}
                        onChange={handleClassFormChange}
                        required
                      />
                    </label>
                    <label className="w-full flex flex-col gap-1">
                      Status
                      <select
                        name="status"
                        value={classForm.status}
                        onChange={handleClassFormChange}
                        className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                      >
                        <option value="Scheduled">Scheduled</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </label>
                    <label className="w-full flex flex-col gap-1">
                      Capacity
                      <input
                        className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                        type="number"
                        placeholder="Enter capacity"
                        name="capacity"
                        value={classForm.capacity}
                        onChange={handleClassFormChange}
                        min="1"
                        required
                      />
                    </label>
                    <label className="w-full flex flex-col gap-1">
                      Description (Optional)
                      <textarea
                        className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                        placeholder="Enter class description"
                        name="description"
                        value={classForm.description}
                        onChange={handleClassFormChange}
                        rows="3"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={classSubmitting}
                    className="bg-btnprimary w-full h-10 rounded-md mt-4 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer disabled:opacity-60 shrink-0"
                  >
                    {classSubmitting ? "Scheduling..." : "Schedule Class"}
                  </button>
                </form>
              </div>
            </Modal>
        
    </div>
  )
}
