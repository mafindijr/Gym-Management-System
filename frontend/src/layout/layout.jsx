import Header from '../Components/header';
import Footer from '../Components/footer';

export default function Layout( { children } ) {

  return (
    <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 px-4 sm:px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto w-full">
            {children}
        </main>

        <Footer />

    </div>
  )
}
