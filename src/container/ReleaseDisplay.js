import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReleases } from '../services/api-call';
import Releases from '../components/Releases';
import styles from './ReleaseDisplay.css';

export default function ReleaseDisplay() {
  const [releases, setReleases] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(true);

  useEffect(() => {
    getReleases();
  }, []);

  useEffect(() => {
    getReleases();
  }, [offset]);

  const { id, name } = useParams();

  const getReleases = () => {
    fetchReleases(id, offset)
      .then(releases => {
        setReleases(releases[1]);
        setCount(releases[0]);
      });
  };

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
