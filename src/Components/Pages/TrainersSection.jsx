import React from 'react';
import trainerImage1 from '/Images/gym-6.jpg';
import trainerImage2 from '/Images/gym-7.jpg';
import trainerImage3 from '/Images/gym-8.jpg';
import Button from '../../UI/Button/Button';
const TrainersSection = () => {
  return (
    <section id="trainers" className="trainer-section">
      <div className="trainers-header">
        <h1>
          Meet our <span>trainers</span>
        </h1>
        <div className="underline"></div>
      </div>
      <div className="trainers-img">
        <figure>
          <img className="trainers-images" src={trainerImage1} alt="" />
          <figcaption>John Doe</figcaption>
          <figcaption>MMA EXPERT</figcaption>
        </figure>
        <figure>
          <img className="trainers-images" src={trainerImage2} alt="" />
          <figcaption>Alexander</figcaption>
          <figcaption>Ex UFC Player</figcaption>
        </figure>
        <figure>
          <img className="trainers-images" src={trainerImage3} alt="" />
          <figcaption>William Smith</figcaption>
          <figcaption>Certified Trainer</figcaption>
        </figure>
      </div>
      <Button className="trainers-btn">View More</Button>
    </section>
  );
};

export default TrainersSection;
