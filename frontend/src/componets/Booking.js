import "./Booking.css";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();  // Hook to navigate

  const handleLogoClick = () => {
    navigate("/");  // Navigate to the home page when logo is clicked
  };

  return (
    <div >
      <a href="#" className="logo" onClick={handleLogoClick}>
        QuickRoute E01.<span className="animate"></span>
      </a>
    <h2>Fill This Form</h2>
    
  </div>
    
  )
}

export default Booking;