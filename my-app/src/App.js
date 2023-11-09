import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Cars from './Components/Cars';
import CarDetails from './Components/CarDetails';
import SellCarForm from './Components/SellCarForm';
import CartPage from './Components/CartPage';
import CartIcon from './Components/CartIcon';
import { CartProvider } from './Components/CartContext'; 
import './index.css';

function App() {
  return (
    <CartProvider> 
      <Router>
      <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/cars">Cars</Link>
    </li>
    <li>
      <Link to="/sell">Sell Car</Link>
    </li>
    <li>
      <Link to="/cart">
        <CartIcon />
      </Link>
    </li>
  </ul>
</nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/sell" element={<SellCarForm />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
