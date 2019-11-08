import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lyrics.css';

const Lyrics = ({ lyrics, name, title }) => {
  return (
    <div className={styles.Lyrics}>
      <h3>{title} by {name}</h3>
      <pre>{lyrics}</pre>
    </div>
  );
};

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Lyrics;
