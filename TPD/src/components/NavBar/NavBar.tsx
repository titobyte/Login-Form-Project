import React from 'react';
import { useState } from 'react'

interface NavBarProps {
  // You can define any props if needed
}
const NavBar: React.FC<NavBarProps> = () => {
  // Brings in useState hook to keep track if menu is open
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  // Event handler to toggle menu open and close
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-link ${isMenuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;