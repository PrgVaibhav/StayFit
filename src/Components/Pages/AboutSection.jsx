import React from 'react';
import gymAboutImg1 from '/Images/gym-9.jpg';
import Section from '../../UI/Section/Section';
const AboutSection = () => {
  return <Section id="about" isRTL={true} headerHeading="What do we do?" paragraph="A place where you meet a newer version of yourself. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsam sunt dicta repellat voluptates." secondParagraph="We’ve transformed every aspect of our membership to encompass integrated digital and in-club offerings to keep you at your best all the time, any time." img={gymAboutImg1} buttonLabel="Learn More" />;
};

export default AboutSection;
