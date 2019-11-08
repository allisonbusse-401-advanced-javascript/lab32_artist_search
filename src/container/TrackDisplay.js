import React from 'react';
import Tracks from '../components/Tracks';
import { useTracks } from '../hooks/useTracks';

export default function TrackDisplay() {
  const [tracks, name] = useTracks();

  return (
    <div>
      <Tracks songs={tracks} name={name} />
    </div>
  );
}

