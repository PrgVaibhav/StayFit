import React from 'react';
import Button from '../../UI/Button/Button';
import { GymPriceData } from '../../Data/GymPriceData';
const GymPricePlans = () => {
  return (
    <section id="prices" className="gym-price-plans">
      <div className="gym-prices-header">
        <h1>
          Start Your journey with <span>StayFit</span>
        </h1>
        <p>Don't worry we have plans for Your every need.</p>
        <div className="underline"></div>
      </div>
      <div className="prices">
        {GymPriceData.map((data) => {
          return (
            <div key={data.id} className="price-list">
              <div className="price-plans">
                <h1>{data.title}</h1>
                <p>{data.price}</p>
              </div>
              <div className="price-description">
                <p>{data.firstDescription}</p>
                <p>{data.secondDescription}</p>
                <p>{data.thirdDescription}</p>
              </div>
              <Button className="price-plan-btn">Buy this</Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GymPricePlans;
