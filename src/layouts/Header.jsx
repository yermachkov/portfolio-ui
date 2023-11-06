import { useState } from 'react';
import styles from './Header.module.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <header className={styles.header_section}>
      <nav className={styles.navbar}>
        <ul className={`${styles.nav_menu} ${isActive ? styles.active : ''}`}>
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
          className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
          onClick={toggleActiveClass}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
