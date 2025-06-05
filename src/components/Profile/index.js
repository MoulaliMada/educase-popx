import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

// Profile component for displaying user account details
function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handler for logout button - navigates to home page
    navigate("/");
  };

  return (
    <div className="landing-bg">
      <div className="signup-content profile-content">
        <div className="profile-cart">
          <h2>Account Settings</h2>
          <div className="profile-container">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="profile"
            />
            <div>
              <h1>Marry Doe</h1>
              <p>Marry@gmail.com</p>
            </div>
          </div>
          <p className="profile-p-content">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <div className="button-container">
            <button className="profile-btn" onClick={handleLogout}>
              Logout /Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
