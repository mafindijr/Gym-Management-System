import LandingPage from '../Components/landingPage'
import Layout from '../layout/layout'
import LandingPage from './Components/landingPage';
import MembersDashboard from "./Components/members";
import Admin from "./Components/admin-dashboard";

export default function () {
  return (
    <Layout>

        <LandingPage />
        <MembersDashboard />
        <Admin />    

    </Layout>
  )
}
