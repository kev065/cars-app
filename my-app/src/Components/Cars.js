import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import { CartContext } from './CartContext';
import Search from './Search';

function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    fetch('http://localhost:3000/Cars')
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const addToCart = (car) => {
    setCart((prevCart) => [...prevCart, car]);
  };

  return (
    <div className="cars-container">
      <section className="content">
        <CartIcon />
        <Search cars={cars} addToCart={addToCart} />
        <h2>Cars Page</h2>
        <div className="card-container">
          {cars.map((car) => (
            <div key={car.id} className="card">
              <img src={car.image} alt={`${car.make} ${car.brand}`} />
              <h3>{car.make} {car.brand}</h3>
              <p>Year: {car.yearOfMake}</p>
              <p>Price: ${car.price}</p>
              <p>Mileage: {car.mileage} miles</p>
              <Link to={`/cars/${car.id}`}>View Details</Link>
              {/* <button onClick={() => addToCart(car)}>Add to Cart</button> */}
            </div>
          ))}
        </div>
        <div>
          {cart.map((cartItem) => (
            <div key={cartItem.id}>
              <h3>{cartItem.make} {cartItem.brand}</h3>
              <p>Year: {cartItem.year}</p>
              <p>Price: ${cartItem.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Cars;
