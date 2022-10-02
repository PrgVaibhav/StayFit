import React from 'react';
import { ProgramsData } from '../../Data/ProgramsData';
import Button from '../../UI/Button/Button';
const Programs = () => {
  return (
    <section className="programs-section">
      <div className="programs-header">
        <h1>Programs which we offer </h1>
        <div className="underline"></div>
      </div>
      <div className="programs-description">
        {ProgramsData.map((data) => {
          return (
            <div key={data.id} className="programs">
              <div className="programs-images ">
                <img src={data.img} alt={data.header} />
              </div>
              <div className="programs-details">
                <h3>{data.header}</h3>
                <p>{data.description}</p>
                <p>{data.secondDescription}</p>
              </div>
              <Button className="programs-btn">Learn More</Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
