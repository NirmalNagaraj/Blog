import React from 'react'
import Carousel from './carousel'
import './assets/css/academy.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import bb from './assets/image/Bug-Bounty-graphic.png'
import Navbar from './navBar';
import WhatsAppButton from './whatsapp';
function Bug_bounty_hunter() {
  return (
    <div className='academy'>
    <Navbar/>
     <div className='container mb-1 py-3'>
          
    <div className='bug-bounty-hunter   mt-5 rounded-4'  >
    <div className=" p-3 d-flex align-items-center justify-content-center  fadeInUp bug-bounty-hunter_bg"  >
      <div className="text-center">
        <h1 className="mb-3 heading">
          <span className="text-uppercase text-light heading">Bug Bounty Hunter</span>
        </h1>
        <h2 className='sub-heading'><i>Unleash Your Potential</i></h2>
      </div>
    </div>
    <div className="row pt-5">
      <div className="col-lg-6 pt-4">
        <img src={bb} alt="bb" className="img-fluid" />
      </div>
      <div className="col-lg-6 pt-3">
        <p className='para_content'>
          In the ever-evolving world of cybersecurity, the demand for skilled professionals capable of identifying vulnerabilities has never been higher. Nalaemton Infotech proudly presents an unparalleled opportunity for tech enthusiasts and cybersecurity aspirants – our Bug Bounty Hunter Certification Course.
        </p>
      </div>
    </div>
    {/* Benefits Carousel */}
  
 
  
      
     <div>
     <div className='row mb-2 content_1 py-2'>
     <div className="text-center  fadeInUp" >
       <h1 className="mb-3 py-5">
         <span className="text-danger  text-uppercase para_heading">What Sets Nalaemton Infotech’s Certification Course Apart?</span>
       </h1>
     </div>
     <div className='carousel '>
       <Carousel benefits={[
         { title: "Practical Learning", description: "Our course goes beyond theoretical knowledge. Participants engage in real-world scenarios, hands-on exercises, and simulated bug bounty programs to develop practical skills that mirror the challenges faced in the field" },
         { title: "Expert Instructors", description: "Learn from seasoned bug bounty hunters and cybersecurity professionals who bring their real-world experiences into the virtual classroom. Gain insights, tips and tricks from those who’ve successfully navigated the bug bounty landscape." },
          {title:"Comprehensive Curriculum", description:"Our course encompasses advanced exploitation and ethical hacking principles, fostering well-rounded cybersecurity experts with comprehensive bug hunting skills."},

         
       ]}/>
     </div>
   </div>

     <div className='row mb-2 content_1 py-5'>
     <div className="text-center  fadeInUp" >
       <h1 className="mb-3 py-3">
         <span className="text-danger  text-uppercase para_heading">Key Highlights</span>
       </h1>
     </div>
     <div className='carousel row'>
       <Carousel benefits={[
         { title: "Real-world Simulations", description: "Engage in simulated bug bounty programs on live platforms to gain hands-on experience in identifying and reporting vulnerabilities." },
         { title: "Certification Recognition", description: "Receive a globally recognized certification upon successful completion of the course, validating your expertise as a bug bounty hunter." },
         {title:"Networking Opportunities" ,description:"Connect with like-minded individuals, industry experts and potential employers through our exclusive community forums and networking events."}
       ]}/>
     </div>
   </div>
     </div>

    <div className="row pt-5 ">
    {/*<div className="col-lg-4">
      <img src={AN} alt="bc" className="img-fluid " />
    </div>
    <div className=" col-lg-6 pt-5">
     <h2 className='text-danger text-center'>Register Here</h2>
      <h3 >
      Secure your spot by registering for the course. Limited seats are available, so act fast to embark on this transformative journey.
      </h3>
      <br/>
      
     
    </div> */}
  
  </div>
  <div className='row mb-2 content_1 py-3'>
  <div  className="  fadeInUp" >
  <h3 className="text-center text-danger para_heading ">Secure the Future Together</h3>
  <p className="text-align-left para_content">Nalaemton Infotech believes in the power of education to shape a secure digital future.We invite colleges to join us in this mission,fostering a generation of cybersecurity professionals who will lead the charge in defending against cyber threats.</p>
  <p className="text-align-left para_content">Don’t miss this opportunity to empower your students with the skills and knowledge they need to thrive in the cybersecurity landscape.Partner with Nalaemton Infotech today, and together, let’s secure the future.<br/><br/>For inquiries and collaboration opportunities, contact us at <a href="mailto:business@nalaemton.com">business@nalaemton.com</a>.</p>
  </div>
  
</div>

  </div>    
     </div>
     <div className='whatsapp-logo'>
          <WhatsAppButton />
        </div>
    </div>
  )
}

export default Bug_bounty_hunter