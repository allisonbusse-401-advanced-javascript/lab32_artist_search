import React, { use } from 'react';
import PropTypes from 'prop-types';
import { fetchLyrics } from '../services/api-call';
import Lyrics from '../components/Lyrics';



export default class LyricsDisplay extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string.isRequired,
        track: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  componentDidMount() {
    fetchLyrics(this.props.match.params.name, this.props.match.params.track)
      .then(res => {
        this.setState({ lyrics: res });
      });
  }
  state = {
    lyrics: ''
  }

  render() {
    return (
      <Lyrics lyrics={this.state.lyrics}
        name={this.props.match.params.name}
        title={this.props.match.params.track} />
    );
  }
}
