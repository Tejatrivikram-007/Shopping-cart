import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
// import logo from '../components/assets/images/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        {/* <img src={cc_logo} alt="" /> */}
        <h3>Click & Cart</h3>
      </div>
      <div className="social-links">
      <li className="links"><Link to='https://www.facebook.com/'><FaFacebook /></Link></li>
        <li className="links"><Link to='https://www.instagram.com/'><FaInstagram /></Link></li>
        <li className="links"><Link to='https://in.pinterest.com/'><IoLogoPinterest /></Link></li>
      </div>
      <div className="footer-links">
      <li className="links"><Link to="/company">Company</Link></li> 
        <li className="links"><Link to="/aboutus">About Us</Link></li>
        <li className="links"> <Link to="/contact">Contact Us</Link></li>
       
      </div>
      <div className="copy-right">
          <hr />
          <p> &copy; 2025 Click & Cart. All rights reserved.</p>
        </div>
  
    </footer>
  );
};

export default Footer;