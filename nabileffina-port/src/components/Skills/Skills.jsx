import React from 'react'
import "./skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"



const Skills = () => {
  return (
    
    <section className="skills section " id="skills">
      
         <h2 className="section__title" data-aos="zoom-out-up">Skills</h2>
       
         

       
          <span className="section__subtitle" data-aos="zoom-out-up">My technical level</span>
        

        <div className="skills__container container grid">

        <div data-aos="zoom-out-right"  data-aos-duration="1000">
            <Frontend />
          </div>
           
          <div data-aos="zoom-out-left"  data-aos-duration="1000">
            <Backend />
          </div>
            
        </div>
       
    </section>
   
     
  )
}

export default Skills

