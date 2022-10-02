import React from "react";
import './Login.css'
const login = () => {
  return (
    <div id="loginboxA">
      <img src="https://bit.ly/3dQ1PQ1" alt="company logo" />
      <div>
        <label>Email Address</label>
        <br />
        <input type="text" />
        <br />
        <label>Password</label>
        <br />
        <input type="text" />
        <br />
        <a>Having trouble signing in?</a>
        
        <br />
        <button className="btnB">Sign In</button>
        <p>______________________ or ______________________</p>
        <a href="">Sign in here.</a>
        <br />
        <button className="btnA">Sign up with Google</button>
        <div id="btnCbox">
          <input type="text" placeholder="No. of employees" />
          <input type="text" placeholder="Company phone" />
        </div>
        <p>
          Need help? <a href="">Visit our help Center</a>
        </p>
      </div>
    </div>
  );
};

export default login;
