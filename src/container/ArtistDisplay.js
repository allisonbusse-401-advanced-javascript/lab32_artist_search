import React from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import styles from './ArtistDisplay.css';
import { useArtists } from '../hooks/useArtists';
import { usePaging } from '../hooks/usePaging';
import { fetchArtist } from '../services/api-call';


export default function ArtistDisplay() {

  const artistAPICall = () => {
    fetchArtist(search, offset)
      .then(artists => {
        setListOfArtists(artists[1]);
        setCount(artists[0]);
      });
  };

  const { search, offset, setCount, nextButton, prevButton, handleSubmit, handleChange, handleClick } = usePaging(artistAPICall, 5);
  const [listOfArtists, setListOfArtists] = useArtists(search, offset, setCount, artistAPICall);


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

