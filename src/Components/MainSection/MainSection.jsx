import React from 'react';

import Navigation from '../NavigationBar/Navigation';
import HeroSection from '../Pages/HeroSection';
import TrainersSection from '../Pages/TrainersSection';
import AboutSection from '../Pages/AboutSection';
import Programs from '../Pages/Programs';
import GymPricePlans from '../Pages/GymPricePlans';
import Testimonials from '../Pages/Testimonials';
import Footer from '../../Footer/Footer';

const MainSection = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <Programs />
        <AboutSection />
        <TrainersSection />
        <GymPricePlans />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default MainSection;
