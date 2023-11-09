import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cars from './Components/Cars';
import Cart from './Components/Cart';
import CartIcon from './Components/CartIcon';
import CartPage from './Components/CartPage'; // import the CartPage component

const App = () => {
  return (
    <Router>
      <Link to="/cart">
        <CartIcon />
      </Link>
      <Routes>
        <Route path="/cart" element={<CartPage />} /> {/* This line adds a route for the cart page */}
        <Route path="/" element={<Cars />} />
      </Routes>
    </Router>
  );
};

export default App;





