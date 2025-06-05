import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function LandingScreen() {
  const navigate = useNavigate();

  function hadbleLoginBtn() {
    // Handler for "Login" button click - navigates to login page
    navigate("/login");
  }
  function hadbleSignupBtn() {
    // Handler for "Create Account" button click - navigates to signup page
    navigate("/signup");
  }

  return (
    <div className="landing-bg">
      <div className="langing-content">
        <div className="landing-cart">
          <h2>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet,</p>
          <p>consectetur adipiscing elit,</p>
          {/* Button to create a new account */}
          <button
            className="landing-btn-create-account"
            onClick={hadbleSignupBtn}
          >
            {" "}
            Create Account
          </button>
          <br />
          {/* Button to navigate existing users to login */}
          <button className="landing-login-btn" onClick={hadbleLoginBtn}>
            {" "}
            Already Registered?Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
