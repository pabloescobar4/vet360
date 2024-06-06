import React from 'react'
import './navbar.css'

import Logo from '../assets/NavBarlogo.png'
const Navbar = () => {
  return (
    <div className='header-menu'>
    <nav className='px-4 navbar-dark navbar navbar-expand-lg navbar-light'>
      <div className='bg-menu container'>
        <div className='logoSet' >
        <img src={Logo} />
        </div>
   
        <div className=' flex  justify-around gap-8'>
        <div className=' flex items-center gap-8'>
      <div className="hover:text-[#648FFF] cursor-pointer">
      HOME
     </div>
     <div className="hover:text-[#648FFF] cursor-pointer">
      FEATURES
     </div>
     {/* <div className="hover:text-[#648FFF] cursor-pointer">
      SUBSCRIPTION PLAN
     </div>
     <div className="hover:text-[#648FFF] cursor-pointer">
      BLOG
     </div>
     <div className="hover:text-[#648FFF] cursor-pointer">
      FAQS
     </div> */}
     <div className="hover:text-[#648FFF] cursor-pointer">
      CONTACT US
     </div>
    
     </div>
     <div>
      
     </div>
     <div className="btn_primary hs-button primary" >
      JOIN THE WAITLIST
     </div>
     <div className="border rounded-md p-2 flex items-center">JP</div>
      </div>
     
    
      </div>
     
   
    </nav>
   </div>
  )
}

export default Navbar