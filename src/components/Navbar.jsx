import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserSecret } from 'react-icons/fa';
import { CartContext } from '../components/context/CartContext';
import { FaSignOutAlt } from "react-icons/fa";
import '../styles/Nav.css';
import products from '../components/json_files/navbar.json'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Check if the user is logged in
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Filter products based on the search query
      const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Navigate to the search results page with filtered products
      navigate('/search', { state: { results: filteredProducts, query: searchQuery } });
    } else {
      alert('Please enter a search term!');
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      navigate(`/${selectedCategory}`);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img
            src="https://i.pinimg.com/originals/2b/4b/03/2b4b036050ea3bfa3bd476c7ee4fd028.gif"
            alt="Click & Cart"
          />
        </Link>
      </div>
      <form onSubmit={handleSearch} className="navbar-search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search">
          Search
        </button>
      </form>
      <ul className="navbar-links">
        <li>
          <select onChange={handleCategoryChange}>
            <option value="home">Shop by Category</option>
            <option value="mens">Men's</option>
            <option value="womens">Women's</option>
            <option value="kids">Kids</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Footwear</option>
          </select>
        </li>

        {/* Show Sign In or Sign Out based on user status */}

        <li className="login">
          {currentUser ? (
            <button onClick={handleSignOut} >
              <FaSignOutAlt /> Sign Out
              
            </button>
          ) : (
            <Link to="/" style={{ fontSize: '15px' }}>
              <FaUserSecret />
            </Link>
          )}
        </li>

        <li className="cart">
          <Link to="/cart" style={{ fontSize: '25px', position: 'relative' }}>
            <img
              src="https://i.pinimg.com/originals/84/ef/44/84ef447b1462d8ed463d868d017ea365.gif"
              alt="Cart"
            />
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
