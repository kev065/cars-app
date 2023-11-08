import React, { useEffect, useState } from 'react';
import Car from './Car';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => setCars(data.cars));
  }, []);

  return (
    <div>
      {cars.map(car => <Car key={car.id} car={car} />)}
    </div>
  );
};

export default CarList;
