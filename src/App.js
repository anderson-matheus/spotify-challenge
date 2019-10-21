
import React, { useEffect } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import AlbumContainer from './containers/Album/AlbumContainer';
import HomeContainer from './containers/Home/HomeContainer';
import GlobalStyle from './styles/GlobalStyle';
import getUrlParams from './utils/Utils';
import { Section, Article } from './styles/Style';
import Header from './components/Header/Header';

const App = () => {
  const urlParams = getUrlParams;

  useEffect(() => {
    if (window.location.href.indexOf('access_token') === -1) {
      if (localStorage.getItem('access_token') === null) {
        const responseType = 'token';
        window.location.href = `${process.env.SPOTIFY_ACCOUNT}/authorize?response_type=${responseType}&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}`;
      }
      return;
    }
    if (window.location.href.indexOf('?access_token') === -1) {
      window.location.replace(window.location.href.replace('access_token', '?access_token'));
    }

    const data = urlParams(window.location.href);
    localStorage.setItem('ACCESS_TOKEN', data.access_token);
    localStorage.setItem('TOKEN_TYPE', data.token_type);
    localStorage.setItem('EXPIRES_ID', data.expires_in);
  });

  return (
    <Section>
      <Header />
      <Article>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/albums/:artist" component={AlbumContainer} />
          </Switch>
        </HashRouter>
      </Article>
      <GlobalStyle />
    </Section>
  );
};

export default App;
