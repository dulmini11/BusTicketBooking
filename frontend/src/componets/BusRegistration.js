import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BusRegistration.css";

const BusRegistration = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const handleBooking = () => {
    navigate("/Home"); // Navigate to the homepage
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    setFormSubmitted(true); // Show success message

    setTimeout(() => {
      setFormSubmitted(false); // Hide the success message after 3 seconds
      navigate("/"); // Redirect to the homepage
    }, 3000); 
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to homepage when the logo is clicked
  };

  return (
    <div>
      {/* Logo with onClick event for navigation */}
      <a href="#" className="logo" onClick={handleLogoClick}>
        QuickRoute E01.<span className="animate"></span>
      </a>
      
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
    </div>
  );
};

export default BusRegistration;
