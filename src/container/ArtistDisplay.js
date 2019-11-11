import React, { useEffect, useReducer } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import { fetchArtist } from '../services/api-call';
import styles from './ArtistDisplay.css';

const initialState = { offset: 0, count: 0, nextButton: false, prevButton: true, search: '', listOfArtists: [] };

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      if(state.offset + 5 >= state.count) {
        return { ...state, nextButton: true };
      }
      return { ...state, offset: state.offset + 5 };
    case 'decrement':
      if(state.offset === 0) {
        return { ...state, prevButton: true };
      }
      return { ...state, offset: state.offset - 5 };
    case 'reset':
      return { ...state, offset: 0, prevButton: true, nextButton: false };
    case 'apiCall':
      return { ...state, count: action.payload[0], listOfArtists: action.payload[1] };
    case 'search':
      return { ...state, search: action.payload}
    default:
      throw new Error();
  }
}

export default function ArtistDisplay() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'reset' });
    artistAPICall();
  };

  const artistAPICall = () => {
    fetchArtist(state.search, state.offset)
      .then(artists => {        
        dispatch({ type: 'apiCall', payload: artists });
      });
  };

  const handleChange = ({ target }) => {
    dispatch({ type: 'search', payload: target.value });
  };

  useEffect(() => {
    artistAPICall();
  }, [state.offset]);

  return (
    <div className={styles.ArtistDisplay}>
      <p>Please search for your favorite musical artists</p>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        search={state.search}
      />
      <Artists
        artistArray={state.listOfArtists} />
      <button name="prev" disabled={state.prevButton} onClick={() => dispatch({ type: 'decrement' })}>Previous</button>
      <button name="next" disabled={state.nextButton} onClick={() => dispatch({ type: 'increment' })}>Next</button>
    </div>
  );


}
