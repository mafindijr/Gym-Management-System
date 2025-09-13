import DashboardLayout from "./layout/Dashboard-layout";
import StudentDashboardLayout from "./layout/Student-dashboard-layout";
import Admin from "./pages/admin-dashboard";
import BillingPayment from "./pages/billing-payment";
import Classes from "./pages/classes";
import MembersDashboard from "./pages/members";
import TrainersPage from "./pages/trainers";
import Home from "./views/Home";
import StudentDashboard from "./pages/student-dashboard";
import StudentBilling from "./pages/student-billing";
import StudentSettings from "./pages/student-settings";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Admin />} />
          <Route path="member" element={<MembersDashboard />} />
          <Route path="classes" element={<Classes />} />
          <Route path="trainers" element={<TrainersPage />} />
          <Route path="billing" element={<BillingPayment />} />
        </Route>

        <Route path="/student" element={<StudentDashboardLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="billing" element={<StudentBilling />} />
          <Route path="settings" element={<StudentSettings />} />
        </Route>


        <Route path="*" element={<div className="text-center text-5xl font-bold p-8 text-red-700">404 Page Not Found</div>} />

    </Routes>
    </>
  )
}

export default App
