import { Outlet } from "react-router-dom";
import Sidebar from '../Components/Side-bar';
import { Home, Calendar, Settings } from "lucide-react";

export default function StudentDashboardLayout() {
  
  const studentNavs = [
    { to: "/student", name: "Dashboard", icon: <Home size={20} /> },
    { to: "/student/classes", name: "My Classes", icon: <Calendar size={20} /> },
    { to: "/student/settings", name: "Settings", icon: <Settings size={20} /> }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar navs={studentNavs} name="Student" />
      <main className="relative flex ml-68 flex-1 items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
}
