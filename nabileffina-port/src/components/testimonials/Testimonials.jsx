import React from 'react';
import "./testimonials.css"
import { Data } from './Data'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';



const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonial">
     <div data-aos="fade-up">
      <h2 className="section__title">Testimonials</h2>
      </div>
      
      <div data-aos="fade-up">
        <span className="section__subtitle">"You won't believe what my 'clients' (imaginary buddies, honestly) tell me..."</span>   
      </div>
            */hfjifhuif*/
            
            
      <div data-aos="fade-up" data-aos-duration="1000">
        <Swiper className="testimonial__container"
        
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
         
        }}
        modules={[Pagination]}
       

        >
          {Data.map(({id,image,title,description}) =>{
            return(

              
              <SwiperSlide className="testimonial__card" kry={id}>
                <img src={image} alt=""
                className='testimonial__img' />

                <h3 className="testimonial__name">{title}</h3>
                <p className="testimonial__description">{description}</p>
              </SwiperSlide>
              
              
            )
          })}
        </Swiper>
        </div>
        
    </section>
  )
}

export default Testimonials