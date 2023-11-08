import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/Cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="car-details-container">
      <h2>Car Details</h2>
      {car ? (
        <div>
          <h3>{car.make} {car.brand}</h3>
          <p>Year: {car.yearOfMake}</p>
          <p>Price: ${car.price}</p>
          <p>Mileage: {car.mileage} miles</p>
          <img src={car.image} alt={`${car.make} ${car.brand}`} />
          <Link to="/cars">Back to Cars</Link>
        </div>
      ) : (
        <p>Car not found.</p>
      )}
    </div>
  );
}

export default CarDetails;
