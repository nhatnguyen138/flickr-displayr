import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <div className="NavbarWidth">
        <img className="Logo" src="/images/logo.png" alt="logo-png" onClick={() => navigate("/")} />
        <ul>
          <li><Link to="/">Gallery</Link></li>
          <li><Link to="/credit">Credit</Link></li>
          <li>
            <a href="https://github.com/nhatnguyen9813/flickr-displayr" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
