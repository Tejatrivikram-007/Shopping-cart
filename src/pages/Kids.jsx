import React,{useState} from 'react';
import ProductCard from '../components/ProductCard';
import products from '../components/json_files/kids.json'

const Kids = () => {
  const [cart, setCart] = useState([]); // State to manage the cart
  

 // Function to add a product to the cart
 const addToCart = (product) => {
  setCart([...cart, { name: product.name, price: product.price }]);
  alert(`${product.name} added to cart!`);
};

return (
  <div className="category-page">
    <h2>kid's Shopping</h2>
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  </div>
);
};
export default Kids