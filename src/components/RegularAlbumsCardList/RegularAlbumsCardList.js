import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RegularAlbumCard from './RegularAlbumCard/RegularAlbumCard';
import Grid from './Style';

const RegularAlbumsCardList = ({ albums }) => (
  _.get(albums, 'items.length', 0) > 0
    ? <Grid>{albums.items.map((album) => (<RegularAlbumCard key={album.id} data={album} />))}</Grid>
    : <p>Não possue mais resultados</p>
);

RegularAlbumsCardList.defaultProps = {
  albums: '',
};

RegularAlbumsCardList.propTypes = {
  albums: PropTypes.shape({ items: PropTypes.array }),
};

export default RegularAlbumsCardList;
