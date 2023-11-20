import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OurStandardsSection from './components/OurStandardsSection/OurStandardsSection';
import FiveReasonsSection from './components/FIveReasonsSection/FiveReasonsSection';
import ContactUsForm from './components/ContactUsForm/ContactUsForm';
import FAQSection from './components/FAQSection/FAQSection';
import WhatsAppChat from './components/WhatsAppChat/WhatsAppChat';
import PricingAndServicesSection from './components/PricingAndServicesSection/PricingAndServicesSection';
import OurClientsSection from './components/OurClientsSection/OurClientsSection';
import Footer from './components/Footer/Footer';
import animation1 from './images/cleaning.gif';
import ImageSlider from './components/ImageSlider/ImageSlider';

function App() {
  const [showCleaningAnimation, setShowCleaningAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowCleaningAnimation(false);
    }, 3000);
  }, []);

  return (
    <>
      {showCleaningAnimation && (
        <div className='animationWrapper'>
          <img className='animation1' src={animation1} alt='clining-animation1' />
        </div>
      )}
      {!showCleaningAnimation && (
        <div>
          <Header />
          <ImageSlider />
          <HeroSection />
          <FiveReasonsSection />
          <PricingAndServicesSection />
          <OurClientsSection />
          <FAQSection />
          <OurStandardsSection />
          <ContactUsForm />
          <WhatsAppChat />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
