import React from 'react'
import "./footer.css";
import ScrollToTop from "react-scroll-to-top";
import logo from "./logo-1.png";



const Footer = () => {
  return (
     <footer className="footer-distributed" id="footer" >
<ScrollToTop smooth top="20" color='green'  /> 


             <div className="footer-copyright">
              {/* <hr style={{
    backgroundColor: '#000000',
   
}}/> */}
                <p>  © 2022 CAREMARK. ALL RIGHTS RESERVED </p>
            </div>
</footer>


  )
}

export default Footer

/* <ScrollToTop smooth top="20" color='green'  /> */