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
      <img src={car.image} alt={`${car.make} ${car.brand}`} />

      <button onClick={addToCart}>Add to Cart</button>
      <p>Items in cart: {cart.length}</p>
    </div>
  );
};

export default Car;

