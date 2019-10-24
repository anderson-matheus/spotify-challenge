import React from 'react';
import PropTypes from 'prop-types';
import Message from 'Components/Message/Message';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import Song from './Song/Song';

const SongsList = ({ songs }) => {
  const dispatch = useDispatch();
  const onClick = (track) => {
    const data = track;
    dispatch({ type: 'ACTIVE_MUSIC', track: data });
  };

  return (
    _.get(songs, 'items.length', 0) > 0
      ? songs.items.map((song, key) => (
        <Song key={song.id} data={song} index={key} onClick={onClick} />))
      : <Message message="Não possue mais resultados" />
  );
};

SongsList.defaultProps = {
  songs: '',
};

SongsList.propTypes = {
  songs: PropTypes.shape({ items: PropTypes.array }),
};

export default SongsList;
