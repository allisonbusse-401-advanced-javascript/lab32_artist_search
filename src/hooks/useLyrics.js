import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLyrics } from '../services/api-call';

export const useLyrics = () => {
  const [lyrics, setLyrics] = useState('');

  let { name, track } = useParams();


  useEffect(() => {
    fetchLyrics(name, track)
      .then(res => setLyrics(res));
  }, []);

  return [lyrics, name, track];
};

