import React, { useState, useEffect } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import { fetchArtist } from '../services/api-call';
import styles from './ArtistDisplay.css';

export default function ArtistDisplay () {
  const [listOfArtists, setListOfArtists] = useState([]);
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOffset(0);
    setPrevButton(true);
    setNextButton(false);
    artistAPICall();
  }

  const artistAPICall = () => {
    fetchArtist(search, offset)
      .then(artists => {
        setListOfArtists(artists[1]);
        setCount(artists[0]);
      });
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

  useEffect(() => {
    artistAPICall()
  }, [offset])

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

