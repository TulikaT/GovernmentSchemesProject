import React, { useState } from 'react';
import './Navbar.css';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => setActive(!active);
  const closeMenu = () => setActive(false);

  return (
    <nav>
      <Logo />
      <ul className={active ? 'toggle' : ''}> {/* Remove 'none' class */}
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/schemes" onClick={closeMenu}>Government Schemes</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
      </ul>
      <div 
        className={`hamburger ${active ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </nav>
  );
}

export default Navbar;


