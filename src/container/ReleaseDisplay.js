import React from 'react';
import Releases from '../components/Releases';
import styles from './ReleaseDisplay.css';
import { useReleases } from '../hooks/useReleases';
import { usePaging } from '../hooks/usePaging';

export default function ReleaseDisplay() {

  const { offset, setCount, nextButton, prevButton, handleClick } = usePaging(null, 6);
  const [releases, name] = useReleases(offset, setCount);

  return (
    <div className={styles.ReleaseDisplay}>
      <h2>{name}</h2>
      <button name="prev" disabled={prevButton} onClick={handleClick}>Previous</button>
      <button name="next" disabled={nextButton} onClick={handleClick}>Next</button>
      <Releases releases={releases} name={name} />
    </div>

  );

}
