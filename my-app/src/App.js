import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cars from './components/Cars';
import CarDetails from './components/CarDetails';
import LeaseComponent from './components/Leasing';
import { CartProvider } from './components/CartContext';

import SellCarForm from './components/SellCarForm';
import "./App.css";

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
            <Link to="/lease">Lease</Link>
          </li>
          <li>
            <Link to="/sell">Sell</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path='/lease' element = {<LeaseComponent />} />
        <Route path='/sell' element = {<SellCarForm />} />
      </Routes>
    </Router>
    </CartProvider>

  );
}

export default App;
