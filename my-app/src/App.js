import React from 'react';
import './App.css';
import CarListing from './Components/CarListing';

function App() {
  return (
    <div className="App">
      <CarListing />
      <CarListing />
      {/* Add more CarListing components for different cars */}
    </div>
  );
}

export default App;
