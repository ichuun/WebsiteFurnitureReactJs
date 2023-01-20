
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Newitems from './components/NewItems'
import FeaturesSeconds from './components/FeaturesSecond';
import Products from './components/Products'
import Testimonial from './components/Testimonial'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className='w-full max-[1440px] mx-auto bg-white '>
      <Header />
      <Hero />
      <Features />
      <Newitems />
      <FeaturesSeconds/>
      <Products />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
