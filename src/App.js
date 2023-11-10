import React from 'react';
import './App.css';
import HeroSection from './Components/Desktop1/HeroSection';
import AboutSection from './Components/About/AboutSection';
import ScrollToBottomButton from './Components/ScrollButton';
import Footer from './Components/Desktop1/Footer';
import NavBar from './Components/Desktop1/NavBar';



function App() {
  return (
    <div>

      <NavBar />
      <HeroSection/>
      <AboutSection />
      <ScrollToBottomButton />
      <Footer/>
      
    </div>
  );
}

export default App;
