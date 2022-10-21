import React from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';
import Features from './components/Features';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  Aos.init({ duration: 1300, offset: 100 });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <Pricing />
      <Newsletter />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
