import React from "react";

const Company = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-24" style={{margin:'30px'}}>
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Click & Cart</h1>
        <blockquote className="text-lg text-gray-700 mb-6">
          Click & Cart is your one-stop online shopping solution, providing a seamless and convenient e-commerce experience. Whether you're looking for the latest fashion trends, cutting-edge electronics, or daily essentials, we have everything you need at your fingertips.
        </blockquote>

        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-5">Our Mission</h2>
        <blockquote >
          At Click & Cart, our mission is to revolutionize online shopping by making it faster, easier, and more enjoyable. We strive to offer high-quality products, unbeatable prices, and exceptional customer service, ensuring  that every shopper has a delightful experience.
        </blockquote>

        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-5">Why Choose Click & Cart?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>🛒 **Vast Selection:** A wide range of products across various categories.</li>
          <li>💰 **Affordable Prices:** Competitive pricing with exciting discounts and offers.</li>
          <li>⚡ **Fast & Secure Checkout:** A smooth and hassle-free purchasing process.</li>
          <li>📦 **Reliable Delivery:** Quick and efficient shipping to your doorstep.</li>
          <li>⭐ **Customer Satisfaction:** Dedicated support to assist you 24/7.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-5">What We Offer</h2>
        <p className="text-gray-700 mb-6">
          Click & Cart provides an extensive range of products, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>👕 **Fashion & Accessories** – Trendy clothing, footwear, and accessories.</li>
          <li>📱 **Electronics & Gadgets** – Smartphones, laptops, and more.</li>
          <li>🏠 **Home & Living** – Decor, furniture, and kitchen essentials.</li>
          <li>🍔 **Groceries & Daily Essentials** – Everything you need for a convenient lifestyle.</li>
        </ul>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">Join the Click & Cart Community</h2>
          <p className="text-gray-700 mb-6">
            Become a part of our growing community and experience online shopping like never before. Sign up today to enjoy exclusive deals, personalized recommendations, and hassle-free returns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
