import React, { useState } from 'react';

const SellCarForm = () => {
  const [carDetails, setCarDetails] = useState({
    make: '',
    brand: '',
    year: '',
    price: '',
    mileage: '',
    picture: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'picture') {
      setCarDetails({ ...carDetails, picture: e.target.files[0] });
    } else {
      setCarDetails({ ...carDetails, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/cars', {
      method: 'POST',
      body: JSON.stringify(carDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then((data) => {
        console.log(data);
        // Handle the response data in the UI

        // Show an alert to inform the user that the form has been received
        alert('Your form has been received and is being reviewed.');

        // Clear the form or perform any other necessary actions
        setCarDetails({
          make: '',
          brand: '',
          year: '',
          price: '',
          mileage: '',
          picture: null,
        });
      })
      .catch((error) => {
        console.error(error);
        // Handle the error in the UI
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Make:
          <input type="text" name="make" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Brand:
          <input type="text" name="brand" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Year of Make:
          <input type="number" name="year" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="number" name="price" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Mileage:
          <input type="number" name="mileage" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Picture:
          <input type="file" name="picture" onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SellCarForm;
