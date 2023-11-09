// CartIcon.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = () => {
  const [cart] = useContext(CartContext);

  return (
    <div style={{ position: 'fixed', top: '1rem', right: '1rem' }}>
      <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'red' }} />
      <p>Items in cart: {cart.length}</p> {/* displays the number of items in the cart */}
    </div>
  );
};

export default CartIcon;

