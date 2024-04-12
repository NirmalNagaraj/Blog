import React, { useState, useEffect } from 'react';
import './assets/css/home.css'; 
import { Helmet } from 'react-helmet';
import Navbar from './navBar';
import { Navigate } from 'react-router-dom'; 
import videoPath from './assets/video/v.mp4'
import WhatsAppButton from './whatsapp';

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device is touch-enabled
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints);
  }, []);

  const handleButtonClick = () => {
    setIsClicked(true); 
  };

  const handleTouchStart = () => {
    if (isTouchDevice) {
      setIsClicked(true);
    }
  };

  return (
    <div className="home">
      <Helmet>
        <link rel="preconnect" href={videoPath} />
      </Helmet>
      <video className="background-video" autoPlay muted loop>
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay hidden"></div>
      <Navbar />
      <div className="company-info">
        <h1>Nalaemton Infotech</h1>
        <p>Cybersecurity - 360°</p>
        <button
          className={`btn-home ${isTouchDevice ? 'touch-device' : ''}`} // Add conditional class based on touch device
          onClick={handleButtonClick}
          onTouchStart={handleTouchStart} // Add touch event handler
          disabled={isClicked} 
        >
          Get Started
        </button>
      </div>

      {isClicked && <Navigate to="/Service" replace />}

      <div className='whatsapp-logo'>
        <WhatsAppButton/>
      </div>

    </div>
  );
};

export default Home;
