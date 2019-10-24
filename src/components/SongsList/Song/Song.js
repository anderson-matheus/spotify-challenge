import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Music,
  SongNumber,
  SongName,
  SongTime,
} from './Style';

const Song = ({ data, index, onClick }) => (
  <Music onClick={() => onClick(data)}>
    <SongNumber>{`${index + 1}.`}</SongNumber>
    <SongName>{_.get(data, 'name', '')}</SongName>
    <SongTime>{new Date(_.get(data, 'duration_ms', 0)).toISOString().substr(11, 8)}</SongTime>
  </Music>
);

Song.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    duration_ms: PropTypes.number,
  }),
  index: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

Song.defaultProps = {
  data: '',
  index: 0,
};

export default Song;
