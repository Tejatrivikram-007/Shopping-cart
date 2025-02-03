import React, { useState } from 'react';
import '../styles/contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or email service)
    console.log('Form Data Submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out to us for any questions, feedback, or support.</p>

      <div className="contact-info">
        <h3>Our Office Locations</h3>
        <p>We are located in 8 different cities worldwide:</p>
        <ul>
          <li>New York, USA</li>
          <li>London, UK</li>
          <li>Tokyo, Japan</li>
          <li>Sydney, Australia</li>
          <li>Berlin, Germany</li>
          <li>Mumbai, India</li>
          <li>Toronto, Canada</li>
          <li>Cape Town, South Africa</li>
        </ul>
        <p>Email: support@clickcart.com | Phone: +91 (123) 456-7890</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;