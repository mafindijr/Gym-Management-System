import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from '../Components/Side-bar';
import { Home, Calendar, Settings, Wallet, Menu, X } from "lucide-react";

export default function StudentDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const studentNavs = [
    { to: "/member", name: "Dashboard", icon: <Home size={20} /> },
    { to: "/member/classes", name: "My Classes", icon: <Calendar size={20} /> },
    { to: "/member/billing", name: "Billing & Payment", icon: <Wallet size={20} /> },
    { to: "/member/settings", name: "Settings", icon: <Settings size={20} /> }
  ];

  return (
    <div className="flex h-screen">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#223649] rounded-md"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed md:relative w-64 h-screen z-40 transform transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar navs={studentNavs} name="member" />
      </div>

      {/* Overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto pt-16 md:pt-0 px-4 md:px-0">
        <Outlet />
      </main>
    </div>
  );
}
