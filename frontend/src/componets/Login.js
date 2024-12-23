import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import user_icon from "../componets/images/user.png";
import email_icon from "../componets/images/email.png";
import Password_icon from "../componets/images/key.png";

function Login() {
  const [showFooter, setShowFooter] = useState(false); 
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogoClick = () => {
    navigate("/"); 
  };

  const handleLogin = (e) => {
    e.preventDefault(); 

    setLoginSuccess(true); 

    setTimeout(() => {
      navigate("/HomePage"); 
    }, 2000); // 2 seconds delay to show the success message
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
    <div>
    <div>
    <a href="#" className="logo" onClick={handleLogoClick}>
        QuickRoute E01.<span className="animate"></span>
      </a>
      </div>
    <div className="container-L">
      <div className="header-L">
        <div className="text-L">Login</div>
        <div className="underline-L"></div>
      </div>

      <form onSubmit={handleLogin}>
        <div className="inputs-L">
          <div className="input-L">
            <img src={user_icon} alt="user icon" className="icon-L" />
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-L">
            <img src={email_icon} alt="email icon" className="icon-L" />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-L">
            <img src={Password_icon} alt="password icon" className="icon-L" />
            <input type="password" placeholder="Password" required />
          </div>
        </div>

        <button type="submit" className="submit-L">
          Login
        </button>
      </form>

      {loginSuccess && (
        <div className="login-success-msg">Login Successful!</div>
      )}
    </div>
    <div className={`footer ${showFooter ? "show" : ""}`}>
      <p>© 2024 QuickRoute. All Rights Reserved.</p>
    </div>
  </div>
  );
}

export default Login;

