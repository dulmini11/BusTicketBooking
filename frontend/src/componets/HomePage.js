import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./HomePage.css"; 
import calendar_icon from '../componets/images/calendar.png'
import location_icon from '../componets/images/location.png';
import loging from '../componets/images/loging.png';
import bus from '../componets/images/bus.png';
import city from '../componets/images/city.png';
import logo from '../componets/images/logo.png';

function HomePage() {
  const locations = ["Matara", "Colombo"];
  const [currentLocation, setCurrentLocation] = useState(locations[0]);
  
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/Login'); // Navigate to login page
  };

  const handleAddBuses = () => {
    navigate('/BusRegistration'); // Navigate to add buses page
  };

  const handleBooking = () => {
    navigate('/Booking'); // Navigate to booking page
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((prev) =>
        prev === locations[0] ? locations[1] : locations[0]
      );
    }, 2000); // Switch text every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="header-container">      
      <div className="header-part">
      <a href="#" className="logo">
          QuickRoute E01.<span className="animate"></span>
        </a>
      <button className="submit1" onClick={handleAddBuses}>Add Your Bus to this server</button>
        <img src={loging} alt="Loging" onClick={handleLogin} />
      </div>

        <h1>
          Travel to <span className="animated-text">{currentLocation}</span>
        </h1>
        

      <div className="content-row">
        <div className="intro-container">
          <p className="intro">
          The Southern Expressway bus booking system makes it easy to travel between Colombo and Matara quickly and comfortably.
           Buses use the Southern Expressway (E01), which saves time compared to regular routes. 
           You can book tickets online or at ticket counters, choose your travel time, and even select your seat.
            The buses are air-conditioned and provide a smooth, safe journey, making them a convenient choice for anyone traveling between these two cities.
          </p>
          
          <p className="intro">
            Whether you’re commuting for work or leisure, our platform is tailored to make your travel smoother and hassle-free.
          </p>
        </div>

        
        
        <div className="inputs">
          <div className="input-H">
            <img src={location_icon} alt="location_icon" className="icon" />
            <select name ="From" id="From">
              <option value="colombo">Colombo</option>
              <option value="matara">Matara</option>
              
            </select>
            {/* <input type="text" placeholder="From.." /> */}
          </div>

          <div className="input-H">
            <img src={location_icon} alt="location_icon" className="icon" />
            <select name ="From" id="From">
              <option value="matara">Matara</option>
              <option value="colombo">Colombo</option>
              
              {/* <input type="text" placeholder="To" /> */}
              </select>
          </div>

          <div className="input-H">
            <img src={calendar_icon} alt="calendar_icon" className="icon" />
            <input type="date" placeholder="Date" />
          </div>
          
          <div><button className="submit" onClick={handleBooking}>Search Buses</button></div>
            
        </div>
        
      
      </div>

      <img src={bus} alt="bus" className="bus" />
      <img src={city} alt="city" className="city" />
    </div>
  );
}

export default HomePage;

