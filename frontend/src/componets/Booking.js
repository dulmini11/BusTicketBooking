import React, { useState, useEffect } from "react";
import "./Booking.css";
import { useNavigate, useLocation } from "react-router-dom";

const Booking = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [formData, setFormData] = useState({
    "7:00 AM": { name: "", nic: "", phone: "" },
    "8:30 AM": { name: "", nic: "", phone: "" },
    "10:00 AM": { name: "", nic: "", phone: "" },
    "1:00 PM": { name: "", nic: "", phone: "" },
    "3:00 PM": { name: "", nic: "", phone: "" },
    "5:00 PM": { name: "", nic: "", phone: "" },
  });
  const [formSubmitted, setFormSubmitted] = useState({
    "7:00 AM": false,
    "8:30 AM": false,
    "10:00 AM": false,
    "1:00 PM": false,
    "3:00 PM": false,
    "5:00 PM": false,
  });

  const location = useLocation(); // Retrieve state from navigation
  const navigate = useNavigate();  // Hook to navigate
  const { from, to } = location.state || {}; // Destructure state for routes

  // Navigate back to the home page
  const handleLogoClick = () => {
    navigate("/");
  };

  const handleMouseMove = (e) => {
    const windowHeight = window.innerHeight;
    setShowFooter(e.clientY >= windowHeight - 50);
  };

  // Add and remove the mousemove event listener
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle form data change
  const handleInputChange = (e, time) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [time]: { ...formData[time], [name]: value },
    });
  };

  // Handle form submission for each bus
  const handleSubmit = (e, time) => {
    e.preventDefault();
    if (formData[time].name && formData[time].nic && formData[time].phone) {
      setFormSubmitted({
        ...formSubmitted,
        [time]: true,
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Render bus details and booking form
  const renderBusDetails = (date, time, price) => (
    <div className="bus-detail">
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Ticket Price:</strong> Rs. {price}
      </p>
      <div className="booking-form">
        <h4>Book Your Seat</h4>
        {formSubmitted[time] ? (
          <div className="success-message">
            <p>Form successfully submitted for {time}!</p>
          </div>
        ) : (
          <form onSubmit={(e) => handleSubmit(e, time)}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData[time].name}
                onChange={(e) => handleInputChange(e, time)}
                required
              />
            </label>
            <label>
              NIC:
              <input
                type="text"
                name="nic"
                placeholder="Enter your NIC"
                value={formData[time].nic}
                onChange={(e) => handleInputChange(e, time)}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData[time].phone}
                onChange={(e) => handleInputChange(e, time)}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <a href="#" className="logo" onClick={handleLogoClick}>
        QuickRoute E01.<span className="animate"></span>
      </a>

      <div className="route-container">
        {from === "Matara" && to === "Colombo" ? (
          <div className="route-section">
            <h3>Matara to Colombo</h3>
            <div className="bus-details-container">
              {renderBusDetails("2024-12-10", "7:00 AM", 1070)}
              {renderBusDetails("2024-12-10", "8:30 AM", 1070)}
              {renderBusDetails("2024-12-10", "10:00 AM", 1070)}
            </div>
          </div>
        ) : from === "Colombo" && to === "Matara" ? (
          <div className="route-section">
            <h3>Colombo to Matara</h3>
            <div className="bus-details-container">
              {renderBusDetails("2024-12-10", "1:00 PM", 1070)}
              {renderBusDetails("2024-12-10", "3:00 PM", 1070)}
              {renderBusDetails("2024-12-10", "5:00 PM", 1070)}
            </div>
          </div>
        ) : (
          <div className="route-section">
            <h3>No Buses Available</h3>
            <p>
              Sorry, there are no buses available right now on the route you
              searched. Please try another date or change the Departure &
              Arrival points & search again.
            </p>
          </div>
        )}
      </div>

      <div className={`footer ${showFooter ? "show" : ""}`}>
        <p>© 2024 QuickRoute. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Booking;