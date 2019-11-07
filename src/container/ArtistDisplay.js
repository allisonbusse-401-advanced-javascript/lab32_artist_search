import React, { useState } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import styles from './ArtistDisplay.css';
import { useArtists } from '../hooks/useArtists';

export default function ArtistDisplay () {
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(true);

  const [listOfArtists, artistAPICall] = useArtists(search, offset, setCount);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOffset(0);
    setPrevButton(true);
    setNextButton(false);
    artistAPICall();
  }

  const handleChange = ({ target }) => {
    setSearch(target.value);
  }

  const handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 5 : num = -5;

    setOffset(offset + num);
    setPrevButton(false);
    setNextButton(false);

    if(offset + 5 >= count) setNextButton(true);
    if(target.name === 'prev' && offset === 0) setPrevButton(true);
  }

  

  return (
    <div className={styles.ArtistDisplay}>
      <p>Please search for your favorite musical artists</p>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        search={search}
      />
      <Artists
        artistArray={listOfArtists} />
      <button name="prev" disabled={prevButton} onClick={handleClick}>Previous</button>
      <button name="next" disabled={nextButton} onClick={handleClick}>Next</button>
    </div>
  );


}

