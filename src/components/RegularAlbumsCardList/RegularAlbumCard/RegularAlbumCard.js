import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { shortenText, shortenArtists } from 'Utils/Utils';
import {
  Album,
  Title,
  Image,
  SubTitle,
} from './Style';

const RegularAlbumCard = ({ data, onClick }) => (
  <Album onClick={() => onClick(data)}>
    <Link to={`/albums/${_.get(data, 'id', '')}`}>
      <Image>
        <img
          src={_.get(data, 'images[1].url', '')}
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
    </Link>
  </Album>
);

RegularAlbumCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    images: PropTypes.array,
    name: PropTypes.string,
    artist: PropTypes.array,
  }),
  onClick: PropTypes.func.isRequired,
};

RegularAlbumCard.defaultProps = {
  data: '',
};

export default RegularAlbumCard;
