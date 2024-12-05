import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BusRegistration.css";

const BusRegistration = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showFooter, setShowFooter] = useState(false); 
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

  // Handle mouse movement to show/hide the footer
  const handleMouseMove = (e) => {
    const windowHeight = window.innerHeight;
    if (e.clientY >= windowHeight - 50) {
      setShowFooter(true); // Show footer when mouse is near the bottom
    } else {
      setShowFooter(false); // Hide footer when mouse is not near the bottom
    }
  };

  // Use effect to listen for mouse move events
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

        {formSubmitted && (
          <div className="form-success-msg">Form Submitted Successfully!</div>
        )}
      </div>

      <div className={`footer ${showFooter ? "show" : ""}`}>
        <p>© 2024 QuickRoute. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default BusRegistration;
