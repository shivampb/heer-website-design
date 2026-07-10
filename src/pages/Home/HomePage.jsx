import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import OurMission from './components/OurMission';
import WhyChooseUs from './components/WhyChooseUs';
import TechnicalSupport from './components/TechnicalSupport';
import Testimonials from './components/Testimonials';
import ProductCategories from './components/ProductCategories';
import FAQ from './components/FAQ';

export default function HomePage({ onStartJourney, onExploreNourish, onMeetSpecialists, onSelectTherapy, onSelfCheckClick }) {
  return (
    <main>
      <Hero
        onStartJourney={onStartJourney}
        onExploreNourish={onExploreNourish}
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <OurMission
          onMeetSpecialists={onMeetSpecialists}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <WhyChooseUs
          onSelectTherapy={onSelectTherapy}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <TechnicalSupport
          onBookSession={onSelectTherapy}
        />
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
        <ProductCategories
          onSelectCategory={(cat) => {
            if (onSelectTherapy) onSelectTherapy(cat);
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <FAQ
          onContactClick={onSelectTherapy}
        />
      </motion.div>
    </main>
  );
}
