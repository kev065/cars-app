import React, { useState } from 'react';

const LeaseComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    duration: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    console.log('Lease details submitted:', formData);
   
    setFormData({
      name: '',
      idNumber: '',
      duration: '',
    });
    setShowConfirmation(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          ID Number:
          <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Duration:
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {showConfirmation && (
        <div className="confirmation-popup">
          <p>Please confirm your lease request:</p>
          <p>Name: {formData.name}</p>
          <p>ID Number: {formData.idNumber}</p>
          <p>Duration: {formData.duration}</p>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default LeaseComponent;