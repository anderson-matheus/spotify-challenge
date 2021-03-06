
import React, { useState, useEffect } from 'react';
import ButtonBack from 'Components/ButtonBack/ButtonBack';
import BigCard from 'Components/BigCard/BigCard';
import SongList from 'Components/SongsList/SongsList';
import Message from 'Components/Message/Message';
import { useParams } from 'react-router-dom';
import { Container, Button } from './Style';
import fetchAlbum from './Actions';

const AlbumContainer = () => {
  const getAlbum = fetchAlbum;
  const [songs, setSongs] = useState('');
  const [album, setAlbum] = useState('');
  const { albumId } = useParams();

  useEffect(() => {
    const fetchData = async (id) => {
      const result = await getAlbum(id);
      setSongs(result.data.tracks);
      setAlbum(result.data);
    };

    fetchData(albumId);
  }, [albumId]);

  const renderAlbum = () => {
    if (album) return <BigCard album={album} />;
    return <Message message="Sem resultados" />;
  };

  const renderSongs = () => {
    if (songs) return <SongList songs={songs} />;
    return <Message message="Sem resultados" />;
  };

  return (
    <Container>
      <Button><ButtonBack /></Button>
      <section>
        {renderAlbum()}
      </section>

      <section>
        {renderSongs()}
      </section>
    </Container>
  );
};

export default AlbumContainer;
