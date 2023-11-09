import React, { useState } from 'react';

const SellCarForm = () => {
    const [carDetails, setCarDetails] = useState({
        make: '',
        brand: '',
        year: '',
        price: '',
        mileage: '',
        picture: null
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
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        }).then(data => {
            console.log(data);
            // Handle the response data in the UI
        }).catch(error => {
            console.error(error);
            // Handle the error in the UI
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Make:
                    <input type="text" name="make" onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Brand:
                    <input type="text" name="brand" onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Year of Make:
                    <input type="number" name="year" onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Price:
                    <input type="number" name="price" onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Mileage:
                    <input type="number" name="mileage" onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
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