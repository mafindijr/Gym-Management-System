import { Outlet } from "react-router-dom";
import Sidebar from '../Components/Side-bar';
import { Home, Calendar, Settings, Wallet } from "lucide-react";

export default function StudentDashboardLayout() {
  
  const studentNavs = [
    { to: "/member", name: "Dashboard", icon: <Home size={20} /> },
    { to: "/member/classes", name: "My Classes", icon: <Calendar size={20} /> },
    { to: "/member/billing", name: "Billing & Payment", icon: <Wallet size={20} /> },
    { to: "/member/settings", name: "Settings", icon: <Settings size={20} /> }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar navs={studentNavs} name="Member" />
      <main className="relative flex ml-68 flex-1 items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
}
