import React, { useState } from 'react';
import Releases from '../components/Releases';
import styles from './ReleaseDisplay.css';
import { useReleases } from '../hooks/useReleases';

export default function ReleaseDisplay() {
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(true);

  const [releases, name] = useReleases(offset, setCount);

  const handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 6 : num = -6;

    setOffset(offset + num);
    setPrevButton(false);
    setNextButton(false);

    if(offset + 5 >= count) setNextButton(true);
    if(target.name === 'prev' && offset === 0) setPrevButton(true);

  };

  return (
    <div className={styles.ReleaseDisplay}>
      <h2>{name}</h2>
      <button name="prev" disabled={prevButton} onClick={handleClick}>Previous</button>
      <button name="next" disabled={nextButton} onClick={handleClick}>Next</button>
      <Releases releases={releases} name={name} />
    </div>

  );

}
