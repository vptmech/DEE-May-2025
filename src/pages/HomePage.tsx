import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Compliance from '../components/Compliance';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <Compliance />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;