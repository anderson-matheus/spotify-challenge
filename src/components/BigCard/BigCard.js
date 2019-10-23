import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
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
      {(
        _.get(album, 'name', '').length <= 25
          ? _.get(album, 'name', '') : `${_.get(album, 'name', '').substr(0, 25)}...`
      )}
    </Title>
    <SubTitle>
      {(
        _.get(album, 'artists', []).map((artist) => artist.name).join(', ').length <= 30
          ? _.get(album, 'artists', []).map((artist) => artist.name).join(', ')
          : `${_.get(album, 'artists', []).map((artist) => artist.name).join(', ').substr(0, 30)}...`
      )}
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
