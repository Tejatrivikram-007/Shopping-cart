import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Login.css';
import { SlSocialGoogle } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";  
import { FiLogOut } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/auth';
  };

  const handlePhoneSignIn = () => {
    toast.info('Login through phone number will be implemented soon.', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        toast.success('Login successful!', {
          position: 'top-right',
          autoClose: 3000,
        });
        navigate('/home');
      } else {
        setError('Invalid email or password. Please sign up if you are a new user.');
        toast.error('Invalid email or password.', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      toast.error('An error occurred. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    toast.info('You have been signed out.', {
      position: 'top-right',
      autoClose: 3000,
    });
    navigate('/');
  };

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    return (
      <div className="login-containers">
        <h2 className="welcome-message">Welcome, {currentUser.email}</h2>
        <button onClick={handleSignOut} className="sign-out-button" style={{fontSize:'20px'}}>
        <FiLogOut />
        </button>
      </div>
    );
  }

  return (
    <div className="login_signup_container">
      <div className="login-container">
      <article >
      <h2 className="login-title"><u>Login</u></h2>
        <div className="social-login-buttons">
          <button onClick={handleGoogleSignIn} className="google-login-button">
            <SlSocialGoogle />
          </button>
          <button onClick={handlePhoneSignIn} className="phone-login-button">
            <FaPhone />
          </button>
        </div>
        <form onSubmit={handleLogin} className="login-form">
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
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        <p className="forgot-password-link">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p className="sign-up-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </article>
      </div>
      <ToastContainer/>
    </div>
    
  );
};

export default Login;
