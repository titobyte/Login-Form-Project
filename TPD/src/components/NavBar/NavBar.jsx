import { useState } from 'react'


const NavBar = () => {
  //Brings in useState hook to keep track if menu is open
  const [isMenuOpen, setMenuOpen] = useState(false);

  //event handler to toggle menu open and close
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
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