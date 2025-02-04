import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Electronics from './pages/Electronics';
import Kids from './pages/Kids';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import './styles/App.css';
import { ToastContainer } from 'react-bootstrap';
import Invoice from './pages/Invoice';
import Company from './pages/Company';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Fashion from './pages/Fashion';
import Offers from './pages/Offers';
import Results from './pages/Results';
import Latest_Collection from './pages/Latest_Collection';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/latestcollection",
      element: (
        <>
          <Navbar />
          <Latest_Collection />
          <Footer />
        </>
      ),
    },
    {
      path: "/mens",
      element: (
        <>
          <Navbar />
          <Mens />
          <Footer />
        </>
      ),
    },
    {
      path: "/womens",
      element: (
        <>
          <Navbar />
          <Womens />
          <Footer />
        </>
      ),
    },
    {
      path: "/electronics",
      element: (
        <>
          <Navbar />
          <Electronics />
          <Footer />
        </>
      ),
    },
    {
      path: "/kids",
      element: (
        <>
          <Navbar />
          <Kids />
          <Footer />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart />
          <Footer />
        </>
      ),
    },
    {
      path: "/checkout",
      element: (
        <>
          <Navbar />
          <Checkout />
          <Footer />
        </>
      ),
    },
    {
      path: "/payment",
      element: (
        <>
          <Navbar />
          <Payment />
          <Footer />
        </>
      ),
    },
    {
      path: "/invoice",
      element: (
        <>
          <Navbar />
          <Invoice />
          <Footer />
        </>
      ),
    },
    {
      path: "/company",
      element: (
        <>
          <Navbar />
          <Company />
          <Footer />
        </>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <>
          <Navbar />
          <AboutUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <ContactUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/fashion",
      element: (
        <>
          <Navbar />
          <Fashion />
          <Footer />
        </>
      ),
    },
    {
      path: "/offers",
      element: (
        <>
          <Navbar />
          <Offers />
          <Footer />
        </>
      ),
    },
    {
      path: "/search",
      element: (
        <>
          <Navbar />
          <Results />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CartProvider>
  );
};

export default App;
