import LandingPage from '../Components/landingPage';
import Layout from '../layout/layout';
import MembersDashboard from "../pages/members";
import Admin from "../pages/admin-dashboard";

export default function Home() {
  return (
    <Layout>

        <LandingPage />
        <MembersDashboard />
        <Admin />    

    </Layout>
  )
}
