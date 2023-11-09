import React, { useState } from 'react';

const Search = ({ cars, addToCart }) => {
  const [filterLetter, setFilterLetter] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filterCarsByLetter = (letter) => {
    setFilterLetter(letter);
  };

  const resetFilter = () => {
    setFilterLetter(null);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value.toUpperCase());
    setFilterLetter(null); // Reset filter when typing in the search bar
  };

  const filteredCars = filterLetter
    ? cars.filter((car) => car.make.toUpperCase().startsWith(filterLetter))
    : cars.filter(
        (car) =>
          car.make.toUpperCase().startsWith(searchInput) ||
          car.brand.toUpperCase().startsWith(searchInput)
      );

  return (
    <div>
      
      <div>
        <label htmlFor="searchInput">Search: </label>
        <input
          type="text"
          id="searchInput"
          value={searchInput}
          onChange={handleSearchInput}
        />
      </div>

  
      <div>
        <p>Filter by letter:</p>
        {alphabet.map((letter) => (
          <span key={letter} onClick={() => filterCarsByLetter(letter)}>
            {letter}
          </span>
        ))}
        <span onClick={resetFilter}>Reset</span>
      </div>

      
      <div className="card-container">
        {filteredCars.map((car) => (
          <div key={car.id} className="card">
            <img src={car.image} alt={`${car.make} ${car.brand}`} />
            <h3>{car.make} {car.brand}</h3>
            <p>Year: {car.yearOfMake}</p>
            <p>Price: ${car.price}</p>
            <p>Mileage: {car.mileage} miles</p>
            <button onClick={() => addToCart(car)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;