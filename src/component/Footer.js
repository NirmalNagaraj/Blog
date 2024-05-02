import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./assets/css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        
        <a href="https://www.instagram.com/nalaemton" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
        <a href="https://twitter.com/nalaemton" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
        <a href="https://www.youtube.com/@nalaemton" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
        <a href="https://www.facebook.com/Nalaemton" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
         <a href="https://www.linkedin.com/in/nalaemton" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      </div>
      
    </div>
  );
}

export default Footer;
