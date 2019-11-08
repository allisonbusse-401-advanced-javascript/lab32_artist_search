import { useState, useEffect } from 'react';

export const useArtists = (search, offset, setCount, artistAPICall) => {
  const [listOfArtists, setListOfArtists] = useState([]);

  useEffect(() => {
    artistAPICall();
  }, [offset]);



  return [listOfArtists, setListOfArtists];
};
