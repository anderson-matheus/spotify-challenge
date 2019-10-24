import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { shortenText, shortenArtists } from 'Utils/Utils';
import {
  Album,
  Title,
  Image,
  SubTitle,
} from './Style';

const BigCard = ({ album }) => (
  <Album>
    <Image>
      <img
        src={_.get(album, 'images[0].url', '')}
        alt={_.get(album, 'name', '')}
        width="200"
        height="200"
      />
    </Image>
    <Title>
      {shortenText(_.get(album, 'name', ''), 25)}
    </Title>
    <SubTitle>
      {shortenArtists(_.get(album, 'artists', []), 30)}
    </SubTitle>
  </Album>
);

BigCard.propTypes = {
  album: PropTypes.shape({
    images: PropTypes.array,
    name: PropTypes.string,
    artists: PropTypes.array,
  }),
};

BigCard.defaultProps = {
  album: '',
};

export default BigCard;
