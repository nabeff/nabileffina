import React, { useState } from 'react'
import "./services.css"


const Services = () => {

    const [toggleState, settoggleState] = useState(0)

    const toggleTab = (index) =>{
        settoggleState(index)
    }
    
  return (
    
    <section className="services section" id="services">
        
        <div data-aos="fade-up">
         <h2 className="section__title">Services</h2>
         </div>
        
         <div data-aos="fade-up">
        <span className="section__subtitle">What I offer</span>
        </div>

      
       
        
        <div className="services__container container grid">
       
            <div className="services__content" >
                
            
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Product <br />Designer
                    </h3>
                </div> 

                <span className="services__button" onClick={() => toggleTab(1)} >View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close "></i>

                        <h3 className="services__modal-title">Product Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop the user interface
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create ux element interactions
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I position your company brand
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Design and mockups of products fro companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        UI/Ux <br /> Designer
                    </h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services__button">View More
                    <i className="uil uil-arrow-right  services__button-icon" ></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal":"services__modal"}>
                    <div onClick={() => toggleTab(0)} className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">UI/Ux Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop the user interface
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create ux element interactions
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I position your company brand
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Design and mockups of products fro companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        Visual <br /> Designer
                    </h3>
                </div>

                <span onClick={() => toggleTab(3)}className="services__button">View More
                    <i className="uil uil-arrow-right  services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience. Providing satisfaction to the clients
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop the user interface
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create ux element interactions
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I position your company brand
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Design and mockups of products fro companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
       
    </section>
    
  )
}

export default Services