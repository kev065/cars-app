import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="cars-container">
      <header>
        <h1>Cars Page</h1>
      </header>
      <section className="content">
        <h2>Available Cars</h2>
        <div className="card-container">
          {cars.map((car) => (
            <div key={car.id} className="card">
              <img src={car.image} alt={`${car.make} ${car.brand}`} />
              <h3>{car.make} {car.brand}</h3>
              <p>Year: {car.yearOfMake}</p>
              <p>Price: ${car.price}</p>
              <p>Mileage: {car.mileage} miles</p>
              <Link to={`/cars/${car.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Cars;