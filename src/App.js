
import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/albums" component={AlbumsContainer} />
      </Switch>
    </Article>
    <GlobalStyle />
  </Section>
);

export default App;
