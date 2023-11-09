import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Car = ({ car }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart(currentCart => [...currentCart, car]);
  };

  return (
    <div>
      <h2>{car.make} {car.brand}</h2>
      <p>Year: {car.yearOfMake}</p>
      <p>Mileage: {car.mileage} miles</p>
      <p>Price: ${car.price}</p>
      <img src={car.image} alt={`${car.make} ${car.brand}`} style={{ maxWidth: '100%', height: 'auto' }} />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Car;


