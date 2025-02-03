import React from 'react';
import '../styles/offers.css';
import {Link} from 'react-router-dom';

const Offers = () => {
  return (
    <div className="offers-container">
      <h1 className="offers-title">🔥 Exclusive Deals & Offers 🔥</h1>
      <p className="offers-subtitle">
        Grab the best deals before they're gone! Limited-time discounts on top products.
      </p>

      <div className="offers-grid">
        <div className="offer-card">
          <h2>🎉 Flash Sale</h2>
          <p>Get up to 50% off on selected products. Hurry, sale ends soon!</p>
          <button className="offer-btn">Shop Now</button>
        </div>

        <div className="offer-card">
          <h2>💳 Bank Discounts</h2>
          <p>Extra 10% off on purchases made with select credit & debit cards.</p>
          <button className="offer-btn">View Details</button>
        </div>

        <div className="offer-card">
          <h2>🚚 Free Shipping</h2>
          <p>Enjoy free shipping on orders above ₹199. No hidden charges!</p>
          <button className="offer-btn"><Link to={'/'}>Start Shopping</Link> </button>
        </div>

        <div className="offer-card">
          <h2>🎁 Buy More, Save More</h2>
          <p>Exciting combo deals and bundle discounts on your favorite brands.</p>
          <button className="offer-btn">Explore Now</button>
        </div>
      </div>

      <p className="offers-footer">Stay tuned for more exciting offers! ✨</p>
    </div>
  );
};

export default Offers;
