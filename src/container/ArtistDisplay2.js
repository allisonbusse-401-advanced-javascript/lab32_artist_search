import React, { Component } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import { fetchArtist } from '../services/api-call';
import styles from './ArtistDisplay.css';

const initialState = { count: 0 };

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default class ArtistDisplay extends Component {
  state = {
    listOfArtists: [],
    search: '',
    offset: 0,
    count: 0,
    nextButton: false,
    prevButton: true

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ offset: 0, prevButton: true, nextButton: false });
    this.artistAPICall();
  }

  artistAPICall = () => {
    fetchArtist(this.state.search, this.state.offset)
      .then(artists => {
        this.setState({ listOfArtists: artists[1], count: artists[0] });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });

  }

  handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 5 : num = -5;

    this.setState(state => {
      return {
        offset: state.offset + num,
        prevButton: false,
        nextButton: false
      };
    }, () => {

      if(this.state.offset + 5 >= this.state.count) {
        this.setState({ nextButton: true });
      }
      if(target.name === 'prev' && this.state.offset === 0) {
        this.setState({ prevButton: true });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.offset !== this.state.offset) {
      this.artistAPICall();
    }
  }


  render() {
    return (
      <div className={styles.ArtistDisplay}>
        <p>Please search for your favorite musical artists</p>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          search={this.state.search}
        />
        <Artists
          artistArray={this.state.listOfArtists} />
        <button name="prev" disabled={this.state.prevButton} onClick={() => dispatch({ type: 'decrement' })}>Previous</button>
        <button name="next" disabled={this.state.nextButton} onClick={() => dispatch({ type: 'increment' })}>Next</button>
      </div>
    );
  }
}




function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
