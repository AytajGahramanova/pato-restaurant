import React from "react";
import "../../../../assets/base.css";
import "../../../../pages/client/Home/sections/SignUp.css";
import EmailIcon from "@mui/icons-material/Email";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="signup-wrapper">
          <p>SPECIALS SIGN UP</p>
          <input
            className="signup-input"
            type="text"
            placeholder="Email Adrress"
          />
          <EmailIcon className="mail-icon" />
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
