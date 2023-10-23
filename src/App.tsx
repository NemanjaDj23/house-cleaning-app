import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OurStandardsSection from './components/OurStandardsSection/OurStandardsSection';
import FiveReasonsSection from './components/FIveReasonsSection/FiveReasonsSection';
import ContactUsForm from './components/ContactUsForm/ContactUsForm';
import FAQSection from './components/FAQSection/FAQSection';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FiveReasonsSection />
      <FAQSection />
      <OurStandardsSection />
      <ContactUsForm />
    </div>
  );
}

export default App;
