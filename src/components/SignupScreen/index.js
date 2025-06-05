import React from "react";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const usenavigate = useNavigate();

  const [showUserNamewarning, setShowUserNamewarning] = useState(false);
  const [inputfullName, setinputfullName] = useState("");
  const [showPhoneNumberwarning, setShowPhoneNumberwarning] = useState(false);
  const [inputPhoneNumber, setinputPhoneNumber] = useState("");
  const [showEmailwarning, setShowEmailwarning] = useState(false);
  const [inputEmail, setinputEmail] = useState("");
  const [showCompanyNamewarning, setShowCompanyNamewarning] = useState(false);
  const [inpuCompanyName, setinpuCompanyName] = useState("");
  const [showPsswordWarning, setshowPsswordWarning] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [radioInput, setradioInput] = useState(true);

  const handleChangeRadio = () => {
    setradioInput(!radioInput);
  };

  const handleFullNameBlur = () => {
    if (inputfullName === "") {
      setShowUserNamewarning(true);
    } else {
      setShowUserNamewarning(false);
    }
  };

  const handleFullNameInput = (e) => {
    setinputfullName(e.target.value);
    if (e.target.value === "") {
      setShowUserNamewarning(true);
    } else {
      setShowUserNamewarning(false);
    }
  };

  const handlePhoneNumberBlur = () => {
    if (inputPhoneNumber === "") {
      setShowPhoneNumberwarning(true);
    } else {
      setShowPhoneNumberwarning(false);
    }
  };
  const handlePhoneNumberInput = (e) => {
    setinputPhoneNumber(e.target.value);
    if (e.target.value === "") {
      setShowPhoneNumberwarning(true);
    } else {
      setShowPhoneNumberwarning(false);
    }
  };

  const handleEmailBlur = () => {
    if (inputEmail === "") {
      setShowEmailwarning(true);
    } else {
      setShowEmailwarning(false);
    }
  };
  const handleEmailInput = (e) => {
    setinputEmail(e.target.value);
    if (e.target.value === "") {
      setShowEmailwarning(true);
    } else {
      setShowEmailwarning(false);
    }
  };
  const handleCompanyNameBlur = () => {
    if (inpuCompanyName === "") {
      setShowCompanyNamewarning(true);
    } else {
      setShowCompanyNamewarning(false);
    }
  };
  const handleCompanyNameInput = (e) => {
    setinpuCompanyName(e.target.value);
    if (e.target.value === "") {
      setShowCompanyNamewarning(true);
    } else {
      setShowCompanyNamewarning(false);
    }
  };
  const handlepasswordBlur = () => {
    if (inputPassword === "") {
      setshowPsswordWarning(true);
    } else {
      setshowPsswordWarning(false);
    }
  };
  const handlepasswordInput = (e) => {
    setInputPassword(e.target.value);
    if (e.target.value === "") {
      setshowPsswordWarning(true);
    } else {
      setshowPsswordWarning(false);
    }
  };

  const clickingCraeteAccount = () => {
    handleFullNameBlur();
    handlePhoneNumberBlur();
    handleEmailBlur();
    handlepasswordBlur();
    handleCompanyNameBlur();
    if (
      inputfullName !== "" &&
      inputPhoneNumber !== "" &&
      inputEmail !== "" &&
      inpuCompanyName !== "" &&
      inputPassword !== ""
    ) {
      usenavigate("/profile");
    }
  };

  return (
    <div className="landing-bg">
      <div className="signup-content">
        <div className="Signup-from-btncontainer">
          <div className="signup-cart">
            <h2>Create your </h2>
            <h2>Popx Account</h2>
            <div>
              <div className="field-container">
                <label htmlFor="fullname" className="field-label">
                  Full Name <span className="span-in-label">*</span>
                </label>
                <input
                  type="text"
                  value={inputfullName}
                  id="fullname"
                  className="field-input"
                  placeholder="Enter your name"
                  required
                  onBlur={handleFullNameBlur}
                  onChange={handleFullNameInput}
                />
              </div>
              {showUserNamewarning && (
                <p className="warning">Please Enter Full Name *</p>
              )}
            </div>
            <div>
              <div className="field-container">
                <label htmlFor="phoneNumber" className="field-label">
                  Phone Number <span className="span-in-label">*</span>
                </label>
                <input
                  type="text"
                  value={inputPhoneNumber}
                  id="phoneNumber"
                  className="field-input"
                  placeholder="Enter your Phone Number"
                  required
                  onBlur={handlePhoneNumberBlur}
                  onChange={handlePhoneNumberInput}
                />
              </div>
              {showPhoneNumberwarning && (
                <p className="warning">Please Enter Phone Number *</p>
              )}
            </div>
            <div>
              <div className="field-container">
                <label htmlFor="email" className="field-label">
                  Email Address <span className="span-in-label">*</span>
                </label>
                <input
                  type="text"
                  value={inputEmail}
                  id="email"
                  className="field-input"
                  placeholder="Enter Email"
                  required
                  onBlur={handleEmailBlur}
                  onChange={handleEmailInput}
                />
              </div>
              {showEmailwarning && (
                <p className="warning">Please Enter Email Address *</p>
              )}
            </div>
            <div>
              <div className="field-container">
                <label htmlFor="password" className="field-label">
                  Password <span className="span-in-label">*</span>
                </label>
                <input
                  type="text"
                  value={inputPassword}
                  id="password"
                  className="field-input"
                  placeholder="Enter company name"
                  required
                  onBlur={handlepasswordBlur}
                  onChange={handlepasswordInput}
                />
              </div>
              {showPsswordWarning && (
                <p className="warning">Please EnterPassword *</p>
              )}
            </div>
            <div>
              <div className="field-container">
                <label htmlFor="companyName" className="field-label">
                  Company Name <span className="span-in-label">*</span>
                </label>
                <input
                  type="text"
                  value={inpuCompanyName}
                  id="companyName"
                  className="field-input"
                  placeholder="Enter company name"
                  required
                  onBlur={handleCompanyNameBlur}
                  onChange={handleCompanyNameInput}
                />
              </div>
              {showCompanyNamewarning && (
                <p className="warning">Please Enter Company Name *</p>
              )}
            </div>
            <div>
              <p className="radio-p">
                Are you an Agency?<span className="span-in-label">*</span>
              </p>
              <label className="radio-label">
                <input
                  type="radio"
                  name="yesNo"
                  value="true"
                  checked={radioInput}
                  className="radio-btn-input"
                  onChange={handleChangeRadio}
                />
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="yesNo"
                  value="true"
                  checked={!radioInput}
                  onChange={handleChangeRadio}
                />
                No
              </label>
            </div>
          </div>
          <div>
            <button
              className="creat-account-btn"
              onClick={clickingCraeteAccount}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
