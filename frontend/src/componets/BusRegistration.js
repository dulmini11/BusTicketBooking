import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BusRegistration.css";

const BusRegistration = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      navigate("/"); // Redirect to the homepage
    }, 3000); 
  };

  return (
    <div className="container-A">
      <h2>Fill This Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          placeholder="Enter owner name"
          name="name"
          required
        />

        <label htmlFor="contact">Contact*</label>
        <input
          type="text"
          placeholder="Enter contact number"
          name="contact"
          required
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          required
        />

        <label htmlFor="route">Bus Route</label>
        <input
          type="text"
          placeholder="Enter bus route"
          name="route"
          required
        />

        <label htmlFor="capacity">Capacity</label>
        <input
          type="text"
          placeholder="Enter bus capacity"
          name="capacity"
          required
        />

        <button type="submit">Submit</button>
      </form>

      {formSubmitted && <div className="form-success-msg">Form Submitted Successfully!</div>}
    </div>
  );
};

export default BusRegistration;