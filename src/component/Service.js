import React from 'react'
import './assets/css/Service.css'
import Navbar from './navBar'
import WhatsAppButton from './whatsapp';


const href = './PentestServ';
export const Service = () => {
   
    return (
   
        <div>
            <Navbar />
            <div className='wrapper'>
                <div className='service-container'>
                     <h1 className='Main'> Explore Our Service </h1> 
                     <h2>Penetration Testing</h2>
                     <button className='serv-btn'> <a href={href}>
                         Discover More   </a></button>
                </div>

             
                <div className='whatsapp-logo'>
                <WhatsAppButton />
                 </div> 

            </div>
        </div>  
    )
}

export default Service;
