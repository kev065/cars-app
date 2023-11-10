import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CartIcon.css";

const CartIcon = () => {
  const [cart] = useContext(CartContext);

  return (
    <div className="cart-icon-container"style={{ position: 'fixed', top: '1rem', right: '1rem' }}>
      <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'red' }} />
      <p className='cart-count'>Items in cart: {cart.length}</p>
    </div>
  );
};

export default CartIcon;