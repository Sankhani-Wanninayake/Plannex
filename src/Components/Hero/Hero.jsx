import './Hero.css';
import heroImg from '../../assets/hero.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} className="hero-image" alt="Event Setup" />
      <div className="hero-buttons">
        <Link to="/login" className="start-btn">Start Planning</Link>
        <button className="vendor-btn">Join as a Vendor</button>
      </div>
    </div>
  );
}

export default Hero;
