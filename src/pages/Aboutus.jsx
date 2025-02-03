import React from "react"; 
import teja from "../components/assets/images/teja.jpg";
import harshini from "../components/assets/images/harshini.jpg";
import rajesh from "../components/assets/images/rajesh.jpeg";
import '../styles/Aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-card">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-description">
          Welcome to Click & Cart, your trusted online shopping destination. Our mission is to 
          provide a seamless shopping experience by offering a wide range of products at 
          competitive prices. With a focus on customer satisfaction, innovation, and quality, 
          we aim to make online shopping easy, secure, and enjoyable.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-5">Our Founders</h2>
        <div className="founders-container">
          {[{
            name: "Teja Trivikram V",
            role: "Co-Founder & CEO",
            img: teja 
          }, 
          {
            name: "Harshini C Raj",
            role: "Co-Founder & CTO",
            img: harshini
          },
          {
            name: "Rajesh K",
            role: "Co-Founder & COO",
            img: rajesh
          },
          ].map((founder, index) => (
            <div key={index} className="founder-card">
              <img src={founder.img} alt={founder.name} className="founder-image" />
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-5" style={{padding:'2rem'}}>Our Services</h2>
        <p className="about-us-description">
          At Click & Cart, we offer a variety of services to enhance your shopping experience:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Fast and secure online shopping</li>
          <li>24/7 customer support</li>
          <li>Easy returns and refunds</li>
          <li>Exclusive member discounts</li>
          <li>Same-day and next-day delivery options</li>
          <li>Personalized product recommendations</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
