import React from 'react';
import bc from './assets/image/bootcamp_bg.jpg';
import Carousel from './carousel';
import './assets/css/academy.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import WhatsAppButton from './whatsapp';
import Navbar from './navBar';

function bootcamp() {
  return (
    <div className='academy'>
      <Navbar />
      <div className='container py-3 mb-3'>
        <div className='bootcamp mt-5 rounded-4'>
          <div className="d-flex align-items-center justify-content-center fadeInUp bootcamp_bg">
            <div className="text-center">
              <h1 className="mb-3">
                <span className="text-uppercase text-light heading">Bootcamp & Workshop</span>
              </h1>
              <h2 className='sub-heading'><i>Empowering the Cybersecurity Leaders of Tomorrow</i></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 pt-3">
              <p className='para_content'>
                In the ever-expanding digital landscape, the need for skilled cybersecurity professionals has never been more critical. Nalaemton Infotech is proud to announce a groundbreaking initiative aimed at nurturing the next generation of cybersecurity leaders — our exclusive Bootcamps and Workshops tailored for college students.
              </p>
            </div>
            <div className="col-lg-6 pt-4">
              <img src={bc} alt="bc" className="img-fluid" />
            </div>
          </div>
          <div className='row mb-1 content_1 py-5'>
            <div className=" fadeInUp">
              <h3 className='text-danger text-center para_heading'>Why Cybersecurity Bootcamps Matter?</h3>
              <p className='para_content text-align-left'>The world of cybersecurity is dynamic, challenging, and, most importantly, essential. As technology advances, so do the methods of cyber threats. Nalaemton Infotech recognizes the urgency of preparing students for this rapidly evolving landscape. Our Bootcamps and Workshops serve as a gateway for students to delve into the intricacies of cybersecurity, equipping them with practical skills and knowledge that transcend traditional classroom learning.</p>
            </div>
          </div>

          <div className='row mb-2 content_1 py-2'>
            <div className="text-center fadeInUp">
              <h1 className="mb-3 py-5">
                <span className="text-danger text-uppercase para_heading">Benefits for Colleges and Students</span>
              </h1>
            </div>
            <div className='carousel'>
              <Carousel benefits={[
                { title: "Skill development", description: "Equip your students with hands-on skills that are directly applicable in the cybersecurity industry." },
                { title: "Networking Opportunities", description: "Connect your students with industry professionals and peers, fostering valuable relationships and opening doors to future opportunities." },
                { title: "Career Advancement", description: "Provide a competitive edge to your students as they enter the job market with a comprehensive understanding of cybersecurity principles and practices." },
                { title: "Industry-Recognized Certifications", description: "Participants have the chance to earn certifications that are recognized and respected in the cybersecurity field." }
              ]} />
            </div>
          </div>

          <div className='row mb-2 content_1 py-2'>
            <div className="fadeInUp">
              <h3 className="text-center text-danger para_heading">How Colleges Can Participate?</h3>
              <p className="text-align-left para_content">Nalaemton Infotech invites colleges to partner with us in this transformative journey. By hosting our Bootcamps and Workshops on your campus, you empower your students with unparalleled learning experiences, demonstrating your commitment to their academic and professional success.</p>
            </div>
          </div>

          <div className='row mb-2 content_1 py-5'>
            <div className="fadeInUp">
              <h3 className="text-center text-danger para_heading">Secure the Future Together</h3>
              <p className="text-align-left para_content">Nalaemton Infotech believes in the power of education to shape a secure digital future. We invite colleges to join us in this mission, fostering a generation of cybersecurity professionals who will lead the charge in defending against cyber threats.</p>
              <p className="text-align-left para_content">Don’t miss this opportunity to empower your students with the skills and knowledge they need to thrive in the cybersecurity landscape. Partner with Nalaemton Infotech today, and together, let’s secure the future.<br /><br />For inquiries and collaboration opportunities, contact us at <a href="mailto:business@nalaemton.com">business@nalaemton.com</a>.</p>
            </div>
          </div>
        </div>
        <div className='whatsapp-logo'>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}

export default bootcamp;
