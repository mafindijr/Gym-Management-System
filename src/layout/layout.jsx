import Header from '../Components/header';
import Footer from '../Components/footer';

export default function Layout( { children } ) {

  return (
    <div>
        <Header />

        <main>
            {children}
        </main>

        <Footer />

    </div>
  )
}
