import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RegularTrackCard from './RegularTrackCard/RegularTrackCard';
import Grid from './Style';

const RegularTracksCardList = ({ tracks }) => (
  _.get(tracks, 'items.length', 0) > 0
    ? <Grid>{tracks.items.map((track) => (<RegularTrackCard key={track.id} data={track} />))}</Grid>
    : <p>Não possue mais resultados</p>
);

RegularTracksCardList.defaultProps = {
  tracks: '',
};

RegularTracksCardList.propTypes = {
  tracks: PropTypes.shape({ items: PropTypes.array }),
};

export default RegularTracksCardList;
