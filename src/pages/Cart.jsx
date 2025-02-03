import React, { useContext } from 'react';
import { CartContext } from '../components/context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue shopping</Link></p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;