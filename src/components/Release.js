import React from 'react';
import PropTypes from 'prop-types';
import styles from './Release.css';
import { Link } from 'react-router-dom';

const Release = ({ title, date, image, name, id }) => {
  return (
    <Link to={`/tracks/${id}/${name}`} className={styles.Release}>
      <div>
        <h3>{title}</h3>
        <img src={image} />
        <p>{date}</p>
      </div>
    </Link>
  );
};

Release.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Release;
