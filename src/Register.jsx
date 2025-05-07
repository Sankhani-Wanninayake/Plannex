import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register-container">
      <div className="logo">PLANNEX</div>

      <div className="register-box">
        <h2>Register</h2>

        <label>First Name</label>
        <div className="input-box">
        <input type="fname"/>
        </div>

        <label>Last Name</label>
        <div className="input-box">
        <input type="lname"/>
        </div>

        <label>Email</label>
        <div className="input-box">
        <input type="email"/>
        </div>

        <label>Contact Number</label>
        <div className="input-box">
        <input type="cnumber"/>
        </div>

        <label>Password</label>
        <div className="input-box">
        <input type="Password"/>
        </div>

        
  <input type="radio" id="vendor" name="type" value="vendor" />
  <label htmlFor="vendor">Vendor</label>

  <input type="radio" id="customer" name="type" value="customer" />
  <label htmlFor="customer">Customer</label>

        <button className="register-btn">Create an Account</button>

        <p className="login-text">
        Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
