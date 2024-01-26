import Hero from './Hero';
import Footer from './Footer';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About'

const HomePage = () => {
    return (
        <>
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
            <Footer page={'Home'}/> 
        </>
    );
}

export default HomePage;