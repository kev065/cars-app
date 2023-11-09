import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const [cart] = useContext(CartContext);

  // show subtotal of all cars in the cart
  const subtotal = cart.reduce((total, car) => total + car.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((car, index) => (
        <div key={index}>
          <h2>{car.make} {car.brand}</h2>
          <p>Year: {car.yearOfMake}</p>
          <p>Mileage: {car.mileage} miles</p>
          <p>Price: ${car.price}</p>
          <img src={car.image} alt={`${car.make} ${car.brand}`} />
        </div>
      ))}
      <h2>Subtotal: ${subtotal}</h2> {/* displays the subtotal */}
      <button onClick={() => alert('Proceed to payment')}>Checkout</button>
    </div>
  );
};

export default CartPage;

