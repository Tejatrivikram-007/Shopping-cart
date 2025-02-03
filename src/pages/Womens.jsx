import { useState } from 'react';
import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/CategoryPage.css';
import womensProducts from '../components/json_files/data.json'

const Womens = () => {
  const [cart, setCart] = useState([]);
 

  

 // Function to add a product to the cart
 const addToCart = (product) => {
  setCart([...cart, { name: product.name, price: product.price }]);
  alert(`${product.name} added to cart!`);
};

return (
  <div className="category-page">
    <h2>Women's Shopping</h2>
    <div className="product-grid">
      {womensProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  </div>
);
};

export default Womens;