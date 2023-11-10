import React from 'react';
import './App.css';
import CarApp from './Components/CarApp';

function App() {
  return (
    <div className="App">
      <CarApp />
      <CarApp />
      {/* Add more CarListing components for different cars */}
    </div>
  );
}

export default App;
