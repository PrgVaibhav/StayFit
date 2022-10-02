import React from 'react';
import Button from '../Button/Button';
const Section = ({ id, isRTL, headerHeading, spanHeading, paragraph, secondParagraph, buttonLabel, img }) => {
  return (
    <section id={id} className="hero-section">
      <div style={{ order: isRTL ? 1 : 2 }} className="hero-description">
        {headerHeading && (
          <h1>
            {headerHeading} {spanHeading && <span>{spanHeading}.</span>}
          </h1>
        )}
        {paragraph && <p>{paragraph}</p>}
        {secondParagraph && <p>{secondParagraph}</p>}
        {buttonLabel && (
          <Button className="hero-btn btn" type="button">
            {buttonLabel}
          </Button>
        )}
      </div>
      <div style={{ order: isRTL ? 2 : 1 }} className="hero-img">
        <figure>
          <img src={img} alt="GYM_IMAGES" />
        </figure>
      </div>
    </section>
  );
};

export default Section;
