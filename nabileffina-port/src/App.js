import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from "./components/Skills/Skills"
import Services from './components/Services/Services';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Me from './components/me/Me'
import Education from './components/education/Education';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';







const App = () =>{
  

  return (
    <>
   

    
   <Header />
    
    <main className='main'>
      
      <Home />
      <About />
      <Me />
      <Education/>
      <Skills />
      <Work/>      
      <Services />
      <Testimonials/>
      <Contact />
      
    </main>

    <ScrollUp />
    <Footer />

    
    </>
  )
}

export default App
