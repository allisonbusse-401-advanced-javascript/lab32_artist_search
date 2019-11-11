import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchTracks } from '../services/api-call';
import Tracks from '../components/Tracks';

export default class TrackDisplay extends Component {
  state = {
    tracks: []
  }

  componentDidMount() {
    fetchTracks(this.props.match.params.id)
      .then(res => {
        this.setState({ tracks: res });
      });
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  render(){
    return (
      <div>
        <Tracks songs={this.state.tracks} name={this.props.match.params.name}/>
      </div>
    );
  }
}
