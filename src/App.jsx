import DashboardLayout from "./layout/Dashboard-layout";
import Admin from "./pages/admin-dashboard";
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
        </Route>

    </Routes>
    </>
  )
}

export default App
