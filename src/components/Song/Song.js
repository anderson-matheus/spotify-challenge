import React from 'react';
import {
  Music,
  SongNumber,
  SongName,
  SongTime,
} from './Style';

const Song = () => (
  <Music>
    <SongNumber>1.</SongNumber>
    <SongName>
      nome da música
    </SongName>
    <SongTime>10:00</SongTime>
  </Music>
);

export default Song;
