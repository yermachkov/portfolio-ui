import { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <header className="container">
      <nav className="navbar">
        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li onClick={removeActive}>
            <a href="#works">Works</a>
          </li>
          <li onClick={removeActive}>
            <a href="#blog">Blog</a>
          </li>
          <li onClick={removeActive}>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div
          className={`hamburger ${isActive ? 'active' : ''}`}
          onClick={toggleActiveClass}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
