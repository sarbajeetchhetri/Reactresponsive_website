import React from "react";


const Footer = () => {

    const year = new Date().getFullYear();
    

    return ( 
      <>
      <footer className="w-100 bg-light text-center">
        <p>  © {year} Sarbajeet. All Right Reserverd | Terms and Conditions </p>
        </footer>
      </>
    );
  };
  
  export default Footer;
  