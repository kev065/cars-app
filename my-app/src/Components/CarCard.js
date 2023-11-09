import React, { useState, useEffect } from "react";
import "./CarCard.css"


function CarCard({ searchTerm }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/cars`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCars(data);
        setLoading(false);
      })
      .catch((error) => console.error(`Error fetching data:`, error));
  }, []);

  const filteredCars = cars.filter((car) => {
    if (car.title && searchTerm) {
      return car.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  return (
    <div>
      <h2>Cars</h2>
      {loading ? (
        <p>Cars Loading...</p>
      ) : (
        <ul className="car-list">
          {cars.map((car) => (
            <li key={car.id} className="car-item" >
              <h3 className="car-title">{car.make}</h3>
              <div>
                <img className="car-image" src={car.image} alt={car.brand} />
              </div>
              <h4>{car.brand}</h4>
              <ul className="car-description">
                <li>Manufacture: {car.yearOfMake}</li>
                <li>Mileage: {car.mileage}</li>
                <li>Price: ${car.price}</li>
              </ul>
              {/* <ol>
                            {car.instructions.map((instruction, index) =>(
                                <li key={index}>                              made for the recipe app
                                    {instruction}
                                </li>
                            ))}
                        </ol> */}
              {/* <p>{recipe.instructions}</p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CarCard;
