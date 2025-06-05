import React from "react";
import "./index.css";

function LandingScreen() {
  return (
    <div className="landing-bg">
      <div className="langing-content">
        <div className="landing-cart"> 
          <h2>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet,</p>
          <p>consectetur adipiscing elit,</p>
          <button className="landing-btn-create-account">Create Account</button>
          <br />
          <button className="landing-login-btn">
            Already Registered?Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
