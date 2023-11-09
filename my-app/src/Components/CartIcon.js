import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = () => {
  const [cart] = useContext(CartContext);
  const [isTop, setIsTop] = useState(true); // state to track whether the user is at the top of the page

  // update 'isTop' state when scrolling
  useEffect(() => {
    const checkScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', checkScroll);

    // cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []); 

  return (
    <div style={{ position: 'fixed', top: '1rem', right: '1rem', display: isTop ? 'block' : 'none' }}>
      <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'red' }} /> {/* This line adds the shopping cart icon to red colour */}
      <p>Items in cart: {cart.length}</p>
    </div>
  );
};

export default CartIcon;

