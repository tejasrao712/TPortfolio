import React from 'react';
import './App.css';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ScrollToBottomButton from './Components/ScrollButton';
import Footer from './Components/Footer';
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
