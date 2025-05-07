import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleLogin = () => {
    // Here you can add login validation logic if needed
    navigate('/cdash'); // ✅ Navigate to cdash
  };

  return (
    <div className="login-container">
      <div className="logo">PLANNEX</div>

      <div className="login-box">
        <h2>Welcome back!</h2>

        <label>Email</label>
        <div className="input-box">
          <span>📧</span>
          <input type="email" placeholder="Enter your email" />
        </div>

        <label>Password</label>
        <div className="input-box">
          <span>🔒</span>
          <input type="password" placeholder="Enter password" />
          <a href="#">Forgot Password?</a>
        </div>

        {/* ✅ use the onClick to trigger navigation */}
        <button className="login-btn" onClick={handleLogin}>
          Log in
        </button>

        <p className="register-text">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
