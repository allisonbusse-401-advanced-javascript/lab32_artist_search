import { useState, useEffect } from 'react';
import { fetchArtist } from '../services/api-call';

export const useArtists = (search, offset, setCount) => {
  const [listOfArtists, setListOfArtists] = useState([]);

  useEffect(() => {
    artistAPICall();
  }, [offset]);

  const artistAPICall = () => {
    fetchArtist(search, offset)
      .then(artists => {
        setListOfArtists(artists[1]);
        setCount(artists[0]);
      });
  };

  return [listOfArtists, artistAPICall];
};
