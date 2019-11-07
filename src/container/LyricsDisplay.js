import React from 'react';
import Lyrics from '../components/Lyrics';
import { useLyrics } from '../hooks/useLyrics';

export default function LyricsDisplay() {
  const [lyrics, name, track] = useLyrics();

  return (
    <Lyrics lyrics={lyrics}
      name={name}
      title={track} />
  );
}
