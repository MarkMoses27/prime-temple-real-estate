import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import LOGO from '../assets/temple__logo.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <img src={LOGO} alt="Logo" className="logo" />
        </Link>

        <div className="nav-elements">
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li className="dropdown">
              <Link to="#" className="nav-link">
                Services <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </Link>
              <ul className="dropdown-content">
                <li><Link to="/properties" className="dropdown-link">Property Listings</Link></li>
                <li><Link to="/consulting" className="dropdown-link">Consulting</Link></li>
                <li><Link to="/investments" className="dropdown-link">Investments</Link></li>
              </ul>
            </li>
            <li><Link to="/blog" className="nav-link">Blog</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>

          <div className="menu-icon" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;