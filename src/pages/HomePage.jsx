// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Education from '../components/Education';
import News from '../components/News';
import FAQ from '../components/FAQ';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Education />
      <News />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default HomePage;