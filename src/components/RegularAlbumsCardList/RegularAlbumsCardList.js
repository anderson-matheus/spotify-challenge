import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Message from 'Components/Message/Message';
import RegularAlbumCard from './RegularAlbumCard/RegularAlbumCard';
import Grid from './Style';

const RegularAlbumsCardList = ({ albums }) => {
  const onClick = (album) => {
    let recentlyAlbums;
    recentlyAlbums = [];
    if (localStorage.getItem('RECENTLY_VIEWED_ALBUMS') === null || localStorage.getItem('RECENTLY_VIEWED_ALBUMS') === undefined) {
      recentlyAlbums.push(album);
      localStorage.setItem('RECENTLY_VIEWED_ALBUMS', JSON.stringify(recentlyAlbums));
      return;
    }

    recentlyAlbums = JSON.parse(localStorage.getItem('RECENTLY_VIEWED_ALBUMS'));
    const isExists = recentlyAlbums.filter((recentlyAlbum) => recentlyAlbum.id === album.id);
    if (_.get(isExists, 'length', 0) === 0) {
      recentlyAlbums.push(album);
      localStorage.setItem('RECENTLY_VIEWED_ALBUMS', JSON.stringify(recentlyAlbums));
    }
  };

  return (
    _.get(albums, 'items.length', 0) > 0
      ? (
        <Grid>
          {albums.items.map((album) => (
            <RegularAlbumCard key={album.id} data={album} onClick={onClick} />))}
        </Grid>
      )
      : <Message message="Não possue mais resultados" />
  );
};

RegularAlbumsCardList.defaultProps = {
  albums: '',
};

RegularAlbumsCardList.propTypes = {
  albums: PropTypes.shape({ items: PropTypes.array }),
};

export default RegularAlbumsCardList;
