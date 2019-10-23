import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
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
  const [albums, setAlbums] = useState('');
  const [tracks, setTracks] = useState('');
  const [callApi, setCallApi] = useState(true);

  const searchValue = useSelector((state) => state.searchValue);
  const requests = useSelector((state) => state.requests);
  const dispatch = useDispatch();

  const onChange = async (event) => {
    const { target } = event;
    const { value } = target;
    dispatch({ type: 'SEARCH', search: value });

    if (_.get(event, 'target.value.length', 0) <= 2) {
      setAlbums('');
      setTracks('');
      return;
    }

    if (callApi === false) return;

    await getSearch(event.target.value).then((res) => {
      setAlbums(res.data.albums);
      setTracks(res.data.tracks);
      const { data } = res;
      data.search = value;
      requests.push(data);
      dispatch({ type: 'REQUESTS', request: requests });
    }).catch((err) => {
      window.console.log(err.response);
    });
  };

  useEffect(() => {
    const isExists = requests.filter((request) => _.get(request, 'search', '') === searchValue);
    setCallApi(_.get(isExists, 'length', 0) === 0);
    if (_.get(isExists, 'length', 0) > 0) {
      const data = isExists.shift();
      setAlbums(data.albums);
      setTracks(data.tracks);
    }
  }, [searchValue]);

  const renderAlbums = () => {
    if (localStorage.getItem('RECENTLY_VIEWED_ALBUMS') === null && _.get(searchValue, 'length', 0) === 0) {
      return <p>Nenhum álbum buscado recentemente</p>;
    }
    if (albums) return (<RegularAlbumsCardList albums={albums} />);
    return <p>Sem Resultados</p>;
  };

  const renderTracks = () => {
    if (localStorage.getItem('RECENTLY_VIEWED_TRACKS') === null && _.get(searchValue, 'length', 0) === 0) {
      return <p>Nenhuma música buscada recentemente</p>;
    }
    if (tracks) return (<RegularTracksCardList tracks={tracks} />);
    return <p>Sem Resultados</p>;
  };

  return (
    <Container>
      <ResearchField value={searchValue} onChange={onChange} />

      <Content>
        {
          searchValue ? (
            <>
              <ResultTitle>
                Resultados encontrados para álbuns &quot;
                {searchValue}
                &quot;
              </ResultTitle>
              {renderAlbums()}
              <ResultTitle>
                Resultados encontrados para músicas &quot;
                {searchValue}
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
