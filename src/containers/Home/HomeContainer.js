import React, { useState } from 'react';
import _ from 'lodash';
import ResearchField from 'Components/ResearchField/ResearchField';
import RegularCard from 'Components/RegularCard/RegularCard';
import search from './Actions';
import {
  Grid,
  Container,
  Content,
  ResultTitle,
  RecentlyViewedAlbums,
} from './Style';

const cards = Array.from(Array(Math.floor(Math.random() * 100)).keys());

const HomeContainer = () => {
  const getSearch = search;
  const [value, setValue] = useState('');
  const [albums, setAlbums] = useState('');
  const [tracks, setTracks] = useState('');
  const [loading, setLoading] = useState();
  const onChange = async (event) => {
    setValue(event.target.value);
    if (_.get(event, 'target.value.length', 0) <= 2) {
      setAlbums('');
      setTracks('');
      return;
    }
    await getSearch(event.target.value).then((res) => {
      setAlbums(res.data.albums);
      setTracks(res.data.tracks);
    }).catch((err) => {
      window.console.log(err.response);
    });
  };

  const renderAlbums = () => {
    if (localStorage.getItem('RECENTLY_VIEWED_ALBUMS') === null && _.get(value, 'length', 0) === 0) {
      return <p>Nenhum álbum buscado recentemente</p>;
    }

    if (_.get(albums, 'items', null) !== null && _.get(value, 'length', 0) > 0) {
      return albums.items.map((album) => (
        <RegularCard
          key={album.id}
          data={album}
        />
      ));
    }
    return <p>Nenhum álbum encontrado</p>;
  };

  return (
    <Container>
      <ResearchField value={value} onChange={onChange} />

      <Content>
        {
          value ? (
            <ResultTitle>
              Resultados encontrados para &quot;
              {value}
              &quot;
            </ResultTitle>
          ) : (
            <RecentlyViewedAlbums>
              Álbuns buscados recentemente
            </RecentlyViewedAlbums>
          )
        }
        <Grid>
          {renderAlbums()}
        </Grid>
      </Content>
    </Container>
  );
};

export default HomeContainer;
