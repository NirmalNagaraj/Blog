import React from 'react'
import './assets/css/About.css'
import Navbar from './navBar'
import WhatsAppButton from './whatsapp';

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about-container'>
        <div className='top-screen'>
          <div className="about-box">

            <h1>About Us!</h1>
            <h4>Welcome to Nalaemton Infotech, where technology meets innovation. </h4>

          </div>

        </div>
        <div className='about-box2'>
          <p>

            At Nalaemton Infotech, we are driven by a singular mission: To empower businesses and individuals, To navigate the digital landscape securely.

            Our commitment to excellence, cutting-edge technologies and unwavering dedication to cybersecurity make us a trusted partner in safeguarding your digital assets.
          </p>
        </div>



        <div className='about-box2'>
          <h2>What Sets Us Apart?</h2>


          <div className='about-box-inner'>
            <p><span>1. Expertise</span><br />
              Our team comprises cybersecurity experts with diverse backgrounds and a wealth of experience. From ethical hacking to threat intelligence, we bring a comprehensive skill set to the table.</p>
          </div>

          <div className='about-box-inner'>
            <p><span>2. Innovation</span><br />
              We thrive on innovation, constantly exploring new technologies and methodologies to stay ahead of emerging threats. Our commitment to continuous learning ensures that our clients benefit from the latest and most effective cybersecurity solutions.
            </p>
          </div>

          <div className='about-box-inner'>
            <p><span>3. Client-centric approach</span><br />
              At Nalaemton Infotech, our clients are at the heart of everything we do. We take the time to understand your unique challenges and tailor our solutions to meet your specific needs. Your security is our priority.
            </p>
          </div>
        </div>
      </div>
      <div className='whatsapp-logo'>
        <WhatsAppButton />
      </div>
    </div>




  )
}

export default About;