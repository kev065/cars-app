import React from 'react';
import CarCard from './CarCard';
import '../CarList.css'


function CarList() {
  return (
    <div className='car-container'>
      <h2 className='car-heading'>Car Details</h2>
      <CarCard />

    </div>
  );
}

export default CarList;