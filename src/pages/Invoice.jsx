import React, { useContext } from 'react';
import { CartContext } from '../components/context/CartContext';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// import Payment from '../pages/Payment'
import '../styles/Invoice.css';

const Invoice = () => {
  const { cart, clearCart} = useContext(CartContext); 

  console.log('Cart Data:', cart);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);  //reduce: it is used to calculate the total price of the items in the cart

  console.log('Total Price:', totalPrice);

  React.useEffect(() => {
    return () => {
      clearCart();
      toast.success('Payment successful! Your order has been placed.');
    };
  }, [clearCart]);

  return (
    <div className="invoice">
      <h2>Thank you for your purchase!</h2>
      <p>Your delivery will arrive in 2-5 days.</p>
      <div className="invoice-details">
        <h3>Invoice</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price.toFixed(2)}</td>     {/*.toFixed(2) : is a method that ensures the number is rounded to two decimal places.  ex:(10.5).tofixed(2)=10.50 */}
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-amount">
          <strong>Total Amount: ₹{totalPrice.toFixed(2)}</strong>
        </div>
      </div>
      <Link to="/home" className="continue-shopping">Continue Shopping</Link>
      <ToastContainer />
    </div>
  );
};

export default Invoice;