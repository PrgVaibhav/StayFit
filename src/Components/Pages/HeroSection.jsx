import React from 'react';
import HeroSectionImage from '/Images/gym-1.png';
import Section from '../../UI/Section/Section';
const HeroSection = () => {
  return <Section isRTL={true} headerHeading="Give your personality a new look through" spanHeading="StayFit" paragraph="Join our GYM to get all the precious benefits. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsam sunt dicta repellat voluptates." secondParagraph="Stay Healthy, Stay Fit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ." buttonLabel="Get Started" img={HeroSectionImage} />;
};

export default HeroSection;
