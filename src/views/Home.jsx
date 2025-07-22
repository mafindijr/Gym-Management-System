import LandingPage from '../Components/landingPage';
import Layout from '../layout/layout';
import MembersDashboard from "../Components/members";
import Admin from "../Components/admin-dashboard";

export default function Home() {
  return (
    <Layout>

        <LandingPage />
        <MembersDashboard />
        <Admin />    

    </Layout>
  )
}
