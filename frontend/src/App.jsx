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
import { Routes, Route, Navigate } from 'react-router-dom';
import StudentClasses from "./pages/student-classes";

function App() {

  const RequireAuth = ({ children, role }) => {
    let token;
    let user;
    try {
      token = localStorage.getItem('auth_token');
      user = JSON.parse(localStorage.getItem('auth_user'));
    } catch (_) {
      token = null;
      user = null;
    }

    if (!token || !user) {
      return <Navigate to="/" replace />;
    }

    if (role) {
      const userRole = user?.role;
      if (role === 'admin' && userRole !== 'admin') {
        return <Navigate to="/member" replace />;
      }
      if (role === 'member' && !(userRole === 'member' || userRole === 'admin')) {
        return <Navigate to="/" replace />;
      }
    }

    return children;
  };

  const RedirectIfAuthenticated = ({ children }) => {
    let token;
    let user;
    try {
      token = localStorage.getItem('auth_token');
      user = JSON.parse(localStorage.getItem('auth_user'));
    } catch (_) {
      token = null;
      user = null;
    }

    if (token && user) {
      const isAdmin = user?.role === 'admin';
      return <Navigate to={isAdmin ? '/admin' : '/member'} replace />;
    }

    return children;
  };

  return (
    <>
    <Routes>

        <Route path="/" element={<RedirectIfAuthenticated><Home /></RedirectIfAuthenticated>} />

        <Route path="/admin" element={<RequireAuth role="admin"><DashboardLayout /></RequireAuth>}>
          <Route index element={<Admin />} />
          <Route path="member" element={<MembersDashboard />} />
          <Route path="classes" element={<Classes />} />
          <Route path="trainers" element={<TrainersPage />} />
          <Route path="billing" element={<BillingPayment />} />
        </Route>

        <Route path="/member" element={<RequireAuth role="member"><StudentDashboardLayout /></RequireAuth>}>
          <Route index element={<StudentDashboard />} />
          <Route path="classes" element={<StudentClasses />} />
          <Route path="billing" element={<StudentBilling />} />
          <Route path="settings" element={<StudentSettings />} />
        </Route>


        <Route path="*" element={<div className="text-center text-5xl font-bold p-8 text-red-700">404 Page Not Found</div>} />

    </Routes>
    </>
  )
}

export default App
