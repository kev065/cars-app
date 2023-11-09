import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartIcon = () => {
  const [cart] = useContext(CartContext);

  return (
    <div style={{ position: 'fixed', top: '1rem', right: '1rem' }}>
      <p>Items in cart: {cart.length}</p>
    </div>
  );
};

export default CartIcon;
