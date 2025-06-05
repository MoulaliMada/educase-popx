import React from "react";
import "./index.css";

function NotFound() {
  return (
    <div className="landing-bg">
      <div className="notfound-content">
        <div className="notfound-cart">
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1749124232/a5aa91107177767.5fa140f97077a_oaaxaf.jpg"
            alt="not found img"
            className="notfound-img"
          />
          <h2>Oops! Page Not Found</h2>
          <p>
            The page you're looking for doesn't exist, Let’s get you back to the
            homepage.
          </p>
          <button>Go to Home</button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
