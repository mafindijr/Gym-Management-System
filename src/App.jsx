import DashboardLayout from "./layout/Dashboard-layout";
import Admin from "./pages/admin-dashboard";
import Classes from "./pages/classes";
import MembersDashboard from "./pages/members";
import Home from "./views/Home"
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route  path="/admin" element={<Admin />} />
          <Route path="/member" element={<MembersDashboard />} />
          <Route path="/classes" element={<Classes />} />
        </Route>


        <Route path="*" element={<div className="text-center text-5xl font-bold p-8 text-red-700">404 Page Not Found</div>} />

    </Routes>
    </>
  )
}

export default App
