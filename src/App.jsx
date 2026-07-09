import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import OurMission from './components/OurMission';
import WhyChooseUs from './components/WhyChooseUs';
import TechnicalSupport from './components/TechnicalSupport';
import Testimonials from './components/Testimonials';
import ProductCategories from './components/ProductCategories';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import SelfCheckModal from './components/SelfCheckModal';

function AboutUsPage({ onBookClick }) {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <span className="wellness-tag">✦ ABOUT HEER TECHNOLOGY & CONTROL</span>
        <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '24px', color: 'var(--text-main)' }}>
          Engineering Simple, Solid &<br />Supportable Elevator Controllers Since 2009.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '48px' }}>
          Welcome to our dedicated About Us page. With over 15,000 active controller installations worldwide, we combine robust 32-bit microprocessor engineering with direct, responsive field support.
        </p>
        <div style={{ padding: '60px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-main)' }}>Dedicated About Us Page Ready</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '540px', margin: '0 auto 32px' }}>
            Each navigation option now has its own separate page. When you are ready with specific requirements or sections to display here, we can build it right away!
          </p>
          <button onClick={onBookClick} className="btn-primary">
            Request Consultation Desk
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactUsPage({ onBookClick }) {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <span className="wellness-tag">✦ DIRECT TECHNICAL SUPPORT & CONTACT</span>
        <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '24px', color: 'var(--text-main)' }}>
          Get in Touch With Our<br />Engineering & Support Desk.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '48px' }}>
          Whether you need immediate diagnostic assistance, custom drive parameter programming, or a quote for a multi-tower modernization, our team is directly accessible.
        </p>
        <div style={{ padding: '60px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-main)' }}>Dedicated Contact Us Page Ready</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '540px', margin: '0 auto 32px' }}>
            We have separated Contact Us into its own clean page. We can customize this space with interactive contact forms, office maps, or phone directory tables whenever you request!
          </p>
          <button onClick={onBookClick} className="btn-primary">
            Open Consultation & Inquiry Form
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductsPage({ onBookClick }) {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <span className="wellness-tag">✦ MICROPROCESSOR & VVVF SYSTEMS</span>
        <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '24px', color: 'var(--text-main)' }}>
          Elevator Control Systems engineered<br />for zero downtime.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '48px' }}>
          Explore our complete lineup of 32-Bit Microprocessor Lift Controllers, Integrated VVVF Drive Packages, and Hydraulic Freight Control units.
        </p>
        <ProductCategories onBookSpecialist={onBookClick} />
        <div style={{ marginTop: '40px' }}>
          <TechnicalSupport />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selfCheckModalOpen, setSelfCheckModalOpen] = useState(false);
  const [initialTherapy, setInitialTherapy] = useState('Microprocessor Lift Controller (32-Bit Closed Loop)');
  const [initialSpecialist, setInitialSpecialist] = useState('Senior R&D Lead Specialist');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const openBookingModal = (therapy = 'Microprocessor Lift Controller (32-Bit Closed Loop)', specialist = 'Senior R&D Lead Specialist') => {
    setInitialTherapy(therapy);
    setInitialSpecialist(specialist);
    setBookingModalOpen(true);
  };

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wellness-app">
      {/* Interactive Scroll Progress Momentum Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #c5d8a4 0%, #1a1d17 100%)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 99999,
          boxShadow: '0 2px 12px rgba(197, 216, 164, 0.45)'
        }}
      />

      {/* Sticky Luxury Header with new Page Navigation */}
      <Header
        activePage={activePage}
        onNavClick={handleNavClick}
        onBookClick={() => openBookingModal()}
        onSelfCheckClick={() => setSelfCheckModalOpen(true)}
      />

      {/* Page Routing */}
      {activePage === 'about-us' && (
        <AboutUsPage onBookClick={() => openBookingModal()} />
      )}

      {activePage === 'contact-us' && (
        <ContactUsPage onBookClick={() => openBookingModal()} />
      )}

      {activePage === 'products' && (
        <ProductsPage onBookClick={() => openBookingModal()} />
      )}

      {activePage === 'home' && (
        <main>
          <Hero
            onStartJourney={() => scrollToSection('philosophy')}
            onExploreNourish={() => scrollToSection('why-us')}
          />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <OurMission
              onMeetSpecialists={() => scrollToSection('mentors')}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <WhyChooseUs
              onBookClick={() => openBookingModal('Microprocessor Lift Controller (32-Bit Closed Loop)')}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductCategories
              onBookSpecialist={() => scrollToSection('faq')}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <TechnicalSupport />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Testimonials />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <FAQ />
          </motion.div>
        </main>
      )}

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Footer
          onBookClick={() => openBookingModal()}
        />
      </motion.div>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialTherapy={initialTherapy}
        initialSpecialist={initialSpecialist}
      />

      {/* Interactive Guided Mindful Self-Check Modal */}
      <SelfCheckModal
        isOpen={selfCheckModalOpen}
        onClose={() => setSelfCheckModalOpen(false)}
        onBookConsultation={(modality) => openBookingModal(modality)}
      />
    </div>
  );
}
