import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Track,
  Title,
  Image,
  SubTitle,
} from './Style';

const RegularTrackCard = ({ data, onClick }) => (
  <Track onClick={() => onClick(data)}>
    <Image>
      <img
        src={_.get(data, 'album.images[1].url', '')}
        alt={_.get(data, 'name', '')}
        width="150"
        height="150"
      />
    </Image>
    <Title>
      {(
        _.get(data, 'name', '').length <= 20
          ? _.get(data, 'name', '') : `${_.get(data, 'name', '').substr(0, 20)}...`
      )}
    </Title>
    <SubTitle>
      {(
        _.get(data, 'artists', []).map((artist) => artist.name).join(', ').length <= 25
          ? _.get(data, 'artists', []).map((artist) => artist.name).join(', ')
          : `${_.get(data, 'artists', []).map((artist) => artist.name).join(', ').substr(0, 25)}...`
      )}
    </SubTitle>
  </Track>
);

RegularTrackCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    album: PropTypes.object,
    name: PropTypes.string,
    artist: PropTypes.array,
  }),
  onClick: PropTypes.func.isRequired,
};

RegularTrackCard.defaultProps = {
  data: '',
};

export default RegularTrackCard;
