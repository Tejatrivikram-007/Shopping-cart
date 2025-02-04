import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    try {
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some((u) => u.email === email);

      if (userExists) {
        setError('User already exists. Please log in.');
      } else {
        // Add new user to local storage
        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        alert('Signup successful! Please log in.');
        navigate('/'); 
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login_signup_container">
    <div className="signup-container">
      <h2 className="signup-title"><u>Sign Up</u></h2>
      <form onSubmit={handleSignUp} className="signup-form">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/">Log In</Link>
      </p>
    </div>
    </div>
  );
};

export default SignUp;