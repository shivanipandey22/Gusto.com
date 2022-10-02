import React from "react";
import './Signup.css'

const Signup = () => {
  return (
    <div>
      <div id="signboxA">
        <h3>Get started with Gusto</h3>
        <p>
          We offer one intuitive place to manage payroll, benefits, and HR for
          your business.
        </p>
        <div>
          <h4>Nice! We could be a great fit for your business.</h4>
          <button className="btnA">Sign up with Google</button>
          <p>______________________ or ______________________</p>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Work email address" />
          <input type="text" placeholder="Company name" />
          <div id="btnCbox">
            <input type="text" placeholder="No. of employees" />
            <input type="text" placeholder="Company phone" />
          </div>
          <input type="text" placeholder="Set password" />
          <p>Password strength:</p>
          <ul>
            <li> Use 8 or more characters.</li>
            <li>Use a minimum of one letter.</li>
            <li>Use a minimum of one number.</li>
          </ul>
          <input type="text" placeholder="Confirm Password" />
          <button className="btnB">Create Account</button>
          <h6>Already use Gusto? </h6>
          <a href="">Sign in here.</a>
          <p>By creating an account, you agree to the terms & <br /> conditions, the payroll terms, and our privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
