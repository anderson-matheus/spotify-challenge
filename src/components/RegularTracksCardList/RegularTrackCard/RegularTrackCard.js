import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { shortenText, shortenArtists } from 'Utils/Utils';
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
      {shortenText(_.get(data, 'name', ''), 20)}
    </Title>
    <SubTitle>
      {shortenArtists(_.get(data, 'artists', []), 25)}
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
