import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReleases } from '../services/api-call';

export const useReleases = (offset, setCount) => {
  const [releases, setReleases] = useState([]);

  const { name, id } = useParams();


  useEffect(() => {
    getReleases();
  }, []);

  useEffect(() => {
    getReleases();
  }, [offset]);


  const getReleases = () => {
    fetchReleases(id, offset)
      .then(releases => {
        setReleases(releases[1]);
        setCount(releases[0]);
      });
  };

  return [releases, name];
};
