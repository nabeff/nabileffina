import React from 'react'
import "./home.css"

const Social = () => {
  return (
    <div className="home__social">
        
        <a href="https://github.com/nabeff" className="home__social-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
        </a>   
                  
        <a href="https://www.upwork.com/nx/jobs/search/?q=html%20css&sort=recency&contractor_tier=1" className="home__social-icon" target="_blank">
            <i class='bx bxl-upwork'></i>
        </a>
                
        <a href="https://www.instagram.com/nabil.effina/" className="home__social-icon" target="_blank">
            <i class='bx bxl-linkedin'></i>
        </a>

    </div>
  )
}

export default Social