import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cars from './Components/Cars';
import Cart from './Components/Cart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Cars />} />
      </Routes>
    </Router>
  );
};

export default App;



