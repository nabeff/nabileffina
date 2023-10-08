import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Nabil Effina</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#quote" className="footer__link">Quote</a>
                    </li>
                    <li>
                        <a href="#project" className="footer__link">Projects</a>
                    </li>
     
                </ul>

                <div className="footer__social">

                <a href="https://www.linkedin.com/in/nabil-effina-b30546206/" className="footer__social-link" target="_blank">
                    <i class="uil uil-linkedin"></i>
                 </a>

                <a href="https://www.upwork.com/nx/jobs/search/?q=html%20css&sort=recency&contractor_tier=1" className="footer__social-link" target="_blank">
                    <i class="uil uil-dribbble"></i>
                </a>

                <a href="https://github.com/nabeff" className="footer__social-link" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>

                </div>
            

            <span className="footer__copy">
                &#169; NabilEffina. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer