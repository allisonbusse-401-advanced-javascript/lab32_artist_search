import React from 'react';
import PropTypes from 'prop-types';
import styles from './Artist.css';
import { Link } from 'react-router-dom';


const Artist = ({ id, name, type, gender }) => {
  return (
    <Link to={`/artists/${id}/${name}`}>
      <div className={styles.Artist}>
        <h3>{name}</h3>
        <p>Type of Act: {type}</p>
        <p>Gender: {gender}</p>
      </div>
    </Link>
  );
};

Artist.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  gender: PropTypes.string,
  tags: PropTypes.string,
  id: PropTypes.string
};

export default Artist;
