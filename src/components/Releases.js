import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';
import styles from './Releases.css';

const Releases = ({ releases, name }) => {
  const mappedReleases = releases.map(release => {
    return <Release
      key={release.id}
      id={release.id}
      title={release.title}
      date={release.date}
      name={name}
      image={release.image} />;
  });
  return (
    <ul className={styles.Releases}>
      {mappedReleases}
    </ul>
  );
};

Releases.propTypes = {
  releases: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default Releases;
