import React from "react";
import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [inpuEmail, setinpuEmail] = useState("");
  const [showEmailWrning, setshowEmailWrning] = useState(false);
  const [inputPassword, setinputPassword] = useState("");
  const [showPsswordWarning, setshowPsswordWarning] = useState(false);

  const navigate = useNavigate();

  const handleEmailBlur = () => {
    if (inpuEmail === "") {
      setshowEmailWrning(true);
    } else {
      setshowEmailWrning(false);
    }
  };

  const handleEmailInput = (e) => {
    setinpuEmail(e.target.value);
    if (e.target.value === "") {
      setshowEmailWrning(true);
    } else {
      setshowEmailWrning(false);
    }
  };

  const handlePasswordBlur = () => {
    if (inputPassword === "") {
      setshowPsswordWarning(true);
    } else {
      setshowPsswordWarning(false);
    }
  };
  const handlePasswordInput = (e) => {
    setinputPassword(e.target.value);
    if (e.target.value === "") {
      setshowPsswordWarning(true);
    } else {
      setshowPsswordWarning(false);
    }
  };

  const handleLoginBtnClick = () => {
    handlePasswordBlur();
    handleEmailBlur();
    if (inpuEmail !== "" && inputPassword !== "") {
      navigate("/profile");
    }
  };

  return (
    <div className="landing-bg">
      <div className="signup-content ">
        <div className="signup-cart">
          <h2>Signin to your</h2>
          <h2>PopX account</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <div className="field-container">
              <label htmlFor="email" className="field-label">
                Email Address <span className="span-in-label">*</span>
              </label>
              <input
                type="text"
                value={inpuEmail}
                id="email"
                className="field-input"
                placeholder="Enter email"
                required
                onBlur={handleEmailBlur}
                onChange={handleEmailInput}
              />
            </div>
            {showEmailWrning && (
              <p className="warning">Please Enter Emaile *</p>
            )}
          </div>
          <div>
            <div className="field-container">
              <label htmlFor="Password" className="field-label">
                Password <span className="span-in-label">*</span>
              </label>
              <input
                type="password"
                value={inputPassword}
                id="Password"
                className="field-input"
                placeholder="Enter Password"
                required
                onBlur={handlePasswordBlur}
                onChange={handlePasswordInput}
              />
            </div>
            {showPsswordWarning && (
              <p className="warning">Please Enter password *</p>
            )}
          </div>

          <button
            className="login-btn login-btn-incomplete"
            onClick={handleLoginBtnClick}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
