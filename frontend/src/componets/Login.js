import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import user_icon from "../componets/images/user.png";
import email_icon from "../componets/images/email.png";
import Password_icon from "../componets/images/key.png";

function Login() {
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success

  const handleLogin = (e) => {
    e.preventDefault(); 

    setLoginSuccess(true); 

    setTimeout(() => {
      navigate("/HomePage"); 
    }, 2000); // 2 seconds delay to show the success message
  };

  return (
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
  );
}

export default Login;

