import React from 'react';
import CarCard from './CarCard';
import '../CarList.css'


function CarList() {
  return (
    <div className='recipe-container'>
      <h2 className='recipe-heading'>Car Details</h2>
      <CarCard />

    </div>
  );
}

export default CarList;