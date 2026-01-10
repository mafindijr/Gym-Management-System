import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function AdminSettings() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        setError("You must be logged in to view settings.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/auth/me`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok && data.user) {
          setUser(data.user);
          setForm(prev => ({
            ...prev,
            fullName: data.user.fullName || "",
            email: data.user.email || ""
          }));
        } else {
          setError(data?.message || "Failed to load user data");
        }
      } catch (err) {
        setError(err.message || "Failed to load settings");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError("");
    setSuccess("");
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        throw new Error("You must be logged in to update your profile");
      }

      const payload = {
        fullName: form.fullName,
        email: form.email
      };

      const res = await fetch(`${API_BASE}/auth/me`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to update profile");
      }

      if (data.user) {
        setUser(data.user);
        localStorage.setItem('auth_user', JSON.stringify(data.user));
        setSuccess("Profile updated successfully");
        setForm(prev => ({
          ...prev,
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        }));
      }
    } catch (err) {
      setError(err.message || "Failed to update profile");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (submitting) return;

    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      setError("All password fields are required");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    if (form.newPassword.length < 6) {
      setError("New password must be at least 6 characters");
      return;
    }

    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        throw new Error("You must be logged in to change your password");
      }

      const res = await fetch(`${API_BASE}/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: form.currentPassword,
          newPassword: form.newPassword
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to change password");
      }

      setSuccess("Password changed successfully");
      setForm(prev => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      }));
    } catch (err) {
      setError(err.message || "Failed to change password");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className='flex flex-col col-span-4 gap-4 w-full px-4'>
        <h1 className='text-xl md:text-[32px] font-bold font-montserrat'>Settings</h1>
        <div className="p-6 text-center text-[#8fadcc]">Loading settings...</div>
      </main>
    );
  }

  return (
    <main className='flex flex-col col-span-4 gap-8 w-full px-4 md:px-0'>
      <div>
        <h1 className='text-xl md:text-[32px] font-bold font-montserrat'>Settings</h1>
      </div>

      <div className="flex flex-col gap-8 max-w-3xl w-full">
        {/* Profile Settings */}
        <div className="bg-[#223649] p-4 md:p-6 rounded-lg shadow">
          <h2 className="text-lg md:text-xl font-bold mb-4">Profile Settings</h2>
          <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              Full Name
              <input
                className="p-2 rounded bg-[#172633] border border-[#334d66] text-white"
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </label>
            <label className="flex flex-col gap-1">
              Email
              <input
                className="p-2 rounded bg-[#172633] border border-[#334d66] text-white"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="bg-btnprimary text-white font-bold py-2 px-4 rounded mt-2 cursor-pointer disabled:opacity-60"
            >
              {submitting ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>

        {/* Password Change */}
        <div className="bg-[#223649] p-4 md:p-6 rounded-lg shadow">
          <h2 className="text-lg md:text-xl font-bold mb-4">Change Password</h2>
          <form onSubmit={handleChangePassword} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              Current Password
              <input
                className="p-2 rounded bg-[#172633] border border-[#334d66] text-white"
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
                required
              />
            </label>
            <label className="flex flex-col gap-1">
              New Password
              <input
                className="p-2 rounded bg-[#172633] border border-[#334d66] text-white"
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="New Password (min 6 characters)"
                required
                minLength={6}
              />
            </label>
            <label className="flex flex-col gap-1">
              Confirm New Password
              <input
                className="p-2 rounded bg-[#172633] border border-[#334d66] text-white"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
                required
                minLength={6}
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="bg-btnprimary text-white font-bold py-2 px-4 rounded mt-2 cursor-pointer disabled:opacity-60"
            >
              {submitting ? "Changing..." : "Change Password"}
            </button>
          </form>
        </div>

        {/* Account Info */}
        {user && (
          <div className="bg-[#223649] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Account Information</h2>
            <div className="flex flex-col gap-2 text-[#8fadcc]">
              <div><strong className="text-white">Role:</strong> {user.role || "N/A"}</div>
              <div><strong className="text-white">Account Status:</strong> {user.isActive ? "Active" : "Inactive"}</div>
              {user.createdAt && (
                <div><strong className="text-white">Member Since:</strong> {new Date(user.createdAt).toLocaleDateString()}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

