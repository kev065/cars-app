import React, { useEffect, useState } from 'react';
import Car from './Car';

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => setCars(data));
  }, []);

  return (
    <div>
      {cars && cars.map(car => <Car key={car.id} car={car} />)}
    </div>
  );
};

export default Cars;



