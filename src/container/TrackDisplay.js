import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTracks } from '../services/api-call';
import Tracks from '../components/Tracks';

export default function TrackDisplay() {
  const [tracks, setTrack] = useState([]);

  useEffect(() => {
    fetchTracks(id)
      .then(res => {
        setTrack(res);
      });
  }, []);

  const { name, id } = useParams();

  return (
    <div>
      <Tracks songs={tracks} name={name} />
    </div>
  );
}

