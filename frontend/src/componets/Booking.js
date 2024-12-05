import React, { useState, useEffect } from "react";
import "./Booking.css";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [showFooter, setShowFooter] = useState(false);
  const navigate = useNavigate();  // Hook to navigate

  const handleLogoClick = () => {
    navigate("/");  // Navigate to the home page when logo is clicked
  };

  const handleMouseMove = (e) => {
    const windowHeight = window.innerHeight;
    if (e.clientY >= windowHeight - 50) {
      setShowFooter(true); // Show footer when mouse is near the bottom
    } else {
      setShowFooter(false); // Hide footer when mouse is not near the bottom
    }
  };

  // Set up mousemove event listener
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div >
      <a href="#" className="logo" onClick={handleLogoClick}>
        QuickRoute E01.<span className="animate"></span>
      </a>
    <h2>Fill This Form</h2>
    <div className={`footer ${showFooter ? "show" : ""}`}>
        <p>© 2024 QuickRoute. All Rights Reserved.</p>
      </div>
  </div>
    
  )
}

export default Booking;