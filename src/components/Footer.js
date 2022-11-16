import React from 'react'
import "./footer.css";
import ScrollToTop from "react-scroll-to-top";




const Footer = () => {
  return (
     <div className="footer" >
<ScrollToTop smooth top="20" color='green'  /> 
             <div className="footer-copyright">

                <p>  © 2022 CAREMARK. ALL RIGHTS RESERVED </p>
            </div>
</div>


  )
}

export default Footer

/* <ScrollToTop smooth top="20" color='green'  /> */