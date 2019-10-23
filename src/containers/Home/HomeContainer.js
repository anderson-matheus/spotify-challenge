import React, { useState } from 'react';
import _ from 'lodash';
import ResearchField from 'Components/ResearchField/ResearchField';
import RegularAlbumsCardList from 'Components/RegularAlbumsCardList/RegularAlbumsCardList';
import RegularTracksCardList from 'Components/RegularTracksCardList/RegularTracksCardList';
import search from './Actions';
import {
  Container,
  Content,
  ResultTitle,
  RecentlyViewedAlbums,
} from './Style';

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

    if (albums) return (<RegularAlbumsCardList albums={albums} />);

    return <p>Sem Resultados</p>;
  };

  const renderTracks = () => {
    if (localStorage.getItem('RECENTLY_VIEWED_TRACKS') === null && _.get(value, 'length', 0) === 0) {
      return <p>Nenhuma música buscada recentemente</p>;
    }

    if (tracks) return (<RegularTracksCardList tracks={tracks} />);

    return <p>Sem Resultados</p>;
  };

  return (
    <Container>
      <ResearchField value={value} onChange={onChange} />

      <Content>
        {
          value ? (
            <>
              <ResultTitle>
                Resultados encontrados para álbuns &quot;
                {value}
                &quot;
              </ResultTitle>
              {renderAlbums()}
              <ResultTitle>
                Resultados encontrados para músicas &quot;
                {value}
                &quot;
              </ResultTitle>
              {renderTracks()}
            </>
          ) : (
            <>
              <RecentlyViewedAlbums>
                Álbuns buscados recentemente
              </RecentlyViewedAlbums>
              <RecentlyViewedAlbums>
                Músicas buscadas recentemente
              </RecentlyViewedAlbums>
            </>
          )
        }
      </Content>
    </Container>
  );
};

export default HomeContainer;
