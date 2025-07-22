import Header from '../Components/header';
import Footer from '../Components/footer';

export default function Home( { children } ) {

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
