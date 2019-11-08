import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTracks } from '../services/api-call';

export const useTracks = () => {
  const [tracks, setTracks] = useState([]);

  const { name, id } = useParams();


  useEffect(() => {
    fetchTracks(id)
      .then(res => {
        setTracks(res);
      });
  }, []);

  return [tracks, name];
};
