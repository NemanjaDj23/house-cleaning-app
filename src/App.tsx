import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OurStandardsSection from './components/OurStandardsSection/OurStandardsSection';
import FiveReasonsSection from './components/FIveReasonsSection/FiveReasonsSection';
import ContactUsForm from './components/ContactUsForm/ContactUsForm';
import FAQSection from './components/FAQSection/FAQSection';
import WhatsAppChat from './components/WhatsAppChat/WhatsAppChat';
import PricingAndServicesSection from './components/PricingAndServicesSection/PricingAndServicesSection';
import LogoCoverSection from './components/LogoCoverSection/LogoCoverSection';
import OurClientsSection from './components/OurClientsSection/OurClientsSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FiveReasonsSection />
      <LogoCoverSection />
      <PricingAndServicesSection />
      <OurClientsSection />
      <FAQSection />
      <OurStandardsSection />
      <ContactUsForm />
      <WhatsAppChat />
      <Footer />
    </div>
  );
}

export default App;
