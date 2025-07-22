import Header from '../Components/header';
import Footer from '../Components/footer';

export default function Home( { Children } ) {
  return (
    <div>
        <Header />

        <main>
            {Children}
        </main>

        <footer />

    </div>
  )
}
