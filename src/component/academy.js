// Academy.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faBullseye, faShieldAlt } from '@fortawesome/free-solid-svg-icons'


import './assets/css/academy.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './navBar';

import WhatsAppButton from './whatsapp';


const Courses = ({ icon, title, description, href }) => (
  <div className="course-item rounded-4 m-1 " >
    <div className="course-icon bg-transparent border rounded p-1">
      <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={icon} className="fa-2x text-danger" />
      </div>
    </div>
    <h3 className="mb-3 text-danger">{title}</h3>
    <p className="text-body  mb-0 course_para_content" >{description}</p>
    <a className='text-danger mt-1' href={href}>Click here </a>
  </div>
);


const Academy = () => {
  return (
    <div className='academy'>
      <Navbar />
      <div className="container d-flex justify-content-center py-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row g-4">
              <div className="col-md-4 mt-lg-5 py-lg-5 fadeInUp">
                <Courses
                  icon={faChalkboardTeacher}
                  title="Bootcamps & Workshops"
                  description="Empowering the Cybersecurity Leaders of Tomorrow: Nalaemton Infotech’s Exclusive Bootcamps and Workshops"
                  href='./bootcamp'
                />
              </div>
              <div className="col-md-4 mt-lg-5  py-lg-5 fadeInUp">
                <Courses
                  icon={faBullseye}
                  title="Bug Bounty Hunter"
                  description="Unleash Your Potential: Nalaemton Infotech’s Bug Bounty Hunter Certification Course"
                  href='./bug_bounty_hunter'
                />
              </div>
              <div className="col-md-4 mt-lg-5 py-lg-5 fadeInUp">
                <Courses
                  icon={faShieldAlt}
                  title="Pentesting Professional"
                  description=" Elevate Your Career :Nalaemton Infotech's Pentesting Professional Course"
                  href='./pentesting_professional'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='whatsapp-logo'>
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Academy;

    
 