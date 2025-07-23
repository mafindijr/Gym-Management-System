import { Outlet } from "react-router-dom";
import Sidebar from '../Components/Side-bar';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <main className="flex-1 p-4">
        <Outlet />
      </main>

    </div>
  )
}
