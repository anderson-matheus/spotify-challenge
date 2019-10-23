import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Message from 'Components/Message/Message';
import RegularTrackCard from './RegularTrackCard/RegularTrackCard';
import Grid from './Style';

const RegularTracksCardList = ({ tracks }) => (
  _.get(tracks, 'items.length', 0) > 0
    ? <Grid>{tracks.items.map((track) => (<RegularTrackCard key={track.id} data={track} />))}</Grid>
    : <Message message="Não possue mais resultados" />
);

RegularTracksCardList.defaultProps = {
  tracks: '',
};

RegularTracksCardList.propTypes = {
  tracks: PropTypes.shape({ items: PropTypes.array }),
};

export default RegularTracksCardList;
