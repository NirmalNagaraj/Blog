import React, { useState, useEffect } from 'react';
import './assets/css/navBar.css';
import logo from './assets/image/New logo.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  const handleLinkClick = () => {
    // Close navbar after a link is clicked
    setIsActive(false);
  };

  useEffect(() => {
    let timeoutId;
    if (isActive) {
      timeoutId = setTimeout(() => {
        setIsActive(false);
      }, 3000); 
    }
    return () => clearTimeout(timeoutId);
  }, [isActive]);

  const homehref = "./home";

  return (
    <div className={`header ${isActive ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <FaBars className='menu-icon' onClick={toggleNavbar} />
      <ul className={`nav_bar ${isActive ? 'active' : ''}`} onMouseLeave={closeNavbar}>
        <li><a href="/" onClick={handleLinkClick}>Home</a></li>
        <li><a href="/Service" onClick={handleLinkClick}>Service</a></li>
        <li><a href="/academy" onClick={handleLinkClick}>Academy</a></li>
        <li><a href="/blog" onClick={handleLinkClick}>Blog</a></li>
        <li><a href="/About" onClick={handleLinkClick}>About</a></li>
        <li><a href="/Contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
      <div className={`navbar-logo ${scrolled ? 'scrolled' : ''}`}>
       <a href={homehref}> <img src={logo} alt="Company Logo"/></a>
      </div>
    </div>
  );
};

export default Navbar;
