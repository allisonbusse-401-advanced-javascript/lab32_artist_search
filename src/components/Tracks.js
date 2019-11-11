import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Tracks.css';

const Tracks = ({ songs, name }) => {
  const mappedSongs = songs.map(song => {
    return (
      <Link key={song} to={`/lyrics/${name}/${song}`}>
        <li>
          {song}
        </li>
      </Link>
    );
  });
  
  return (
    <ul className={styles.Tracks}>
      <h3>Track Listing</h3>
      {mappedSongs}
    </ul>
  );
};

Tracks.propTypes = {
  songs: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default Tracks;
