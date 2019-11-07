import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLyrics } from '../services/api-call';
import Lyrics from '../components/Lyrics';

export default function LyricsDisplay() {
  const [lyrics, setLyrics] = useState('');

  let { name, track } = useParams();

  useEffect(() => {
    fetchLyrics(name, track)
      .then(res => {
        setLyrics(res);
      }, []);
  });

  return (
    <Lyrics lyrics={lyrics}
      name={name}
      title={track} />
  );
}
