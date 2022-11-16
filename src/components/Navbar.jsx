import React from "react";
import './Navbar.css'
import logo from "./logo-1.png";
import pic from "./doc.jpeg"


const Navbar = () => {

 
  return (
    <div className='navbar'>
     <div className="navbarMain">
      <div className="left">
    <img src={logo} alt='logo'className='logo' />
    </div>
    
      <div className="right">
        
        <img src={pic} alt="" className="pic" />
        <span className='name'>Dr. Akuot</span>
      </div>
     </div>
      </div>
  )
}

export default Navbar