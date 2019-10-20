
import React from 'react';
import ButtonBack from 'Components/ButtonBack/ButtonBack';
import BigCard from 'Components/BigCard/BigCard';
import Song from 'Components/Song/Song';
import { Container, Button } from './Style';

const songs = Array.from(Array(Math.floor(Math.random() * 100)).keys());

const AlbumContainer = () => (
  <Container>
    <Button><ButtonBack /></Button>
    <section>
      <BigCard />
    </section>

    <section>
      {songs.map((index) => <Song key={index} />)}
    </section>
  </Container>
);

export default AlbumContainer;
