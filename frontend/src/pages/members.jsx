import { useCallback, useEffect, useState } from "react";
import SearchBar from '../Components/search-input';
import Modal from "../Components/modal";

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const INITIAL_FORM = {
  fullName: "",
  email: "",
  password: "",
  membership: "Basic",
  status: "Active"
};

export default function MembersDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [editForm, setEditForm] = useState(INITIAL_FORM);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [createSubmitting, setCreateSubmitting] = useState(false);
  const [editSubmitting, setEditSubmitting] = useState(false);
  const [deleteSubmitting, setDeleteSubmitting] = useState(false);

  const fetchMembers = useCallback(async (term = "") => {
    const token = localStorage.getItem('auth_token');
    if(!token) {
      setError("You must be logged in to manage members.");
      setMembers([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const query = term.trim() ? `?search=${encodeURIComponent(term.trim())}` : "";
      const res = await fetch(`${API_BASE}/members${query}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if(!res.ok) {
        throw new Error(data?.message || "Failed to fetch members");
      }
      setMembers(data.members || []);
    } catch (err) {
      setError(err.message || "Failed to fetch members");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMembers(searchTerm);
  };

  const handleCreateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateMember = async (e) => {
    e.preventDefault();
    if(createSubmitting) return;

    setCreateSubmitting(true);
    setError("");

    try {
      const token = localStorage.getItem('auth_token');
      if(!token) {
        throw new Error("You must be logged in to create members");
      }

      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        membership: formData.membership,
        status: formData.status
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
      if(!res.ok) {
        throw new Error(data?.message || "Failed to create member");
      }

      setMembers(prev => [data.member, ...prev]);
      setFormData(INITIAL_FORM);
      setOpenModal(false);
      alert("Member created successfully");
    } catch (err) {
      setError(err.message || "Failed to create member");
    } finally {
      setCreateSubmitting(false);
    }
  };

  const handleUpdateMember = async (e) => {
    e.preventDefault();
    if(!selectedMember || editSubmitting) return;

    setEditSubmitting(true);
    setError("");

    try {
      const token = localStorage.getItem('auth_token');
      if(!token) {
        throw new Error("You must be logged in to update members");
      }

      const payload = {
        fullName: editForm.fullName,
        email: editForm.email,
        membership: editForm.membership,
        status: editForm.status
      };

      if(editForm.password) {
        payload.password = editForm.password;
      }

      const res = await fetch(`${API_BASE}/members/${selectedMember._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if(!res.ok) {
        throw new Error(data?.message || "Failed to update member");
      }

      setMembers(prev => prev.map(member => member._id === data.member._id ? data.member : member));
      setSelectedMember(data.member);
      setEditForm({
        fullName: data.member.fullName,
        email: data.member.email,
        password: "",
        membership: data.member.membership || "Basic",
        status: data.member.isActive ? "Active" : "Inactive"
      });
      setIsEditing(false);
      alert("Member updated successfully");
    } catch (err) {
      setError(err.message || "Failed to update member");
    } finally {
      setEditSubmitting(false);
    }
  };

  const handleDeleteMember = async () => {
    if(!selectedMember || deleteSubmitting) return;
    const confirmDelete = window.confirm(`Delete ${selectedMember.fullName}?`);
    if(!confirmDelete) return;

    setDeleteSubmitting(true);
    setError("");

    try {
      const token = localStorage.getItem('auth_token');
      if(!token) {
        throw new Error("You must be logged in to delete members");
      }

      const res = await fetch(`${API_BASE}/members/${selectedMember._id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if(!res.ok) {
        throw new Error(data?.message || "Failed to delete member");
      }

      setMembers(prev => prev.filter(member => member._id !== selectedMember._id));
      setOpenReview(false);
      setSelectedMember(null);
      alert("Member deleted successfully");
    } catch (err) {
      setError(err.message || "Failed to delete member");
    } finally {
      setDeleteSubmitting(false);
    }
  };

  const openMemberDetails = (member) => {
    setSelectedMember(member);
    setEditForm({
      fullName: member.fullName,
      email: member.email,
      password: "",
      membership: member.membership || "Basic",
      status: member.isActive ? "Active" : "Inactive"
    });
    setIsEditing(false);
    setOpenReview(true);
  };

  const handleCloseReview = () => {
    setOpenReview(false);
    setSelectedMember(null);
    setIsEditing(false);
  };

  const formatDate = (value) => {
    if(!value) return "N/A";
    try {
      return new Date(value).toLocaleString();
    } catch (_) {
      return value;
    }
  };

  return (
    <div>
      <main className='flex flex-col col-span-4 gap-8 w-full'>
        <div className='flex justify-between items-center'>
          <h1 className='text-[36px] leading-[40px] font-bold font-montserrat'>Members</h1>
          <button
            onClick={() => {
              setFormData(INITIAL_FORM);
              setOpenModal(true);
            }}
            className='bg-btnprimary w-[135px] h-[40px] rounded-md pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer'
          >
            Add Member
          </button>
        </div>

        <div className='flex gap-4 w-full'>
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSubmit={handleSearchSubmit}
            placeholder="Search by member name or email"
            disabled={loading}
          />
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-2 rounded-md">
            {error}
          </div>
        )}

        <div className='flex gap-4 mt-4'>
          <div className="w-[928px] min-h-[320px] flex flex-col border-1 inset-1 border-[#334d66] rounded-[12px]">
            <div className='grid grid-cols-6 items-center bg-[#172633] p-4 border-[#e5e8eb] border-b-1 text-sm font-semibold text-center'>
              <span>Name</span>
              <span>Email</span>
              <span>Membership</span>
              <span>Status</span>
              <span>Updated</span>
              <span>Action</span>
            </div>
            <div id="tableBody" className="divide-y divide-[#334d66]">
              {loading && (
                <div className="p-6 text-center text-[#8fadcc]">Loading members...</div>
              )}
              {!loading && members.length === 0 && (
                <div className="p-6 text-center text-[#8fadcc]">No members found.</div>
              )}
              {!loading && members.map((item) => (
                <div key={item._id} className='grid grid-cols-6 items-center text-[#8fadcc] p-4 text-center'>
                  <div className="text-[#e5e8eb] font-semibold">{item.fullName}</div>
                  <div className="truncate">{item.email}</div>
                  <div>{item.membership}</div>
                  <div>
                    <span className="bg-[#223649] px-4 py-2 font-semibold rounded-md cursor-default text-[#e5e8eb] inline-block">
                      {item.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div>{formatDate(item.updatedAt || item.createdAt)}</div>
                  <div>
                    <button
                      onClick={() => openMemberDetails(item)}
                      className="font-semibold cursor-pointer text-btnprimary"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <form onSubmit={handleCreateMember} className="space-y-4">
          <h2 className="text-[24px] font-bold text-center">Add Member</h2>
          <label className="w-full flex flex-col gap-1">
            Full Name
            <input
              className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
              type="text"
              placeholder="Enter full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleCreateChange}
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
              value={formData.email}
              onChange={handleCreateChange}
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
              value={formData.password}
              onChange={handleCreateChange}
              required
            />
          </label>
          <label className="w-full flex flex-col gap-1">
            Membership
            <select
              name="membership"
              value={formData.membership}
              onChange={handleCreateChange}
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
              value={formData.status}
              onChange={handleCreateChange}
              className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <button
            type="submit"
            disabled={createSubmitting}
            className="bg-btnprimary w-full h-[40px] rounded-md my-4 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer disabled:opacity-60"
          >
            {createSubmitting ? "Saving..." : "Add Member"}
          </button>
        </form>
      </Modal>

      <Modal isOpen={openReview} onClose={handleCloseReview}>
        <h2 className="text-center font-montserrat font-[700] text-[32px]">Member Details</h2>
        {selectedMember && !isEditing && (
          <div className="p-4 divide-y-2 divide-adminsmtext text-[18px] font-[400]">
            <div className="mb-2"><strong>Name:</strong> {selectedMember.fullName}</div>
            <div className="mb-2"><strong>Email:</strong> {selectedMember.email}</div>
            <div className="mb-2"><strong>Membership:</strong> {selectedMember.membership}</div>
            <div className="mb-2"><strong>Status:</strong> {selectedMember.isActive ? 'Active' : 'Inactive'}</div>
            <div className="mb-2"><strong>Last Login:</strong> {formatDate(selectedMember.lastLogin)}</div>
            <div className="flex gap-4 mt-4 flex-wrap">
              <button
                className="bg-[#223649] w-[135px] h-[40px] rounded-md my-2 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer"
                onClick={() => setIsEditing(true)}
              >
                Edit Member
              </button>
              <button
                className="bg-red-600 w-[135px] h-[40px] rounded-md my-2 pl-4 pr-4 leading-5.4 text-[13px] font-bold font-poppins text-center cursor-pointer disabled:opacity-60"
                onClick={handleDeleteMember}
                disabled={deleteSubmitting}
              >
                {deleteSubmitting ? "Deleting..." : "Delete Member"}
              </button>
            </div>
          </div>
        )}
        {selectedMember && isEditing && (
          <form className="p-4 space-y-3" onSubmit={handleUpdateMember}>
            <label className="flex flex-col gap-1">
              <strong>Name:</strong>
              <input
                className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                type="text"
                name="fullName"
                value={editForm.fullName}
                onChange={handleEditChange}
                required
              />
            </label>
            <label className="flex flex-col gap-1">
              <strong>Email:</strong>
              <input
                className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleEditChange}
                required
              />
            </label>
            <label className="flex flex-col gap-1">
              <strong>Membership:</strong>
              <select
                name="membership"
                value={editForm.membership}
                onChange={handleEditChange}
                className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
              >
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <strong>Status:</strong>
              <select
                name="status"
                value={editForm.status}
                onChange={handleEditChange}
                className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <strong>Reset Password (optional):</strong>
              <input
                className="p-2 w-full outline-none border-[#334d66] border-2 bg-[#223649] rounded-md text-[16px]"
                type="password"
                name="password"
                value={editForm.password}
                onChange={handleEditChange}
                placeholder="Leave blank to keep current password"
              />
            </label>
            <div className="flex gap-4 mt-4 flex-wrap">
              <button
                type="submit"
                disabled={editSubmitting}
                className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded disabled:opacity-60"
              >
                {editSubmitting ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                className="bg-gray-600 cursor-pointer text-white px-4 py-2 rounded"
                onClick={() => {
                  setIsEditing(false);
                  setEditForm({
                    fullName: selectedMember.fullName,
                    email: selectedMember.email,
                    password: "",
                    membership: selectedMember.membership || "Basic",
                    status: selectedMember.isActive ? "Active" : "Inactive"
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Modal>

    </div>
  );
}