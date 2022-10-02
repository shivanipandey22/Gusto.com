import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="container">
      <Link to="/">
        <img src="https://bit.ly/3dQ1PQ1" alt="company logo" />
      </Link>

      <div id="nav_box">
        <Link>Why Gusto</Link>
        <Link to="/payroll">Payroll and more</Link>
        <Link>Pricing</Link>
        <Link>For Accountants</Link>
        <Link>Resources</Link>
        <Link>Built for you</Link>
        <a>See demo</a>
        <button className="acc_btnAB">
          <Link to="login">Sign in</Link>
        </button>
        <button className="acc_btn">
          <Link to="signup">Create Account</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
