import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchReleases } from '../services/api-call';
import Releases from '../components/Releases';
import styles from './ReleaseDisplay.css';

export default class ReleaseDisplay extends Component {
  state = {
    releases: [],
    offset: 0,
    count: 0,
    nextButton: false,
    prevButton: true
  }

  componentDidMount() {
    this.getReleases();
  }

  getReleases = () => {
    fetchReleases(this.props.match.params.id, this.state.offset)
      .then(releases => {
        this.setState({ releases: releases[1], count: releases[0] });
      });
  }

  handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 6 : num = -6;

    this.setState(state => {
      return {
        offset: state.offset + num,
        prevButton: false,
        nextButton: false
      };
    }, () => {

      if (this.state.offset + 6 >= this.state.count) {
        this.setState({ nextButton: true });
      }
      if (target.name === 'prev' && this.state.offset === 0) {
        this.setState({ prevButton: true });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.offset !== this.state.offset) {
      this.getReleases();
    }
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    return (
      <div className={styles.ReleaseDisplay}>
        <h2>{this.props.match.params.name}</h2>
        <button name="prev" disabled={this.state.prevButton} onClick={this.handleClick}>Previous</button>
        <button name="next" disabled={this.state.nextButton} onClick={this.handleClick}>Next</button>
        <Releases releases={this.state.releases} name={this.props.match.params.name} />
      </div>

    );
  }
}


