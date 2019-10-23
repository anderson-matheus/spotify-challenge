import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RegularCard from './RegularCard/RegularCard';

const RegularCardList = ({ albums }) => (
  _.get(albums, 'items.length', 0) > 0
    ? albums.items.map((album) => (
      <RegularCard key={album.id} data={album} />
    )) : <p>Não possue mais resultados</p>
);

RegularCardList.defaultProps = {
  albums: '',
};

RegularCardList.propTypes = {
  albums: PropTypes.shape({ items: PropTypes.array }),
};

export default RegularCardList;
