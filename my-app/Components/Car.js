import React from 'react';

const Car = ({ car }) => (
  <div>
    <h2>{car.make} {car.model}</h2>
    <p>Year: {car.year}</p>
    <p>Price: ${car.price}</p>
    <button>Buy Now</button>
  </div>
);

export default Car;
