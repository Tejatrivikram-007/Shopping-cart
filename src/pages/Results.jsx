import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../components/context/CartContext'; // Import CartContext
import '../styles/SearchResults.css';

const Results = () => {
  const location = useLocation();
  const { results, query } = location.state || { results: [], query: '' };
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
    alert(`${product.name} added to cart!`); // Optional: Show a confirmation message
  };

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <div className="product-list">
          {results.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ₹{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button> {/* Add to Cart Button */}
            </div>
          ))}
        </div>
      ) : (
        <p>No products found. Try a different search term.</p>
      )}
    </div>
  );
};

export default Results;