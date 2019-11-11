import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={styles.Header}>
      <Link to='/'>
        <h1>ARTIST SEARCH</h1>
      </Link>
    </header>
  );
};

export default Header;
