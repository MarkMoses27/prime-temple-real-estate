import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import LOGO from '../assets/PT Logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the mobile menu open/close
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setDropdownOpen(false); // Close dropdown when mobile menu toggles
  };

  // Toggle the dropdown menu open/close
  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setMobileMenuOpen(false); // Close mobile menu when dropdown is opened
    }
  };

  // Handle screen resize for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false); // Close mobile menu on desktop
        setDropdownOpen(false);   // Close dropdown on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <img src={LOGO} alt="Logo" className="logo" />
        </Link>

        <div className={`nav-elements ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
              <Link to="#" className="nav-link" onClick={toggleDropdown}>
                Services <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </Link>
              <ul className="dropdown-content">
                <li><Link to="/properties" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Property Listings</Link></li>
                <li><Link to="/consulting" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Consulting</Link></li>
                <li><Link to="/investments" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Investments</Link></li>
              </ul>
            </li>
            <li><Link to="/blog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
