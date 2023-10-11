import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OurStandardsSection from './components/OurStandardsSection/OurStandardsSection';
import FiveReasonsSection from './components/FIveReasonsSection/FiveReasonsSection';
import ContactUsForm from './components/ContactUsForm/ContactUsForm';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FiveReasonsSection />
      <OurStandardsSection />
      <ContactUsForm />
    </div>
  );
}

export default App;
