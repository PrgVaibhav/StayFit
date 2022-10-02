import React from 'react';
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TestimonialsData } from '../../Data/TestimonialsData';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h1>
          Our <span>happy client</span> Reviews
        </h1>
        <div className="underline"></div>
      </div>
      <Swiper modules={[Pagination, A11y]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }} scrollbar={{ draggable: true }}>
        {TestimonialsData.map((data) => {
          return (
            <SwiperSlide>
              <div key={data.id} className="testimonials-container">
                <div className="single-testimonial-img">
                  <img src={data.img} alt={data.user} />
                </div>
                <div className="single-testimonial-description">
                  <q>{data.quote}</q>
                  <h3>- {data.user}</h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
