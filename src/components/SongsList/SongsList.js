import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Song from './Song/Song';

const SongsList = ({ songs }) => (
  _.get(songs, 'items.length', 0) > 0
    ? songs.items.map((song, key) => (<Song key={song.id} data={song} index={key} />))
    : <p>Não possue mais resultados</p>
);

SongsList.defaultProps = {
  songs: '',
};

SongsList.propTypes = {
  songs: PropTypes.shape({ items: PropTypes.array }),
};

export default SongsList;
