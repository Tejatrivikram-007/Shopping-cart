import React, { useContext } from 'react';
import { CartContext } from '../components/context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // const isElectronics = product.category === 'electronics';

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <p>Sizes:{product.sizes}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;