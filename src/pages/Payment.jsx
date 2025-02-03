import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/Payments.css';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '', name: '' });
  const [upiId, setUpiId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [netBanking, setNetBanking] = useState('');
  
  const handlePayment = (e) => {
    e.preventDefault();
    toast.success('Payment successful! Redirecting to invoice...');
    setTimeout(() => navigate('/invoice'), 2000);
  };

  return (
    <div className="payment">
      <h2>Payment</h2>
      <label>Select Payment Method:</label>
      <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
        <option value="card">Credit/Debit Card</option>
        <option value="upi">UPI Transaction</option>
        <option value="netbanking">Net Banking</option>
        <option value="cod">Cash on Delivery</option>
      </select>
      
      <form onSubmit={handlePayment}>
        {paymentMethod === 'card' && (
          <>
            <label>Card Number</label>
            <input type="text" value={cardDetails.number} onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})} required maxLength={16} pattern="\d{16}" placeholder="16-digit card number" />
            <label>Expiry Date</label>
            <input type="text" value={cardDetails.expiry} onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})} required placeholder="MM/YY" />
            <label>CVV</label>
            <input type="text" value={cardDetails.cvv} onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})} required maxLength={3} pattern="\d{3}" placeholder="3-digit CVV" />
            <label>Cardholder Name</label>
            <input type="text" value={cardDetails.name} onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})} required placeholder="Name on Card" />
          </>
        )}

        {paymentMethod === 'upi' && (
          <>
            <label>Phone Number</label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required maxLength={10} pattern="\d{10}" placeholder="10-digit phone number" />
            <label>UPI ID</label>
            <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} required placeholder="example@ybl" />
          </>
        )}

        {paymentMethod === 'netbanking' && (
          <>
            <label>Select Bank</label>
            <select onChange={(e) => setNetBanking(e.target.value)} required>
              <option value="">Select a Bank</option>
              <option value="hdfc">HDFC Bank</option>
              <option value="sbi">State Bank of India</option>
              <option value="bob">Bank of Baroda</option>
              <option value="axis">Axis Bank</option>
            </select>
          </>
        )}

        {paymentMethod === 'cod' && (
          <p>Cash on Delivery selected. Click below to proceed.</p>
        )}

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Payment;
