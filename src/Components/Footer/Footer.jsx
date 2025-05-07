import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="subscribe">
        <p>Be the first to know</p>
        <input type="email" placeholder="Enter your email" />
        <button>Sign Up</button>
      </div>
      <div className="socials">
        <p>Follow us on</p>
        <div className="icons">🌐 📱 🖤</div>
      </div>
    </div>
  );
}

export default Footer;