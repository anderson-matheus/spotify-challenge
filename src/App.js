
import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import AlbumsContainer from './containers/Albums/AlbumsContainer';
import HomeContainer from './containers/Home/HomeContainer';
import GlobalStyle from './styles/GlobalStyle';
import { Section, Article, Logo } from './styles/Style';
import logo from './assets/images/spotifylogo.png';

const App = () => (
  <Section>
    <Logo>
      <img src={logo} alt="Spotify Challenge" with="50" height="50" />
    </Logo>
    <Article>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/albums/:artist" component={AlbumsContainer} />
        </Switch>
      </HashRouter>
    </Article>
    <GlobalStyle />
  </Section>
);

export default App;
