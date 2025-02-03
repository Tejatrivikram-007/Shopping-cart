import React, { useContext } from 'react';
import { CartContext } from '../components/context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>Full Name</label>
        <input type="text" required />
        <label>Address</label>
        <input type="text" required />
        <label>City</label>
        <input type="text" required />
        <label>Zip Code</label>
        <input type="text" required />
        <button type="submit">
          <Link to="/payment">Proceed to Payment</Link>
        </button>
      </form>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <p>
              {item.name} - ₹{item.price} x {item.quantity}
            </p>
          </div>
        ))}
        <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default Checkout;