import React from "react";
import './Navbar.css'
import logo from "./logo-1.png";
import pic from "./doc.jpeg"
import { FaRegBell} from "react-icons/fa";
import SearchBar from "./SearchBar";

const Navbar = () => {

 
  return (
    <div className='navbar'>
     <div className="navbarMain">
      <div className="left">
    <img src={logo} alt='logo'className='logo' />
    </div>
       <div className="search-center">
      <SearchBar/>
    </div>
      <div className="right">
        <div className="bellIconContainer">
   <FaRegBell />
        </div>
        
        <img src={pic} alt="" className="pic" />
        <span className='name'>Dr. Akuot</span>
      </div>
     </div>
      </div>
  )
}

export default Navbar