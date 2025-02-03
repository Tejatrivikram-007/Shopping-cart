import React,{useState} from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/CategoryPage.css';
import mensProducts from '../components/json_files/mens.json'

const Mens = () => {
    const [cart, setCart] = useState([]); // State to manage the cart
    
 const addToCart = (product) => {
    setCart([...cart, { name: product.name, price: product.price }]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="category-page">
      <h2>Men's Shopping</h2>
      <div className="product-grid">
        {mensProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

    
    </div>
  );
};

export default Mens;
