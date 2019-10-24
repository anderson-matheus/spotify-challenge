import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import Message from 'Components/Message/Message';
import { Player, SongName } from './Style';

const PlayerMusic = () => {
  const activeMusic = useSelector((state) => state.activeMusic);

  return (
    <Player>
      {
        activeMusic ? (
          <>
            <SongName>{_.get(activeMusic, 'name', '')}</SongName>
            <iframe
              title={_.get(activeMusic, 'name', '')}
              src={_.get(activeMusic, 'preview_url', '')}
            />
          </>
        ) : (<Message message="Nenhuma música selecionada" />
        )
      }
    </Player>
  );
};

export default PlayerMusic;
