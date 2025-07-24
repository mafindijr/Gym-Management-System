import LandingPage from '../Components/landingPage';
import Layout from '../layout/layout';
import DashboardLayout from '../layout/Dashboard-layout';
// import Modal from '../Components/modal';

export default function Home() {
  return (
    <Layout>

        <LandingPage />
        <DashboardLayout />
        {/* <Modal /> */}
    </Layout>
  )
}
