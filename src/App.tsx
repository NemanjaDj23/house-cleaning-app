import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OurStandardsSection from './components/OurStandardsSection/OurStandardsSection';
import FiveReasonsSection from './components/FIveReasonsSection/FiveReasonsSection';
import ContactUsForm from './components/ContactUsForm/ContactUsForm';
import FAQSection from './components/FAQSection/FAQSection';
import WhatsAppChat from './components/WhatsAppChat/WhatsAppChat';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FiveReasonsSection />
      <FAQSection />
      <OurStandardsSection />
      <ContactUsForm />
      <WhatsAppChat />
    </div>
  );
}

export default App;
