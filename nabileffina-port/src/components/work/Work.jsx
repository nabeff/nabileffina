import React from 'react';
import "./work.css";
import Works from './Works';

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <div data-aos="fade-up">
        <h2 className="section__title">Portfolio</h2>
      </div>
        
      <div data-aos="fade-up">
        <span className="section__subtitle">Most recent works</span>
      </div>
        
      
        <Works />
      
        
    </section>
  );
};

export default Work