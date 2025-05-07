import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">PLANNEX</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">How it works</a>
        <a href="#">Services</a>
        <a href="#">Languages</a>
      </div>
    </div>
  );
}

export default Header;