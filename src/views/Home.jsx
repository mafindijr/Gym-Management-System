import LandingPage from '../Components/landingPage';
import Layout from '../layout/layout';
import DashboardLayout from '../layout/Dashboard-layout';

export default function Home() {
  return (
    <Layout>

        <LandingPage />
        <DashboardLayout />
    </Layout>
  )
}
