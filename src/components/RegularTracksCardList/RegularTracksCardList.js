import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import Message from 'Components/Message/Message';
import RegularTrackCard from './RegularTrackCard/RegularTrackCard';
import Grid from './Style';

const RegularTracksCardList = ({ tracks }) => {
  const dispatch = useDispatch();
  const onClick = (track) => {
    const data = track;
    dispatch({ type: 'ACTIVE_MUSIC', track: data });
    let recentlyTracks;
    recentlyTracks = [];
    if (localStorage.getItem('RECENTLY_VIEWED_TRACKS') === null || localStorage.getItem('RECENTLY_VIEWED_TRACKS') === undefined) {
      recentlyTracks.push(track);
      localStorage.setItem('RECENTLY_VIEWED_TRACKS', JSON.stringify(recentlyTracks));
      return;
    }

    recentlyTracks = JSON.parse(localStorage.getItem('RECENTLY_VIEWED_TRACKS'));
    const isExists = recentlyTracks.filter((recentlyTrack) => recentlyTrack.id === track.id);
    if (_.get(isExists, 'length', 0) === 0) {
      recentlyTracks.push(track);
      localStorage.setItem('RECENTLY_VIEWED_TRACKS', JSON.stringify(recentlyTracks));
    }
  };

  return (
    _.get(tracks, 'items.length', 0) > 0
      ? (
        <Grid>
          {tracks.items.map((track) => (
            <RegularTrackCard key={track.id} data={track} onClick={onClick} />))}
        </Grid>
      )
      : <Message message="Não possue mais resultados" />
  );
};

RegularTracksCardList.defaultProps = {
  tracks: '',
};

RegularTracksCardList.propTypes = {
  tracks: PropTypes.shape({ items: PropTypes.array }),
};

export default RegularTracksCardList;
