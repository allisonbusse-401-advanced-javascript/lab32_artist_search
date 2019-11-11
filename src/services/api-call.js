const fetchArtist = (search, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=5&offset=${page}`)
    .then(res => res.json())
    .then(results => {
      return [results.count, results.artists.map(artist => {
        return {
          name: artist.name,
          type: artist.type,
          id: artist.id,
          gender: artist.gender
        };
      })];
    });
};

const fetchReleases = (id, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=6&offset=${page}`)
    .then(res => res.json())
    .then(results => {
      return [results['release-count'], results.releases.map(release => {
        return {
          title: release.title,
          date: release.date,
          id: release.id,
          image: release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front
          ` : 'https://thumbs.gfycat.com/EthicalFoolishGrison-max-1mb.gif'
        };
      })];
    });
};

const fetchTracks = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res => res.json())
    .then(({ recordings }) => {
      return recordings.map(song => {
        return song.title;
      });
    });
};

const fetchLyrics = (name, track) => {
  return fetch(`https://api.lyrics.ovh/v1/${name}/${track}`)
    .then(res => res.json())
    .then(({ lyrics }) => lyrics);
};

export { fetchArtist, fetchReleases, fetchTracks, fetchLyrics };

