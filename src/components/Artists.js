import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';
import styles from './Artists.css';

const Artists = ({ artistArray }) => {
  
  const artists = artistArray.map(artist => {
    return <Artist
      key={artist.id}
      id={artist.id}
      name={artist.name}
      type={artist.type}
      gender={artist.gender}
    />;
  });

  return (
    <ul className={styles.Artists}>
      {artists}
    </ul>
  );
};

Artists.propTypes = {
  artistArray: PropTypes.array.isRequired
};

export default Artists;
