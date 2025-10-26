import { Outlet } from "react-router-dom";
import Sidebar from '../Components/Side-bar';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <main className="relative flex ml-68 flex-1 items-center justify-center p-4">
        <Outlet />
      </main>

    </div>
  )
}
